---
sidebar_position: 3
---

# 3 - Estructura de datos.

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
