---
sidebar_position: 7
---

# 7 - Encriptado de Contraseña

## ¿Qué significa Encriptar?
Encriptar, también conocido como cifrar o codificar, es el proceso de transformar información legible, como texto o datos, en un formato ilegible para que solo las personas o sistemas autorizados pueden acceder a ella.

La **encriptación** se utiliza en diversisas áreas para proteger información confidencial, como:

**Seguridad Informática**:Encriptar contrasñea, datos bancarios, archivos confidenciales, comunicaciones en línea, protege contra el acceso no autorizados, robo de datos y ciberataques.

**Comunicaciones seguras**: La encriptación se utiliza en protocolos HTTPS, para garantizar la confidencialidad e integridad de la comunicación en internet, como al realizar compras on line o acceder a servicios bancarios.

**Almacenamientos de datos**: La encriptación de datos en discos duros, memorias USB y otros dispositivos de almacenamiento protege la información en caso de perdida o robo.

**Protección de la propiedad intelectual**: La encriptación se utiliza para proteger contenido digital como software, música, peliculas y libros electrónicos contra la piratería y la distribución ilegal.


## ¿Por qué es importante encriptar contraseñas?
Este proceos es **crucial** para los desarrolladores y para el futuro uso correcto y seguro de las aplicaciones por varias razones:

**- Protección de datos confidenciales**: Los desarrolladores trabajan con información sensible como datos de usuarios, base de datos, código fuente, y propiedad intelectual. Encriptar contraseñas protege esa información de accesos no autorizados, filtraciones de datos y ciberataques.

**-Prevención de robo de identidad**: Pueden ocurrir ataques de robo de contraseñas para suplantar identidad, acceder a sus cuentas y realizar acciones en su nomnbre. La encriptación dificulta estos ataques.

**-Cumplimiento de normas y regulaciones**:Muchas industrias, como fincanciera o de salud, tienen regulaciones estictas sobre la protección de datos. 

**-Mejora de la seguridad general**: La encriptación de contraseña es un elemento fundamental de una estrategía de seguridad sólida. Al proteger contraseñas se reduce el riesgo de que otros elementos de seguridad, como firewalls y sistemas de detección de instrusiones, sean vulnerables.

**-Buenas prácticas de desarrollo**: La encriptación de contraseñas es considerada una buena práctica de desarrollo. 



## Algoritmos de Encriptación
Existen diversos algoritmos de encriptación, cada uno con sus propias caracteristicas y niveles de seguridad. Entre ellos

### Algoritmos de encriptación simétrica:
- bcrypt: Algoritmos robusto y ampliamente utilizado que ofrece un alto nivel de seguridad frente a ataques de fuerza bruta.

- scrypt: Algoritmo relativamente nuevo que se destaca por su resistencia a ataques de minería de contraseña. Es una buena alternativa a bcrypt.

- PBKDF2: Versátil que puede utilizarse para derivar claves de cifrado a partir de contraseñas.


### Algoritmos de encriptación asimétrica:
- RSA: Ampliamente utilizado para la firma digital y autenticación de comunicaiciones. **No se recomienda para el encriptado directo de contraseña.**

- Elliptic curve cryptography: Una alteranativa más moderna a RSA que ofrece un mayor nivel de seguridad con menos costo computacional. 


## Factores a considerar al elegir un algoritmo de encriptación de contraseñas:

- Nivel de seguridad: El algoritmo debe ofrecer un nivel de seguridad adecuado para el tipo de información que se protege.

- Costo Computacional: El algoritmo debe ser lo suficientemente eficiente como para no afectar el rendimiento del sistema.

- Compatibilidad: El algoritmo debe ser compatible con los sistemas y lenguajes de programación que se utilizan.

- Facilidad de implementación: El algoritmo debe ser fáciñ de implementar y utilizar.

:::tip[¿Qué tener en cuenta a la hora de elegir un algoritmo de encriptado?]

-Almacenamiento de contraseñas: Se recomienda bcrypt o scrypt.

-Autenticación de usuarios: Se recomienda tokens de autenticación y hash de contraseñas.
:::