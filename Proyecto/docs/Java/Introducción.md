---
sidebar_position: 1
---

# 1 - Introducción

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
