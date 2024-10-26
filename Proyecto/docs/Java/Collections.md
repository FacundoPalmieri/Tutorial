---
sidebar_position: 9
---

# 9 - Collection

 Es una interfaz base del marco de colecciones que define las operaciones básicas para manipular grupos de objetos (también llamados "elementos"). Forma parte del paquete java.util y proporciona una arquitectura estándar para almacenar y procesar objetos de manera uniforme, ya sea en listas, conjuntos o colas.

Las colecciones son estructuras similares a los arreglos pero con la principal característica de que son dinámicos, es decir que su tamaño y cantidad de elementos puede variar.

### Tipos de Collection
- LIST (FIFO)
- SET
- QUEUE
- MAP

![collection0](/img/collection0.png)

----------------------------------------------------------------------------------------------------------------------------------------


## LIST

-  Las listas son un conjunto de elementos relacionados entre si que tienen un determinado orden.
-  El orden responde a FIFO (First In First out) - Primero en entrar a la lista primero en mostrarse.
-  Su tamaño es dinámico, es decir que puede cambiar con el tiempo.

### Tipos de Listas

- ArrayLists
- LinkedLists
- Stack



### ArrayList
ArrayList es una implementación de la interfaz List basada en un array dinámico, lo cual significa que puede crecer o reducirse automáticamente cuando añadimos o eliminamos elementos. 

**Acceso rápido:** El acceso a los elementos por índice es rápido (O(1)), ya que internamente usa un array.
**Inserción y eliminación lenta en el medio:** Insertar o eliminar elementos en el medio de un ArrayList es más lento (O(n)) porque requiere desplazar los elementos.
**Duplicados permitidos:** Permite elementos duplicados y mantiene el orden de inserción.
**Uso común:** Se utiliza cuando necesitas acceder frecuentemente a los elementos por índice o almacenar datos ordenados.


### Como trabaja internamente los ArrayList

```jsx title="Inicializo con valores en el contrsuctor"
  List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

```

```jsx title="Agrego valores"
List<String> names = new ArrayList<>();
arrayList.add("Ana");
arrayList.add("Luis");
arrayList.add("Maria");
// etc..

```

#### Formas de recorrer la lista
Si deseamos recorrer toda la lista podemos usar un ForEach
```jsx title="ForEach"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

  for (String name : names) {
            System.out.println(name);
        }

```
```jsx title="Salida por pantalla"
Ana
Luis
Maria
Pedro
Juan
Carla
```

También podemos acceder directamente a un elemento si conocemos el indice.

```jsx title="Por indice"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

String name = names.get(1);
System.out.println(name);

```

```jsx title="Salida por pantalla"
Luis
```


### LinkedList
LinkedList es otra implementación de la interfaz List, pero basada en una lista doblemente enlazada.

**Inserción y eliminación rápida en los extremos:** Las operaciones de inserción y eliminación son más rápidas (O(1)) en los extremos (inicio o final) porque solo cambian referencias, sin necesidad de desplazar elementos.
**Acceso más lento:** El acceso a los elementos por índice es más lento (O(n)), ya que se necesita recorrer la lista desde el principio o el final.
**Duplicados permitidos:** También permite elementos duplicados y mantiene el orden de inserción.
**Uso común:** Se usa cuando se realizan muchas inserciones/eliminaciones en los extremos o se necesita una lista con orden de inserción, pero el acceso rápido por índice no es importante.

```jsx title=""
List<String> linkedList = new LinkedList<>();
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");

```

## HashSet
HashSet es una implementación de la interfaz Set, que representa una colección de elementos únicos y no permite duplicados.

Sin orden de inserción: No mantiene el orden de los elementos, aunque sí existen otras variantes de Set que pueden hacerlo, como LinkedHashSet o TreeSet.
No permite duplicados: Cada elemento es único; si intentas agregar un elemento ya existente, se ignorará.
Acceso rápido: Tiene un rendimiento de acceso, inserción y eliminación promedio rápido (O(1)) debido a la implementación basada en un hash.
Uso común: Se usa cuando quieres una colección de elementos únicos y el orden no importa.

```jsx title=""
Set<String> hashSet = new HashSet<>();
hashSet.add("X");
hashSet.add("Y");
hashSet.add("Z");

```


## TreeSet
TreeSet es una implementación de la interfaz Set en Java, basada en una estructura de árbol rojo-negro (red-black tree). Es parte de la biblioteca de colecciones en Java y garantiza el orden de los elementos.

Ordenado naturalmente: Mantiene los elementos en orden ascendente de forma predeterminada, aunque también permite usar un comparador personalizado para definir un orden específico.
Sin duplicados: Al igual que otros tipos de Set, TreeSet no permite elementos duplicados.
Acceso más lento: La mayoría de las operaciones (inserción, eliminación y acceso) tienen un rendimiento de O(log n) debido a la estructura de árbol.
Métodos adicionales: TreeSet proporciona métodos como first(), last(), headSet(), y tailSet() para obtener rangos o elementos específicos, lo que es útil en aplicaciones donde se necesita trabajar con subconjuntos ordenados.
Uso común: Se usa cuando necesitas un conjunto de elementos únicos y ordenados, especialmente cuando necesitas operaciones de rango, como obtener todos los elementos mayores o menores que un valor específico.

```jsx title=""
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(10);
treeSet.add(5);
treeSet.add(20);
treeSet.add(1);

System.out.println(treeSet); // Salida: [1, 5, 10, 20] (orden ascendente)

```


![colecction](/img/collection.png)
