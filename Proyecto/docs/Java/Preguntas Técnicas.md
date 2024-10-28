---
sidebar_position: 7
---

# 7 - Preguntas Técnicas.

## Cual es la diferencia entre JDK y JRE?
La diferencia principal entre JDK y JRE es:
-   JDK (Java Development Kit): Es un conjunto de herramientas para **desarrollar** aplicaciones Java. Incluye el JRE, el compilador (javac), y otras herramientas como el depurador y el intérprete. Es necesario para programar y compilar código en Java.
-   JRE (Java Runtime Environment): Es el entorno necesario para **ejecutar** aplicaciones Java. Incluye la JVM (Java Virtual Machine) y las bibliotecas esenciales, pero no tiene herramientas de desarrollo como el compilador. Sirve solo para ejecutar programas ya compilados.

:::tip[Conclusión]
-   JDK: Para desarrollar y ejecutar aplicaciones Java.
-   JRE: Solo para ejecutar aplicaciones Java.
:::

## ¿Por qué Java es una plataforma de lenguaje independiente?
Java es un lenguaje de plataforma independiente debido a la JVM (Java Virtual Machine). Cuando codificas un programa en Java, el código fuente se compila en bytecode, que es un formato intermedio que no depende de ninguna plataforma específica.
Este bytecode puede ser ejecutado en cualquier dispositivo o sistema operativo que tenga una JVM instalada. La JVM actúa como un intermediario que traduce el bytecode en instrucciones específicas para el sistema operativo subyacente. Esto permite que un programa Java se ejecute en cualquier plataforma sin necesidad de modificaciones, siguiendo el principio de "write once, run anywhere" (escribir una vez, ejecutar en cualquier lugar).

:::tip[Conclusión]
En resumen, Java es independiente de la plataforma porque el bytecode generado se ejecuta a través de la JVM, que es específica para cada sistema operativo pero interpreta el mismo código.
:::

## ¿Cuál es la diferencia entre una clase abstracta y una interfaz?

-   Clase abstracta: Es una clase que puede tener métodos con código ya implementado y métodos abstractos (sin implementar). No se puede instanciar directamente. Sirve para heredar comportamientos comunes a varias clases.

-   Interfaz: Define solo métodos sin implementar (a menos que se use default o static en Java). Las clases que implementan una interfaz deben proporcionar el código de esos métodos. Una clase puede implementar varias interfaces, pero solo heredar de una clase abstracta.
:::tip[Conclusión]
-   Clase abstracta: Puede tener código y se hereda.
-   Interfaz: Solo define métodos (normalmente) y se implementa.
:::

### Clase Abstracta

```jsx title="Clase abstracta"
abstract class Animal(

    //Método con implementación
    public void comer(){
        System.out.println("El animal está comiendo");
    }


    //Método abstracto sin implementación
    public abstract void sonido();


)

```

```jsx title=" Clase que hereda la clase abstracta"
class Perro extends Animal(
    //Implementación del método abstracto

    @override
    public void sonido(){
        System.out.println("El perro hace guau guau");

    }

)

```

### Interfaz
```jsx title="Interfaz"
interfaz Volador(

    //Método sin implementar
    void volar();

)

```


```jsx title="Clase que implementa interfaz"
class Pajaro implements Volador(
    //Implementación del método de la interfaz

    @override
    public void Volar(){
        System.out.println("El pajaro está volando");

    }

)

```


:::tip[Diferencia]
- El Perro hereda de una clase abstracta y puede usar el método comer directamente, además de implementar su propio sonido.
- El Pajaro debe implementar todo lo que define la interfaz Volador, en este caso el método volar.

:::

### Cual es la diferenia entre final, finally y finalize?

1.	final:
-   Es una palabra clave que se usa para variables, métodos y clases.
-   Si una variable es final, no se puede cambiar después de asignarla.
-   Si un método es final, no se puede sobrescribir en las clases hijas.
-   Si una clase es final, no se puede heredar.

2.	finally:
-   Es un bloque de código que se usa con try-catch.
-   El bloque finally siempre se ejecuta, sin importar si hubo una excepción o no. Se utiliza para limpiar recursos, como cerrar archivos o conexiones.
3.	finalize:
-   Es un método que pertenece a la clase Object.
-   Se llama justo antes de que el garbage collector elimine un objeto de la memoria. Ya casi no se usa porque no es confiable ni   eficiente, y ha sido reemplazado por otros mecanismos como try-with-resources.

:::tip[Conclusión]
•	final: Inmutable o no modificable.
•	finally: Limpieza de código, siempre se ejecuta.
•	finalize: Método llamado antes de la eliminación de un objeto (DEPRECADO).
:::


## Cual es la diferencia entre stack y memoria heap?
1.	Stack (Pila):
-   Es una porción de memoria que se usa para almacenar variables locales y llamadas a funciones.
-   Los datos en el stack se almacenan y eliminan en un orden LIFO (Last In, First Out).
-   Es más rápida pero tiene un tamaño limitado.
-   Se libera automáticamente cuando el método termina.
2.	Heap (Montón):
-   Es una porción de memoria más grande que se usa para almacenar objetos creados con new.
-   Los datos en el heap no se eliminan automáticamente; se mantienen hasta que el garbage collector los limpia.
-   Es más lento que el stack, pero tiene mucho más espacio.


:::tip[Conclusión]
-   Stack: Memoria rápida y pequeña para variables locales y funciones, liberada automáticamente.
-   Heap: Memoria más grande y más lenta para objetos, gestionada por el garbage collector.
:::


## Cual es la diferencia entre un método overloading y un método overriding?

Overloading (Sobrecarga):
-   Ocurre cuando en una clase hay métodos con el mismo nombre, pero diferentes parámetros (número o tipo).

-   Se usa para que un método haga lo mismo, pero con diferentes tipos o cantidad de datos.

```jsx title="Sobrecarga"
void suma(int a , int b){ }
void suma(double a, double b){ }
```
Overriding (Sobrescritura):
-   Ocurre cuando una subclase redefine un método que ya está en la superclase.
-   Se usa para cambiar el comportamiento de un método heredado.


```jsx title="Sobrescritura"
Class Animal{
    void sonido(){ }

}


class Perro extends Animal{
    @override
    void sonido(){ }

}

```

:::tip[Conclusión]
- Overloading: Mismo nombre de método, diferentes parámetros, en la misma clase.
- Overriding: Redefinir un método de la superclase en una subclase.

:::


## Cual es la diferencia entre un método privado y uno protegido?

1.	Método privado (private):
    -   Solo puede ser accedido dentro de la misma clase en la que fue declarado.
    -   No se puede ver ni usar en otras clases, ni siquiera en las subclases.
2.	Método protegido (protected):
    -   Puede ser accedido desde la misma clase, las subclases (una clase que hereda de otra clase), y otras clases dentro del mismo paquete.
    -   Las subclases que están en otros paquetes también pueden acceder a él.


:::tip[Conclusión]
-   Privado (private): Solo accesible dentro de su propia clase.
-   Protegido (protected): Accesible desde la misma clase, subclases y clases en el mismo paquete.

En este caso, solo las clases que extiendan Animal o estén dentro del mismo paquete podrán llamar al método hacerSonido().


```jsx title=""
Class Animal{
   protected void hacerSonido(){ 
    System.out.println("Animal hace un sonido");
   }

}


class Perro extends Animal{
    @override
    protected void hacerSonido(){ 
        System.out.println("El perro dice guau guau");
    }

}

```
:::



## Que es la sobrecarga de un constructor en java?

La sobrecarga de un constructor en Java ocurre cuando una clase tiene varios constructores con el mismo nombre pero con diferentes parámetros. Esto permite crear objetos con diferentes inicializaciones utilizando el mismo nombre de constructor pero con diferentes argumentos.


## Que diferencia hay entre metodos statics, variables statics y classes statics en java?

### Variables estáticas (static):

•	Definición: Variables que pertenecen a la clase y son compartidas entre todas las instancias de esa clase.

•	Acceso: Se accede a ellas usando el nombre de la clase, sin necesidad de crear una instancia.

•	Uso: Son útiles para almacenar información o estado que debe ser compartido entre todas las instancias de la clase.

```jsx title=""
Class Contador{
   static int conteo = 0;

}

//uso
Contador.conteo++


```


### Métodos estáticos (static):
•	Definición: Métodos que pertenecen a la clase en lugar de a instancias individuales de la clase.

•	Acceso: Se pueden llamar directamente usando el nombre de la clase sin crear una instancia de la clase.

•	Uso: Son útiles para operaciones que no dependen del estado de una instancia específica.

```jsx title=""
Class Matematica{
   static int sumar(int a, int b){
    return a + b;
   }

}

//uso
int resultado = Matematica.sumar(5,3);



```


### Clases estáticas (static):
•	Definición: Solo se pueden declarar clases estáticas dentro de una clase externa. Se conocen como clases internas estáticas.

•	Acceso: No tienen acceso a las variables y métodos no estáticos de la clase externa, pero pueden acceder a las variables y métodos estáticos.

•	Uso: Se utilizan para agrupar clases que están estrechamente relacionadas con la clase externa.


```jsx title=""
Class Externa{
   static class Interna{
    void mensaje(){
          System.out.println("Clase interna estática");
    }
   }

}

//uso
Externa.Interna obj = new Externa.Interna():
obj.mensaje();

```

:::tip[Conclusión]
**Métodos estáticos:** Pertenecen a la clase, no a instancias. Se accede a ellos sin crear objetos.

**Variables estáticas:** Compartidas entre todas las instancias de la clase. Se accede a ellas sin crear objetos.

**Clases estáticas:** Clases internas que pertenecen a la clase externa. Solo pueden acceder a miembros estáticos de la clase externa.

:::


### Que es exactamente System.out.println en java?

Es una función que imprime texto en la consola y agrega un salto de línea al final.

-   System: Es una clase de Java que proporciona acceso a características del sistema, como la entrada y salida estándar.
-   out: Es un objeto estático de la clase PrintStream que representa la salida estándar (normalmente la consola). Es una variable miembro de la clase System.
-   println: Es un método de PrintStream que imprime el texto en la consola y agrega un salto de línea al final.



### ¿Qué parte de la memoria (stack o Heap) se limpia en el proceso del garbage collection?

El garbage collection (recolección de basura) en Java se encarga de limpiar la memoria en el heap.

-------------------------------------------------------------------------------------------------------------------------------------------------

## Programación Orientas a Objetos



## ¿Qué características orientadas a objetos soporta Java?

Java soporta las siguientes características orientadas a objetos:

### Encapsulamiento
- **Definición:** Agrupa datos (atributos) y métodos en una clase y controla el acceso a estos datos mediante modificadores de acceso (public, private, protected).
- **Ejemplo:** Usar métodos getter y setter para acceder a los atributos privados de una clase.

### Herencia
- **Definición:** Permite que una clase (subclase) herede atributos y métodos de otra clase (superclase), promoviendo la reutilización de código.
- **Ejemplo:** Una clase `Perro` que hereda de una clase `Animal`.

### Polimorfismo
- **Definición:** El polimorfismo te permite usar una misma interfaz o método para objetos de distintas clases.
- **Ejemplo:** Un método `hacerSonido` que puede tener diferentes implementaciones en distintas subclases.

### Abstracción
- **Definición:** Permite definir clases abstractas e interfaces para definir un conjunto de métodos que deben ser implementados por las subclases, ocultando los detalles de implementación.
- **Ejemplo:** Una clase `Figura` abstracta con métodos abstractos como `calcularArea()`.

## ¿Cuáles son los diferentes especificadores de acceso utilizados en Java?

- **public:** Accesible desde cualquier lugar.
- **protected:** Accesible desde la misma clase, subclases y el mismo paquete.
- **default:** Accesible solo dentro del mismo paquete.
- **private:** Accesible solo dentro de la misma clase.

## ¿Cuál es la diferencia entre composición y herencia?

### Herencia
- **Definición:** Una clase (subclase) hereda atributos y métodos de otra clase (superclase).
- **Relación:** Es una relación "es un" (por ejemplo, un `Perro` es un `Animal`).
- **Uso:** Se utiliza para crear una jerarquía de clases y reutilizar código.

### Composición
- **Definición:** Una clase contiene objetos de otras clases, usando sus funcionalidades.
- **Relación:** Es una relación "tiene un" (por ejemplo, un `Coche` tiene un `Motor`).
- **Uso:** Se utiliza para construir objetos complejos a partir de objetos más simples, promoviendo una mayor flexibilidad y menor acoplamiento.

### Resumen
- **Herencia:** Una clase hereda de otra (relación "es un").
- **Composición:** Una clase usa objetos de otras clases (relación "tiene un").

## ¿Cuál es el propósito de una clase abstracta?

El propósito de una clase abstracta en Java es proporcionar una base común para otras clases, permitiendo definir métodos y atributos que pueden ser compartidos por sus subclases, sin proporcionar una implementación completa. 

**Ejemplo:** `Animal` es una clase abstracta que define un método abstracto `hacerSonido()`. La clase `Perro` hereda de `Animal` y proporciona una implementación concreta del método `hacerSonido()`.

## ¿Cuáles son las diferencias entre un constructor y un método de una clase en Java?

### Propósito
- **Constructor:** Se usa para inicializar un objeto cuando se crea. Configura el estado inicial del objeto.
- **Método:** Se usa para realizar operaciones o comportamientos en el objeto después de que ha sido creado.

### Nombre
- **Constructor:** Tiene el mismo nombre que la clase. No tiene tipo de retorno, ni siquiera `void`.
- **Método:** Tiene un nombre diferente de la clase y tiene un tipo de retorno, que puede ser cualquier tipo o `void`.

### Invocación
- **Constructor:** Se invoca automáticamente cuando se crea una instancia del objeto con la palabra clave `new`.
- **Método:** Se invoca explícitamente después de que el objeto ha sido creado.

### Sobrecarga
- **Constructor:** Puede ser sobrecargado (varios constructores con diferentes parámetros) dentro de la misma clase.
- **Método:** También puede ser sobrecargado (varios métodos con el mismo nombre pero diferentes parámetros) dentro de la misma clase.

### Herencia
- **Constructor:** No se hereda. Cada clase debe definir sus propios constructores.
- **Método:** Los métodos pueden ser heredados y sobrescritos en las subclases.

## ¿Qué es el problema del diamante en Java y cómo se resuelve?

El problema del diamante es un problema en la programación orientada a objetos que ocurre cuando una clase hereda de dos clases que a su vez heredan de una clase común, creando una ambigüedad en la herencia. Este problema es más común en lenguajes que soportan múltiples herencias, pero en Java, que no permite la herencia múltiple de clases, el problema se presenta principalmente en el contexto de las interfaces.

En Java, el problema del diamante se resuelve de la siguiente manera:
1. **Interfaces:** Java permite la herencia múltiple de interfaces, por lo que una clase puede implementar múltiples interfaces. La ambigüedad se resuelve porque Java no permite implementar métodos en interfaces (solo se definen), y el compilador garantiza que la clase concreta debe proporcionar una implementación concreta para el método.
2. **Métodos Default en Interfaces:** A partir de Java 8, las interfaces pueden tener métodos con implementación (default methods). Si una clase implementa dos interfaces que proporcionan métodos default con el mismo nombre, la clase concreta debe proporcionar una implementación para resolver la ambigüedad.

## ¿Cuál es la diferencia entre las variables locales y las variables de instancia en Java?

### Ubicación y alcance
- **Variable Local:** Dentro de un método o bloque.
- **Variable de Instancia:** Dentro de la clase, fuera de métodos.

### Inicialización
- **Variable Local:** Debe ser inicializada antes de usarla.
- **Variable de Instancia:** Se inicializa automáticamente con valores predeterminados.

### Vida Útil
- **Variable Local:** Solo mientras el método o bloque está en ejecución.
- **Variable de Instancia:** Mientras el objeto exista.

## ¿Qué es una interfaz de marcador en Java?

Una interfaz de marcador en Java es una interfaz que no contiene métodos ni campos; simplemente sirve para marcar o etiquetar clases con una intención específica.

**Ejemplo:** `Serializable` es una interfaz de marcador que indica que los objetos de `MiClase` pueden ser serializados. No tiene métodos, pero el sistema de serialización de Java puede usar esta interfaz para decidir si un objeto puede ser convertido a un formato de bytes y viceversa.

-------------------------------------------------------------------------------------------------------------------------------------------------

## Estructura de Datos

## ¿Por qué las cadenas (strings) son inmutables en Java?

**Seguridad:**
- Las cadenas inmutables proporcionan seguridad adicional porque no pueden ser modificadas una vez creadas. Esto evita problemas relacionados con la alteración inesperada de datos, especialmente en contextos de concurrencia y compartición de datos.

**Eficiencia en la Memoria:**
- La inmutabilidad permite a Java usar una técnica llamada "interning" para optimizar el uso de la memoria. Esto significa que las cadenas con el mismo valor se comparten en lugar de crear múltiples instancias para el mismo valor, reduciendo así el consumo de memoria.

**Consistencia:**
- Los objetos inmutables son inherentemente seguros para usar en entornos multihilo, ya que no pueden ser alterados después de su creación, evitando problemas de sincronización.

**Hashing:**
- La inmutabilidad permite a las cadenas ser usadas de manera eficiente en estructuras de datos basadas en hash (como HashMap y HashSet), ya que su valor no cambia y, por lo tanto, el valor del hash permanece constante.

## ¿Cuál es la diferencia entre crear una cadena (String) usando new() y como un literal?


```jsx title="NEW () "
String str1 = new String("Hola");
```
- **Creación:** Crea una nueva instancia de String en el heap.
  
- **Memoria:** Se reserva una nueva ubicación en la memoria para esta instancia, incluso si ya existe una cadena con el mismo valor en el pool de cadenas. Ejemplo: Aunque el valor sea el mismo, se crea un objeto distinto.

```jsx title="Uso de Literal "
String str2 = "Hola";
```


- **Creación:** Utiliza el pool de cadenas (también conocido como "interning") para reutilizar cadenas existentes.

- **Memoria:** Si la cadena "Hola" ya está en el pool de cadenas, se reutiliza esa instancia en lugar de crear una nueva. Si no está en el pool, se añade. Ejemplo: `str2` se refiere a la misma instancia de "Hola" que podría estar en el pool de cadenas.

## ¿Qué es el marco de colecciones (Collections Framework) en Java?

El marco de colecciones en Java es un conjunto de clases e interfaces que proporcionan estructuras de datos y algoritmos para almacenar, manipular y gestionar grupos de objetos. Facilita la organización y el manejo de datos de manera eficiente y estandarizada.

**Componentes Clave:**

1. **Interfaces:**
   - **Collection:** La interfaz raíz del marco de colecciones. Define operaciones básicas como agregar, eliminar y verificar elementos.
   - **List:** Extiende Collection y representa una colección ordenada con elementos duplicados permitidos. Ejemplos: ArrayList, LinkedList.
   - **Set:** Extiende Collection y representa una colección que no permite elementos duplicados. Ejemplos: HashSet, TreeSet.
   - **Queue:** Extiende Collection y representa una colección diseñada para almacenar elementos en un orden específico. Ejemplos: LinkedList, PriorityQueue.
   - **Map:** No extiende Collection pero es parte del marco de colecciones. Representa una colección de pares clave-valor. Ejemplos: HashMap, TreeMap.

2. **Clases:**
   - **ArrayList:** Implementación de List basada en un arreglo dinámico.
   - **LinkedList:** Implementación de List basada en una lista doblemente enlazada.
   - **HashSet:** Implementación de Set basada en una tabla hash.
   - **TreeSet:** Implementación de Set basada en un árbol rojo-negro (ordenada).
   - **HashMap:** Implementación de Map basada en una tabla hash.
   - **TreeMap:** Implementación de Map basada en un árbol rojo-negro (ordenada por claves).

3. **Algoritmos:**
   - El marco de colecciones también proporciona una serie de algoritmos útiles como ordenar, buscar y manipular colecciones de datos a través de la clase Collections.

## ¿Cual es la diferencia entre ArrayList y LinkedList?

- **ArrayList:** Usa un array dinámico. Bueno para lecturas rápidas, pero más lento para cambios en el medio.
  
- **LinkedList:** Usa una lista de nodos enlazados. Bueno para cambios rápidos en los extremos, pero más lento para lecturas.

## ¿Cual es la diferencia entre un HashMap y un TreeMap?

- **Orden:**
  - **HashMap:** No mantiene ningún orden de las claves.
  - **TreeMap:** Mantiene las claves en orden natural o según un comparador proporcionado.

- **Rendimiento:**
  - **HashMap:** Acceso rápido a elementos debido a la estructura hash.
  - **TreeMap:** Acceso más lento debido a la estructura de árbol rojo-negro.

- **Estructura:**
  - **HashMap:** Basado en una tabla hash.
  - **TreeMap:** Basado en un árbol rojo-negro.

- **Permite Claves Nulas:**
  - **HashMap:** Permite una clave nula y múltiples valores nulos.
  - **TreeMap:** No permite claves nulas (lanzará NullPointerException si se intenta).

:::tip[Conclusión]
- **HashMap:** Sin orden, rápido, permite claves nulas.
- **TreeMap:** Ordenado, más lento, no permite claves nulas.
:::

## ¿Cual es la diferencia entre HashSet y un TreeSet?

- **Orden:**
  - **HashSet:** No mantiene ningún orden.
  - **TreeSet:** Mantiene el orden natural o un orden definido por un comparador.

- **Rendimiento:**
  - **HashSet:** Rápido para operaciones básicas.
  - **TreeSet:** Más lento para operaciones básicas, debido al mantenimiento del orden.

- **Estructura:**
  - **HashSet:** Basado en una tabla hash.
  - **TreeSet:** Basado en un árbol rojo-negro.

- **Uso de Memoria:**
  - **HashSet:** Menos memoria adicional.
  - **TreeSet:** Más memoria debido a la estructura de árbol.

:::tip[Conclusión]
- **HashSet:** Sin orden, rápido, menos memoria.
- **TreeSet:** Ordenado, más lento, más memoria.
:::

## ¿Cual es la diferencia entre un Iterator y un ListIterator?

**Iterator:**
- **Dirección de Iteración:** Unidireccional (hacia adelante).
- **Métodos de Modificación:** Solo permite eliminar elementos (remove()).
- **Posición de Iteración:** No proporciona acceso a la posición actual.
- **Uso:** Compatible con cualquier colección que implemente la interfaz Collection (como HashSet, TreeSet).

**ListIterator:**
- **Dirección de Iteración:** Bidireccional (hacia adelante y hacia atrás).
- **Métodos de Modificación:** Permite agregar (add()), eliminar (remove()), y reemplazar (set()) elementos.
- **Posición de Iteración:** Proporciona métodos para conocer la posición actual (nextIndex(), previousIndex()).
- **Uso:** Exclusivo para listas que implementan List (como ArrayList, LinkedList).

## ¿Cual es el propósito de la interfaz Comparable?

La interfaz Comparable en Java se utiliza para definir un orden natural para los objetos de una clase. Permite comparar objetos de la misma clase, lo que es esencial para ordenar y clasificar.

Una clase que implemente Comparable debe sobrescribir el método compareTo para definir cómo se comparan los objetos de esa clase.

## ¿Cuál es el propósito del paquete java.util.concurrent?

El propósito del paquete java.util.concurrent es proporcionar herramientas para trabajar con programación concurrente. Facilita la creación y gestión de múltiples hilos y tareas, además de manejar problemas comunes en la programación concurrente.


-------------------------------------------------------------------------------------------------------------------------------------------------

## Exception Handling
## ¿Qué es una excepción?
Una excepción es un evento que ocurre durante la ejecución de un programa que interrumpe el flujo normal de instrucciones. Las excepciones se utilizan para manejar errores o condiciones especiales que surgen durante la ejecución del programa.  
Las excepciones se manejan utilizando bloques `try`, `catch` y `finally`:  
- **try**: Contiene el código que puede lanzar una excepción.  
- **catch**: Captura y maneja la excepción si ocurre.  
- **finally**: Opcional, se ejecuta siempre, tanto si ocurre una excepción como si no.  

## ¿Cuál es la diferencia entre excepciones checked y unchecked?
- **Excepciones Checked**:  
  - Deben ser manejadas explícitamente.  
  - Ejemplos: `IOException`, `SQLException`.  
- **Excepciones Unchecked**:  
  - No es necesario manejarlas explícitamente.  
  - Ejemplos: `NullPointerException`, `ArithmeticException`.  

## ¿Cuál es la diferencia entre throw y throws?
`throw` y `throws` son dos conceptos relacionados con el manejo de excepciones.  

- **throw**:  
  - **Uso**: Para lanzar una excepción dentro de un método.  
  - **Sintaxis**: `throw new ExceptionType("Mensaje");`  
- **throws**:  
  - **Uso**: Para declarar que un método puede lanzar ciertas excepciones.  
  - **Sintaxis**: `public void metodo() throws ExceptionType { ... }`  
En resumen, `throw` se usa para generar una excepción, mientras que `throws` se usa para declarar que un método puede lanzar una excepción.  

## ¿Cuál es la clase base de las excepciones?
- **Throwable**: La clase base de todas las excepciones.  
- **Error**: Problemas graves del entorno de ejecución.  
- **Exception**: Problemas que las aplicaciones pueden manejar.  
  - **Checked Exceptions**: Deben ser manejadas explícitamente.  
  - **Unchecked Exceptions**: Opcionalmente manejadas, derivadas de `RuntimeException`.  

## ¿Qué es Java EE (Enterprise Edition)?
Es una plataforma para desarrollar aplicaciones empresariales en Java. Proporciona una serie de especificaciones y APIs (interfaces de programación de aplicaciones) para construir aplicaciones distribuidas y robustas, principalmente en el entorno de servidores.  
**Especificaciones y APIs**:  
- **Servlets**: Para manejar solicitudes y respuestas en aplicaciones web.  
- **JSP (JavaServer Pages)**: Para crear páginas web dinámicas.  
- **EJB (Enterprise JavaBeans)**: Para crear componentes de negocio reutilizables y escalables.  
- **JPA (Java Persistence API)**: Para manejar la persistencia de datos en bases de datos.  
- **JMS (Java Message Service)**: Para la comunicación asíncrona entre componentes a través de mensajes.  
- **JAX-RS**: Para crear servicios web RESTful.  
- **JAX-WS**: Para crear servicios web basados en SOAP.  

## ¿Cuál es la diferencia entre un Servlet y un JSP?
- **Servlet**: Un servlet es una clase Java que se ejecuta en un servidor web para manejar solicitudes y generar respuestas.  
- **JSP (Java Server Page)**: JSP es una tecnología para crear contenido web dinámico. Permite insertar código Java directamente en archivos HTML para generar contenido dinámico.  

## ¿Cuál es el propósito de JPA (Java Persistence API)?
El propósito principal es simplificar el manejo de datos almacenados en bases de datos relacionales. JPA facilita el manejo de datos en aplicaciones Java al proporcionar un marco para mapear objetos Java a tablas de bases de datos, gestionar el ciclo de vida de las entidades, realizar consultas y manejar transacciones, todo ello utilizando un enfoque orientado a objetos.  

## ¿Qué es una clase?
Define un tipo de objeto especificando sus atributos (variables) y métodos (funciones) que pueden ser utilizados para interactuar con esos objetos.  

## ¿Qué es un objeto?
Un objeto en Java es una instancia de una clase que tiene un estado definido por sus atributos y un comportamiento definido por sus métodos. Los objetos permiten modelar entidades concretas en un programa y manipular sus datos y comportamientos de manera organizada.  

## ¿Qué es un constructor?
Un método que se usa para inicializar objetos cuando se crean. Se llama automáticamente cuando se instancia un objeto de la clase.  

<br/><br/>

## Cierre del Tutorial 🎉
Hemos llegado al final de este tutorial sobre el manejo de excepciones en Java. En este recorrido, exploramos diversos aspectos esenciales, desde la comprensión de qué son las excepciones hasta su correcta gestión en nuestras aplicaciones. 💻✨

A lo largo del tutorial, hemos abordado conceptos fundamentales como las diferencias entre excepciones checked y unchecked, el uso de `throw` y `throws`, y la estructura base de las excepciones en Java. También hemos aprendido sobre la importancia de Java EE, la diferencia entre Servlets y JSP, y cómo JPA simplifica el manejo de datos en aplicaciones empresariales. 📊📦

Ahora es momento de aplicar lo aprendido en tus propios proyectos. ¡Adelante! 🚀