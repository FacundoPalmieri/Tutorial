---
sidebar_position: 13
---

# 13 - @Model

La capa Model (o Entity) es una de las partes esenciales en cualquier aplicación Spring Boot que interactúe con bases de datos. Esta capa contendrá las entidades, que son representaciones de las tablas en nuestra base de datos. **Cada clase de entidad mapea directamente a una tabla en la base de datos, y sus atributos mapean a las columnas de dicha tabla.**

Para simplificar el trabajo con entidades, utilizamos la librería Lombok, que nos permite reducir el código repetitivo como getters, setters y constructores, generándolos automáticamente. 

:::info[Importante]
Para que Spring boot identifique esta interfaz como tal, debemos colocar la annotation @Entity
:::


### Definiendo las Entidades en Spring Boot

En Spring Boot, se puede personalizar el nombre de la tabla en la base de datos usando la anotación **@Table.** Por defecto, el nombre de la tabla será el nombre de la clase de la entidad.

```jsx title="class Paciente"
@Entity
@Table(name = "pacientes") // Definiendo el nombre de la tabla en PLURAL
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    // Getters y setters
}

```
<br/><br/>


### Clave Primaria y Generación Automática

La anotación **@Id** define la clave primaria de la entidad, y **@GeneratedValue** especifica cómo se generará el valor de la clave primaria. Usualmente se usa GenerationType.IDENTITY para bases de datos que soportan la autoincrementación, como MySQL.


```jsx title="class Paciente"
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```
<br/><br/>


### Definir el Nombre de la Columna y Restricciones

La anotación **@Column** para personalizar el nombre de las columnas y añadir restricciones como length, unique, nullable, etc.


```jsx title="class Paciente"
@Entity
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre_completo", length = 100, nullable = false) // Renombramos la columna y aplicamos restricciones
    private String nombre;
    
    @Column(name = "email", unique = true, nullable = false) // Hacemos la columna única y no nula
    private String email;
    
    // Getters y setters
}

```
<br/><br/>


## Tipos de relaciones

En una aplicación Spring Boot que utiliza Hibernate para la persistencia de datos, las anotaciones de Java Persistence API (JPA) juegan un papel crucial para definir cómo las entidades se mapean a las tablas de la base de datos. Estas anotaciones permiten establecer relaciones entre entidades, configurar detalles de las columnas y controlar la forma en que los datos se almacenan y se recuperan.

Las relaciones entre entidades son fundamentales para cualquier modelo de datos. JPA proporciona varias anotaciones para definir cómo se deben conectar las entidades entre sí, lo que nos permite modelar desde relaciones simples hasta estructuras complejas de base de datos. Las anotaciones más comunes son:

**@OneToOne:**   Relación de uno a uno.
**@ManyToOne:**  Relación de muchos a uno.
**@OneToMany:**  Relación de uno a muchos.
**@ManyToMany:** Relación de muchos a muchos.

Además de estas anotaciones de relación, JPA también permite definir detalles sobre las columnas de las tablas, como la longitud de los campos, la unicidad, la obligatoriedad (nullable) y las claves foráneas (foreign keys).

En este tutorial, exploraremos estas anotaciones, sus casos de uso y cómo configurar las relaciones y los detalles de las columnas en tus entidades. Aprenderás cómo trabajar con estas relaciones de manera eficiente en Spring Boot, utilizando Hibernate para facilitar la persistencia de datos en tu base de datos.


### @OneToOne: Relación de Uno a Uno

Una relación **@OneToOne** significa que un registro de una tabla está relacionado con exactamente un registro de otra tabla.

Ejemplo: Un paciente tiene una historia clínica única.

```jsx title="class Paciente"
@Entity
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    @OneToOne(cascade = CascadeType.ALL) // Relación uno a uno
    @JoinColumn(name = "historia_clinica_id") // Nombre de la columna de clave foránea
    private HistoriaClinica historiaClinica;
    
    // Getters y setters
}

```
**@OneToOne:** Define la relación uno a uno.

**cascade = CascadeType.ALL:** Indica que si se guarda, actualiza o elimina un Paciente, también se hará lo mismo con la HistoriaClinica.

**@JoinColumn:** Especifica cómo se debe llamar la columna de clave foránea.


<br/><br/>

### @ManyToOne: Relación de Muchos a Uno

La relación @ManyToOne significa que muchos registros de una tabla pueden estar relacionados con un solo registro de otra tabla.

Ejemplo: Muchos pacientes pueden tener el mismo odontólogo asignado.

```jsx title=" class Paciente"
@Entity
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    @ManyToOne(fetch = FetchType.LAZY) // Relación muchos a uno
    @JoinColumn(name = "odontologo_id") // Clave foránea
    private Odontologo odontologo;
    
    // Getters y setters
}

```
**@ManyToOne:** Define la relación muchos a uno.

**fetch = FetchType.LAZY:** Indica que la relación debe cargarse solo cuando sea necesario (por defecto es LAZY, lo que significa que no se carga inmediatamente).

<br/><br/>

### @OneToMany: Relación de Uno a Muchos

Una relación @OneToMany es la inversa de **@ManyToOne.** Significa que un registro de una tabla puede estar relacionado con muchos registros de otra tabla.

Ejemplo: Un odontólogo puede atender a muchos pacientes.


```jsx title="class Odontologo"
@Entity
public class Odontologo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    @OneToMany(mappedBy = "odontologo", fetch = FetchType.LAZY) // Relación uno a muchos
    private List<Paciente> pacientes;
    
    // Getters y setters
}


```
**@OneToMany:** Define la relación uno a muchos.

**mappedBy = "odontologo":** Indica que la relación se mapea desde la propiedad odontologo de la clase Paciente. En este caso "odontologo"  es el nombre del atributo(No del nombre en la bd) en la clase Paciente que está marcando la relación @ManyToOne hacia Odontologo. En otras palabras, el valor de mappedBy debe coincidir con el nombre de la propiedad que contiene la referencia a la clase Odontologo en la clase Paciente.

**fetch = FetchType.LAZY:** La relación se carga de manera diferida.

<br/><br/>

### @ManyToMany: Relación de Muchos a Muchos

Una relación **@ManyToMany** significa que muchos registros de una tabla están relacionados con muchos registros de otra tabla.

Ejemplo: Un paciente puede tener muchos tratamientos, y un tratamiento puede ser realizado a muchos pacientes.


```jsx title="class Paciente"
@Entity
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "paciente_tratamiento",
        joinColumns = @JoinColumn(name = "paciente_id"),
        inverseJoinColumns = @JoinColumn(name = "tratamiento_id")
    )
    private List<Tratamiento> tratamientos;
    
    // Getters y setters
}

```



```jsx title="class Tratamiento"
@Entity
public class Tratamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
    @ManyToMany(mappedBy = "tratamientos")
    private List<Paciente> pacientes;
    
    // Getters y setters
}

```
**@ManyToMany:** Define la relación muchos a muchos.

**@JoinTable:** Especifica la tabla intermedia que Spring Boot usará para manejar la relación.

**joinColumns:** Especifica la clave foránea para la entidad que está en el lado "dueño" de la relación.

**inverseJoinColumns:** Especifica la clave foránea para la otra entidad.


:::info[Important!]
Es importante destacar que, cuando defines una relación **@ManyToOne** en una entidad, **no es obligatorio** crear la relación **@OneToMany** en la otra entidad. Sin embargo, es muy común hacerlo porque proporciona una manera conveniente de acceder a los registros relacionados desde ambas entidades.

**Relación ManyToOne (de la entidad A a la entidad B):** Si tienes una relación @ManyToOne en la entidad A que se refiere a la entidad B, esto significa que muchos objetos de A pueden estar relacionados con un solo objeto de B. En este caso, en la entidad A defines la relación con la anotación @ManyToOne.

Ejemplo: Un Paciente tiene un Odontologo asignado (relación muchos a uno).

```jsx title="class Paciente"
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "odontologo_id")
private Odontologo odontologo;
```
<br/><br/>

**Relación OneToMany (de la entidad B a la entidad A):** En la entidad B (en este caso, Odontologo), podrías definir una relación @OneToMany que mapea todos los objetos de A (en este caso, todos los pacientes asignados a ese odontólogo).


```jsx title="class Odontologo"
@OneToMany(mappedBy = "odontologo", fetch = FetchType.LAZY)
private List<Paciente> pacientes;
```

Spring Boot no requiere que siempre definas la relación @OneToMany en el lado "uno" de la relación (en este caso, Odontologo). De hecho, se puede tener una relación @ManyToOne sin necesidad de tener un @OneToMany en el otro lado. En este caso, solo se estaría navegando desde Paciente hacia Odontologo, pero no necesariamente necesitarías acceder desde Odontologo a todos sus Pacientes.


#### Conclusión: 

**@ManyToOne:** Puedes tener esta anotación en el lado "muchos", y Spring Boot manejará la relación sin necesidad de definir un @OneToMany en el lado "uno".

**@OneToMany:** Si deseas poder acceder a la lista de objetos relacionados desde el lado "uno", entonces deberías incluirla, pero no es obligatorio.

La elección de incluir un @OneToMany depende de tus necesidades. Si no necesitas acceder a la lista de pacientes desde un odontólogo, no es necesario incluir la relación @OneToMany en la entidad Odontologo.

:::

<br/><br/>


### Cuando NO Usar una Entidad Intermedia

En general, Spring Boot crea automáticamente una tabla intermedia en relaciones **@ManyToMany** cuando no se proporciona una tabla específica mediante **@JoinTable**. Sin embargo, no siempre es necesario crear una clase para la entidad intermedia, como en el ejemplo anterior de Paciente y Tratamiento.

**¿Cuándo NO crearla?** Si la relación **@ManyToMany** no tiene atributos adicionales en la tabla intermedia (como fechas o estados), Spring Boot manejará la tabla intermedia automáticamente.


### FetchType y Cascade

#### FetchType

fetch define cómo se deben cargar las entidades relacionadas:

**-   EAGER:** La relación se carga inmediatamente al cargar la entidad principal.

**-   LAZY:** La relación se carga solo cuando se accede explícitamente a ella.

Ejemplo: Si se tiene un @ManyToOne con LAZY, solo se cargará el odontologo cuando se acceda a la propiedad odontologo.


```jsx title="Ejemplo"
@ManyToOne(fetch = FetchType.LAZY)
private Odontologo odontologo;

```


#### Cascade

cascade define qué acciones se deben propagar a las entidades relacionadas. Por ejemplo:

**-   CascadeType.ALL:** Todas las operaciones (persistir, actualizar, eliminar) se propagan.

**-   CascadeType.PERSIST:** Solo las operaciones de persistir se propagan.

**-   CascadeType.MERGE:** Solo las operaciones de actualizar se propagan.


```jsx title="Ejemplo"
@OneToOne(cascade = CascadeType.ALL)
private HistoriaClinica historiaClinica;
```

## Resumen de Annotations


**- @Entity**: Marca una clase como una entidad de JPA, lo que significa que estará mapeada a una tabla de la base de datos.


**- @Table(name = "nombre_de_la_tabla")¨** : Permite definir el nombre de la tabla de la entidad en la base de datos.

**- @Id** : Especifica el atributo que actúa como clave primaria en la entidad.


**- @GeneratedValue** : Configura cómo se generará el valor para la clave primaria (estrategias: AUTO, IDENTITY, SEQUENCE, TABLE).


**- @Column:** : Define detalles de la columna, como el nombre (name), la longitud máxima (length), si es nullable (permitiendo valores nulos o no), y si es único (unique = true). 

:::info[Ejemplo]
@Column(name = "nombre", length = 50, nullable = false)
:::


**- @JoinColumn:** Crea la clave foránea en la columna. Si nullable = false, significa que la columna no puede tener valores nulos.

**- @OneToOne:** Relación de uno a uno entre dos entidades. Ejemplo: un Empleado tiene un solo Pasaporte.

**- @ManyToOne:** Relación de muchos a uno, donde varias entidades están relacionadas con una sola entidad. Ejemplo: muchos Empleados están relacionados con un Departamento.

**- @OneToMany:** Relación inversa de ManyToOne. Ejemplo: un Departamento tiene muchos Empleados.

**- @ManyToMany:** Relación de muchos a muchos, donde varias entidades A se relacionan con varias entidades B. Ejemplo: varios Estudiantes pueden estar en varios Cursos.


<br/><br/>

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