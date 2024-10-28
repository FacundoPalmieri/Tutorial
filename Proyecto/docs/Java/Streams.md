---
sidebar_position: 6
---

# 6 - Streams

Los Streams en Java son una abstracción introducida en Java 8 para procesar secuencias de datos de forma declarativa y funcional. Permiten realizar operaciones complejas de procesamiento de datos, como el filtrado, la transformación y la agregación, de manera sencilla y eficiente. Un Stream representa una secuencia de elementos y proporciona un conjunto de operaciones que pueden ser aplicadas a esta secuencia para producir un resultado.

### Estructura básica de un Stream
La estructura básica de un Stream en Java sigue generalmente este patrón:

1. Fuente: Definir la fuente de datos (colección, array, archivo, etc.).
2. Operaciones intermedias: Transformaciones que aplican operaciones sobre los elementos sin producir resultados finales (como filter, map, sorted).
3. Operación terminal: Produce el resultado final y finaliza el procesamiento (como collect, forEach, reduce).

:::tip
Los Streams en Java son ideales para operaciones de procesamiento de datos al permitir un enfoque más funcional y conciso que los bucles tradicionales, manteniendo el código más legible y eficiente.
:::



```jsx title="Ejemplo básico"
List<String> nombres = Arrays.asList("Ana", "Juan", "Amanda", "Carlos", "Andrés");

nombres.stream()                                 //Fuente: lista de nombres
       .filter(nombre -> nombre.startsWith("A")) // Filtrar nombres que empiezan con "A"
       .map(String::toUpperCase)                 // Convertir a mayúsculas
       .forEach(System.out::println);            // Imprimir cada nombre en la salida

// Salida:
// ANA
// AMANDA
// ANDRÉS


```

<br/><br/>

:::info[Atención]
**En este apartado pondremos en práctica las funciones lambdas vistas en el módulo anterior.**
:::


### Puesta en práctica
Partiremos de una lista de Nombres sobre la cual iremos poniendo en práctica cada uno de los operadores.

```jsx title=""
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

```


### 💥 forEach(): Aplica una acción a cada elemento.

Este es un operador FINAL.Recibe un "Consumer" y aplica una acción a cada elemento.

:::tip[Consumer]
Recibe un valor y no retorna nada.
:::

![for](/img/foreach.png)

```jsx title="Estructura"
variable.stream()
        .forEach((paramRecibido) - > {
          //Lógica - Ej: Consulta a BD
        })
```


Ahora, aplicando las estructuras de las funciones lambdas dentro de estos operadores, resolveremos:

```jsx title="Imprimir nombres "
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

 names.stream()
      .forEach(name -> {
       System.out.println("Nombre: " + name);
       });

```
```jsx title="Salida por pantalla"
Nombre: Ana
Nombre: Luis
Nombre: Maria
Nombre: Pedro
Nombre: Juan
Nombre: Carla
```



```jsx title=" Forma reducida. "
 names.stream()
      .forEach(name -> System.out.println("Nombre: " + name));
```



--------------------------------------------------------------------------------------
### 🎯 filter(): Filtra los elementos que cumplen una condición.

Este es un operador ES INTERMEDIO y recibe un "Predicate".

:::tip[Predicate]
Recibe un valor y devuelve un booleano
:::

![filter](/img/filter.png)

```jsx title="Estructura"
variable.stream()
        .filter((paramRecibido) - > {
             //logica de filtrado.
        })
```

Ahora, aplicando las estructuras de las funciones lambdas dentro de estos operadores, resolveremos:



```jsx title=" Filtrar por nombre que tengan 4 caracteres "
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

  names.stream()
              .filter((name) -> {
                   return name.length() > 4;
                })
                .forEach((name) ->{
                    System.out.println(name);
                });
```
```jsx title="Salida por pantalla"
Maria
Pedro
Carla
```


Ahora, como ya sabemos que si el cuerpo de la función tiene una linea, puede reducirse, finalmente quedaría: 

```jsx title="Forma reducida."
names.stream()
              .filter(name -> name.length() > 4)
              .forEach(System.out::println);
```



--------------------------------------------------------------------------------------
### 🚀 map(): Transforma los elementos aplicando una función.

Este es un operador Es INTERMEDIO, recibe un function 
:::tip[function]
Recibe un valor y retorna un resultado
:::
![map](/img/map.png)

```jsx title="Estructura"
  variable.stream()
              .map((paramRecibido) -> {
                    //Logica
              })
                
              //El MAP al ser un operador NO final se debe continuar hasta un operador FINAL
              .forEach(System.out::println);
```


Ahora, aplicando las estructuras de las funciones lambdas dentro de estos operadores, resolveremos:

```jsx title=" Pasar todos los nombres a Mayúsculas. "
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");
   names.stream()
              .map((name) -> {
                    return name.toUpperCase();
              })
              .forEach(System.out::println);

```
```jsx title="Salida por pantalla"
ANA
LUIS
MARIA
PEDRO
JUAN
CARLA
```

```jsx title="Forma reducida."
names.stream()
                .map(name -> name.toUpperCase())
                .forEach(System.out::println);
```



Ahora como el parametro que se recibe(name), se está usando también en el cuerpo de la función, puede reducirse aún mas poniendo la clase del método con el que se está trabajando(toUpperCase) y el método como tal. 

```jsx title="Forma reducida."
names.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println)
```





--------------------------------------------------------------------------------------
### 📊 sorted(): Ordena los elementos del stream.

Este es un operador es INTERMEDIO, tiene la opción de recibir un Comparator que no usaremos en este ejemplo.  
:::tip[Comparator]
Se pueden crear filtros personalizados de ordenamiento.
:::

![sorted](/img/sorted.png)

```jsx title="Ordenará alfabeticamente"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

names.stream()
       .sorted()
       .forEach(System.out::println);

```
```jsx title="Salida por pantalla"
Ana
Carla
Juan
Luis
Maria
Pedro
```



--------------------------------------------------------------------------------------
### 🔗 reduce(): Combina todos los elementos en un solo valor.

Este operador recibe un BinaryOperator.
:::tip[BinaryOperator]
Recibe dos valores *del mismo tipo* y retorna un *valor del mismo tipo.*
:::

![reduce](/img/reduce.png)

```jsx title="Estructura"
String result = variable.stream()
                        .reduce("",(param1, parama2) ->{
                            return param1 + " " + parama2;
                         });

System.out.println(result);

```

```jsx title="Concatenar la lista de nombre"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

String result = names.stream()
                     .reduce("Resultado: ",(a, b) ->{
                         return a + " " + b;
                     });

System.out.println(result);
```

```jsx title="Salida por pantalla"
Resultado:  Ana Luis Maria Pedro Juan Carla
```



```jsx title="Forma reducida."
  String result = names.stream()
                        .reduce("Resultado", (a,b) -> a + " " + b);
```

--------------------------------------------------------------------------------------
### 📦 collect(): Recoge los elementos en una colección.

Este operador es FINAL y recibe un Collector.

![collect](/img/collect.png)

```jsx title="Estructura"
List<String> NuevaLista = listaActual.stream()
                                .//Operador intermedio
                                .collect(Collectors.toList());

```



Como este operador permite recolectar elementos en una nueva colección, aplicaremos operadores vistos anteriormente para realizar operaciones y a partir de allí hacer una nueva lista.

```jsx title="Ejemplo"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

List<String> namesStartingWithA = names.stream()
                                       .filter(name -> name.startsWith("A")) //Filtramos por nombres que comienzan con "A"
                                       .collect(Collectors.toList());        //Armamos la nueva lista

        //Llamado a la función e impresión por pantalla.
        System.out.println("Nombres que empiezan con A: " + namesStartingWithA);


```

```jsx title="Salida por pantalla"
Nombres que empiezan con A: [Ana]
```

--------------------------------------------------------------------------------------
### ✨ distinct(): Elimina los elementos duplicados.

Este operador es INTERMEDIO y no recibe nada.


![distinct](/img/distinct.png)

```jsx title="Estructura"
 lista.stream()
       .distinct()
       .//OperadorFinal

```

```jsx title="Se eliminan los nombres duplicados."
List<String> names = Arrays.asList("Ana", "Ana", "Ana", "Ana", "Juan", "Carla");

names.stream()
     .distinct()
     .forEach(System.out::println);

```

```jsx title="Salida por pantalla"
Ana
Juan
Carla
```


--------------------------------------------------------------------------------------
### 🎚️ limit(): Limita el número de elementos procesados.

Este operador es INTERMEDIO  y no recibe nada.

![limit](/img/limit.png)

```jsx title="Estructura"
 lista.stream()
       .limit(x) // <-- Cantidad de elementos que queremos procesar
       .forEach(System.out::println);

```

```jsx title="Limitaremos la lista a los primeros 3 elementos. "
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

names.stream()
     .limit(3)
     .forEach(System.out::println);
```
```jsx title="Salida por pantalla"
Ana
Luis
Maria
```


--------------------------------------------------------------------------------------
### 🔄 skip(): Omite un número específico de elementos.

Este es un operador INTERMEDIO.

![skip](/img/skip.png)


```jsx title="Estructura"
 lista.stream()
       .skip(x) // <-- Cantidad de elementos a omitir
       .forEach(System.out::println);

```


```jsx title="Mostraremos la lista a partir del tercer elemento "
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

names.stream()
     .limit(2)
     .forEach(System.out::println);
```
```jsx title="Salida por pantalla"
Maria
Pedro
Juan
Carla
```

--------------------------------------------------------------------------------------
### 🔍 anyMatch(): Verifica si algún elemento cumple una condición.

Este operador es FINAL y recibe un Predicate.

:::tip[Predicate]
Recibe un valor y devuelve un booleano
:::

![anymatch](/img/anymatch.png)

```jsx title="Estructura"
boolean result = lista.stream()
                      .anyMatch(param1 -> param1.startsWith("P")); // Comienzan con la letra "P"


System.out.println(result);

```

```jsx title="Elementos que comiencen con la letra "P"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

boolean result = names.stream()
                      .anyMatch( (name) ->{
                            return name.startsWith("P");
                     });


System.out.println("¿Hay algún nombre que empiece con P?: " + result);

```


```jsx title="Salida por pantalla"
¿Hay algún nombre que empiece con P?: true
```

Ahora, intentemos reducir la sintaxtis

```jsx title="Forma reducia"
        boolean result = names.stream()
                              .anyMatch(name -> name.startsWith("P"));

```


--------------------------------------------------------------------------------------
### 🔒 allMatch(): Verifica si todos los elementos cumplen una condición.

Este operador es FINAL y recibe un Predicate.

:::tip[Predicate]
Recibe un valor y devuelve un booleano
:::

![allmatch](/img/allmatch.png)

```jsx title="Estructura"
boolean result = lista.stream()
                      .allMatch(param1 -> param1.startsWith("P")); // Comienzan con la letra "P"


System.out.println(result);

```

```jsx title="Elementos que comiencen con la letra "P"
List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

boolean result = names.stream()
                      .allMatch( (name) ->{
                            return name.startsWith("P");
                     });


System.out.println("¿Hay algún nombre que empiece con P?: " + result);

```


```jsx title="Salida por pantalla"
¿Hay algún nombre que empiece con P?: false
```

Ahora, intentemos reducir la sintaxtis

```jsx title="Forma reducia"
        boolean result = names.stream()
                              .allMatch(name -> name.startsWith("P"));

```


--------------------------------------------------------------------------------------
### ❌ noneMatch(): Verifica si ningún elemento cumple una condición.

Este operador es FINAL y recibe un Predicate.

:::tip[Predicate]
Recibe un valor y devuelve un booleano
:::

![nonematch](/img/nonematch.png)

```jsx title="Estructura"
boolean result = lista.stream()
                      .noneMatch(param1 -> condicion); 


System.out.println(result);

```

```jsx title="Nombres con mas de 5 letras "
        List<String> names = Arrays.asList("Ana", "Luis", "Maria", "Pedro", "Juan", "Carla");

        boolean result = names.stream()
                              .noneMatch((name) -> {
                                  return name.length() > 5;
                              });

        System.out.println("Algún nombre tiene mas de 5 letras? : " + result);

```


```jsx title="Salida por pantalla"
Algún nombre tiene mas de 5 letras? : true
```

Ahora, intentemos reducir la sintaxtis

```jsx title="Forma reducia"
boolean result = names.stream()
                      .noneMatch(name -> name.length() > 5);

```