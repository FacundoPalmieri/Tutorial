---
sidebar_position: 8
---

# 8 - Token

## ¿Qué son los tokens?
Un token es una pequeña pieza de información codificada que se utiliza para verificar la identidad de un usuario en un sistema.


## Características claves de un token.
**Identificación:** Un token actúa como una prueba de que ya te has identificado correctamente.

**Portabilidad:** Puedes llevar tu token contigo y usarlo para acceder a diferentes partes del sistema.

**Seguridad:** Los tokens son difíciles de falsificar, lo que ayuda a proteger tu identidad y los recursos del sistema.

## Uso en Aplicaciones.
Los tokens son ampliamente utilizados en aplicaciones web y móviles para gestionar la autenticación y autorización de usuarios funcionando de la siguiente manera:

**Autenticación**: Después de iniciar sesión, recibís un token que podés usar para demostrar que sos vos en futuras interacciones con el sistema.

**Autorización**: El token también puede contener información sobre lo que tenés permitido hacer en el sistema, como  por ejemplo acceder a ciertas áreas, recursos o realizar ciertas acciones, operaciones o tareas.


## ¿Qué es JWT?
JWT (JSON Web Token) es un estándar abierto (RFC 7519) que define un formato compacto y autocontenido para la transferencia segura de información entre partes como un objeto JSON.

:::info 💡
 Cuando se dice que JWT es un «estándar abierto (RFC 7519)», significa que JWT sigue una especificación pública y abierta que ha sido establecida por la Internet Engineering Task Force (IETF), la organización que desarrolla y promueve estándares de Internet. En este caso, la especificación para JWT está documentada en el RFC (Request for Comments) número 7519.

El RFC 7519 proporciona detalles sobre la estructura, el formato y el uso de los JSON Web Tokens (JWT), lo que permite a los desarrolladores entender cómo funcionan y cómo implementarlos de manera consistente y compatible con diferentes sistemas y plataformas.
:::


## Partes de un JWT
JWT se utiliza principalmente para autenticación y autorización en aplicaciones web y servicios API y se compone principalmente de tres partes:

**-Encabezado (Header):** Contiene el tipo de token a utilizar y el algoritmo de firma a usar.

**-Carga útil (Payload):** Contiene la información que se quiere transmitir, como los claims (datos sobre el usuario) y cualquier otra información adicional. Los claims están codificados en JSON.

**-Firma (Signature):** Se crea mediante la combinación del encabezado + la carga útil (codificados en base64) + una clave secreta. Se usa para verificar que el token no ha sido alterado durante su transferencia.

:::tip[¿Como leer el contenido de JWT?]
Existen webs exclusivas para leer el contenido de los JWT. Una de las más conocidas es:  **https://jwt.io/**
:::

![grafico Token](/img/graficoToken.png)

## Ventajas de JWT
El uso de JWT como tecnología para la gestión de tokens a la hora de securizar aplicaciones tiene una cierta cantidad de ventajas, veamos alguna de sus principales:

**Autenticación sin estado:** Al incluir la información de autenticación dentro del token, no es necesario mantener un estado en el servidor. Esto es útil para aplicaciones escalables y distribuidas.

**Interoperabilidad:** JWT es un estándar abierto, lo que significa que es compatible con una variedad de lenguajes de programación y plataformas.

**Seguridad:** Al estar firmado digitalmente, el token JWT garantiza que la información no ha sido alterada en el camino.

## ¿Cómo funciona JWT?
Si bien JWT tiene su complejidad a la hora de implementarlo, su funcionamiento general a grandes rasgos es relativamente sencillo siguiendo los siguientes pasos:

1. La autorización se logra cuando un usuario ingresa sus credenciales con éxito.

2. A partir de eso, se genera un JSON Web Token que es retornado al cliente (quien hizo la solicitud/request).

3. El cliente guarda localmente el JWT, en lugar de usar sesiones o cookies.

4. Siempre que el usuario quiere acceder a una ruta protegida o recurso, el cliente tiene que enviar el JWT en el encabezado de Authorization utilizando el esquema Bearer (generalmente).


## Ciclo de Vida de JWT
**Creación:** Comienza cuando se crea un JWT. Ocurre (generalmente) cuando un usuario inicia sesión en un sistema o cuando se genera un token para una solicitud de acceso.

**Firma:** Después de crear el JWT, se firma digitalmente utilizando un algoritmo de firma y una clave secreta.

**Transmisión:** Una vez que se firma, el JWT puede ser enviado al cliente, que lo almacenará (por ejemplo, en localStorage en el navegador) y lo incluirá en las solicitudes subsiguientes como método de autenticación.

**Validación:** Cuando el servidor recibe un JWT en una solicitud, lo valida verificando la firma y comprobando que el token no haya expirado.

**Uso de los Claims:** Después de validar la firma y la fecha de expiración, el servidor utiliza la información contenida en los claims (datos) del JWT para autorizar la solicitud. Esto puede incluir información sobre el usuario, sus roles y permisos.

**Actualización:** En algunos casos, un JWT puede ser actualizado. Por ejemplo, si un usuario inicia sesión nuevamente, se puede generar un nuevo JWT con una nueva fecha de expiración y enviarlo al cliente para reemplazar el token anterior.

**Expiración:** Finalmente, el JWT eventualmente expira, según lo especificado en el campo «exp» (fecha de expiración) del token. Cuando esto sucede, el token ya no es válido y el cliente debe solicitar uno nuevo.

:::tip[Flujo]
1. El ciclo de vida de un token JWT inicia en el cliente, realizando una solicitud con el, por ejemplo, nombre de usuario y contraseña para iniciar sesión.

2. Una vez validados los datos, se genera un JWT que se entrega al usuario como confirmación de autenticación exitosa. El cliente usa este token en todas sus solicitudes       subsiguientes, adjuntándolo en la cabecera Authorization.

3. En el servidor, se verifica la validez del token mediante su firma para garantizar su seguridad y autenticidad. Esto permite al servidor confiar en la identidad del usuario. El token incluye información relevante en su carga útil (payload), como los datos del usuario, lo que proporciona al servidor la capacidad de identificar al solicitante.

4. Una vez que se ha confirmado la autenticidad del token y se ha identificado al usuario, se activa el mecanismo de control de acceso. Esto determina si el usuario tiene permisos para acceder a los recursos solicitados y, en caso afirmativo, se envía la respuesta con el recurso protegido correspondiente.
:::
