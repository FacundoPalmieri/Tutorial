---
sidebar_position: 1
---

# 1 - Conceptos Básicos
----

## ¿Qué es el CSS?

El CSS en español «Hojas de estilo en cascada» está definido como un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.

Durante el curso se estará usando el CSS como el lenguaje de estilos para ser aplicado al HTML. En esta sección se estará usando términos cómo:

**Estilo:** Atributos que se le asignan al HTML para darle un estilo particular.

**Reglas:** Características que deben cumplir las sentencias a la hora de crear la hoja de estilos.

**Medidas:** Valores que se le asignan a cada atributo para que tomen un tamaño.

Ejemplo:

Es como un humano, HTML se usa para crear la estructura de la web (huesos), CSS para darle el estilo (rasgos de las personas, ya sea color de ojos, pelo, etc.)

![htmlcss](/img/htmlcss.png)


## Sintaxis

La sintaxis en CSS se compone de:
**-   Selector:** Apunta al elementos HTML a estilizar.

**-   Propiedad:** Aspecto que queremos cambiar. Ej : Tamaño, color, etc..

**-   Valor:** Simplemente el valor que queremos que tome.


```jsx title="sintaxis"
selector {
    propiedad: valor
}
```



## Como se aplica CSS

CSS puede aplicarse de tres formas principales:



**1.  Externo (External CSS):** Se escribe en un archivo separado (styles.css) y se vincula al HTML.

```jsx title="index.html"
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS --> 
    <link rel="stylesheet" href="styles.css">

    <title>E-commerce</title>
</head>

```

Supongamos que tenemos en index.html un párrafo y queremos ponele un color azul.


```jsx title="index"
<p>Este es un párrafo</p>
```

```jsx title="style"
p {
    color : blue;
}
```


**2. Interno (Internal CSS):** Se incluye en la misma página, dentro de etiquetas < style >

```jsx title="index.html"
<style>
    p {
       color : blue;
    }
</style>

```

**3. En línea (Inline CSS):** Se escribe directamente en el elemento HTML.

```jsx title="index.html"
<p style="color: blue;">Este es un párrafo</p>
```


**Vinculación Externa**
-   Pros: Reutilización, mantenimiento sencillo, separación de contenido.

-   Contras: Requiere solicitudes HTTP adicionales.

**Inserción Interna**
-   Pros: Menos solicitudes HTTP, conveniente para estilos específicos de una página.

-   Contras: No reutilizable, difícil de mantener en grandes cantidades.

**Estilos en Línea**
-   Pros: Aplicación rápida y específica, no requiere < head >.

-   Contras: No reutilizable, difícil de mantener, alta especificidad.

:::tip[Conclusión]
Elegir la forma adecuada de insertar CSS en un documento HTML depende del contexto y las necesidades del proyecto. La vinculación externa es ideal para proyectos grandes con múltiples páginas, la inserción interna es útil para estilos específicos de una sola página, y los estilos en línea son mejores para ajustes rápidos y específicos. Comprender las ventajas y desventajas de cada método permite aplicar CSS de manera eficiente y organizada.
:::


### Formas de especificar colores

- Nombre de color
- Hexadecimal
- rgb (red - green - blue)
- rgba (red - green - blue- alpxa[opasicidad])

Ejemplo para color Azul

```jsx title="Nombre de color"
p {
   color : blue;
}

```

```jsx title="Hexadecimal"
p {
   color : #B2D6F9;
}

```

```jsx title="rgb"
p {
   color : rgb(0,0,255);
}

```


```jsx title="rgba"
p {
   color : rgb(0,0,255, 0.5);
}

```
:::tip
**Desde esta se puede buscar los códigos Hexadecimales y RGB**

**https://htmlcolorcodes.com/es/**
:::



### Formas de especifiar tamaños

Hay diferentes unidades de medida

- Pixeles (px)
- em
- rem
- porcentaje (%)


**1. Pixeles (px)**

**Qué es:** Una unidad fija que representa un punto en la pantalla.

**Cuándo usarla:** Ideal para elementos que necesitas que tengan un tamaño específico y constante.

```jsx title="Ejemplo"
p {
    font-size: 16px; /* El tamaño del texto será exactamente 16 píxeles */
}

```
<br/><br/>

**2. em**
**Qué es:** Una unidad relativa al tamaño de la fuente del elemento padre.

**Cuándo usarla:** Cuando quieres que los tamaños cambien en función del tamaño del texto en el contexto del elemento.


```jsx title="Ejemplo"


body {
    font-size: 16px; /* Tamaño base */
}
h1 {
    font-size: 2em; /* 2 veces el tamaño base, es decir, 32px */
}

```

<br/><br/>

**3. rem (Root em)**

**Qué es:** Similar a em, pero en este caso, se basa en el tamaño de la fuente del elemento raíz (html).

**Cuándo usarla:** Para diseños consistentes en los que todo esté relacionado al tamaño raíz, sin depender de elementos padres.


```jsx title="Ejemplo"

html {
    font-size: 16px; /* Tamaño raíz */
}

p {
    font-size: 1.5rem; /* 1.5 veces 16px = 24px */
}

```


<br/><br/>

**4. Porcentaje (%)**

**Qué es:** Una unidad relativa basada en un valor del elemento padre (como ancho, alto, fuente, etc.).

**Cuándo usarla:** Para diseños flexibles o responsivos.

```jsx title="Ejemplo"
div {
    width: 50%; /* El ancho será el 50% del contenedor padre */
}
```

![tamañoscss](/img/tamañoscss.png)

:::tip
Generalmente los textos se van a encontrar en pixeles,  y todo lo que refiera al alto y ancho con porcentajes
:::


<br/><br/>



## Padres e Hijos & Herencia y cascada.

**Analogía con las Mamushkas**

Imaginá que los elementos HTML son como las famosas muñecas rusas conocidas como mamushkas. Cada muñeca puede contener otra más pequeña en su interior, y así sucesivamente. De manera similar, en HTML, los elementos pueden contener otros elementos dentro de ellos, creando una relación de padres e hijos.

**Elementos Padres e Hijos**
-   Elemento Padre: Es un elemento que contiene a uno o más elementos dentro de él.

-   Elemento Hijo: Es un elemento que está contenido dentro de otro elemento.


**Herencia de Estilos en CSS**

En CSS, los estilos aplicados a un elemento padre pueden ser heredados por sus elementos hijos. Esto significa que si aplicas un estilo a un elemento padre, sus hijos también podrán recibir ese estilo, a menos que se indique lo contrario.

En este ejemplo, todos los textos dentro del < section > se mostrarán en color azul y con la fuente Arial, porque estos estilos se aplican al elemento padre y se heredan a los hijos.

```jsx title="Ejemplo de Herencia"
<section> <!-- Elemento Padre -->
    <article> <!-- Elementos hijos -->
        <h2>Título</h2>
        <p>Lorem ipsum dolor sit amet...</p>
    </article>
</section>

```


```jsx title="Style.css"
/* Estilo aplicado al elemento padre <section> */
section {
color: blue;
font-family: Arial;
}

```


### Aplicar Estilos Específicos a los Elementos Hijos

Es posible aplicar estilos específicos a los elementos hijos sin alterar los estilos del elemento padre. Esto se logra utilizando selectores de elementos hijos en CSS.


En este caso:

-   El < section > y todos sus elementos hijos tendrán el texto en color azul y la fuente Arial.

-   El < h2 > dentro del < section > tendrá un color rojo y un tamaño de fuente de 24px, sobrescribiendo el color azul heredado.

-   El < p > dentro del < section > tendrá un tamaño de fuente de 16px.

```jsx title="index.html"
<main>
    <section>
        <article>
            <h2>Título</h2>
            <p>Lorem ipsum dolor sit amet...</p>
        </article>
    </section>
</main>
```

```jsx title="style.css"
/* Estilo aplicado al elemento padre <section> */
main section {
color: blue;
font-family: Arial, sans-serif;
}

/* Estilo específico para el elemento hijo <h2> */
main section h2 {
color: red;
font-size: 24px;
}

/* Estilo específico para el elemento hijo <p> */
main section p {
font-size: 16px;
}

```

![herenciacss](/img/herenciacss.png)

:::tip
Se recomienda siempre empezar desde la etiqueta padre, posterior al Body. Ejemplo comenzar a recorrer las etiquetas desde el :
-   Header
-   Main
-   footer
:::

------

## Selectores y Propiedades

### Selectores

**1. ¿Qué son los Selectores?**

Un selector en CSS es la forma en que indicas qué elementos de tu HTML quieres estilizar.


**Tipos Comunes de Selectores**

**-   Selector de Etiqueta (Tag Selector):** Aplica estilos a todas las etiquetas de un tipo específico.

```jsx title=""
p {
    color: blue; /* Cambia el color de todo el texto en etiquetas <p> a azul */
}

```

<br/><br/>

**-   Selector de Clase (.class):** Aplica estilos a los elementos que tienen una clase específica.

```jsx title="css"
.destacado {
    font-weight: bold; /* Hace el texto en negrita a los elementos HTML con class "destacado" */
}
```

```jsx title="html"
<p class="destacado">Texto importante</p>

```
<br/><br/>

**-   Selector de ID (#id):** Aplica estilos a un elemento con un ID único.

```jsx title="css"
#titulo {
    text-align: center; /* Centra el texto a los elementos HTML con ID "titulo"*/
}
```
```jsx title="html"
<h1 id="titulo">Mi Título</h1>

```
:::danger[Importante]
**No es buena práctica usar ID en CSS. Generalmente se usan:**
 -  Etiquetas y clases para CSS.
 -  ID para JavaScript.
:::
<br/><br/>

**-   Selector Universal (*):** Aplica estilos a todos los elementos.

```jsx title="css"
* {
    margin: 0; /* Elimina los márgenes de todos los elementos */
}
```
<br/><br/>

**-   Selectores Combinados:**
    -   Hijo directo:

    ```jsx title=""
    div > p {
    color: red; /* Aplica a <p> que son hijos directos de <div> */
    }

    ```

    -   Descendiente:

    ```jsx title=""
    div p {
    color: green; /* Aplica a todos los <p> dentro de <div>, sin importar su nivel */
    }
    ```

<br/><br/>

### Propiedades

**2. ¿Qué son las Propiedades?**

Las propiedades definen los estilos específicos que quieres aplicar. Cada propiedad tiene un valor.

**Ejemplo de Propiedades Comunes**

### 1. Propiedades de Texto:

    ```jsx title="color: Cambia el color del texto."
    p {
        color: blue;
    }
    ```

    ```jsx title="font-size: Cambia el tamaño de la fuente. "
    h1 {
        font-size: 24px;
    }
    ```

    ```jsx title="font-family: Define la fuente del texto."
    body {
        font-family: Arial, sans-serif; /* Usa Arial o una fuente similar */
    }
    ```

    

    ```jsx title="text-align: Alinea el texto"
    h1 {
        text-align: center; /* Centra el texto */
    }
    ```

   

    ```jsx title="text-transform: Controla las mayúsculas y minúsculas."
    p {
        text-transform: uppercase; /* Convierte el texto a mayúsculas */
    }
    ```

    ```jsx title="text-transform: Elimina la decoración o subrayado"
    p {
            text-decoration: none;
    }
    ```


<br/><br/>

### 2. Propiedades de Fondo


    ```jsx title="background-color: Cambia el color de fondo"
    body {
        background-color: lightgray; /* El fondo será gris claro */
    }
    ```

 

    ```jsx title="background-image: Añade una imagen de fondo"
    div {
     background-image: url('imagen.jpg'); /* Usa 'imagen.jpg' como fondo */
    }
    ```

    ```jsx title="background-image: No repitirá la imagen en caso que no cubra todo"
    div {
     background-repeat: no-repeat;
    }
    ```


    ```jsx title="background-size: Ajusta el tamaño de la imagen de fondo."
    div {
        background-size: cover; /* La imagen cubrirá todo el área */
    }
    ```

    ```jsx title="background-size: Centra la imagen"
    div {
         background-position: center;
    }
    ```

<br/><br/>

### 3. Propiedades de Espaciado

    ```jsx title="margin: Espacio exterior de un elemento."
    div {
     margin: 10px; /* Espacio de 10px fuera del elemento */
    }

    ```

    ```jsx title="padding: Espacio interior de un elemento."
    div {
        padding: 15px; /* Espacio de 15px dentro del elemento */
    }
    ```

<br/><br/>

### 4. Propiedades de Bordes

   
    ```jsx title="border: Define el borde de un elemento."
    div {
        border: 2px solid black; /* Borde negro sólido de 2 píxeles */
    }
    ```

    

    ```jsx title="border-radius: Redondea las esquinas."
    div {
        border-radius: 10px; /* Esquinas redondeadas de 10px */
    }
    ```

<br/><br/>

### 5. Propiedades de Dimensiones

    ```jsx title="width: Define el ancho del elemento."
    img {
        width: 100%; /* La imagen ocupará todo el ancho */
    }
    ```

    ```jsx title="height: Define la altura del elemento."
    img {
        height: 200px; /* La imagen tendrá 200 píxeles de alto */
    }
    ``` 



<br/><br/>

### 6. Propiedades de Posicionamiento



    ```jsx title="position: Controla la posición del elemento"
    div {
        position: absolute;
        top: 50px;
        left: 100px; /* El elemento estará a 50px del borde superior y 100px del izquierdo */
    }
    ```

    


    ```jsx title="z-index: Controla la superposición de elementos."
    div {
        position: relative;
     z-index: 10; /* Este elemento estará encima de otros con menor z-index */
    }
    ```

<br/><br/>

### 7. Propiedades de Imagenes

**object-fit: cover**

La propiedad object-fit define cómo un elemento, como una imagen o un video, debe ajustarse a su contenedor. Es particularmente útil para asegurarte de que las imágenes mantengan su proporción y llenen completamente un contenedor sin distorsionarse ni pixelarse.


Cuando se aplica **object-fit: cover**, le indicamos al navegador que la imagen o el video debe:

-   Llenar completamente el contenedor.

-   Mantener sus proporciones originales (no se deforma).

-   Recortar el contenido sobrante si es necesario para ajustarse al tamaño del contenedor.


#### Ventajas de object-fit: cover

**Evita distorsiones:** La imagen siempre mantiene su relación de aspecto original.

**Diseño atractivo:** Se asegura de que el contenedor esté completamente lleno, eliminando espacios vacíos.

**Mejor experiencia visual:** Evita imágenes pixeladas al escalarlas incorrectamente.

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object-Fit: Cover</title>
    <style>
        .image-container {
            width: 300px;
            height: 200px;
            overflow: hidden; /* Esconde el contenido recortado */
            border: 2px solid #333;
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* La magia ocurre aquí */
        }
    </style>
</head>
<body>
    <h1>Ejemplo con `object-fit: cover`</h1>
    <div class="image-container">
        <img src="https://via.placeholder.com/600x400" alt="Ejemplo de imagen">
    </div>
</body>
</html>

```

#### Cómo Funciona

**1.    El contenedor:** Tiene un tamaño fijo de 300px por 200px.

**2.    La imagen:** Se escala para llenar completamente el contenedor.
    -   Si la proporción de la imagen no coincide con el contenedor, se recorta el contenido sobrante.

**3.    Resultado:** La imagen se ve limpia, centrada y sin deformaciones.


<br/><br/>

-----

## Reset del CSS

El reset de CSS es una técnica que elimina o estandariza los estilos predeterminados que los navegadores aplican a los elementos HTML. Esto es útil porque los navegadores tienen diferentes configuraciones por defecto, lo que puede causar inconsistencias en cómo se ve una página web en distintos navegadores.

**¿Por qué usar un reset de CSS?**

**- Estandarización:** Permite que todos los elementos comiencen con los mismos estilos básicos en cualquier navegador.

**- Control Total:** Puedes aplicar tus propios estilos sin interferencias de los estilos predeterminados.

**- Consistencia:** Ayuda a que el diseño se vea igual en Chrome, Firefox, Safari, Edge, etc.


```jsx title="Ejemplo"
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Hace que las dimensiones incluyan bordes y rellenos */
}

body {
    line-height: 1; /* Resetea el interlineado */
    font-family: Arial, sans-serif; /* Fuente estándar */
}
```


## Texto y Tipografía

Para usar distitnos estilos tipográficos podemos utilizar algunas que están por defecto en nuestro editor de código:

![tipografia](/img/tipografia1.png)

En caso que quisieramos utilizar otra, podemos utilizar otras desde Google Fonts 


-   Ingresamos a  https://fonts.google.com/

-   Identificamos la fuente que queremos

![tipografia2](/img/tipografia2.png)


-   Seleccionamos Get font

![tipografia3](/img/tipografia3.png)

-   Podremos descargarla o agregar al proyecto (Se mostrará esta  opción).

![tipografia4](/img/tipografia4.png)

-   Desde nuestro archivo CSS incorporaremos el enlace

![tipografia5](/img/tipografia5.png)

```jsx title="css"
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Hace que las dimensiones incluyan bordes y rellenos */
}


/* Fuente Tipográfica Externa */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

```

- Google Fonts también nos proveé el valor a la propiedad.

    ![tipografia6](/img/tipografia6.png)


```jsx title="css"

/* Estilo aplicado al elemento padre <section> */
section {
    color: blue;
    font-family:"Orbitron", sans-serif;  /*Se agrega la tipografía
    }
    
    /* Estilo específico para el elemento hijo <h2> */
    section h2 {
    color: red;
    font-size: 24px;
    }
    
    /* Estilo específico para el elemento hijo <p> */
    section p {
    font-size: 16px;
    }
}

```

  ![tipografia7](/img/tipografia7.png)
















