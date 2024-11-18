---
sidebar_position: 4
---

# 4 - App StateFul Vs App Stateless

## Aplicaciones Stateful
Son conocidas como Aplicaciones con **Seguridad basada en sesiones**. Cuando un usuario se autentica,se crea una sesión en el servidor que contiene información del usuario, ya sea como la identidad o permisos, entre otros. 
El servidor utiliza esta información para autorizar las solicitudes el usuario y asegurarse que *solo tenga acceso a los recursos y funcionalidades permitidos.*
En cuanto a seguridad, las aplicaciones Stateful **pueden ser vulerables** a ciertos tipos de ataques si no se implementa adecuadamente medidas de seguridad como la gestión de cookies, tokens anti-csrf, etc.

:::info
Caracteristicas principales:
- **Persistencia de Estado**: Mantiene información sobre el estado de la sesión del usuario a lo largo de múltiples interacciones.

- **Escalabilidad Limitada**: Debido a la necesidad de mantener el estado de usuario puede ser dificiles de escalar.

- **Mayor complejidad**: La gestión del estado puede agregar complejidad al diseño y desarrollo de la aplicación.
:::

## Aplicaciones Stateless
Son conocidas como Aplicaciones con **Seguridad basada en tokens de autenticación**. Estas no mantienen información sobre el estado de sesiones de los usaurios entre solicitudes. Cada solicitud que realiza un usuario se procesa de manera independiente, esto significa que la aplicación no guarda ningún estado del usuario entre solicitudes, lo que simplifica la arquitectura y el diseño de la aplicación.
En las aplicaciones Stateless, después de que se logra una **autenticación** exitosa, el servidor emite un **token** de autenticación al cliente [Frontend], que contiene **información sobre la identidad del usuario y cualquier autorización relevante**.

:::info
Caracteristicas principales:
- **Simplicidad**: Al no mantener estado de la sesión, las aplicaciones son mas simples de diseñar, desarrollar y mantener.

- **Escalabilidad Mejorada**: Debido a su naturaleza sin estado, las aplicaciones son mas fáciles de escalar horizontalmente, ya que cada instancia del servidor es independiente y no requiere compartir estado.

- **Menor uso de recursos**: Al no tener que almacenar ni gestionar información sobre el estado de sesión, las aplicaciones pueden requerir menos recursos de memoria y procesamiento.
:::