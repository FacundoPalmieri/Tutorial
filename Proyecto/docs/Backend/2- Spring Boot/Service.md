---
sidebar_position: 17
---

# 17 - @Service

La capa Service es responsable de manejar la lógica de negocio de nuestra aplicación. Su función principal es procesar y preparar la respuesta que será enviada al cliente a través del Controller. Esta capa también se encarga de realizar validaciones, gestionar excepciones, y comunicarse con otras capas de la aplicación, como Entity, DTO, y Repository, según sea necesario, utilizando la inyección de dependencias mediante @Autowired.

En resumen, el Service actúa como intermediario entre el Controller y las demás capas, asegurando que la lógica de negocio se ejecute correctamente antes de que los datos sean enviados al cliente.

:::info[Importante]
Para que Spring boot identifique esta interfaz como tal, debemos colocar la annotation @Service
:::



## ¿Por qué es importante la capa Service?
La capa Service garantiza que toda la lógica de negocio esté centralizada y organizada. Al separar esta lógica de la capa de presentación (el Controller), aseguramos que los cambios o mejoras en la lógica no afecten directamente a la estructura de la API, lo que permite una mayor mantenibilidad y escalabilidad.

Funciones clave de la capa Service:

-   **Manejo de la lógica de negocio:** Se encarga de las reglas y condiciones que deben cumplirse antes de procesar una operación.

-   **Comunicación con la capa Repository:** Utiliza los repositorios para acceder a la base de datos y realizar operaciones CRUD.

-   **Validación de datos:** Realiza las validaciones de negocio necesarias antes de procesar los datos.

-   **Manejo de excepciones:** Gestiona posibles errores o condiciones que puedan ocurrir durante la ejecución de la lógica.

-   **Transformación de datos:** Convierte datos entre distintas capas, como la conversión entre DTOs y entidades.

## Configuraciones iniciales
Para mantener una arquitectura limpia y escalable, la capa de Service debe organizarse en un package separado. Dentro de este package, se crearán dos elementos clave:

**Interfaz (Interface):** En esta interfaz se declaran los métodos que definen las operaciones de negocio que el servicio va a ofrecer. Esto facilita la separación de responsabilidades y hace que el código sea más fácil de testear y mantener.

**Clase de Implementación:** Se debe crear una clase que implemente la interfaz. Aquí se desarrollará la lógica de negocio real, siguiendo las operaciones definidas en la interfaz.
En esta clase es necesario realizar la annotation @Service, para indicarle a Spring boot que cumplirá dicha función. 

Este enfoque basado en interfaces permite desacoplar la lógica de negocio de la implementación específica, facilitando cambios futuros, como la introducción de nuevas versiones de servicios sin afectar al código cliente.

:::info[Nomenclatura]
A fin de seguir buenas prácticas deberemos nombrar:

**Interfaz:** "I" + NombreCorrespondiente + Service

**Ejemplo: ICursoService.**
<br/><br/>
**Clase:** NombreCorrespondiente + Service

**Ejemplo: CursoService.**
:::
<br/><br/><br/><br/>

### Ejemplo
A continuación veremos un ejemplo completo, incorporando los conocimentos adquiridos hasta el momento.


**Se recibe desde el cliente, a nuestra API, una request para crear un nuevo curso correspondiente a una institución educativa.**


```jsx title="1. Controller"
@RestController
public class CursoController {
    @Autowired
    private ICursoService IcursoService;


    @PostMapping ("/curso")
    public ResponseEntity<?> crearCurso(@RequestBody Curso curso) {
        // Llama al servicio y devuelve la respuesta
        Map<String, Object> response = IcursoService.saveCurso(curso);
        return ResponseEntity.ok(response); // Devuelve 200 OK

    }

```
-   El endpoint recibe mediante una request body el objeto completo del curso. Mediante la inyección de dependencia a la interfaz de la capa service, puede invocar al método *saveCurso* para que resuelva la lógica. Puede observarse que la información que vuelve de la capa service se almacena en una variable *response* de tipo Map. Esa elaboración la veremos a continuación en el desarrollo de la lógica. 
Por último se realiza un *return* para que genera una *ResponseEntity* enviando el Map y un código de estado OK.
<br/><br/>

```jsx title="2. interfaz"
public interface ICursoService {

    public Map<String, Object> saveCurso(Curso curso);
}
```
-   Se crea la interfaz con la declaración del método
<br/><br/>

```jsx title="3. Implementación"
@Service // Annotation
public class CursoService implements ICursoService {

    @Override
    public Map<String, Object> saveCurso(Curso curso) {

    // Acá se encuentra la lógica del método
    }
```
-   Se crea la clase de implementación con su correspondiente annotation.


<br/><br/>
Ahora se deberá realizar la lógica del método.

Como primera instancia deberiamos realizar ciertas validaciones antes de crear el curso,por ejemplo:
- El objeto recibido no sea nulo.
- Que la modalidad sea válida.
- Que el curso no exista.
- Que existan temas asociados al curso. 


Para lograr esto y  que el método *saveCurso* no se "ensucie" podemos crear un método privado de la misma clase, que solo se encargue de validar, y en caso que de todo sea correcto, permita crear el curso.
:::info[Importante]
Aqui incorporaremos las exception que creamos en el módulo anterior, y definiremos los respectivos mensajes.
:::

```jsx title="4. Validación"
public class CursoService implements ICursoService {
 @Autowired
    private CursoRepository cursoRepository;
 @Autowired
    private TemaService temaService;


 @Override
    public Map<String, Object> saveCurso(Curso curso) {
    
    }

private void validarSaveCurso(Curso curso) {
        // Verificar si el curso es nulo
        if (curso == null) {
            throw new InvalidCursoException("El curso no puede ser nulo.");
        }

        // Verificar que el nombre no esté vacío
        if (curso.getNombre() == null || curso.getNombre().trim().isEmpty()) {
            throw new InvalidCursoException("El nombre del curso no puede estar vacío.");
        }

        // Verificar que la modalidad sea válida (por ejemplo, "Presencial" o "Virtual")
        if (!curso.getModalidad().equalsIgnoreCase("Presencial") &&
                !curso.getModalidad().equalsIgnoreCase("Virtual")) {
            throw new InvalidCursoException("La modalidad del curso debe ser 'Presencial' o 'Virtual'.");
        }

        // Verificar si el curso ya existe en la base de datos
        if (cursoRepository.existsById(curso.getId_curso())) {
            throw new CursoNotFoundException("El curso con ID " + curso.getId_curso() + " ya existe.");
        }

        for (Tema tema : curso.getListaDeTemas()) {
            // Aquí debes buscar el tema por id_Tema y obtener sus detalles
            Tema temaExistente = temaService.findById(tema.getId_Tema());
            if (temaExistente != null) {
                tema.setNombre(temaExistente.getNombre());
                tema.setDescripcion(temaExistente.getDescripcion());
            }
            else{
                throw new TemaException("No se encontraron temas para el curso");
            }
        }

    }

}

```
:::info[Aclaración]
En este método  se accede al repositorio y a la clase Tema, por tal es necesario realizar la inyección de dependencias.
:::
<br/><br/>
Ahora solo nos quedaría llamar desde el método *saveCurso* al método privado *validarSaveCurso*, quedando la clase de esta manera.



```jsx title="5. Clase completa"
@Service
public class CursoService implements ICursoService {
    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private TemaService temaService;


    @Override
    public Map<String, Object> saveCurso(Curso curso) {

        // Validaciones previas antes de realizar la operación principal
        validarSaveCurso(curso);

        //Resto de lógica...

    }

private void validarSaveCurso(Curso curso) {
        // Verificar si el curso es nulo
        if (curso == null) {
            throw new InvalidCursoException("El curso no puede ser nulo.");
        }

        // Verificar que el nombre no esté vacío
        if (curso.getNombre() == null || curso.getNombre().trim().isEmpty()) {
            throw new InvalidCursoException("El nombre del curso no puede estar vacío.");
        }

        // Verificar que la modalidad sea válida (por ejemplo, "Presencial" o "Virtual")
        if (!curso.getModalidad().equalsIgnoreCase("Presencial") &&
                !curso.getModalidad().equalsIgnoreCase("Virtual")) {
            throw new InvalidCursoException("La modalidad del curso debe ser 'Presencial' o 'Virtual'.");
        }

        // Verificar si el curso ya existe en la base de datos
        if (cursoRepository.existsById(curso.getId_curso())) {
            throw new CursoNotFoundException("El curso con ID " + curso.getId_curso() + " ya existe.");
        }

        for (Tema tema : curso.getListaDeTemas()) {
            // Aquí debes buscar el tema por id_Tema y obtener sus detalles
            Tema temaExistente = temaService.findById(tema.getId_Tema());
            if (temaExistente != null) {
                tema.setNombre(temaExistente.getNombre());
                tema.setDescripcion(temaExistente.getDescripcion());
            }
            else{
                throw new TemaException("No se encontraron temas para el curso");
            }
        }

    }

```


<br/><br/>

Ahora que ya realizamos las validaciones y vimos como queda en la misma clase por medio de un método privado independiente, vamos a seguir enfocados solo en el método *saveCurso*

Luego de validar, quedaría llamar al repositorio para que se encargue de crearlo por el medio del CRUD que ya trea incorporado JPA como vimos anteriormente. Esto lo que nos devolverá es un objeto curso

```jsx title="6. saveCurso"
@Service
public class CursoService implements ICursoService {
    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private TemaService temaService;


    @Override
    public Map<String, Object> saveCurso(Curso curso) {


        // Validaciones previas antes de realizar la operación principal
        validarSaveCurso(curso);

        // Si todas las validaciones pasan, se guarda el curso y armo respuesta
        Curso savedCurso = cursoRepository.save(curso);

        //Resto de la lógica.

    }

```

Por último, utilizaremos un Map para mapear la respuesta y devolverla en ese formato al controller.

```jsx title="6. saveCurso"
@Service
public class CursoService implements ICursoService {
    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private TemaService temaService;


    @Override
    public Map<String, Object> saveCurso(Curso curso) {


        // Validaciones previas antes de realizar la operación principal
        validarSaveCurso(curso);

        // Si todas las validaciones pasan, se guarda el curso y armo respuesta
        Curso savedCurso = cursoRepository.save(curso);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Se ha guardado correctamente");
        response.put("curso", savedCurso); // Devuelve el curso guardado

        return response;
    }

```

Ahora que ya vimos esto, solo queda que el controller genere la response, tal como vimos al inicio de este ejemplo.

:::info
Para ver nuevamente como el controller genera la response, haz clic [aquí](#ejemplo).
:::


<br/><br/>



🤔 Ahora... y el DTO?

Veamos un ejemplo rápido de como usarlo..

Supongamos que tenemos una funcionalidad que nos permite obtener :
-   Nombres de todos los cursos disponibles.
-   Nombre de los temas asociados.


Recordemos antes como estaba armado nuestros modelos de datos de:
```jsx title="Curso"
  public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_curso;

    @NonNull
    @Column(unique = true)
    private String nombre;

    @NonNull
    private String modalidad;

    @NonNull
    private Date fecha_finalizacion;


    @OneToMany
    private List<Tema> listaDeTemas;
}
```
```jsx title="Tema"
  public class Tema {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id_Tema;

    @NonNull
    String nombre;

    @NonNull
    String descripcion;
}

```
    - Podemos observar que cursos y temas tiene mas atributos que solo los nombres, por eso, habiamos confeccionado una clase CursoTemaDTO que solo contenga dichos atributos para solo devolver eso al cliente.

```jsx title="CursoTemaDTO"
  public class CursoTemaDto {

    private String nombre;
    private List<String> listaDeTemas;
}
```


 Teniendo en claro esto continuamos.


 ¿Que debería tener nuestro controller?
-   un endpoint de tipo GET que reciba el ID para posteriormente buscarlo


```jsx title="controller"
  @GetMapping ("/curso/mostrar/{id}")
    @ResponseBody
    public CursoTemaDto getCurso (@PathVariable long id) {
        return IcursoService.getCurso(id);
    }
```





Ahora nos queda resolver la lógica en el service. Para eso deberiamos realizar los siguientes pasos:
    - Validar que el curso exista.
    - Llamar al repositorio para que busque por ID en las consultas que ya traer predefinidad JPA.
    - Almacenar el nombre del curso en nuestro atributo de la clase DTO
    - Iterar sobre los temas para obtener los nombres
    - Almacenar el nombre del tema en el DTO.
    - Retornar el DTO al controller.



```jsx title="controller"
 @Override
    public CursoTemaDto getCurso(long id) {

        //Se valida curso
        validarGetCurso(id);

        //Se obtiene el curso por ID
        Curso curso =  cursoRepository.findById(id).orElse(null);

        // Se instancia un dto
        CursoTemaDto cursoTemaDto = new CursoTemaDto();

        // Se almacena en dto el nombre del curso
        cursoTemaDto.setNombre(curso.getNombre());

        // Se itera sobre la lista de temas solo para obtener el nombre
        List<String> nombresDeTemas = curso.getListaDeTemas()
                .stream()
                .map(Tema::getNombre)
                .collect(Collectors.toList());

      
        cursoTemaDto.setListaDeTemas(nombresDeTemas);

        return  cursoTemaDto;

    }
```

- Como ya vimos, esta información retorna a la capa controller, quien será la encarga de generar la response.

:::info
En resumen, el uso de un DTO nos permite enviar solo los datos necesarios al cliente, optimizando la comunicación entre el servidor y el cliente. Esto también mejora la seguridad al evitar la exposición de atributos innecesarios en nuestros modelos de datos.
:::

<br/><br/>

## Cierre del Tutorial 🎉
Hemos llegado al final de este tutorial sobre Spring Boot. En este recorrido, exploramos varios aspectos fundamentales, desde la configuración inicial hasta la implementación de funcionalidades avanzadas. 💻✨

A lo largo del tutorial, hemos abordado conceptos troncales como la creación de controladores, la gestión de servicios, la integración con bases de datos y la validación de datos. También hemos aprendido cómo estructurar nuestro proyecto de manera eficiente, asegurando que sea escalable y fácil de mantener. 📊📦

Ahora a aplicar lo aprendido en nuevos proyectos. 🚀
