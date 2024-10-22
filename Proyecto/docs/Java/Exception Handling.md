---
sidebar_position: 4
---

# 4 - Exception Handling

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
