---
sidebar_position: 2
---

# 2- POO

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
