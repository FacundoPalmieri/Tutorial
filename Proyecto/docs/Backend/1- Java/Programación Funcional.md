---
sidebar_position: 4
---

# 4 - Programación Funcional

## Introducción a la Programación Funcional en Java
La programación funcional es un paradigma que trata el cálculo como la evaluación de funciones matemáticas y evita el cambio de estado y los datos mutables. En Java, la introducción de la programación funcional comenzó con Java 8, que trajo consigo características poderosas como expresiones lambda y streams. Este enfoque permite a los desarrolladores escribir código más conciso, legible y fácil de mantener.

## ¿Qué son las Expresiones Lambda?
Las expresiones lambda son una forma de definir funciones anónimas (sin nombre) que pueden ser pasadas como argumentos a métodos o utilizadas para implementar interfaces funcionales (interfaces que contienen un solo método abstracto). Una expresión lambda se compone de:

**Parámetros:**P Los valores de entrada que la función acepta.

**POperador de flecha (->):** Separa los parámetros de la expresión que define la función.

**PCuerpo:**P El código que se ejecuta cuando se llama a la función.

## ¿Qué son los Streams?
Los streams son una nueva abstracción introducida en Java 8 que permite procesar colecciones de datos de manera funcional. Proporcionan una forma de realizar operaciones sobre una secuencia de elementos, como filtrar, mapear, y reducir, de manera fluida y expresiva.

Características de los Streams:
**No almacenan datos:** Un stream es una secuencia de datos en la que se pueden aplicar operaciones, pero no almacena los datos en sí.

**Operaciones perezosas:** Las operaciones en los streams son perezosas, lo que significa que no se ejecutan hasta que se necesita el resultado final. Esto optimiza el rendimiento y la eficiencia del procesamiento.

**Soporte para procesamiento paralelo:** Los streams pueden ser paralelizados fácilmente, permitiendo el procesamiento de datos en múltiples hilos.