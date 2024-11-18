---
sidebar_position: 12
---

#  12 - JPA + Hibernate

## Introducción a los ORM

Uno de los aspectos más importantes a la hora de desarrollar aplicaciones web es, sin dudas, la forma en que almacenamos y gestionamos los datos.

Para esto, existen diferentes tecnologías, desde las más simples como JDBC (Java Database Connectivity), hasta herramientas más avanzadas conocidas como ORM (Object Relational Mapping - Mapeo Objeto Relacional), que nos facilitan la tarea de relacionar nuestras clases en Java con las tablas de las bases de datos.

A continuación, revisaremos algunas de las herramientas ORM más utilizadas en Java junto con Spring Boot.

## JPA (Java Persistence API)

JPA es la API estándar de Java para la persistencia de datos entre aplicaciones Java y bases de datos relacionales. Es importante destacar que JPA no es un framework en sí mismo, sino una especificación que define un conjunto de reglas y anotaciones para mapear clases Java a tablas de bases de datos.

El objetivo principal de JPA, como todo ORM, es traducir el modelo orientado a objetos en Java a un modelo relacional en la base de datos, facilitando al programador la decisión sobre qué clases y objetos persistir y cómo hacerlo (en términos de nombres de tablas, tipos de datos, relaciones, etc.).

La comunicación entre JPA y la base de datos se realiza a través de anotaciones en las clases Java, que indican cómo deben mapearse los objetos y atributos a las tablas y columnas de la base de datos. Este proceso actúa como un "traductor" entre el mundo orientado a objetos de Java y el mundo relacional de las bases de datos.

![jpa](/img/jpa.png)




Introducción a los ORM
Uno de los aspectos más importantes a la hora de desarrollar aplicaciones web es, sin dudas, la forma en que almacenamos y gestionamos los datos.

Para esto, existen diferentes tecnologías, desde las más simples como JDBC (Java Database Connectivity), hasta herramientas más avanzadas conocidas como ORM (Object Relational Mapping - Mapeo Objeto Relacional), que nos facilitan la tarea de relacionar nuestras clases en Java con las tablas de las bases de datos.

A continuación, revisaremos algunas de las herramientas ORM más utilizadas en Java junto con Spring Boot.

JPA (Java Persistence API)
JPA es la API estándar de Java para la persistencia de datos entre aplicaciones Java y bases de datos relacionales. Es importante destacar que JPA no es un framework en sí mismo, sino una especificación que define un conjunto de reglas y anotaciones para mapear clases Java a tablas de bases de datos.

El objetivo principal de JPA, como todo ORM, es traducir el modelo orientado a objetos en Java a un modelo relacional en la base de datos, facilitando al programador la decisión sobre qué clases y objetos persistir y cómo hacerlo (en términos de nombres de tablas, tipos de datos, relaciones, etc.).

La comunicación entre JPA y la base de datos se realiza a través de anotaciones en las clases Java, que indican cómo deben mapearse los objetos y atributos a las tablas y columnas de la base de datos. Este proceso actúa como un "traductor" entre el mundo orientado a objetos de Java y el mundo relacional de las bases de datos.

Un ejemplo visual de cómo JPA realiza este mapeo puede verse en el siguiente diagrama:



## Proveedores de JPA
Como mencionamos anteriormente, JPA es solo una especificación, por lo que necesita una implementación concreta para funcionar. Esta implementación la brindan los llamados proveedores de JPA, que son los encargados de gestionar las operaciones de persistencia entre la aplicación y la base de datos. Algunos de los proveedores más conocidos son EclipseLink y Hibernate.

Sin embargo, Hibernate es uno de los proveedores más utilizados debido a su flexibilidad, facilidad de uso y rendimiento, lo que lo convierte en la opción predeterminada en muchas aplicaciones Java basadas en Spring Boot.



## Hibernate
El principal objetivo de Hibernate es el de mapear las clases del modelo de datos de una aplicación y así convertirlos o asociarlos a bases de datos, para ello, como se mencionó anteriormente, se utilizan annotations.

Algunas de las más conocidas se explican en detalle a continuación.

**@Entity:**  Se utiliza para mapear todas las clases que se convertirán en entidades (tablas) en la futura base de datos.

**@Table:**  Se utiliza en conjunto con la annotation @Entity. Su principal función es la de mapear con una tabla de una base de datos en particular (en caso de que ya existiese) o establecer el nombre que queremos que la entidad tome como tabla en la base de datos. Su uso es opcional, en caso de que no la utilicemos, JPA tomará automáticamente como nombre de la tabla al nombre de la clase.

**@Id:** Se utiliza para matear las id de cada clase, las cuales se reflejarán en las bases de datos como primary keys (claves primarias).

<br/>
<br/>

**@GeneratedValue:** Se utiliza en conjunto con @Id y permite establecer el tipo de secuencia o generación que va a tener una determinada id. Entre las principales estrategias de generación automática de secuencias que posee GeneratedValue se encuentran:

    **-Auto:** Es la opción por defecto. Pensada principalmente para ids numéricas. Esta estrategia deja a criterio de Hibernate la forma de generación que considere mejor para la id con la que se esté trabajando.

    **-Identity:** Generalmente son autoincrementales (aumentan su valor de forma automática según un incremento que se establezca). Se utilizan principalmente para asignar a claves primarias ya existentes en una base de datos por las cuales Hibernate debe guiarse para continuar la secuencia.

    **-Sequence:** Es uno de los tipos de generación de valor más utilizados. Permite generar secuencias numéricas. De forma automática hace el incremento de 1 en 1, pero puede ser personalizada según sea necesario.

    **-Table:** Se utiliza para casos donde es necesario asignar claves primarias para las entidades de una base de datos mediante los datos que se encuentren contenidos en una tabla, guardando en ésta el último valor utilizado como referencia.

<br/>
<br/>

**@Column:**  Se utiliza para mapear cada uno de los atributos de una clase con las columnas de una tabla. No es una annotation obligatoria, en caso de que no se la utilice, JPA toma de forma automática como nombre de columna al nombre del atributo de la clase en cuestión. Es una annotation principalmente pensada para el mapeo de atributos sobre columnas de tablas en bases de datos ya existentes.

**@OneToOne, @OneToMany, @ManyToOne y @ManyToMany:**  Son annotations utilizadas principalmente para el mapeo de relaciones entre clases, los cuales se traducirán a nivel de base de datos como relaciones entre tablas (uno a uno, uno a muchos, muchos a uno o muchos a muchos).

**@JoinColumn:** Es utilizada para manifestar los distintos tipos de Join que sean necesarios entre campos de tablas.