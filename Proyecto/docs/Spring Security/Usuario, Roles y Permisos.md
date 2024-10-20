---
sidebar_position: 6
---

# 6 - Usuario, Roles y Permisos

## Roles
Un rol es un **conjunto predefinido de permisos** que se asignan a un usuario o a un conjunto de ellos. 

:::info
**Ejemplos**

*Administrador*: Puede tener permisos para crear, leer, actualizar y eliminar cualquier recurso del sistema.

*Usuario*: Puede tener permisos limitados, como leer datos y modificar solo su propia información.

*Invitado*: Puede tener muy restringidos, como leer ciertos datos.
:::


## Permisos
Los permisos son derechos específicos otorgados a uno o varios usuarios en particular o a roles.

:::info
**Ejemplos**

*Lectura (Read)*

*Escritura (Write)*

*Elmininación (Delete)*

*Ejecución (Excecute)*

:::

Existen varios modelos para gestionar roles y permisos, entre los más comunes se encuentran:
**Control de Acceso Basado en Roles** : Asigna permisos a los roles y los roles a los usurios.

**Control de Acceso Basado en Atirbutos**: Asigna permisos basados en atributos, como departamento, puesto de trabajo, etc.

**Control de Acceso Discrecional**: Permite a los propietarios de los recursos decidir quién puede acceder a ellos.

**Control de Acceso Obligatorio**: Usa una politica centralizada para controlar el acceso a los recursos basados en niveles de seguridad.


:::tip[Asignaciones]
-Creamos los Permisos, los cuales se asignan a los roles.

-Creamos los Roles, los cuales se asignan a los usuarios

:::