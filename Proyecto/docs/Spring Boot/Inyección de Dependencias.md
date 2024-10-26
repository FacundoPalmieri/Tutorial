---
sidebar_position: 8
---

# 8 - Inyección de dependencias

## ¿Qué es la inyección de dependencias?
La inyección de dependencias, o mejor conocida como DI (dependency inyection por sus siglas en inglés), es un patrón de diseño que está orientado al manejo de los objetos de una aplicación. Su principal objetivo es el de mantener las capas de una aplicación lo más desacopladas posible entre sí.

Para poder lograr esto, la inyección de dependencias permite que cada una de las partes del programa que se esté desarrollando sea independiente y que no se comuniquen entre si mediante instancias, sino mediante interfaces.

Se entiende entonces que la inyección de dependencias busca desacoplar lo máximo posible la relación entre clases o capas, pero… ¿Qué es una dependencia? Una dependencia es una relación que puede existir entre una o varias clases, donde generalmente una (o varias) dependen de otra principal.

![Dependencias1](/img/dependencias1.png)

¿Cómo se representa esto a nivel código? Supongamos que tenemos el modelado de un lavadero de autos, donde existe una clase llamada ServicioLavado de la cual dependen otras dos clases, ServicioNormal y ServicioPremiun, tal como puede verse gráficamente a continuación:

![Dependencias2](/img/dependencias2.png)

Como vemos, ServicioNormal y ServicioPremium dependen fuertemente de ServicioLavado. Esto, a nivel código podríamos verlo reflejado de la siguiente manera: 

```jsx title="Ejemplo"
public class ServicioLavado {
    ServicioNormal serviNorm; // Genero dependencia
    ServicioPremium serviPrem; // Genero dependencia
}
```

Como se puede ver en ambas imágenes, tanto ServicioNormal como ServicioPremiun dependen de ServicioLavadado y es ésta clase quien tiene la responsabilidad de inicializar a ambos servicios en su constructor, sin embargo, si aplicáramos inyección de dependencias, podríamos delegar esta responsabilidad que tiene ServicioLavado a otra clase, como por ejemplo, la clase main que tengamos en el proyecto.

Ahora bien, ¿Cómo se aplica la inyección de dependencias? Existen diferentes maneras de hacerlo, sin embargo hay 3 que son las más comunes:

- Mediante un constructor
- Mediante un setter
- Mediante la Annotation @Autowired

## Inyección de dependencias mediante un Constructor
En la inyección de dependencias mediante un constructor, es el propio constructor de una clase el encargado de inyectar la dependencia.

```jsx title="Ejemplo"
public class ServicioLavado {
    ServicioNormal serviNorm; // Genero dependencia
    ServicioPremium serviPrem; // Genero dependencia

    public ServicioLavado(ServicioNormal serviNorm, ServicioPremium serviPrem){
        this.serviNorm = serviNorm;
        this.serviPrem = serviPrem;
    }
}
```

## Inyección de dependencias mediante un Setter
Los métodos getter y setter nos permiten obtener o setear valores a los atributos de los objetos que sean creados, de igual manera los métodos set nos permiten inyectar dependencias, donde a partir de la recepción de un objeto como un parámetro este se asigna.

```jsx title="Ejemplo"
public class ServicioLavado {
    ServicioNormal serviNorm; // Genero dependencia
    ServicioPremium serviPrem; // Genero dependencia

    public void setServiNorm(ServicioNormal serviNorm){
        This.serviNorm = ServiNorm;
    }

     public void setServiPrem(ServicioPremium serviPrem){
        This.serviPrem = ServiPrem;
    }
}
```


## Inyección de Dependencias mediante @Autowired

Así como en Java se pueden inyectar dependencias de forma genérica mediante setters o constructores, Spring como framework ofrece una anotación específica para hacerlo: @Autowired.

:::tip
En nuestros proyectos, usaremos principalmente esta anotación para manejar las dependencias entre componentes.
:::

Como vimos en el módulo anterior, la capa "Controller" se comunica con la capa "Service". Para que el controller pueda interactuar con el service, necesitamos inyectar esa dependencia.

Con la anotación @Autowired, esto se vería así:

```jsx title="Ejemplo"
@RestController
public class CursoController {

    @Autowired
    private ICursoService cursoService;

    // Endpoints...

}
```
Gracias a esta inyección de dependencias, el controlador puede llamar al objeto cursoService y acceder a sus métodos mediante los endpoints definidos.
