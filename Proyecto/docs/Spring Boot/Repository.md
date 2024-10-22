---
sidebar_position: 15
---

# 15 - @Repository

En la arquitectura de Spring Boot, la capa Repository es la encargada de interactuar directamente con la base de datos. Su función principal es realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y cualquier otra operación relacionada con la persistencia de datos.

### ¿Qué es un Repository?

Un Repository es una **interfaz** que actúa como una abstracción de la lógica de acceso a datos. Esta capa permite separar las tareas de persistencia del resto de la lógica de la aplicación, siguiendo el principio de separación de responsabilidades. **En lugar de escribir consultas SQL manuales o gestionar conexiones a la base de datos, Spring Data JPA ofrece una implementación automática de esta capa, simplificando el proceso de acceso a datos mediante el uso de interfaces predefinidas.**
:::info[Importante]
Para que Spring boot identifique esta interfaz como tal, debemos colocar la annotation @Repository
:::

### ¿Qué es un Spring Data JPA?
Es un subproyecto dentro de Spring que facilita el uso de JPA en aplicaciones Spring. Al definir una interfaz de Repository, puedes aprovechar la funcionalidad que proporciona Spring Data JPA sin necesidad de implementar manualmente métodos complejos.


Entre las funcionalidades automáticas que Spring Data JPA ofrece se encuentran:

**Consultas automáticas:** Basadas en el nombre de los métodos definidos en el Repository.

**Consultas personalizadas:** A través de la anotación @Query.

**Soporte para paginación y ordenación.**


:::tip[Ventajas]

**Simplicidad:** La lógica de acceso a la base de datos se maneja de forma automática.

**Modularidad:** Se mantiene el código de acceso a datos separado del resto de la lógica de la aplicación.

**Flexibilidad:** Puedes extender las funcionalidades predeterminadas con consultas personalizadas.
:::


### Configuraciones iniciales
1. Crearemos el package "repository".
2. Crearemos las interfaces necesarias, que siguiendo nuestro ejemplo, serán Curso y tema.

:::info[Nomenclatura]
A fin de seguir buenas prácticas deberemos nombras a las interfaces con el nombre, seguido de "Repository".

Ejemplo: CursoRepository
:::

3. Colocaremos la annotation @Repository
4. Colocar la herencia de JpaRepository[Clase, Tipo de dato PK]
    - Dentro de los parámetros de JpaRepository, se indicará la clase y el tipo de dato de la PK de la clase

```jsx title="CursoRepository"
@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {

}

```


```jsx title="Curso"
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_curso;
}
```
