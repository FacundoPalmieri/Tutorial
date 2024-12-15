---
sidebar_position: 14
---

# 14 - Patrón DTO

Una de las problemáticas más comunes a la hora de desarrollar aplicaciones (sobre todo web) es la necesidad de interconexión e intercambio de mensajes entre capas u otras aplicaciones. Esto hace que sea realmente importante diseñar cómo o mediante qué formato debe transmitirse la información entre ellas.

Es común que en estos casos se utilicen las mismas clases/entidades que tenemos creadas en el modelo de nuestra aplicación; sin embargo, existe una forma más óptima para llevar a cabo esta tarea: implementando el patrón DTO (Data Transfer Object).

## ¿Qué es un DTO?
Un DTO es un objeto plano (POJO) con una serie de atributos que se utilizan para transmitir datos de manera eficiente entre las capas de una aplicación o entre diferentes servicios. Un DTO puede contener datos de múltiples clases, fuentes o tablas de una base de datos y agruparlos en una única clase simple.

## Ventajas de los DTO
-   Independencia del modelo de datos: Los DTO permiten crear estructuras de datos totalmente independientes de las entidades del modelo, lo que facilita el mantenimiento y la evolución del código.
-   Agrupación de datos: Un DTO puede contener atributos de varias entidades, lo que optimiza las respuestas enviadas al cliente.
-   Flexibilidad: Permite que cambios en las entidades no afecten las estructuras de datos que se envían al cliente, lo que hace que sea más fácil modificar la base de datos sin alterar la lógica de presentación.


## ¿Cuándo usar DTO?
Uno de los principales escenarios donde deberías implementar un DTO es cuando se quiere controlar qué datos se exponen al cliente. Por ejemplo, si una entidad contiene información sensible (como contraseñas o datos internos de la aplicación), puedes usar un DTO para evitar enviarlos en la respuesta. También es útil cuando quieres enviar datos de múltiples entidades en una sola respuesta.

##  Configuraciones iniciales

En este caso, crearemos una clase DTO que nos permita contar solo con el nombre del curso y la lista de temas correspondientes, para luego devolverlos al cliente. Esto evitará tener que devolver dos objetos completos (Curso y Tema) y solo proporcionará la información necesaria. Más adelante, cuando lleguemos a la capa **Service**, veremos cómo se utiliza esta clase para construir la respuesta adecuada.

```jsx title="Controller"
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CursoTemaDto {

    private String nombre;
    private List<String> listaDeTemas;
}
```


### *records.*

Un record es una característica introducida en Java 14 (como vista previa) y oficialmente disponible a partir de Java 16. Es un tipo especial de clase diseñado para modelar datos de manera concisa y declarativa. Los records eliminan el código repetitivo (boilerplate) necesario para definir clases cuyo único propósito es almacenar datos, como los getters, equals(), hashCode(), y toString().

Un record se define como una estructura inmutable que automáticamente genera:

-   Un constructor principal con los parámetros definidos.

-   Métodos de acceso (getters) para cada campo.

-   Implementaciones de toString(), equals() y hashCode() basadas en los campos declarados.

### *Características principales de los records*

**Concisión:** Reducción significativa del código necesario para definir una clase que solo transporta datos.

**Inmutabilidad:** Los campos declarados en un record son automáticamente final, lo que significa que su valor no puede cambiar después de la creación del objeto.

**Automatización:** No es necesario escribir manualmente constructores, getters, toString(), equals(), ni hashCode().


### *Cuándo usar records*

Se usan para clases que representan datos inmutables, como DTOs (Data Transfer Objects), configuraciones, o respuestas de API.

Hay que evitarlos si se necesita mutabilidad, lógica compleja o herencia (los records no pueden extender otras clases).


```jsx title="Sintaxsis"
public record Nombre-clase(Atributos){
    // No se coloca nada dentro de las llaves
}

```

```jsx title="Ejemplo"
public record CursoTemaDto(String nombre,List<TemaDTO> listaDeTemas) {

    // Constructor, getters, equals, hashCode y toString son generados automáticamente
}
```

## Validaciones en los DTO
Es una buena practica realizar las validaciones en una clase DTO, para mantener separada la capa de persistencia de datos con la lógica del negocio.

### *Annotation*

-   **@Valid** : Activa la validación de un objeto completo o de los atributos anidados en otra clase.(Generalmente se realiza en el controller)

```jsx title="Ejemplo"
@PostMapping("/curso")
public ResponseEntity<?> crearCurso(@Valid @RequestBody CursoDTO cursoDTO) {

    // Aquí puedes transformar tu DTO a la entidad correspondiente si es necesario
    Curso curso = new Curso(
        cursoDTO.nombre(),
        cursoDTO.modalidad(),
        cursoDTO.fechaFinalizacion(),
        cursoDTO.listaDeTemas()
    );

    // Llamada al servicio para guardar el curso
    Map<String, Object> response = IcursoService.saveCurso(curso);

    return ResponseEntity.ok(response); // Devuelve 200 OK
}

```
<br/><br/>

-   **@NotNull** :	Valida que el valor no sea null, pero puede ser vacío (por ejemplo, una cadena vacía).

```jsx title="Ejemplo"
public class CursoDTO {
    @NotNull(message = "El nombre del curso no puede ser nulo")
    private String nombre;
}

```

<br/><br/>

-   **@NotBlank**: Valida que el valor no sea null ni esté en blanco (cadena no vacía ni compuesta solo de espacios).

```jsx title="Ejemplo"
public class CursoDTO {
    @NotBlank(message = "El nombre del curso no puede estar vacío o compuesto solo por espacios")
    private String nombre;
}

```
<br/><br/>

-   **@Email**: Verifica que una cadena tenga un formato válido de correo electrónico.

```jsx title="Ejemplo"
public class UsuarioDTO {
    @Email(message = "El correo electrónico debe tener un formato válido")
    private String email;
}

```
<br/><br/>

-   **@Size**: Define el tamaño o longitud mínima y/o máxima de cadenas, listas o arreglos.

```jsx title="Ejemplo"
public class CursoDTO {
    @Size(min = 3, max = 100, message = "El nombre del curso debe tener entre 3 y 100 caracteres")
    private String nombre;
}

```
<br/><br/>

-   **@Min**: Valida que un número sea mayor o igual a un valor mínimo definido.

```jsx title="Ejemplo"
public class ProductoDTO {
    @Min(value = 1, message = "El precio debe ser al menos 1")
    private double precio;
}

```
<br/><br/>

-   **@Max**Valida que un número sea menor o igual a un valor máximo definido.

```jsx title="Ejemplo"
public class ProductoDTO {
    @Max(value = 1000, message = "El precio no puede ser mayor a 1000")
    private double precio;
}


```
<br/><br/>

-   **@PositiveOrZero**: Valida que un número sea positivo o igual a cero.

```jsx title="Ejemplo"
public class ProductoDTO {
    @PositiveOrZero(message = "La cantidad debe ser un número positivo o cero")
    private int cantidad;
}

```
<br/><br/>

-   **@NegativeOrZero**: Valida que un número sea negativo o igual a cero.

```jsx title="Ejemplo"
public class ProductoDTO {
    @NegativeOrZero(message = "La cantidad no puede ser positiva")
    private int cantidad;
}

```
<br/><br/>

-   **@Past**: Valida que una fecha sea anterior a la fecha actual.

```jsx title="Ejemplo"
public class EventoDTO {
    @Past(message = "La fecha de inicio debe ser en el pasado")
    private LocalDate fechaInicio;
}

```
<br/><br/>

-   **@PastOrPresent**: Valida que una fecha sea anterior o igual a la fecha actual.

```jsx title="Ejemplo"
public class EventoDTO {
    @PastOrPresent(message = "La fecha de inicio debe ser en el pasado o en el presente")
    private LocalDate fechaInicio;
}

```
<br/><br/>

-   **@Future**: Valida que una fecha sea posterior a la fecha actual.

```jsx title="Ejemplo"
public class EventoDTO {
    @Future(message = "La fecha de inicio debe ser en el futuro")
    private LocalDate fechaInicio;
}

```
<br/><br/>

-   **@FutureOrPresent**: Valida que una fecha sea posterior o igual a la fecha actual.

```jsx title="Ejemplo"
public class EventoDTO {
    @FutureOrPresent(message = "La fecha de inicio debe ser en el futuro o en el presente")
    private LocalDate fechaInicio;
}

```
<br/><br/>

-   **@DecimalMin**: Valida que un número decimal sea mayor o igual a un valor definido.

```jsx title="Ejemplo"
public class ProductoDTO {
    @DecimalMin(value = "0.1", message = "El precio debe ser al menos 0.1")
    private BigDecimal precio;
}

```
<br/><br/>

-   **@DecimalMax**: Valida que un número decimal sea menor o igual a un valor definido.

```jsx title="Ejemplo"
public class ProductoDTO {
    @DecimalMax(value = "10000.0", message = "El precio no puede ser mayor a 10,000")
    private BigDecimal precio;
}

```
<br/><br/>


#### Resumen de Uso:

@Valid se usa generalmente en el controlador cuando tenemos objetos anidados que también deben ser validados.

Las demás anotaciones como @NotNull, @Size, @Email, etc., se colocan en los campos del DTO para definir reglas de validación específicas sobre esos campos.

El message en cada anotación es un mensaje personalizado que se mostrará si la validación falla.


### *Manejo de exception*

Para poder mostrar los mensajes preestablecidos en nuestras validaciones cuando alguna no se cumpla, será necesario capturar la exception **MethodArgumentNotValidException**

Esto se verá con mas detalle en el apartado "16-Exception", donde se mostrará un ejemplo completo.


