---
sidebar_position: 11
---

# 11 - @Controller

El Controller es la capa encargada de recibir y gestionar las solicitudes HTTP enviadas por los clientes, como los navegadores web. En términos sencillos, actúa como la "puerta de entrada" a la API. La comunicación entre el cliente y la API se realiza mediante una request (solicitud), usualmente en formato JSON, que sirve como un lenguaje intermedio entre ambos.

Estas solicitudes se envían a un endpoint de la API, el cual está definido por el mapeo de la solicitud, que incluye tanto el tipo de método HTTP (GET, POST, PUT, DELETE, etc.) como la URL específica. El método correspondiente en el controlador se encargará de procesar la solicitud y comunicarse con la capa de servicio, donde se implementa la lógica de negocio necesaria.

Una vez que la capa de servicio procesa la solicitud, devuelve la información al controlador, que a su vez, envía una response (respuesta) al cliente. Esta respuesta puede contener los datos solicitados o un mensaje que el cliente pueda interpretar y mostrar al usuario final.

:::info[Importante]
Para que Spring boot identifique esta clase como tal, debemos colocar la annotation @RestController
:::

## Configuraciones iniciales
Para comenzar a trabajar en la capa controladora, primero se debe crear un paquete llamado "controller" y la clase correspondiente dentro de dicho paquete.

:::info[Nomeclatura]
A fin de seguir buenas prácticas deberemos nombrar a la clase con el nombre que corresponda, seguido de "Controller".
Ejemplo: CursoController
:::

Dentro haremos las primeras configuraciones iniciales.
1. **Anotación @RestController:** Esta anotación le indica a Spring que la clase servirá como controlador REST, lo que significa que gestionará solicitudes HTTP y devolverá respuestas en formato JSON o XML..
2. **Ruta general (opcional):** Se puede definir una ruta general para el controlador utilizando la anotación @RequestMapping en la clase. Aunque esta ruta no es obligatoria, puede ser útil para organizar las URL de tu API
3. **Inyección de dependencias:** Se realizará la inyección de dependencias de la capa Service (lógica de negocio), para acceder a los métodos y procesar las solicitudes. Esto se hace mediante la anotación @Autowired.


```jsx title="CursoController"
// Annotation (1)
@RestController

// URL (2)
@RequestMapping("/api")
public class CursoController {

    // Inyección de dependencia (3)
    @Autowired
    private ICursoService cursoService;

    // Endpoints....

}

```

## Configuración Endpoints
Ya hemos mencionado que el mapeo de los endpoints se compone de un método HTTP y una URL. Ahora veremos en detalle cómo se utilizan los diferentes métodos HTTP en Spring Boot para definir los endpoints.

### Métodos HTTP:

*GET:* Se utiliza para obtener información o recursos del servidor. En Spring Boot, se mapea usando la anotación @GetMapping.

*POST:* Se utiliza para enviar datos al servidor, típicamente para crear un nuevo recurso. Este método se mapea con @PostMapping.

*PUT:* Se utiliza para actualizar *completamente* un recurso existente con los datos proporcionados por el cliente. Se mapea con @PutMapping

*PATCH:*  Se utiliza para *actualizaciones parciales* de una entidad. Ejemplo, una baja lógica. Debe identificarse como @PatchMapping.

*DELETE:* Para eliminar *fisicamente* un recurso en el servidor. Debe identificarse como @DeleteMapping.


### URL (Mapping)
La estructura de las URLs en los controladores puede definirse de dos maneras: rutas estáticas y dinámicas. Las rutas dinámicas se denominan así porque la solicitud (request) puede incluir parámetros en la URL que representan valores necesarios para la lógica de la operación.


#### Existen dos maneras principales de manejar estos parámetros:


### 1. Request Parameters: 
Se utiliza para recibir información a través de la URL. 
:::tip
Generalmente se aplica en métodos GET, aunque también puede ser útil en otros métodos HTTP.
:::

A su vez, dentro del Request Parameters, hay dos formas comunes de extraer información de las URLs:

#### @PathVariable: 
Se utiliza para extraer valores dinámicos directamente de la estructura de la URL. Los parámetros de @PathVariable forman parte de la ruta.

 **La sintaxis para extraer el valor de la URL es: @PathVariable + Tipo de dato + Variable**
  

:::info[Ejemplo]
En este ejemplo, se enviará un ID con valor 1 desde el cliente a la API, utilizando una ruta dinámica.

```jsx title="Request "
localhost:8080/api/curso/mostrar/1

```


```jsx title="API"
@RestController
@RequestMapping("/api")
public class CursoController {
    @Autowired
    private ICursoService IcursoService;

 @GetMapping ("/curso/mostrar/{id}") // El ID es parte de la URL como variable.
   // @ResponseBody - Opcional en una clase anotada con @RestController
    public CursoTemaDto getCurso (@PathVariable long id) { // Se recupera el valor en la varaible id
        return IcursoService.getCurso(id); // Se llama al servicio para la lógica y posterior retorno.
    }

```
:::


<br/><br/>

#### @RequestParam
Se usa para extraer parámetros de la consulta (query parameters) directamente desde la URL de la solicitud HTTP. Estos parámetros son los que aparecen después del signo de interrogación (?) en la URL.

**La sintaxis para extraer el param de la URL es: @RequestParam (name = atributo esperado) + Tipo dato + Variable**

:::info[Ejemplo]
El cliente envía un ID a través de la URL utilizando @PathVariable, junto con un parámetro de consulta llamado "modalidad" que se añade tras el signo de interrogación.

```jsx title="Request con ID valor 1 + Parametros "
localhost:8080/curso/modificar/1?modalidad=virtual

```

```jsx title=""
  @PatchMapping("curso/modificar/{id}")
    public ResponseEntity<?> modificarCurso(@PathVariable long id,
                                            @RequestParam (name = "modalidad") String NuevaModalidad
                                            ){

      // Aquí se llamaría al servicio para modificar el curso según el ID y la modalidad.

      // Return

    }

```
:::




**Diferencias Clave entre @RequestParam y @PathVariable:**
![ParamPath](/img/parampath.png)



<br/><br/>

### 2. Request Body:
Permite recibir objetos de dominio completos en cualquier endpoint de nuestra API dentro del cuerpo (o body) de la request. Estos datos que se reciben en el body serán transformados luego en objetos de Java dentro de nuestra aplicación, Por lo tanto, la URL será estática. 
:::tip
Generalmente se utiliza para métodos POST, PUT y PATCH.
:::

**La sintaxis es @RequestBody Clase + objeto**

:::info[Ejemplo]
Se enviará desde el cliente, el objeto en el cuerpo de la solicitud.

```jsx title="URL"
localhost:8080/curso/modificar
```

```jsx title="API"
 @PutMapping  ("/curso/modificar")
    public ResponseEntity<?> modificarCurso(@RequestBody Curso curso) {
        
        // Acá se llamaría al servicio para modificar el curso con los datos proporcionados.
    }

```
:::

<br/><br/>
-------------------------------------------------------------------------------------------------------------------------------
### Response
En una API REST, la respuesta (response) es lo que el servidor devuelve al cliente después de procesar una solicitud HTTP. Esta respuesta contiene dos componentes clave:

1. Datos (Response Body): El contenido de la respuesta que el cliente espera, usualmente en formato JSON o XML.
2. Código de Estado HTTP: Un código que indica el resultado de la solicitud (por ejemplo, 200 OK, 404 Not Found, 500 Internal Server    Error, etc.).

Spring Boot proporciona varias formas de construir una respuesta en un controlador:

- Usando @ResponseBody para enviar datos como respuesta.
- Usando ResponseEntity + Map,  para tener control total sobre los datos y el código de estado HTTP.

<br/><br/>

**<u>Response Body (@ResponseBody)</u>**

El cuerpo de la respuesta (Response Body) es el contenido que el servidor devuelve al cliente, normalmente en formato JSON. En Spring Boot, cuando usas @RestController, no se necesita declarar explícitamente @ResponseBody, ya que está implícito.

:::tip[¿Cuándo usarlo?]
Cuando solo necesitas devolver el contenido de la respuesta (datos en JSON o XML) sin preocuparte por los códigos de estado HTTP personalizados.
En aplicaciones simples donde la estructura de la respuesta es directa.
:::

:::info[Ejemplo]
Se genera una response, devolviendo los cursos correspondientes

```jsx title="Endpoint"
 @GetMapping ("/curso/mostrar")
    // @ResponseBody - Opcional
    public List<Curso> listaCursos() {
        return IcursoService.getCursos();
    }

```

Spring Boot convierte automáticamente el objeto Curso en JSON usando la biblioteca Jackson.

```jsx title="JSON"
[
    {
        "id": 1,
        "nombre": "Curso de Java",
        "modalidad": "Virtual"
    },
    {
        "id": 2,
        "nombre": "Curso de Spring Boot",
        "modalidad": "Presencial"
    }
]
```
:::
<br/><br/><br/><br/>



**<u>ResponseEntity (Control Completo de la Respuesta)</u>**

ResponseEntity es la opción más flexible y poderosa, ya que permite controlar tanto el cuerpo de la respuesta (Response Body) como el código de estado HTTP y las cabeceras HTTP.

Con ResponseEntity, se puede:

- Enviar los datos en el cuerpo de la respuesta (al igual que con @ResponseBody).
- Definir el código de estado HTTP que indica si la solicitud fue exitosa, fallida, etc.
- Configurar cabeceras HTTP adicionales, como las de control de caché o CORS.

:::tip[¿Cuándo usarlo?]
Cuando necesitas control completo sobre la respuesta HTTP (cuerpo, código de estado, cabeceras).
Para manejar operaciones que pueden devolver diferentes tipos de respuestas, como un 404 Not Found si un recurso no existe o un 201 Created si se crea uno nuevo.
En situaciones en las que necesitas devolver más que solo el contenido del cuerpo, como cabeceras HTTP personalizadas.
:::

:::info[Ejemplo]
Se genera una response devolviendo un MAP, armado en la capa service, junto con un código de estado.

```jsx title="Endpoint"
   @PostMapping ("/curso")
    public ResponseEntity<?> crearCurso(@RequestBody Curso curso) {
        // Llama al servicio y devuelve la respuesta
        Map<String, Object> response = IcursoService.saveCurso(curso);
        return ResponseEntity.ok(response); // Devuelve 200 OK

    }
```
:::

<br/><br/>

### Códigos de estados:

**- Éxito**

*200 OK:* Indica que la solicitud fue exitosa y se devolvieron los datos solicitados. Es el código de estado más común en respuestas exitosas.

*201 Created:* Se utiliza cuando un recurso se ha creado exitosamente, como después de una solicitud POST para crear un nuevo registro.

*204 No Content* Se utiliza para eliminaciones exitosas que no hay contenido adicional en la respuesta.

**- Erroes del Cliente**

*400 Bad Request:* La solicitud es inválida o está mal formada. Esto puede ocurrir cuando los parámetros son incorrectos o faltan datos.

*401 Unauthorized:* El cliente no está autenticado. Es necesario proporcionar credenciales válidas.

*403 Forbidden:* El cliente está autenticado, pero no tiene permisos para acceder al recurso solicitado.

*404 Not Found:* El recurso solicitado no se encontró en el servidor.
<br/><br/>

**- Errores del servidor**

*500 Internal Server Error:* Indica un error genérico del servidor. Es la respuesta predeterminada para errores inesperados.

*503 Service Unavailable:* El servidor no puede manejar la solicitud debido a sobrecarga o mantenimiento temporal.

*504 Gateway Timeout:* El servidor no recibió una respuesta a tiempo de otro servidor aguas arriba que era necesario para completar la solicitud.
<br/><br/>

**Diferencias entre ResponseBody y ResponseEntity**
![response](/img/response.png)

:::tip[Conclusión]
**@ResponseBody:** Proporciona un enfoque sencillo para devolver datos como JSON o XML. Útil cuando solo te preocupas por el contenido del cuerpo.

**ResponseEntity:** Te ofrece el máximo control sobre la respuesta, permitiéndote definir no solo los datos, sino también el código de estado HTTP y las cabeceras.
:::

