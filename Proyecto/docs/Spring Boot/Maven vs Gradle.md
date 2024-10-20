---
sidebar_position: 4
---

# 4 - Maven vs Gradle

## Maven
Maven es una herramienta de software para la gestión y construcción de proyectos Java que se caracteriza por tener un modelo de configuración muy simple, basado en el formato XML.

Maven utiliza el conocido archivo POM.xml (Project Object Model) para dentro de él especificar las diferentes dependencias o librerías que serán necesarias incluir en el proyecto que se esté desarrollando. A partir de esta definición, Maven se encarga de buscar todas las dependencias especificadas en las versiones correspondientes y que sean compatibles entre sí para el desarrollo de la aplicación en cuestión, ahorrando gran cantidad de tiempo en lo que respecta a la organización de los complementos necesarios.

Muchos entornos de desarrollo (IDE) ya tienen incorporado un motor como Maven para permitir la sincronización y descarga rápida de los complementos necesarios. Algunos ejemplos son Apache Netbeans o también Intellij Idea.


## Gradle
Gradle es una herramienta muy similar a Maven, sin embargo, se caracteriza por ser utilizada principalmente para procesos de automatización de compilación.

Se basa en conceptos similares a Maven, pero con la particularidad de que fue diseñado principalmente para realizar trabajos multiproyecto o que requieran de gran grado de personalización.

Entre algunas de sus principales características se encuentran:

- Flexibilidad
- Integración entre varios proyectos
- Gestión de dependencias
- Utiliza DSL
- Groovy
- Soporta varios lenguajes (no solo Java)

![maven](/img/Maven.png)
