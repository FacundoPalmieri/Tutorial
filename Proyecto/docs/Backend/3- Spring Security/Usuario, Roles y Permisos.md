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

## Importancia en la Seguridad Informática

La correcta implementación de roles y permisos es crucial para la seguridad de un sistema informático. Esto se debe a diferentes causas entre las cuales se destacan:

Previene el acceso no autorizado: Limita el acceso a la información sensible y a las funciones críticas solo a aquellos usuarios que realmente lo necesitan.
Facilita la gestión: Simplifica la administración y asignación de autorizaciones, especialmente en organizaciones grandes, al agrupar los permisos en roles en lugar de gestionarlos individualmente.
Mejora el cumplimiento de políticas o leyes de seguridad: Ayuda a cumplir con las políticas de seguridad y las regulaciones legales, ya que facilita la auditoría y el control del acceso.


## ¿Qué modelos de control de acceso existen?

Un modelo de control de acceso es un marco o un conjunto de reglas y políticas que determina cómo se gestionan los permisos de acceso a los recursos de un sistema informático. Estos modelos definen quién puede acceder a qué recursos, en qué circunstancias y bajo qué condiciones.

Existen varios modelos para gestionar roles y permisos, entre los más comunes se encuentran:

-   **Control de Acceso Basado en Roles (RBAC):** Asigna permisos a los roles y los roles a los usuarios.

-    **Control de Acceso Basado en Atributos (ABAC):** Asigna permisos basados en atributos del usuario, como su departamento, puesto de trabajo, etc.

-    **Control de Acceso Discrecional (DAC):** Permite a los propietarios de los recursos decidir quién puede acceder a ellos.

-    **Control de Acceso Obligatorio (MAC):** Usa una política centralizada para controlar el acceso a los recursos basado en niveles de seguridad.


:::tip[Asignaciones]
-Creamos los Permisos, los cuales se asignan a los roles.

-Creamos los Roles, los cuales se asignan a los usuarios

:::