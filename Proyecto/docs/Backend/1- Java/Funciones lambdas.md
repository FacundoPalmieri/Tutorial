---
sidebar_position: 5
---

# 5 - Funciones Lambdas
Las funciones lambda en Java son una forma de escribir funciones anónimas, es decir, funciones que no tienen un nombre. Se introdujeron en Java 8 como parte de las mejoras para programar de manera más funcional, y permiten simplificar el código, especialmente al trabajar con interfaces funcionales (interfaces que tienen un único método abstracto, como Runnable o Comparator).

El propósito principal de las expresiones lambda es permitir que podamos escribir funciones de manera concisa y flexible. En vez de definir una clase completa para implementar una interfaz, una función lambda puede implementarla en línea. Esto resulta especialmente útil en el contexto de operaciones sobre colecciones y flujos de datos (Streams).

Estructura básica de una expresión lambda
La sintaxis de una función lambda es:

```jsx title="Básica"
(parametros) -> expresión
```


```jsx title="Si el cuerpo tiene varias líneas"
(parametros) -> {
    // cuerpo de la función
}

```

:::tip[Ventajas]
- Código más conciso: Reducen la cantidad de código necesario.
- Facilitan la programación funcional: Permiten el uso de funciones como argumentos, lo cual abre paso a técnicas como el procesamiento de flujos (Streams) y el uso de funciones de orden superior.
- Menos clases innecesarias: Evitan la necesidad de crear clases adicionales para implementar interfaces.
:::


## 🛠️ Consumer
### 💡 Recibe un valor y no retorna nada.

En este ejemplo se puede ver que la función consumer recibe un parametro "param" y lo imprime por pantalla.

```jsx title=""
  Consumer<String> consumer = (param) -> {
            System.out.println(param);
        };
        
        //Llamado a la función.
        consumer.accept("Hello World");

```

```jsx title="Salida por pantalla"
Hello World
```


Ahora bien, cuando en la funciones lambda tenemos solo una linea, se pueden obviar las llaves de la función.

```jsx title="Salida por pantalla"
Consumer<String> consumer = (param) -> System.out.println(param);
        
//Llamado a la función.
consumer.accept("Hello World");
```

Ahora, cuando el parametro que se recibe se está utilizando dentro del método se puede acortar aún mas, quedando la función asi..

```jsx title=""
Consumer<String> consumer = System.out::print;

//Llamado a la función.
consumer.accept("Hello World");
```

-------------------------------------------------------------------------------------

## ⚙️ BiConsumer
### 💡 Recibe dos valores y no retorna nada.

En este ejemplo se observa como la función recibe dos parametros. Uno de tipo String y otro de tipo Integer. Luego los imprimer por pantalla.

```jsx title=""
   BiConsumer<String, Integer> biConsumer = (a, n) -> {
        System.out.println(a + " " + n);
     };

    //Llamado a la función.
    biConsumer.accept("Número: ", 1);

```

```jsx title="Salida por pantalla"
Número:  1

```

Como habiamos visto antes, al tener una sola linea dentro de la función, puede simplificarse.

```jsx title=""
BiConsumer<String, String> biConsumer = (a, b) -> System.out.println(a + " " + b);

//Llamado a la función.
biConsumer.accept("Hola", "Mundo");
```

:::info
En este caso no puede seguir simplificandose como en el ejemplo anterior ya que la función recibe dos parámetros y solo puede realizarse con un solo parametro.
:::

-------------------------------------------------------------------------------------

## 📦 Supplier
### 💡 No recibe ningún valor, pero retorna un resultado.

En este ejemplo podemos ver como la función no está recibiendo valores, pero si está retornando un dato.

```jsx title=""
Supplier <String> supplier = () -> {
return  "Hola, soy un Supplier";
};

//Llamado a la función y salida por pantalla.
String result = supplier.get();
System.out.println(result);
```

Ahora, como el cuerpo de la función tiene una sola línea, podemos acortarla la expresión suprimiendo el *return* y dejando solo el valor (En este caso la cadena String).

```jsx title=""
Supplier<String> supplier = () -> "Hola, soy un Supplier";

//Llamdo a la función.
System.out.println(supplier.get());

```

-------------------------------------------------------------------------------------

## 🎯 Function
### 💡 Recibe un valor y retorna un resultado.

Poseé la siguiente estructura:

```jsx title=""
Function <TipoDatoRecibido, Retorno> nombreFuncion = (paramRecibido) ->{
}
```

En el ejemplo vemos como recibe un Integer y retorna un String. El parametro se define con la variable num.

```jsx title=""
 Function<Integer, String> function = (num) ->{
    return "El número es: " + num;
 };

//Llamado a la función.
String result = function.apply(9);
System.out.println(result);
```

```jsx title="Salida por pantalla"
El número es: 9

```


Como ya sabemos, al tener solo una línea en el cuerpo de la función, podemos acotarla de la siguiente manera:

```jsx title=""
Function<Integer, String> function = (num) -> "El número es: " + num;
       
//Llamado a la función.
String result = function.apply(9);
System.out.println(result);
```

Ahora supongamos que la función siempre va a sumar 5 al valor que se le pase por parametro. En este caso no se va a concatenar nada en el retorno, sino que simplemente se devolverá la suma. Quedaría algo así
```jsx title=""
  Function<Integer, Integer> function = num -> 5 + num;

//Llamado a la función.
System.out.println(function.apply(10));
```

```jsx title="Salida por pantalla"
15
```


-------------------------------------------------------------------------------------

## ✨ BiFunction
### 💡 Recibe dos valores y retorna un resultado.

Poseé la siguiente estructura:

```jsx title=""
Function <TipoDatoRecibido1,TipoDatoRecibido2, Retorno> nombreFuncion = (param1, param2) ->{

}
```

:::info
En el ejemplo se observa que recibe dos Integer y por tal, devuelve el mimso tipo de dato, pero podía recibir datos diferentes.

Ej: Integer y String y retornar cualquier de ellos.
:::

```jsx title=""
BiFunction<Integer, Integer, Integer> bifunction = (a, b) -> {
  return a + b;
 };

  //En la salida por pantalla concateno un string y luego llamado a la función.
  System.out.println("El número es : " + bifunction.apply(1, 2));

```
```jsx title="Salida por pantalla"
El número es : 3
```

Forma corta :
```jsx title=""
BiFunction<Integer, Integer, Integer> bifunction = (a, b) -> a + b;

  //En la salida por pantalla concateno un string y luego llamado a la función.
System.out.println("El número es : " + bifunction.apply(1, 2));
```

-------------------------------------------------------------------------------------

## ✅ Predicate
### 💡 Recibe un valor y devuelve un booleano (true o false).
:::info
En este caso como siempre devuelve un boolean, no es necesario aclarar el tipo de dato en la función. Solo se especifica el tipo de dato que recibe.
:::

```jsx title=""
Predicate<String> predicate = (param) -> {
  //La longitud del string que recibo por param es mayor a 5?
  return param.length() > 5;
};

//Llamado a función y salida por pantalla.
boolean result = predicate.test("Facundo");
System.out.println(result);
```

```jsx title="Salida por pantalla"
true

```


Ahora veamos la forma de reducir la sintaxis
```jsx title=""
Predicate<String> predicate = (param) -> param.length() > 5;

//Llamado a función y salida por pantalla.
boolean result = predicate.test("Facundo");
System.out.println(result);
```


-------------------------------------------------------------------------------------

## 🔍 BiPredicate
### 💡 Recibe dos valor y devuelve un booleano (true o false).



```jsx title=""
BiPredicate<Integer, Integer> biPredicate = (a, b) -> {
  return a > b;
};

//Llamado a la función y salida por pantalla.
System.out.println(biPredicate.test(10, 100));

```

```jsx title="Salida por pantalla"
false
```

Veamos la forma reducida:

```jsx title=""
BiPredicate<Integer, Integer> biPredicate = (a, b) -> a > b;

//Llamado a la función y salida por pantalla.
boolean result = biPredicate.test(10, 100);
System.out.println();
```


-------------------------------------------------------------------------------------

## 🧮 BinaryOperator
### 💡 Recibe dos valores *del mismo tipo* y retorna un *valor del mismo tipo.*

:::info
Al recibir dos valores del mismo tipo y retornar también el mismo tipo, es redundate poner lo mismo.

Por tal, la estructura es la siguiente:

```jsx title=""
BinaryOperator<TipoDato> NombreFuncion = (param1, param2) -> {

}
```
:::

```jsx title=""
BinaryOperator<Integer> sum = (a, b) -> {
  return a + b;
};

//Llamado a la función y salida por pantalla.
System.out.println("Resultado es : " + sum.apply(10, 5));
```

```jsx title="Salida por pantalla"
Resultado es : 15

```

sintaxis reducida:

```jsx title=""
BinaryOperator<Integer> binaryOperator = (a, b) -> a + b;

//Llamado a la función y salida por pantalla.
System.out.println("Resultado es : " + sum.apply(10, 5));

```

-------------------------------------------------------------------------------------

## 🔧 UnaryOperator
### 💡 Recibe un valor, lo procesa y devuelve un resultado del mismo tipo.

```jsx title=""
UnaryOperator<Integer> unaryOperator = (number) -> {
  return  number * number;
};

//Llamado a la función.
int result = unaryOperator.apply(5);
System.out.println("Resultado es: " + result);
```

```jsx title="Salida por pantalla"
Resultado es: 25
```

sintaxis reducida:
```jsx title=""
UnaryOperator<Integer> unaryOperator = (number) -> number * number;
```


-------------------------------------------------------------------------------------

## 🚀 Runnable
### 💡 No recibe valores y no retorna nada, solo ejecuta una tarea.

```jsx title=""
Runnable runnable = () ->{
  System.out.println("Ejecutando tarea...");
};

//Llamado a la función.
runnable.run();
```
```jsx title="Salida por pantalla"
Ejecutando tarea...
```


sintaxis reducida:
```jsx title=""
Runnable runnable = () -> System.out.println("Ejecutando tarea...");


//Llamado a la función.
runnable.run();
```


-------------------------------------------------------------------------------------

## 📞 Callable
### 💡 No recibe valores, pero retorna un resultado y puede lanzar una excepción.

:::info
Tiene una función similar al "Function", solo que aqui la diferencia es la excepeción.
Para eso, debe manejarse el bloque try - catch.
:::

```jsx title=""
Callable<String> callable = () ->{
 return "Resultado de la tarea";
} 

//Llamado a la función.
try {
  String resultado = callable.call();
  System.out.println(resultado);
} catch (Exception e) {
   System.err.println("Error al llamar la funcion callable");
}

```

```jsx title="Salida por pantalla"
Resultado de la tarea
```


sintaxis reducida:
```jsx title=""
Callable<String> callable = () -> "Resultado de la tarea";

//Llamado a la función.
try {
  String resultado = callable.call();
  System.out.println(resultado);
} catch (Exception e) {
   System.err.println("Error al llamar la funcion callable");
}

```
