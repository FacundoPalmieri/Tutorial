---
sidebar_position: 9
---

# 9 - APIs

## ¿Qué son las APIs?
Una API (application programming interface) es un conjunto de funciones y procedimientos (métodos) que se usan para diseñar e integrar el software de diferentes aplicaciones. Esto permite que, dos aplicaciones se puedan comunicar entre sí, por más que estén desarrolladas en lenguajes de programación completamente distintos.

Por ejemplo, supongamos el diseño de una API para un servicio meteorológico. Ésta podría solicitar que el usuario escribiera un código postal, lo envíe desde el cliente (Navegador web) y que el servidor diera una respuesta en dos partes: la primera sería la temperatura máxima y la segunda, la mínima. Esta consulta no la podría hacer solo una aplicación cliente, sino varias.

La forma más común de implementación de una API es mediante REST (Representational State Transfer), el cual es un tipo de servicio que se caracteriza por no tener estado alguno y por lograr interconexiones mediante el protocolo HTTP con mensajes de tipo XML o JSON. Un ejemplo de la interacción de una Api puede verse en la Ilustración.

![apis](/img/apis.png)

:::tip
💡 En resumen, podemos decir que todas las capas que vimos en el módulo anterior forman una API REST.
- Controller.
- Service.
- Entity.
- Dto.
- Respository.
:::