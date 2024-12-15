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


```jsx title="sintaxsis"
@Table(name = "nombreTabla") // Definiendo el nombre de la tabla en la base de datos en PLURAL
```

**Ejemplo**: Tenemos la entidad **club** y en la base de datos, queremos que la tabla se nombre **clubes**.

```jsx title="class Club"
@Entity
@Table(name = "clubes") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Club {

    private Long id;
    private String name;

  
    private Coach coach;

}
```

<br/><br/>


### Clave Primaria y Generación Automática

La anotación **@Id** define la clave primaria de la entidad, y **@GeneratedValue** especifica cómo se generará el valor de la clave primaria. Usualmente se usa GenerationType.IDENTITY para bases de datos que soportan la autoincrementación, como MySQL.


```jsx title="sintaxsis"
@Id // Clave Primaria.
@GeneratedValue(strategy = GenerationType.IDENTITY) // Incremento en 1
```

```jsx title="class Club"
@Entity
@Table(name = "clubes") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Club {

    @Id // Clave Primaria.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Incremento en 1
    private Long id;
    private String name;

  
    private Coach coach;

}

```
<br/><br/>


### Definir el Nombre de la Columna y Restricciones

La anotación **@Column** permite  personalizar el nombre de las columnas y añadir restricciones como length, unique, nullable, etc.

Sabemos por ejemplo que si tenemos nombres compuestos (Ej lastName) en la base de datos debería guardarse con un guión. Entonces con esta propiedad **@Column** podemos definir el nombre para la columna en SQL.

En caso que la columna sea de unión, es decir una **Foreing Key** deberemos usar la annotation **@JoinColumn**

```jsx title="sintaxsis"
@Column(name = "xxx", length = 10, nullable = false, unique = true)

```


```jsx title="class coach"
@Entity
@Table(name = "coachs") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Coach {

    @Id  // Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Incremento en 1
    private Long id;

    @Column(name = "name", length = 10, nullable = false, unique = true) // Restricciones
    private String name;

    @Column(name = "last_name", columnDefinition = "VARCHAR(100)") // Restricciones
    private String lastName;

    private String nationality;
    private Integer age;
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


-----

### @OneToOne: Relación de Uno a Uno

Una relación **@OneToOne** significa que un registro de una tabla está relacionado con exactamente un registro de otra tabla.

:::info[Ejemplo]

Supongamos que tenemos dos entidades, **Club** y**Coach**. Podemos pensarlo como una relación **OneToOne**. Un club de fútbol tiene solo un Coach, y un Coach pertenece a un solo club.
:::

Sabemos que en una relación 1 a 1, la Primary Key de una tabla pasa a ser Foreing Key en la otra tabla. La pregunta es, que PK debería ser FK en la otra tabla?. La realidad es que no hay una respuesta correcta, ya que eso depende de las necesidades del negocio. 

Para esta ocasión, podremos la FK del lado del **Coach**


#### Entidades.

 ```jsx title="class Club"
@Entity
@Table(name = "clubes") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Club {

    @Id // Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}

```

<br/><br/>

```jsx title="class coach"
@Entity
@Table(name = "coachs") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Coach {

    @Id // Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Incremento en 1
    private Long id;

    @Column(name = "name", length = 10, nullable = false, unique = true)
    private String name;

    @Column(name = "last_name", columnDefinition = "VARCHAR(100)")
    private String lastName;

    private String nationality;
    private Integer age;
}

```

<br/><br/>

1.  Nos paramos en la entidad en donde nosotros queremos crear la relación, en este caso **Club** y agregamos un atributo de la otra entidad.

#### Entidades.

 ```jsx title="class Club"
@Entity
@Table(name = "clubes") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Club {

    @Id // Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;


    private Coach coach; // PASO 1 
}

```

2.  Establecemos la relación **@OneToOne** sobre ese atributo. Esto generará la FK en la tabla **Club**. Es decir se agregará una columna **id_coach**.

3.  Agregamos propiedad **(targetEntity = Coach.Class)** para establecer con que clase se hará la relación.

4.  Agregamos la propiedad **cascade = CascadeType.xxx** para establecer comportamiento en cascada. Es decir, cualquier acción de insertar, eliminar, actualizar, etc impactará en la tabla relacionada.

5.  Utilizamos la annotation **@JoinColumn** para establecer el nombre en la columna unión.


```jsx title="class Club"
@Entity
@Table(name = "coachs") // Definiendo el nombre de la tabla en la base de datos en PLURAL
public class Club {

    @Id // Clave Primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;




    @OneToOne(targetEntity = Coach.Class, cascade= CascadeType.ALL) // PASO 2, 3 Y 4
    @JoinColumn(name = "id_coach")                                  // PASO 5    
    private Coach coach; // PASO 1
}

```

![club](/img/club1.png)

![coach](/img/coach1.png)


#### Resumen

**@OneToOne:** Define la relación uno a uno.

**cascade = CascadeType.ALL:** Indica que si se guarda, actualiza o elimina un Paciente, también se hará lo mismo con la HistoriaClinica.

**@JoinColumn:** Especifica cómo se debe llamar la columna de clave foránea.


<br/><br/>



-----

### @ManyToOne: Relación de Muchos a Uno

La relación **@ManyToOne** significa que muchos registros de una tabla pueden estar relacionados con un solo registro de otra tabla.

Existe dos casos:

**-   Bidireccionalidad** : Ambas entidades se conocen, y debemos configurar ambas.

**-   Unidireccionalidad** Solo una entidad conoce a la otra. Solo que configura del lado del UNO.

De acuerdo a las buenas prácticas de **SQL** en este tipo de relaciones, la Primary Key de tabla **One** pasa como Foreing Key a la tabla **Many**.

:::info[Ejemplo]

Supongamos que un **Club puede tener muchos Jugadores**, pero un **jugador solo puede pertencer a un club**. Es decir, entendemos que este ejemplo podría pensarse de esta manera:

- **Many** : Jugadores

- **One** : Club

Siguiendo las buenas prácticas mencionadas, la **PK de club** debería pasar como **FK en jugadores**

:::

1. Creamos nuestra nueva **entidad Player**, la cual será mapeada como **tabla** a la base de datos.

```jsx title="class player"
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name = "last_name")
    private String lastName;
    private Integer age;
    private String nationality;
}
```

2. Agregamos un atributo correspondiente a la entidad relacionada.

3. Colocamos la annotation **@ManyToOne(targetEntity = Club.class)**

    - Como jugador corresponde a **Many** la annotation en esta entidad será la que empiece con ese nombre.

    - Agregamos propiedad **(targetEntity = Club.Class)** para establecer con que clase se hará la relación.

    - Está annotation se coloca para realizar una relación **Bidireccional**. Es decir, que ambas entidades se conozcan.

4.  Utilizamos la annotation **@JoinColumn** para establecer el nombre en la columna unión.
 


```jsx title="class player"
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name = "last_name")
    private String lastName;
    private Integer age;
    private String nationality;

    @ManyToOne(targetEntity = Club.class)  // PASO 3
    @JoinColumn(name = "id_club")         //  PASO 4
    private Club club;                   //   PASO 2

}
```

<br/><br/>


5. En nuestra entidad **club** colocaremos un atributo correspondiente a la entidad **jugadores**. Como pueden ser varios jugadores, pondremos una lista.

6. Colocamos la annotation:

**@OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY, mappedBy = "club")**

    - Como club corresponde a **One** la annotation en esta entidad será la que empiece con ese nombre.

    - Agregamos propiedad **(targetEntity = Player.Class)** para establecer con que clase se hará la relación. 

    - **fetch = FetchType.LAZY**  Indica que la relación debe cargarse solo cuando sea necesario, es decir cuando se utilice el atributo "player" en el objeto "club".

    - **FetchType.EAGER**:  Cuando se utiliza EAGER, la relación se carga inmediatamente junto con la entidad principal al instanciar un objeto "club", es decir, cuando se consulta una entidad que tiene una relación marcada con fetch = FetchType.EAGER, JPA carga tanto la entidad principal como las entidades relacionadas en una sola consulta.

    - **mappedBy = "club"** : club, es el nombre del **atributo** en la entidad **player**. No es el nombre de la tabla, sino el atributo de la clase. Con esta propiedad, se está indicando que la relación debe ser mapeada por **club**, es decir se indica que en la tabla  **player** debe agregar la **Foreing Key a club**



```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY) // PASO 6
    private List<Player> players;                                   // PASO 5
}
```

<br/><br/>

![club2](/img/club2.png)


![player1](/img/player1.png)



<br/><br/>


-----

### @OneToMany: Relación de Uno a Muchos

Una relación @OneToMany es la inversa de **@ManyToOne.** Significa que un registro de una tabla puede estar relacionado con muchos registros de otra tabla.

#### Ejemplo

Supongamos que un **Club** puede pertencer **a una Asociación de Fútbol**, pero **a una Asociación de Fútbol pueden pertencer mucho Clubes**. Es decir, entendemos que este ejemplo podría pensarse de esta manera:

- **One** : Asociación de Fútbol

- **Many** : Clubes

Siguiendo las buenas prácticas mencionadas, la **PK de club** debería pasar como **FK en Clubes**


1. Creamos nuestra nueva entidad **FootballAssociation**, la cual será mapeada como **tabla** a la base de datos.

2. Agregamos un atributo correspondiente a la entidad relacionada.

3. Colocamos la annotation 

    ```jsx title="class ejemplo"
    @OneToMany(targetEntity = Club, fetch = FetchType.LAZY, mappedBy = "footballAssociation")

    ```
    - Como FootballAssociation corresponde a **One** la annotation en esta entidad será la que empiece con ese nombre.

    - Agregamos propiedad **(targetEntity = Club.Class)** para establecer con que clase se hará la relación.

    - **fetch = FetchType.LAZY**  Indica que la relación debe cargarse solo cuando sea necesario, es decir cuando se utilice el atributo "player" en el objeto "club".

    - **mappedBy = "footballAssociation"** : footballAssociation, es el nombre del **atributo** en la entidad **Club**. No es el nombre de la tabla, sino el atributo de la clase. Con esta propiedad, se está indicando que la relación debe ser mapeada por **footballAssociation**, es decir se indica que la tabla **club** debe agregar la **Foreing Key a footballAssociation**
 


```jsx title="class FootballAssociation"
@Entity
public class FootballAssociation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String country;
    private String president;


    @OneToMany(targetEntity = Club, fetch = FetchType.LAZY, mappedBy = "footballAssociation") // PASO 3
    private List<Club> clubs;                                                                 // PASO 2

    
}
```
 
 <br/><br/>

4. En la entidad **Club** agregamos un atributo de nuestra clase FootballAssociation.

5. Colocamos la annotation **@ManyToOne(targetEntity = FootballAssociation.Class)**


```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY)
    private List<Player> players;


    @ManyToOne(targetEntity = FootballAssociation.Class) // PASO 5
    private FootballAssociation  footballAssociation     // PASO 4
}
```

<br/><br/>


![football1](/img/football1.png)

![club3](/img/club3.png)




<br/><br/>
-------


### @ManyToMany: Relación de Muchos a Muchos

Una relación **@ManyToMany** significa que muchos registros de una tabla están relacionados con muchos registros de otra tabla.

De acuerdo a las buenas prácticas de **SQL** en este tipo de relaciones, se debe genera una tabla intermedia para manejar ambas **FK** que serán **PK** en sus respectivas tablas.

#### Ejemplo

Podriamos pensar que un **club puede integrar varias competiciones**, y también en **una competicion pueden participar varios Clubes.**


1. Creamos nuestra nueva entidad **FootballCompetition**, la cual será mapeada como **tabla** a la base de datos.


```jsx title="class FootballCompetition"
@Entity
public class FootballCompetition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name = "cuantity_price", columnDefinition = "VARCHAR(300)")
    private int cuantityPrice;

    @Column(name = "start_date", columnDefinition = "DATE", length = 10, nullable = false, unique = true)
    private LocalDate startDate;

    @Column(name = "end_date", columnDefinition = "DATE")
    private LocalDate endDate;

}
```

<br/><br/>

2. En la entidad **Club**, agregamos un atributo de tipo lista, correspondiente a la entidad FootballCompetition


```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY)
    private List<Player> players;


    private List <FootballCompetition>  FootballCompetition                      // PASO 2

}
```

3. Colocamos la annotation

    ```jsx title="Ejemplo"
    @ManyToOne(targetEntity = FootballAssociation.Class)
    ```

 
```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY)
    private List<Player> players;


    @ManyToOne(targetEntity = FootballCompetition.Class, fetch = FetchType.LAZY)   // PASO 3
 
    private List <FootballCompetition>  FootballCompetition                      // PASO 2

}
```


4. Colocamos la siguientes annotation : 


    ```jsx title="Ejemplo"
    @JoinTable(
        name = "club_competitions", 
        JoinColumn = @JoinColumn(name = "club"), 
        inverseJoinColumns = @JoinColumn(name= "competition")
    )

    ```
    

     - **joinColumns = @JoinColumn(name = "club")"** : Define el nombre de la columna de clave foránea en la tabla intermedia (club_competitions) que apunta a la entidad actual (Club). En este caso, la columna club en la tabla intermedia referenciará el ID de la tabla Club.

     -  **inverseJoinColumns = @JoinColumn(name = "competition")** : Define el nombre de la columna de clave foránea inversa en la tabla intermedia que apunta a la entidad relacionada (Competition).  



```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY)
    private List<Player> players;


    @ManyToOne(targetEntity = FootballCompetition.Class, fetch = FetchType.LAZY)   // PASO 3
    @JoinTable(                                                                    // PASO 4
        name = "club_competitions",
        JoinColumn = @JoinColumn(name = "club"),
        inverseJoinColumns = @JoinColumn(name= "competition")
        )
    private List <FootballCompetition>  FootballCompetition                      // PASO 2

}
```

![club-competition](/img/club-competition.png)


#### Resumen

**@ManyToMany:** Define la relación muchos a muchos.

**@JoinTable:** Especifica la tabla intermedia que Spring Boot usará para manejar la relación.

**joinColumns:** Especifica la clave foránea para la entidad que está en el lado "dueño" de la relación.

**inverseJoinColumns:** Especifica la clave foránea para la otra entidad.




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


#### - @Entity:

Marca una clase como una entidad de JPA, lo que significa que estará mapeada a una tabla de la base de datos.

<br/><br/>

#### -  @Table(name = "nombre_de_la_tabla") :

Permite definir el nombre de la tabla de la entidad en la base de datos.

<br/><br/>


#### - @Id : 

Especifica el atributo que actúa como clave primaria en la entidad.

<br/><br/>


#### - @GeneratedValue : 

Configura cómo se generará el valor para la clave primaria (estrategias: AUTO, IDENTITY, SEQUENCE, TABLE).


<br/><br/>

-----

### - *@Column:  Define detalles de la columna*

**columnDefinition**: ermite definir manualmente el tipo de columna en SQL.

Ejemplo: columnDefinition = "DATE"

<br/>


**name**: Define el nombre de la columna en la tabla.

Ejemplo: name = "start_date"

<br/>

**nullable** : Indica si la columna puede aceptar valores nulos.	

Ejemplo: nullable = false

<br/>

**unique**: Indica si la columna debe tener valores únicos.	

Ejemplo: unique = true

<br/>

**length:** Especifica la longitud máxima de la columna (solo para tipos String)

Ejemplo: length = 255

<br/>

**precision**: Define la precisión para columnas de tipo decimal (número total de dígitos).

Ejemplo: precision = 10

<br/>

**insertable**: Indica si el valor puede ser insertado (por defecto true).

Ejemplo: insertable = false

<br/>

**updatable**: Indica si el valor puede ser actualizado (por defecto true).

Ejemplo: updatable = false

<br/><br/>

### - *@JoinColumn:  Se usa para especificar claves foráneas en relaciones entre entidades.*

**name**: Define el nombre de la columna que actúa como clave foránea

Ejemplo: name = "club_id"

<br/><br/>

### - *@JoinTable:  Se usa para configurar tablas intermedias en relaciones @ManyToMany.*

**name**: Nombre de la tabla intermedia.

Ejemplo: name = name = "club_competitions"

<br/>

**joinColumns**: Define las columnas que actúan como claves foráneas hacia la entidad actual.

Ejemplo: joinColumns = @JoinColumn(name = "club_id")

<br/>

**inverseJoinColumns**: Define las columnas que actúan como claves foráneas hacia la entidad relacionada.

Ejemplo: inverseJoinColumns = @JoinColumn(name = "competition_id")


##### Ejemplo completo

```jsx title="class club"
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @OneToMany(targetEntity = Player.class, fetch = FetchType.LAZY)
    private List<Player> players;


    @ManyToOne(targetEntity = FootballCompetition.Class, fetch = FetchType.LAZY)
    @JoinTable(name = "club_competitions", JoinColumn = @JoinColumn(name = "club"), inverseJoinColumns = @JoinColumn(name= "competition"))
    private List <FootballCompetition>  FootballCompetition
}
```
