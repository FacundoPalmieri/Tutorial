---
sidebar_position: 10
---

# 10 - Proyecto

##
En este apartado intentaremos comprender los concpetos generales, mediante el paso a paso, en la creación de un proyecto utilizando las herramientas de **Spring boot + Spring Security + OAuth2.**

## Creación del Proyecto
![inicio proyecto](/img/InicioProyecto.png)

### Dependencias
![dependencias](/img/dependencias.png)

### Configuraciones en el POM.xml
1. Agregamos la dependencia de JWT
Para obtener la más actual entramos a la siguiente web y buscamos la versión en el apartado "dependencias":

https://github.com/auth0/java-jwt

```jsx title="Agregar dependencia JWT"
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>4.4.0</version>
</dependency>
<dependency>
```

2. Agregamos la dependencia para la annotations de validación
```jsx title="Agregar dependencia Annotations"
<dependency>
    <groupId>jakarta.validation</groupId>
    <artifactId>jakarta.validation-api</artifactId>
    <version>3.0.2</version>
</dependency>
```


### Configuraciones en el application.properties
- Base de datos mediante variables de entorno.

```jsx title="Configuraciones de BD"
#Configuraciones de BD
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=${BD_URL} // jdbc:mysql://localhost:3306/NombreBD?createDatabaseIfNotExist=true
spring.datasource.username=${BD_USER}
spring.datasource.password=${BD_PASSWORD}
```

- Clave privada para la firma del token (JWT).


```jsx title="Configuraciones de JWT"
#Config de JWT
security.jwt.private.key=${PRIVATE_KEY}
#Acá puedo "inventar" el "nombre de usuario" que quiera
security.jwt.user.generator=${USER_GENERATOR}

```

### Creación Package model
#### Clases: 
- Permission
- Role
- UsuarioSec

**Ejemplos**

```jsx title="Class Permission"
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="permissions")
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String permissionName;

}
```


```jsx title="Class Role"
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String role;

    //Usamos Set porque no permite repetidos
    //List permite repetidos
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable (name = "roles_permissions", joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns=@JoinColumn(name = "permission_id"))
    private Set<Permission> permissionsList = new HashSet<>();
}

```


```jsx title="UsuarioSec"
@Entity
@Table(name="users")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSec {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;

    private boolean enabled;
    private boolean accountNotExpired;
    private boolean accountNotLocked;
    private boolean credentialNotExpired;

    //Usamos Set porque no permite repetidos
    //List permite repetidos
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL) //el eager me va  a cargar todos los roles
    @JoinTable (name = "user_roles", joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns=@JoinColumn(name = "role_id"))
    private Set<Role> rolesList = new HashSet<>();


}
```

### Creación Package repository
#### Interfaces: 

```jsx title="IPermissionRepository"
@Repository
public interface IPermissionRepository extends JpaRepository<Permission, Long> {

}

```

```jsx title="IRoleRepository"
@Repository
public interface IRoleRepository extends JpaRepository<Role, Long> {
}
```

```jsx title="IUseRepository"
@Repository
public interface IUserRepository extends JpaRepository<UserSec, Long> {

    Optional<UserSec> findUserEntityByUsername(String username);


}

```
:::info
Se realiza una consulta Personalizada para buscar un username, pasandole como parámetro el username que nos llega en la request. La consulta explicita la arma Spring ya que al estár en inglés entiende lo que tiene que buscar
:::

### Creación Package service
#### Interfaz: 
- IPermissionService
- IRoleService
- IUsuarioSec


Ejemplo

```jsx title="IUserService"
public interface IUserService {

    public List<UserSec> findAll();
    public Optional<UserSec> findById(Long id);
    public UserSec save(UserSec userSec);
    public void deleteById(Long id);
    public void update(UserSec userSec);
    public String encriptPassword(String password);
}


```

#### Implementación: 
- PermissionService
- RoleService
- UserService :
     - Se realiza el CRUD de usuario como en el resto de las implementaciones + Encriptado de pass.


Ejemplo
```jsx title="UserService"
@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public List<UserSec> findAll() {
        return userRepository.findAll();}

    @Override
    public Optional<UserSec> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserSec save(UserSec userSec) {
        return userRepository.save(userSec);
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void update(UserSec userSec) {
        save(userSec);
    }

    @Override
    public String encriptPassword(String password) {
        
        return new BCryptPasswordEncoder().encode(password);
    }
}

```

#### Se crea una Clase adicional:  
- UserDetailServiceImp
```jsx title="loadUserByUsername"
@Service
public class UserDetailsServiceImp implements UserDetailsService {
    #Metodos....
}
```



:::info
Extiende de la clase UserDetailService de SpringSecurity. Será el encargado de recuperar todos los datos del usuario, y comunicárselo al Authentication Manager
:::

- Se inyecta la dependencia de IUserRepository
```jsx title="Inyección de dependencia"
@Autowired
    private IUserRepository userRepo;
```

- Se crea el método para buscar en la base de datos.
```jsx title="Método"
@Override
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
```
:::info 
**loadUserByUsername**

Este método retorna un UserDetails, y nosotros contamos con el objeto UsuarioSec, por tal debemos recuperar primero todos los atributos de esa clase y transformalo a UserDetail para retornalo.
:::

### Creación Package controller.
#### Clases: 
- PermissionController
- RoleController
- UserController : 
    - En el SAVE, se encripta primero la password por medio del userService.

:::info
Dentro de cada controller estarán los endpoints correspondientes para:
- Obtener permisos/roles/usuarios.
- Crear permisos/roles/usuarios.
- etc..
:::


### Creación Package security.config.
#### Se crea Clase:  
- SecurityConfig

#### Métodos:
- 	SecurityFilterChain
- 	AuthenticationManager
-   AuthenticationProvider
-   PasswordEncoder

#### Desarrollo de Métodos:
- 	**SecurityFilterChain**

:::info
Contiene la configuración de los filtros de seguridad que se aplicarán a las solicitudes HTTP.
:::

##### Filtros del método
1. *csrf(csrf -> csrf.disable()):* Desactiva la protección CSRF (Cross-Site Request Forgery). Esto suele desactivarse en aplicaciones que usan tokens (como JWT) para manejar la autenticación, ya que la verificación CSRF no es necesaria.

2. *.formLogin:* Establece un formulario de inicio de sesión.

3. *.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)):* Configura la política de creación de sesiones a STATELESS, lo que significa que la aplicación no almacenará información de sesión en el servidor. Esto es típico en aplicaciones que usan autenticación basada en tokens (JWT), ya que la información de autenticación viaja con cada solicitud en el token.

:::info
El método retorna **HttpSecurity**, es el objeto que permite configurar las reglas de seguridad HTTP en Spring Security. Con esto, puedes configurar aspectos como la protección CSRF, los mecanismos de autenticación, la gestión de sesiones, etc.
:::


Ejemplo del método:
```jsx title="Método"
   @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .formLogin(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
```


- 	**AuthenticationManager**

-   **AuthenticationProvider:**
Recibe como parámetro UserDetailService.
    - Se crea un proveedor
    - Se establece el método para encriptar contraseña
    - Se setea el userDetailService
    - Se retorna el proveedor.

Ejemplo del método:
```jsx title="Método"
      @Bean
    public AuthenticationProvider authenticationProvider(UserDetailsService userDetailsService){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder());

        provider.setUserDetailsService(userDetailsService);

        return provider;
    }
```

-  **PasswordEncoder**:
Encripa la password

Ejemplo del método:
```jsx title="Método"
 @Bean
    public PasswordEncoder passwordEncoder(){
         return new BCryptPasswordEncoder();
    }
```


## Configuraciones JWT (Tokens)
Los token se componen de un header, payload y signature.
Debemos generar una clave privada para firmar los token, eso lo hacemos ingresando a la siguiente página para generalo : 
- https://tools.keycdn.com/sha256-online-generator

### Application Properties.
Agregamos la clave privada y el usuario generador del TOKEN.

```jsx title="Configuraciones de JWT"
#Config de JWT
security.jwt.private.key=${PRIVATE_KEY}
#Usuario generador del Token
security.jwt.user.generator=${USER_GENERATOR}

```

### Creación Package util
#### Clases:
- Class JwtUtil con anottations @Component

#### Atributos de la clase:
- privatekey.
- userGenerator.

```jsx title="JwtUtils"
@Component
public class JwtUtils {

    //Con estas configuraciones aseguramos la autenticidad del token a crear
    @Value("${security.jwt.private.key}")
    private String privateKey;

    @Value("${security.jwt.user.generator}")
    private String userGenerator;

    #Metodos.....

}
```



#### Métodos:
- createToken
- validateToken (decodificar y validar nuestro token)
- extractUsername (obtener el usuario del token)
- getSpecificClaim (Claim es la info dentro del token, ej Permisos)
- returnAllClaims

### Package security.config
#### Se crea un subpackage "filter"
#### Clases:
- JwtTokenValidator (hereda OncePerRequestFilter.)

:::info
Al heredar de esa clase significa que siempre que haya una request, se va a aplicar este filtro.
:::

#### Atributos:
- jwtUtils

#### Métodos:
- Constructor
- doFilterInternal


```jsx title="JwtTokenValidator"
public class JwtTokenValidator extends OncePerRequestFilter {


    private JwtUtils jwtUtils;

    public JwtTokenValidator(JwtUtils jwtUtils) {

        this.jwtUtils = jwtUtils;
    }

    @Override
    //importante: el nonnull debe ser de sringframework, no lombok
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException{

    #Desarrollo del método doFilterInternal....
    
    }

}
```

Método "doFilterInternal"
- Delante de cada parámetro se debe colocar la annotation @NonNull de Spring Security, NO de Lombok
- Recibe como parámetros:
    - HTTPServletRequest
    - HTTPServletResponse
    - FilterChain
- Se extrae el token de la cabecera
- Delante del Token viene la palabra “bearer” entonces de quitan esos caracteres para que quede el token limpio
-   Se valida el token y se almacena en una variable decodedJWT
-   Se extrae el nombre de usuario a partir del token decodificado
-   Se extrae los permisos y roles a partir del claim
-   Se convierten los datos en GrandAuthorities para almacernaos en el context Holder
-   Si todo es correcto a la cadena de filtro se la pasa la request y la response.


```jsx title="Desarrollo del método"
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {

            String jwtToken = request.getHeader(HttpHeaders.AUTHORIZATION);

            if(jwtToken != null) {
                //en el encabezado antes del token viene la palabra bearer (esquema de autenticación)
                //por lo que debemos sacarlo
                 jwtToken = jwtToken.substring(7); //son 7 letras + 1 espacio
               DecodedJWT decodedJWT = jwtUtils.validateToken(jwtToken);

               //si el token es válido, le concedemos el acceso
                String username = jwtUtils.extractUsername(decodedJWT);
                //me devuelve claim, necesito pasarlo a String
                String authorities = jwtUtils.getSpecificClaim(decodedJWT, "authorities").asString();

                //Si todo está ok, hay que setearlo en el Context Holder
                //Para eso tengo que convertirlos a GrantedAuthority
                Collection<? extends GrantedAuthority> authoritiesList = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);

                //Si se valida el token, le damos acceso al usuario en el context holder
                SecurityContext context = SecurityContextHolder.getContext();
                Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authoritiesList);
                context.setAuthentication(authentication);
                SecurityContextHolder.setContext(context);

            }

            // si no viene token, va al siguiente filtro
            //si no viene el token, eso arroja error
            filterChain.doFilter(request,response);
    }
```


### Package SecurityConfig
En el método SecurityFilterChain se incorpora el nuevo filtro de JwtTokenValidator.

```jsx title="método SecurityFilterChain"
  @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .formLogin(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
Se agrega --->  .addFilterBefore(new JwtTokenValidator(jwtUtils), BasicAuthenticationFilter.class)   
            .build();
    }
```



### Package Controller
- Se crea la clase “AuthenticationController”. Esta clase recibirá las credenciales y validarla.
- Se inyecta la dependencia del UserDetailServiceImp

#### Endpoints
- Login
    - Recibe AuthLoginRequestDTO en el cuerpo de la solicitud
    - Se llama al userDetailService para validar
    - Se responde con AuthResponseDTO



```jsx title="“AuthenticationController”"
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private UserDetailsServiceImp userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody @Valid AuthLoginRequestDTO userRequest) {
        return new ResponseEntity<>(this.userDetailsService.loginUser(userRequest), HttpStatus.OK);
    }

}

```



### Creación Package dto
#### Clases:
**- AuthLoginRequestDTO**
:::info
Esta clase será del tipo **record**. Esto permite identificarla como DTO, ya que no será necesario los get, set y constructores.
Recibirá los siguientes parámetros : 
- username
- password
:::

```jsx title="AuthLoginRequestDTO"
public record AuthLoginRequestDTO (@NotBlank String username, @NotBlank String password) {
}
```

**- AuthResponseDTO**

:::info
Esta clase será del tipo **record**. Esto permite identificarla como DTO, ya que no será necesario los get, set y constructores.
Recibirá los siguientes parámetros : 
- Username
- Message
- Jwt
- status
:::

```jsx title="AuthResponseDTO"
@JsonPropertyOrder({"username", "message", "jwt", "status"})
public record AuthResponseDTO (String username, String message, String jwt, boolean status) {
}
```


## Package Service
### UserDetailServiceImp
#### Se crea los siguientes Métodos:
- authenticate
    - Recibe como parámetros usuario y contraseña.
    - Recuperamos el usuario y contraseña por medio del método loadUserByUsername.
    - Retornamos la autenticación.

```jsx title="authenticate"  
 public Authentication authenticate (String username, String password) {
        //con esto debo buscar el usuario
        UserDetails userDetails = this.loadUserByUsername(username);

        if (userDetails==null) {
            throw new BadCredentialsException("Ivalid username or password");
        }
        // si no es igual
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(username, userDetails.getPassword(), userDetails.getAuthorities());
    }
```

- loginUser
    - Se recupera usuario y contraseña.
    - Se autentica, por medio del método authenticate.
    - Se almacena en el contextHolder
    - Se crea el token.
    - Se genera la responseDTO


```jsx title="loginUser"  
  public AuthResponseDTO loginUser (AuthLoginRequestDTO authLoginRequest){

        //recuperamos nombre de usuario y contraseña
        String username = authLoginRequest.username();
        String password = authLoginRequest.password();

        Authentication authentication = this.authenticate (username, password);
        //si todo sale bien
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String accessToken =jwtUtils.createToken(authentication);
        AuthResponseDTO authResponseDTO = new AuthResponseDTO(username, "login ok", accessToken, true);
        return authResponseDTO;

    }
```
### Securizar Endpoints
- En la clase SecurityConfig se agrega la annotation @EnableMethodSecurity.
:::info
**@EnableMethodSecurity**: 
Permite seguridad por métodos
:::

```jsx title="Ejemplo"
@Configuration
@EnableWebSecurity
@EnableMethodSecurity ----------> #Annotation a agregar
public class SecurityConfig {

    @Autowired
    private JwtUtils jwtUtils;
```




- En cada controller, antes de que inicie la clase se realiza la  annotation @PreAuthorize(“denyAll()”)
:::danger
**@PreAuthorize(“denyAll()”)** : 
Permite denegar todos los endpoints, para luego individualmente dar permisos de acuerdo a roles.
:::

```jsx title="Ejemplo"
@RestController
@PreAuthorize("denyAll()")
public class HelloWorldController {
```

- Por último securizamos cada endpoint @PreAuthorize ("hasRole('ADMIN')")
:::tip
**@PreAuthorize ("hasRole('ADMIN')")** :
Permite acceso SOLO a quienes  posean roles ADMIN. 

:::

```jsx title="Ejemplo"
  @GetMapping("/holaseg")
    @PreAuthorize("hasRole('ADMIN')")
    public String secHelloWorld() {

        return "Hola Mundo TodoCode con seguridad";
    }
```


### Configurar OAtuh2
Acceso a la clase SecurityConfig
**Método**
- SecurityFilterChain: Agrego .oauth2Login(Customizer.withDefaults())

```jsx title="Ejemplo"
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .formLogin(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(new JwtTokenValidator(jwtUtils), BasicAuthenticationFilter.class)
 Se agrega ---> .oauth2Login(Customizer.withDefaults()) 
            .build();
    }
```

- Endpoints: Agregamos el  @PreAuthorize("isAuthenticated() and hasRole('ADMIN')")
:::tip
**@PreAuthorize("isAuthenticated() and hasRole('ADMIN')")** :
Permite acceso SOLO a quienes están autenticados y posean roles ADMIN. 

:::

```jsx title="Ejemplo"
  @GetMapping("/holaseg")
    @PreAuthorize("isAuthenticated() and hasRole('ADMIN')")
    public String secHelloWorld() {

        return "Hola Mundo TodoCode con seguridad";
    }
```


## Configuración a Google como proveedor de Autenticación

### ApplicationProperties
Se agrega las siguientes variable de entorno :

```jsx title="Variable Entorno OAuth2"
#Configuración para Google
spring.security.oauth2.client.registration.google.client-id=${GOOGLE_CLIENT_ID}
spring.security.oauth2.client.registration.google.client-secret=${GOOGLE_CLIENT_SECRET}
```

Se ingresa a la siguiente URL:
- https://console.cloud.google.com/welcome?project=springsecurity0auth2


#### Creción proyecto
![google uno](/img/google1.png)

![google dos](/img/google2.png)

![google tres](/img/google3.png)


#### Creción Credenciales
![google cuatro](/img/google4.png)


#### Configurar pantalla de consentimiento
![google cinco](/img/google5.png)

![google seis](/img/google6.png)

![google siete](/img/google7.png)


Guardamos y continuamos en las siguientes dos pantallas


#### Continuamos con la creción Credenciales
![google ocho](/img/google8.png)

![google nueve](/img/google9.png)


:::important
Obtendremos las credenciales para colocar en las variables de entorno del applicationProperties.
:::

![google diez](/img/google10.png)