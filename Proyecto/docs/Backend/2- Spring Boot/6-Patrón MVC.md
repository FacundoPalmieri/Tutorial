---
sidebar_position: 6
---

# 6 - Patrón MVC

## Modelo Vista Controlador (MVC)
El Modelo Vista Controlador, mejor conocido como MVC,  es un patrón de diseño de software que permite una separación entre la lógica de negocio de una aplicación y la vista que se le presenta al usuario, utilizando como intermediario a un controlador que se encarga de tomar la decisión de cómo interactuan la vista y el modelo entre si.

En este patrón, el usuario realiza una petición, un controlador la recibe y decide hacia donde debe ir la misma o qué acciones deben realizarse para emitir una respuesta.

Cada una de las partes del patrón cumple con una funcionalidad en particular:

**Controlador:**  Se encarga de “controlar” o hacer de intermediario; recibe las órdenes del usuario, solicita los datos al modelo y se los comunica a la vista. Trabaja como si se tratara de un “pivote” que se encarga de distribuir las tareas. **En SpringBoot se determina la clase controladora mediante la Annotation @RestController.**

**Modelo:** Se encarga del modelado de los datos. En él se encuentra generalmente la lógica de usuario y las fuentes de datos, como por ejemplo, el consumo de datos desde una base de datos en particular.

**Vista:** Es la interfaz gráfica que se le presenta al usuario. Generalmente recibe datos provenientes del modelo a través del controlador y se los muestra al usuario en cuestión.

![mvc](/img/mvc.png)