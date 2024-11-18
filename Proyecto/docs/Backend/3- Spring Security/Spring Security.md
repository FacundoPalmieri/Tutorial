---
sidebar_position: 5
---

# 5 - Spring Security

## ¿Qué es Spring Security?  

Spring Security es un **marco de seguridad** potente y altamente personalizable para aplicaciones Java ☕.
Está diseñado para proporcionar autenticación y autorización a nivel de aplicacion basadas en Spring.

## ¿Qué conceptos de utilizan en Spring Security?

#### *Filtros de Seguridad*
Componente que implementa la interfaz *javax.servlet.filtrer*. Se encarga de **interceptar las peticiones HTTP** para realizar las tareas de autenticación, autorización y seguridad.

:::info
Spring Security permite crear filtros personalizados, o bien utilizar sus 12 filtros predeterminados.
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



#### *Proveedores de Autenticación.*
Son componentes responsables de autenticar las credenciales. Trabaja en conjunto con otros componenetes como los filtros de seguridad y proveedor de detalles de usuarios
**Dao Authentication Provider**: Este proveedor utiliza un objeto de acceso a datos (DAO) para autenticar credenciales. Utiliza un objeto UserDetailService para recuperar detalles del usuario(Nombre, contraseña y roles) de una fuentes de datos, como una base de datos, y luego compara credenciales proporcionadas por el usuario.

**Ldap Authentication Provider**: Se utiliza cuando las credenciales del usuario están almancenadas en un directorio LDAP(Protocolo ligero de Acceso a Directorios).

**Jass Authentication Provider**: Utiliza cuando el servicio de autenticación de Java para autenticar credenciales del usuario.

**OAtuh2** : Permite que los usuarios inicien sesión utilizando credenciales de proveedores de identidad externo, como Google, Facebook o GitHub.



#### *Proveedores de Detalles de Usuarios.*
Mas conocido como UserDetailService, es un componente que se encarga de proporcionar información de autenticación de los usuarios. Este proveedor es responsable de recuperar los detalles de los usuarios, como sus nombres, contraseñas y roles para que Spring Security pueda realizar la autenticación de manera adecuada.

:::tip[Es una Interfaz]
Tiene un único método,  **loadUserByUsername()**, que recibe como párametro el nombre de usuario y devuelve un objeto UserDetail. Este objeto contiene la información necesaria sobre el usuario, como el su nombre, contraseña (Encriptada), roles y cualquier otra información relevante.
:::


<img src="/img/RutaSpring.png" alt="RutaSpring" width="1400px" height="600px" />
