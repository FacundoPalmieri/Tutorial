---
sidebar_position: 5
---

# 5 - Spring Framework

## Introducción a Spring Framework
Spring framework es un conjunto proyectos de código abierto desarrollados en Java con el objetivo de agilizar el desarrollo de aplicaciones en este lenguaje. Todo su pack de aplicaciones es conocido como Spring platform e incluye herramientas para el desarrollo web, microservicios, manejo de base de datos, seguridad, entre otros.

Cada una de estas características de Spring fueron desarrolladas en una serie de proyectos independientes, donde cada uno es utilizado para diferentes fines. Entre los principales proyectos se encuentran:

**Spring Boot:** Facilita la creación y configuración inicial de proyectos de Spring para generar aplicaciones de fácil y rápida puesta en marcha.

**Spring Data:** Utilizado para la administración, manejo y comunicación con bases de datos, tanto relacionales como no-relacionales.

**Spring Security:** Utilizado para las cuestiones de seguridad que puede necesitar todo proyecto.

**Spring Web Services:** Utilizado para facilitar el desarrollo de Web Services SOAP.

:::info
La lista completa de todos los proyectos de Spring está disponible en la página oficial: https://spring.io/projects
:::


## Spring Framework vs Spring Boot
Spring Boot es una extensión de Spring Framework y se encuentra dentro de su lista de proyectos. Fue creado con la finalidad de facilitar la creación de aplicaciones web listas para salir a producción, es decir, bajo el concepto “Just Run” (solo ejecutar).

Anteriormente, realizar las configuraciones iniciales para llevar a cabo una aplicación en Spring llevaba mucho tiempo a los desarrolladores. Esto, se realizaba mediante una configuración manual de un archivo xml y de un servidor de aplicaciones web, consumiendo gran parte del tiempo de desarrollo del proyecto en realizar configuraciones.

Dada esta problemática y con la finalidad de resolverla, fue desarrollado Spring Boot, que requiere una configuración mínima y que puede ser integrado con otros proyectos de Spring o librerías externas. En la Ilustración vas a poder observar las características incorporadas y quitadas de Spring Framework que lograron la creación e implementación de lo que hoy es Spring Boot.