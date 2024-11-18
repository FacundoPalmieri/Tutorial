---
sidebar_position: 13
---

# 13 - @Model

La capa Model (o Entity) es una de las partes esenciales en cualquier aplicación Spring Boot que interactúe con bases de datos. Esta capa contendrá las entidades, que son representaciones de las tablas en nuestra base de datos. Cada clase de entidad mapea directamente a una tabla en la base de datos, y sus atributos mapean a las columnas de dicha tabla.

Para simplificar el trabajo con entidades, utilizamos la librería Lombok, que nos permite reducir el código repetitivo como getters, setters y constructores, generándolos automáticamente. 

:::info[Importante]
Para que Spring boot identifique esta interfaz como tal, debemos colocar la annotation @Entity
:::

## Configuraciones iniciales

1. Crearemos el package "model" y dentro crearemos la clase correspondiente a nuestra entidad.
2. Colocaremos la annotation @Entity para que Spring boot identifique esta clase como tal.
3. Colocaremos las annotation de la libtería *lombok* que nos permiten simplificar código.
    - @Data : Permite acceder a los setters y getters.
    - @AllArgsConstructor : Permite acceder a un constructor con todos los parámetros.
    - @NoArgsConstructor: : Permite acceder a un constructor sin parámetros.
    - @ToString : Permite acceder al método ToString

```jsx title="Model"
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Curso {
    
    // Atributos....

}

```

4. Colocaremos el primer atributo, nombrado como *id_curso*, que corresponderá a nuestra Primary Key en nuestra Base de datos. Para eso usaremos la annotation @Id. Luego, deberemos establecer que estrategia usar para ese identificador único. En este caso, será Identity.

```jsx title="Model"
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_curso;
```

5. Continuaremos con el resto de los atributos, y la annotation que necesitemos. En este caso se agregará la annotation @NonNull que asegura que esos campos no sean nulos.**Está verificación será en tiempo de ejecución y no en el almacenamiento en la base de datos.**
```jsx title="Model"
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

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
```

6. Por último, en el caso que contemos con una composición, e implique una relación entre tablas en la base de datos, debemos realizar el mapeo corresponde con la annotation @OneToMany

Esto indicará que un elemento de nuestra clase *Curso*, en nuestro caso será la Lista de Temas, podrá relacionarse con muchos elementros de la clase *Tema*


```jsx title="Model"
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

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


    @OneToMany // <---- Foreing Key
    private List<Tema> listaDeTemas;
}
```


🤔 Ahora como se verá reflejado esto en nuestra base de datos?

Se creará una tabla intermedia, que identifique a nuestra FK [listaDeTemas] con la PK de la clase Tema

![bd](/img/bd.png)


:::info[Importante]
Esta última relación es Unidireccional, es decir que, la clase Curso tiene una lista de temas, pero la clase Tema no tiene ninguna referencia de vuelta a Curso.

En caso de querer una relación Bidireccional deberia realizarse esta configuración
```jsx title="Curso"
@OneToMany
   @OneToMany(mappedBy = "curso") // "curso" es el nombre del atributo en Tema
    private List<Tema> listaDeTemas;
```
```jsx title="Tema"
@ManyToOne
    @JoinColumn(name = "id_curso") // Define la foreign key
    private Curso curso; // Este es el atributo que 'mappedBy' está referenciando
```
- En la clase Curso, la lista listaDeTemas tiene la anotación @OneToMany(mappedBy = "curso").
- Esto significa que la relación está mapeada por el atributo curso en la clase Tema, que es la referencia al curso al que pertenece cada tema.

Es decir, mappedBy = "curso" se refiere al nombre del atributo curso en la clase Tema. No hace referencia al nombre de la clase Curso en sí.

:::