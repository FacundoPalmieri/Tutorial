---
sidebar_position: 7
---

# 7 - Arquitectura Multicapas

Toda aplicación que sigue buenas prácticas de desarrollo de software, cumple con algún tipo de modelo o arquitectura de capas, es decir, una separación entre cada una de las partes con la que interactúa la misma y una forma de comunicación entre ellas.

Existen diversos modelos o arquitecturas multicapa que pueden ser implementados o utilizados según el proyecto sobre el cual se esté trabajando, sin embargo, hay algunas estandarizaciones a seguir que se adaptan a la mayoría de los desarrollos realizados en Java.

A continuación, se especifica en mayor detalle cada una de las capas de una de las arquitecturas multicapas estándar más utilizada para el desarrollo de aplicaciones con Spring Boot.

**Controller:** Es la capa encargada de atender las solicitudes http entrantes, derivarlas a la capa que corresponda, esperar por una respuesta, generarla y transmitirla nuevamente al cliente. Generalmente la capa “Controller” trabaja estrechamente con la capa de “Service”, donde a partir de una request llama a las funciones que necesite de la capa service para generar una response.

**Service:** La capa de “Service”, mejor conocida como lógica de negocio, es la capa donde se especifican todas las funciones u operaciones que sean necesarias y que puedan ofrecer, como dice su nombre, un servicio a la capa controller. La capa service, por ejemplo, puede encargarse de las autenticaciones o de las políticas de autorización que puede tener la aplicación con respecto al acceso a determinadas funciones.

**Repository o DAO (Data Access Object):** Es la capa encargada de la persistencia de los datos, es decir, del resultado de la interacción de modelado entre las clases desarrolladas y las tablas de una base de datos. Permite el acceso a los datos mediante diferentes tecnologías como por ejemplo JDBC o algún ORM como por ejemplo JPA con Hibernate. Cada una de las clases que se encuentren dentro de esta capa deben estar mapeadas/etiquetadas mediante la annotation @Repository.

**Model (o Entity):** La capa “model” trabaja estrechamente en conjunto con la clase Repository. Cada una de las clases modela un objeto de la vida real y es marcado con la annotation @Entity en caso de que se transforme en una entidad (tabla) en la base de datos. Cada instancia que se haga a una clase entity, en caso que sea persistida, representará una fila en una tabla de la base de datos.

**DTO (Data Transfer Object):** Esta capa se encarga de contener todas las clases DTO que hayan sido especificadas en un proyecto. Los DTO buscan desacoplar la forma de presentación de los datos (a futuro en el frontend) con respecto a los objetos propiamente dichos de la capa Model.

