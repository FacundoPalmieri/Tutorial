---
sidebar_position: 2
---

# 2 - Collection

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



#### Como trabaja internamente los ArrayList

Los ArrayList almacenar los elementos de manera contigua, es decir, uno al lado del otro. 

- Supongamos que instanciamos una lista de Personas con 5 elementos, podría graficarse algo similar a esto:

![array1](/img/arraylist1.png)



-  En caso que quisiera agregar un 6° elemento, no habría forma de almacenarlo de manera contigua, por tal, se intentará desplazar la lista a otro bloque de memoria. Podria verse algo así:

![array2](/img/arraylist2.png)


:::tip
**- Acceso rápido:** El acceso a los elementos por índice es rápido, ya que internamente usa un array.

**- Inserción y eliminación lenta en el medio:** Insertar o eliminar elementos *en el medio* de un ArrayList es más lento porque los datos se almacenan uno al lado del otro, por tal si no tiene espacio para almacenar de manera contigua requiere desplazar los elementos a otro bloque de memoria. En el caso de la eliminación, debe "reacomodar" los elementos para que vuelvan a quedar contiguos.

**- Elminación rápida en los extremos:** Solo en los extremos de la lista, es rápido ya que no debe desplazar el resto de las celdas para que quedan contiguas.

**- Lectura:** Es rápido para leer el contenido ya que se encuentran de manera contigua.

**- Duplicados permitidos:** Permite elementos duplicados y mantiene el orden de inserción.

**- Uso común:** Se utiliza cuando necesitas acceder frecuentemente a los elementos por índice o almacenar datos ordenados.
:::
```jsx title="Inicializo con valores en el contrsuctor"
List<String> names = new ArrayList<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));


```


#### Sintaxis

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
List<String> names = new ArrayList<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));


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

<br/><br/>

### LinkedList
LinkedList es otra implementación de la interfaz List, pero basada en una lista enlazada.

#### Como trabaja internamente las LinkedList

A diferencia de los ArrayList, los elementos no estarán de manera contigua, sino que cada elemento mantendrá una referencia del elemento siguiente.
- Supongamos que instanciamos una lista de Personas con 3 elementos, en este caso a diferencia del anterior, 

![linked1](/img/linkedlist1.png)


**Inserción y eliminación rápida en los extremos:** Las operaciones de inserción y eliminación son más rápidas porque solo cambian referencias entre los elementos para manetener la cadena, sin necesidad de desplazar elementos.
**Acceso más lento:** El acceso a los elementos por índice es más lento, ya que se necesita recorrer la lista desde el principio o el final, porque no están de manera contigua.
**Lectura:**: Es lento porque los elementos no están de manera contigua.
**Duplicados permitidos:** También permite elementos duplicados y mantiene el orden de inserción.
**Uso común:** Se usa cuando se realizan muchas inserciones/eliminaciones en los extremos o se necesita una lista con orden de inserción, pero el acceso rápido por índice no es importante.

#### Sintaxis

```jsx title="Inicializo con valores en el contrsuctor"
  List<String> names = new LinkedList<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));

```

```jsx title=""
List<String> lista = new LinkedList<>();
lista.add("A");
lista.add("B");
lista.add("C");

```

#### Formas de recorrer la lista
Si deseamos recorrer toda la lista debemos usar solo un ForEach. 
```jsx title="ForEach"
List<String> names = new LinkedList<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));

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

----------------------------------------------------------------------------------------------------------------------------------------


## SET
- Las colecciones tipo SET no admite datos duplicados dentro de la listas. 
- Estas colecciones tampoco manejan indices, es decir que a medida que se agregan elementos no mantiene el orden de inserción.
- El tamaño de un Set es dinámico, lo que significa que puede cambiar con el tiempo.


### Tipos de Listas

- HashSet.
- LinkedHashSet.
- TreeSet.
- EnumSet.


![set](/img/set.png)



### HashSet
HashSet es una implementación de la interfaz Set, que representa una colección de elementos únicos, es decir que no admite duplicados y no tiene orden.

#### Como trabaja internamente los HashSet
- **Implementación de hashCode y equals en la clase:** Para que HashSet pueda manejar los elementos correctamente, la clase de la cual estemos construyendo la lista, debe implementar los métodos hashCode y equals. Estos métodos ayudan a determinar si dos objetos son iguales y, por lo tanto, permiten que el HashSet evite duplicados.

- **Proceso de agregar un elemento al HashSet:** Cuando se agrega un elemento al HashSet, se calcula su código hash (usando el método hashCode del objeto).
El código hash determina en qué "bucket" o "cubo" de memoria se almacenará el objeto. Este es un contenedor lógico donde el HashSet almacena elementos con códigos hash similares.

```jsx title="Implementación de hashCode y equals"
import java.util.Objects;

class Persona {
    private String nombre;
    private int edad;

    //Constructores
    // Getters and Setters.

    // Sobrescribimos hashCode y equals para que dos personas sean iguales si tienen el mismo nombre y edad
    @Override
    //  Genera un código hash basado en los atributos nombre y edad
    public int hashCode() {
        return Objects.hash(nombre, edad);
    }

 @Override
public boolean equals(Object obj) {
    // 1. Comprobación de referencia: Si ambos objetos apuntan al mismo lugar en memoria,
    // entonces son el mismo objeto. Retorna true inmediatamente, evitando comparaciones innecesarias.
    if (this == obj) return true;

    // 2. Comprobación de tipo y nulidad: Si `obj` es nulo o su clase es diferente de la clase `Persona`,
    // no son equivalentes, por lo que retorna false.
    if (obj == null || getClass() != obj.getClass()) return false;

    // 3. Conversión de tipo (casting): Convertimos `obj` al tipo `Persona`, porque hemos
    // confirmado que es seguro hacerlo después de las verificaciones anteriores.
    Persona persona = (Persona) obj;

    // 4. Comparación de atributos relevantes: Comparamos los atributos que definen la igualdad.
    // Retorna true solo si los valores de `edad` y `nombre` son iguales en ambos objetos.
    // Para `nombre`, usamos `Objects.equals()` para manejar el caso en que `nombre` sea null en alguno de los objetos.
    return edad == persona.edad && Objects.equals(nombre, persona.nombre);
}


    @Override
    public String toString() {
        return nombre + " (" + edad + " años)";
    }
}
```

![hash1](/img/hash1.png)


- **Verificación de duplicados usando equals:** Si hay más de un elemento en el mismo bucket (lo que ocurre cuando varios objetos tienen el mismo código hash), el HashSet usa el método equals para verificar si el nuevo elemento es igual a algún elemento existente en ese bucket.
Si equals determina que el nuevo elemento es igual a un elemento existente, el HashSet no lo agregará. De lo contrario, se almacenará en el bucket correspondiente.



:::tip
- Sin orden de inserción: No mantiene el orden de los elementos, aunque sí existen otras variantes de Set que pueden hacerlo, como LinkedHashSet o TreeSet.

- No permite duplicados: Cada elemento es único; si intentas agregar un elemento ya existente, se ignorará.

- Acceso rápido: Tiene un rendimiento de acceso, inserción y eliminación promedio rápido (O(1)) debido a la implementación basada en un hash.

- Uso común: Se usa cuando quieres una colección de elementos únicos y el orden no importa.
:::

#### Sintaxis


```jsx title="Inicializo con valores en el contrsuctor"
Set<String> names = new HashSet<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));


```

```jsx title=""
Set<String> hashSet = new HashSet<>();
hashSet.add("X");
hashSet.add("Y");
hashSet.add("Z");

```

#### Formas de recorrer la lista
Si deseamos recorrer toda la lista debemos usar solo un ForEach. 
```jsx title="ForEach"
Set<String> names = new HashSet<>(Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla"));


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


### TreeSet
TreeSet es una implementación de la interfaz Set en Java, basada en una estructura de árbol rojo-negro. Esta lista **garantiza el orden de los elementos.**



#### Como trabaja internamente los TreeSet

- **Implementación interfaz Comparable** : La clase de los elementos almacenados en el TreeSet debe implementar la interfaz Comparable y su método compareTo, o bien el TreeSet debe recibir un Comparator en su constructor. Esto permite definir el criterio de ordenamiento y es crucial para mantener el orden dentro del TreeSet.

:::tip
**- Ordenado naturalmente:** Mantiene los elementos en orden ascendente de forma predeterminada, aunque también permite usar un comparador personalizado para definir un orden específico.
**- Sin duplicados:** Al igual que otros tipos de Set, TreeSet no permite elementos duplicados.
**- Acceso más lento:** La mayoría de las operaciones (inserción, eliminación y acceso) tienen un rendimiento de O(log n) debido a la estructura de árbol.
**- Métodos adicionales:** TreeSet proporciona métodos como first(), last(), headSet(), y tailSet() para obtener rangos o elementos específicos, lo que es útil en aplicaciones donde se necesita trabajar con subconjuntos ordenados.
**- Uso común:** Se usa cuando necesitas un conjunto de elementos únicos y ordenados, especialmente cuando necesitas operaciones de rango, como obtener todos los elementos mayores o menores que un valor específico.
:::
```jsx title=""
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(10);
treeSet.add(5);
treeSet.add(20);
treeSet.add(1);

System.out.println(treeSet); // Salida: [1, 5, 10, 20] (orden ascendente)

```


#### Ejemplo
Crear la clase Persona e implementar Comparable
Primero, definimos la clase Persona con atributos como nombre y edad. Implementamos Comparable para que el TreeSet pueda ordenar los objetos Persona de forma natural según la edad.
```jsx title=""
class Persona implements Comparable<Persona> {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    // Implementación de compareTo para ordenar por edad
    @Override
    public int compareTo(Persona otraPersona) {
        return Integer.compare(this.edad, otraPersona.getEdad());
    }

    @Override
    public String toString() {
        return nombre + " (" + edad + " años)";
    }
}


```
En el método compareTo, usamos Integer.compare para comparar las edades, de modo que:

Si this.edad < otraPersona.getEdad(), devuelve un valor negativo.
Si son iguales, devuelve 0.
Si this.edad > otraPersona.getEdad(), devuelve un valor positivo.

Paso 2: Crear e Instanciar el TreeSet
Ahora creamos un TreeSet que almacenará objetos de tipo Persona. Gracias a la implementación de compareTo en Persona, el TreeSet ordenará automáticamente las personas por edad.

```jsx title=""
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<Persona> listaPersonas = new TreeSet<>();

        // Agregar elementos al TreeSet
        listaPersonas.add(new Persona("Ana", 30));
        listaPersonas.add(new Persona("Luis", 25));
        listaPersonas.add(new Persona("Maria", 35));
        listaPersonas.add(new Persona("Pedro", 20));

        // Imprimir la lista ordenada por edad
        System.out.println("Personas ordenadas por edad:");
        for (Persona persona : listaPersonas) {
            System.out.println(persona);
        }
    }
}

```

```jsx title="Salida por pantalla"
Personas ordenadas por edad:
Pedro (20 años)
Luis (25 años)
Ana (30 años)
Maria (35 años)
```

![colecction](/img/collection.png)
