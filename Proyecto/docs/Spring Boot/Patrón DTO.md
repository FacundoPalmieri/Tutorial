---
sidebar_position: 14
---

# 14 - Patrón DTO

Una de las problemáticas más comunes a la hora de desarrollar aplicaciones (sobre todo web) es la necesidad de interconexión e intercambio de mensajes entre capas u otras aplicaciones. Esto hace que sea realmente importante diseñar cómo o mediante qué formato debe transmitirse la información entre ellas.

Es común que en estos casos se utilicen las mismas clases/entidades que tenemos creadas en el modelo de nuestra aplicación; sin embargo, existe una forma más óptima para llevar a cabo esta tarea: implementando el patrón DTO (Data Transfer Object).

### ¿Qué es un DTO?
Un DTO es un objeto plano (POJO) con una serie de atributos que se utilizan para transmitir datos de manera eficiente entre las capas de una aplicación o entre diferentes servicios. Un DTO puede contener datos de múltiples clases, fuentes o tablas de una base de datos y agruparlos en una única clase simple.

### Ventajas de los DTO
-   Independencia del modelo de datos: Los DTO permiten crear estructuras de datos totalmente independientes de las entidades del modelo, lo que facilita el mantenimiento y la evolución del código.
-   Agrupación de datos: Un DTO puede contener atributos de varias entidades, lo que optimiza las respuestas enviadas al cliente.
-   Flexibilidad: Permite que cambios en las entidades no afecten las estructuras de datos que se envían al cliente, lo que hace que sea más fácil modificar la base de datos sin alterar la lógica de presentación.

### ¿Cuándo usar DTO?
Uno de los principales escenarios donde deberías implementar un DTO es cuando se quiere controlar qué datos se exponen al cliente. Por ejemplo, si una entidad contiene información sensible (como contraseñas o datos internos de la aplicación), puedes usar un DTO para evitar enviarlos en la respuesta. También es útil cuando quieres enviar datos de múltiples entidades en una sola respuesta.

###  Configuraciones iniciales

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