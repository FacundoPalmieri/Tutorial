---
sidebar_position: 5
---

# 5 - Spring Security

## ¿Qué es Spring Security?  

Spring Security es un **marco de seguridad** potente y altamente personalizable para aplicaciones Java ☕.
Está diseñado para proporcionar autenticación y autorización a nivel de aplicacion basadas en Spring.

El marco proporciona una amplia gama de características, incluyendo la autenticación basada en formularios, la autenticación basada en tokens, la integración con proveedores de autenticación externos (como OAuth y OpenID), y mucho más.

## ¿Qué conceptos de utilizan en Spring Security?

### *Filtros de Seguridad*
Componente que implementa la interfaz *javax.servlet.filtrer*. Se encarga de **interceptar las peticiones HTTP** para realizar las tareas de autenticación, autorización y seguridad.

:::info
Spring Security permite crear filtros personalizados mediante el **Delegating Filter Proxy**, o bien utilizar sus 12 filtros predeterminados.
:::
**1-Channel Processing Filter**:  Se encarga de redirigir las solicitudes a un protocolo seguro (HTTPS).

**2-Security Context Persistence Filter**: Mantiene el contexto de seguridad de la apliciación entre las solicitudes del usuario.

**3-Concurrent Session Filter**: Controla las sesiones concurrentes de los usuarios, permitiendo configurar cuantas sesiones activas puede tener un usuario.

**4-Logout Filter** : Gestiona la solicitudes de cierre se sesión de los usuarios.

**5-Username Password Authentication Filter**: Procesa las solicitudes de autentiación basadas en nombre de usuario y contraseña.

**6-Default Login Page Generating Filter**: Genera automáticamente una página de inicio de sesión predeterminada si no se proprciona una personalizada.

**7-Default Logout Page Generating Filter**: Genera automáticamente una página de cierre de sesión predeterminada si no se proprciona una personalizada.

**8-Basic Authentication Filter** : Procesa las solicitudes de autenticación básica.

**9-Request Cche Aware Filter**: Permite que las solicitudes sean almacenadas en caché para su uso posterior después de la autenticación.

**10-Security Context Holder Aware Request Filter**: Permite que los objetos de solicitud sean conscientes del contexto de seguridad.

**11-Jaas Api Integration Filter**:  Integra la autenticación basada en JAAS ( Java Authentication and Authorization Service).

**12-Remember Me Authentication Filter**: Procesa las solicitudes para la authenticación basada en recordar al usuario.



### *Proveedores de Autenticación.*
Son componentes responsables de autenticar las credenciales. Trabaja en conjunto con otros componenetes como los filtros de seguridad y proveedor de detalles de usuarios
**Dao Authentication Provider**: Este proveedor utiliza un objeto de acceso a datos (DAO) para autenticar credenciales. Utiliza un objeto UserDetailService para recuperar detalles del usuario(Nombre, contraseña y roles) de una fuentes de datos, como una base de datos, y luego compara credenciales proporcionadas por el usuario.

**Ldap Authentication Provider**: Se utiliza cuando las credenciales del usuario están almancenadas en un directorio LDAP(Protocolo ligero de Acceso a Directorios).

**Jass Authentication Provider**: Utiliza cuando el servicio de autenticación de Java para autenticar credenciales del usuario.

**OAtuh2** : Permite que los usuarios inicien sesión utilizando credenciales de proveedores de identidad externo, como Google, Facebook o GitHub.



### *Proveedores de Detalles de Usuarios.*
Mas conocido como UserDetailService, es un componente que se encarga de proporcionar información de autenticación de los usuarios. Este proveedor es responsable de recuperar los detalles de los usuarios, como sus nombres, contraseñas y roles para que Spring Security pueda realizar la autenticación de manera adecuada.

:::tip[Es una Interfaz]
Tiene un único método,  **loadUserByUsername()**, que recibe como párametro el nombre de usuario y devuelve un objeto UserDetail. Este objeto contiene la información necesaria sobre el usuario, como el su nombre, contraseña (Encriptada), roles y cualquier otra información relevante.
:::





## Arquitectura Principal

Spring Security puede adaptarse para distintas arquitecturas, sin embargo, existen arquitecturas predefinidas que son mayormente utilizadas que otras.

Entre las arquitecturas más utilizadas encontramos aquellas que incluyen una cadena de filtros, un administrador de autenticación, uno (o varios) proveedores de autenticación y un contexto de seguridad donde almacenar los datos  de autenticación necesarios.

Un ejemplo de este tipo de arquitectura lo podemos ver en la imagen a continuación:

<img src="/img/RutaSpring.png" alt="RutaSpring" width="1400px" height="600px" />


### *Camino de autenticación*

En base a esta arquitectura planteada en la imagen, el proceso de autenticación mediante Spring Security comienza con una solicitud HTTP que se envía al servidor. La solicitud es interceptada por una cadena de filtros de seguridad. El primer filtro en la cadena casi siempre el filtro de autenticación, que se encarga de verificar las credenciales del usuario, como el nombre de usuario, la contraseña o los medios que se utilicen. Si las credenciales son válidas, el filtro de autenticación recupera la información del usuario de un proveedor de autenticación, como un servicio de directorio o una base de datos.

Luego de que se produzca esta primera parte, la información del usuario se pasa al siguiente filtro en la cadena (si existiese), que puede ser un filtro de autorización o un filtro de seguridad adicional, etc. Spring Security (en este caso) posee 12 filtros de seguridad por defecto y la posibilidad de crear filtros personalizados mediante el DelegatingFilterProxy.

Una vez que se cumple el proceso de autenticación inicial, el Security Context Holder se encarga de almacenar la información de autenticación del usuario. El contexto de seguridad es un objeto de tipo SecurityContextHolder que contiene información sobre el usuario actual, como su nombre de usuario, roles, permisos, etc.

La principal característica del contexto de seguridad es el hecho de que está disponible para todos los filtros y componentes de la aplicación web.

### *Partes del circuito/camino de autenticación*

La arquitectura del diagrama que analizamos anteriormente incluye los siguientes componentes en su circuito de autenticación que veremos en mayor detalle:

-   **Solicitud HTTP:** La solicitud HTTP es una petición que el cliente envía al servidor para obtener un recurso. Contiene información sobre el recurso que se solicita, así como información sobre el cliente, como el navegador web y el sistema operativo.

-   **Cadena de filtros de seguridad:** La cadena de filtros de seguridad es una lista de filtros que se ejecutan secuencialmente cuando se procesa una solicitud HTTP. Cada filtro puede realizar una tarea específica, como verificar la autenticación del usuario, autorizar el acceso a un recurso o registrar la actividad del usuario.

-   **Proveedor de autenticación:** El proveedor de autenticación es un componente que proporciona información sobre los usuarios. Puede ser un servicio de directorio, una base de datos o cualquier otro componente que pueda proporcionar información sobre los usuarios.

-   **Codificador:** El codificador es un componente que se utiliza para codificar/encriptar la contraseña del usuario antes de compararla con la contraseña almacenada en la base de datos. La codificación/encriptación de la contraseña ayuda a proteger la misma principalmente frente a ataques de fuerza bruta.

-   **Filtro 1, Filtro 2, …, Filtro n:** Estos filtros pueden realizar cualquier tarea específica, como verificar la autorización del usuario, registrar la actividad del mismo o validar los datos de entrada. Cada uno de ellos pueden ser personalizados o parte de los estándares de Spring Security.

-   **Base de datos:** La base de datos se utiliza para almacenar la información como ser el nombre de usuario, la contraseña y los roles o permisos.

-   **Delegating Filter Proxy:** El Delegating Filter Proxy es un componente que se utiliza para delegar la ejecución de los filtros en la cadena de filtros de seguridad. El Delegating Filter Proxy puede seleccionar el filtro adecuado para ejecutar en función de la solicitud HTTP.

-   **Security Context Holder:** El Security Context Holder es un componente que se utiliza para almacenar el contexto de seguridad. Es decir que ante nuevas solicitudes HTTP request del mismo lugar y el mismo usuario, no va a ser necesario volver a autenticar.