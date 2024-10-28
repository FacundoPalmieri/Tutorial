---
sidebar_position: 3
---

# 3 - Tuplas

## Introducción a las Tuplas en Java con Apache Commons Lang
En programación, una tupla es una estructura de datos que permite almacenar un conjunto de elementos heterogéneos (es decir, de diferentes tipos) en una sola unidad. A diferencia de los arrays o listas, donde todos los elementos suelen ser del mismo tipo, las tuplas pueden contener una combinación de tipos de datos, como un número, una cadena y un valor booleano, todo en una misma estructura.

Java, a diferencia de otros lenguajes, **no tiene una implementación nativa de tuplas**. Sin embargo, la biblioteca Apache Commons Lang proporciona clases como Pair y Triple para emular esta funcionalidad, ofreciendo una manera rápida y conveniente de agrupar datos relacionados sin necesidad de definir una clase específica.

## Por Qué Usar Tuplas en Java
Las tuplas son especialmente útiles en Java cuando:

- Necesitas retornar múltiples valores desde un método sin querer definir una clase específica para ello.

- Quieres agrupar datos temporales de diferentes tipos, sin necesidad de una estructura compleja.

- Estás trabajando en métodos internos, validaciones o transformaciones de datos en una lógica de negocio o un servicio.

### ¿Ques es Apache Commons Lang?
Apache Commons Lang es una biblioteca de utilidades para Java que ofrece una amplia variedad de funciones para facilitar el trabajo con tipos y operaciones comunes en el lenguaje. Forma parte del proyecto Apache Commons, un conjunto de bibliotecas de código abierto que proporciona soluciones para diversas necesidades de desarrollo.

### ¿Implementación de la librería?
1 - Ingresaremos al repositorio de Maven : https://mvnrepository.com/
2- En la barra de buscador, ingresaremos la palabra "Commons" y haremos Click.

![commons1](/img/commons1.png)

3- Seleccionaremos la última versión

![commons2](/img/commons2.png)

4 - Agregamos la dependencia en el archivo POM.xml

![commons3](/img/commons3.png)


```jsx title="Dependencia"
<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-lang3 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.17.0</version>
</dependency>

```

### Tuplas en Apache Commons Lang: Pair y Triple
En Apache Commons Lang, las clases Pair y Triple son las implementaciones más comunes para representar tuplas en Java. Estas clases permiten almacenar dos o tres elementos respectivamente y son inmutables, lo que garantiza que sus valores no se modifiquen accidentalmente después de ser creados.



### Implementación de la clase Pair
La clase Pair permite agrupar dos valores relacionados en una sola estructura de datos, facilitando la devolución de "pares" de datos desde métodos sin tener que definir una clase específica. Esta clase es particularmente útil en Java cuando necesitas retornar múltiples valores de diferentes tipos, pero no deseas crear un nuevo objeto para ello.



```jsx title="Retornar 2 valores"
public class UserInfo {

    public Pair<String, Integer> ejemploTuplas() {
        String name = "Facundo";
        int age = 32;
        return Pair.of(name, age); // Left, Right
    }

```
- Definición del Par: La clase Pair se define con tipos String e Integer, lo que significa que el primer valor será una cadena de texto y el segundo un número entero.

- Uso de Pair.of(): Para crear un Pair, se utiliza el método estático Pair.of(), que toma los dos valores (nombre y edad) y retorna una instancia de Pair.


```jsx title="Llamdo a función y recuperación de datos"
  UserInfo userInfo = new UserInfo();
        Pair<String, Integer> user = userInfo.ejemploTuplas();
        
        System.out.println("Name: " + user.getLeft());  // Salida: Name: Facundo
        System.out.println("Age: " + user.getRight());  // Salida: Age: 32
    }

```

#### Casos de uso
**Retorno de Múltiples Valores:** En métodos que necesitan devolver dos valores relacionados, como el resultado de una validación (booleano) junto con un mensaje.
**Agrupación de Datos Temporales:** Cuando necesitas combinar datos temporalmente, como una clave-valor para un procesamiento interno.
Uso Interno en Servicios: Para devolver resultados de validaciones o configuraciones rápidas en servicios de negocio.

:::tip[Ventajas]
- Código Conciso: Evita la necesidad de crear clases específicas para pequeños retornos de datos.

- Generalización: Pair es genérico, lo que permite trabajar con cualquier tipo de datos.

- Flexibilidad: Útil para operaciones temporales o métodos que no requieren una estructura de datos completa.
:::

### Implementación de la clase Triple
La clase Triple  permite agrupar tres valores en una sola estructura de datos, ideal para escenarios donde es necesario retornar o manipular tres elementos relacionados sin crear una clase específica. Al igual que Pair, Triple es genérica y permite definir los tipos de cada uno de sus elementos al instanciarla.

Tiene tres propiedades principales:

- Left (izquierdo): representa el primer valor.
- Middle (medio): representa el segundo valor.
- Right (derecho): representa el tercer valor.


```jsx title="Retornar 3 valores"
  public Triple<String, Integer, String> getUserInfo() {
        String name = "Jane Doe";
        int age = 28;
        String country = "Argentina";
        return Triple.of(name, age, country); // Left, Middle, Right.
    }
```

- Definición del Triple: En este caso, Triple se define con tipos String, Integer y String, por lo que el primer y tercer valor serán cadenas de texto, y el segundo será un número entero.

- Uso de Triple.of(): Para crear una instancia de Triple, se usa el método estático Triple.of(), que recibe los tres valores (nombre, edad y país).


```jsx title="Llamdo a función y recuperación de datos"
   UserInfo userInfo = new UserInfo();
        Triple<String, Integer, String> user = userInfo.getUserInfo();
        
        System.out.println("Name: " + user.getLeft());      // Salida: Name: Facundo.
        System.out.println("Age: " + user.getMiddle());     // Salida: Age: 32.
        System.out.println("Country: " + user.getRight());  // Salida: Country: Argentina.
```

- Acceso a los Valores: getLeft(), getMiddle() y getRight() permiten acceder a los valores izquierdo, medio y derecho, respectivamen

#### Casos de uso
**Retorno de Tres Valores:** Útil en métodos que necesitan devolver tres datos relacionados, como detalles de un usuario (nombre, edad, ubicación), o resultados de una operación compleja.

**Agrupación de Datos Temporales:** Puedes agrupar datos que se usan en una misma operación, como valores de configuración, credenciales temporales, o resultados de validación.

**Uso Interno en Servicios:** Para devolver datos relacionados de manera sencilla y rápida en servicios de negocio o en lógica intermedia.

:::tip[Ventajas]
**Menor Sobrecarga:** Evita crear una clase específica para almacenar tres valores que solo se usarán temporalmente.

**Flexibilidad y Generalidad:** Triple es genérico y permite almacenar cualquier combinación de tipos de datos.

**Facilita la Lectura del Código:** Útil en operaciones donde los tres valores representan una entidad lógica, permitiendo claridad en el código sin complejidad adicional
:::