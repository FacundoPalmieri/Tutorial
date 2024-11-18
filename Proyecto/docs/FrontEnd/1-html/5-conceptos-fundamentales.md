---
sidebar_position: 5
---

# 5- Conceptos Fundamentales de HTML

## Etiquetas y Sintaxis de HTML

### ¿Qué son las Etiquetas de HTML?

Las etiquetas de HTML son comandos que indican al navegador cómo debe mostrar el contenido en la página web. Cada etiqueta tiene un propósito específico y se escribe entre corchetes angulares (< >).

### Sintaxis de HTML
La sintaxis básica de una etiqueta HTML incluye una etiqueta de apertura, contenido y una etiqueta de cierre:

```jsx title=""
<etiqueta>Contenido</etiqueta>
```

```jsx title="Ejemplo"
<p>Este es un párrafo.</p>
```

#### Etiquetas Auto-cerradas
Algunas etiquetas no tienen contenido y se cierran por sí mismas, como: 
<img /> para imágenes 
<br /> para saltos de línea.

### Estructura Básica de un Documento HTML

Un documento HTML típico tiene la siguiente estructura básica:

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Título de la Página</title>
</head>

<body>
<h1>Encabezado Principal</h1>
<p>Este es un párrafo de ejemplo.</p>
</body>

</html>
```

#### Descripción de la Estructura

```jsx title="Ejemplo"

<!DOCTYPE html>: Declara el tipo de documento y la versión de HTML.

<html>: La raíz del documento HTML.

<head>: Contiene metadatos y enlaces a recursos externos.

<body>: Contiene el contenido visible de la página web.
```

[Ir - Elementos Estructurales de HTML](./IntroducciónHTML.md#ElementosEstructuralesdeHTML)



### Elementos Esenciales de HTML

```jsx title="Estructura de la Etiqueta <head>"
<head>: Contiene metadatos sobre el documento HTML, como el título, enlaces a hojas de estilo, scripts y metaetiquetas.

Contenido Común:
- <meta>: Proporciona metadatos como la codificación de caracteres y la configuración de la vista.

- <title>: Define el título de la página que aparece en la pestaña del navegador.

```

<br/><br/>


```jsx title="Etiqueta <meta>"
<meta>: Proporciona metadatos adicionales sobre el documento HTML. No son visibles para los usuarios, pero son importantes para los motores de búsqueda y la configuración del navegador.

Atributos Comunes
- charset: Define la codificación de caracteres del documento.

    <meta charset="UTF-8">

-   name y content: Proporcionan información como la descripción de la página y las palabras clave.

    <meta name="description" content="Descripción de la página web">
    <meta name="keywords" content="HTML, CSS, JavaScript">

Importancia

-   Mejora el SEO al proporcionar descripciones y palabras clave relevantes.
-   Define configuraciones esenciales, como la codificación del documento, para asegurar que el contenido se muestre correctamente en diferentes navegadores.
```
<br/><br/>


```jsx title="Etiqueta <title>"
<title>: Establece el título del documento que se muestra en la barra de título del navegador o en la pestaña.

Importancia:
- SEO: Ayuda a los motores de búsqueda a entender el contenido de la página.
- Usabilidad: Facilita la identificación de la página por parte del usuario.


```

```jsx title="Etiqueta <body>"
<body>: Contiene todo el contenido visible de la página web, como textos, imágenes, videos, enlaces y formularios.

Importancia
- Contenido Principal: Todo lo que se muestra al usuario en la página web se encuentra dentro de `<body>`.

- Interactividad: Elementos interactivos como botones y formularios se colocan en esta sección.

```


<br/><br/>

### Elementos Estructurales de HTML

Los elementos estructurales de HTML son las etiquetas que definen la estructura y contenido de una página web. Cada elemento HTML está representado por una etiqueta, y los más comunes incluyen:

```jsx title=""

<header>: Define un encabezado para el documento o una sección.

<nav>: Contiene enlaces de navegación.

<main>: Representa el contenido principal del documento. ( Por ejemplo: Si armamos una web de venta de autos, el contenido principal serían los autos que se encuentran en venta).

<section>: Define una sección en el documento.

<article>: Representa contenido autónomo.

<footer>: Define un pie de página para el documento o una sección.

```
:::tip[Conclusión]
Comprender los conceptos fundamentales de HTML es esencial para el desarrollo web. Las etiquetas y la sintaxis de HTML proporcionan la estructura básica del documento, mientras que los elementos esenciales como < head >, < title >, < meta > y < body > definen la organización y el contenido de la página web. Estos conocimientos son la base para crear sitios web bien estructurados y accesibles.

:::

### Elementos de Bloque y de Línea en HTML
En HTML, los elementos se clasifican en dos tipos principales:
-   Elementos de bloque.
-   Elementos en línea.

Esta clasificación determina cómo se comportan los elementos en la página web y cómo se organizan dentro del documento.

### Elementos de Bloque

Los elementos de bloque ocupan todo el ancho disponible de su contenedor y siempre comienzan en una nueva línea. Estos elementos se utilizan para estructurar y dividir el contenido en secciones lógicas.

```jsx title=""
<header>, <section>, <article>, <footer>: También Elementos estructurales.
<p>: Párrafos.
<h1> a <h6>: Encabezados.
<div>: Contenedor genérico.
```

Uso Dentro del body
Los elementos de bloque se utilizan para organizar y estructurar el contenido de manera clara y lógica.

```jsx title="Ejemplo"
<body>
    <header>
        <h1>Título Principal</h1>
    </header>
    <section>
        <h2>Subtítulo</h2>
        <p>Este es un párrafo dentro de una sección.</p>
    </section>
    <footer>
        <p>Pie de página del documento.</p>
    </footer>
</body>
```



Importancia de la Jerarquía

**-Accesibilidad:** Ayuda a los usuarios con lectores de pantalla a navegar por el contenido de manera efectiva.

**-SEO:** Los motores de búsqueda utilizan la jerarquía de los encabezados para indexar y entender la estructura del contenido.

**-Organización:** Facilita la lectura y comprensión del contenido al proporcionar una estructura lógica.

<br/><br/>

### Elementos en Línea

Los elementos en línea (inline) no inician una nueva línea y solo ocupan el espacio necesario para el contenido. Se utilizan principalmente para estilizar partes específicas del contenido dentro de un bloque.


```jsx title=""
<a href= ""> enlace </a>  : Hipervínculo.
<span>: Contenedor genérico para texto en línea.
<strong>: Texto importante (negrita).
<em>: Texto enfatizado (cursiva).
<img src= "" alt = ""> : Imagen.
<br>: Salto de línea.
```

Los elementos en línea se utilizan dentro de los elementos de bloque para aplicar estilos específicos o insertar contenido inline.

```jsx title="Uso Dentro del body"
<body>
<p>Este es un párrafo con un <a href="#">enlace</a> y algo de <strong>texto en negrita</strong>.</p>
<p>Otro párrafo con una <em>énfasis</em> en una palabra.</p>
<p>Imagen en línea: <img src="imagen.jpg" alt="Descripción de la imagen"></p>
</body>
```



### Jerarquía de Encabezados

**¿Qué son los Encabezados?**

Los encabezados (< h1 > a < h6 >) se utilizan para definir títulos y subtítulos en el contenido. Representan diferentes niveles de importancia, siendo < h1 > el nivel más alto y < h6 > el más bajo.

:::info[Important]
Una regla que tiene el < h1 > es que se debe tener uno solo por página, ya que es una buena práctica por un tema del SEO y de accesibilidad.
:::

**Importancia de la Jerarquía**

-   Accesibilidad: Ayuda a los usuarios con lectores de pantalla a navegar por el contenido de manera efectiva.

-   SEO: Los motores de búsqueda utilizan la jerarquía de los encabezados para indexar y entender la estructura del contenido.

-   Organización: Facilita la lectura y comprensión del contenido al proporcionar una estructura lógica.



```jsx title="Ejemplo de Uso Correcto"
<body>
<h1>Título Principal</h1>
<h2>Subtítulo de la Sección</h2>
<p>Contenido de la sección...</p>
<h3>Subsección</h3>
<p>Contenido de la subsección...</p>
<h2>Otro Subtítulo de Sección</h2>
<p>Más contenido...</p>
</body>

```

:::tip[Conclusión]
Distinguir entre elementos de bloque y en línea en HTML es fundamental para estructurar y estilizar adecuadamente el contenido web. Mantener una jerarquía lógica de encabezados mejora la accesibilidad y el SEO del sitio, además de facilitar la comprensión del contenido para los usuarios.
:::


<br/><br/>

### Target Blank

target="_blank", hace que se abra en una nueva pestaña o ventana cuando se hace clic en él. Esto puede ser útil para mantener la página principal abierta mientras se consulta o envía un correo electrónico.

![target](/img/targetblank.png)




### Listas

**Listas Ordenadas:** 

```jsx title=""
<ol>
    <li>Batir </li>
    <li>Cocinar </li>
    <li>Comer </li>
</ol>
```


**Listas Desordenadas:** 

```jsx title=""
<ul>
    <li>Agua </li>
    <li>Carne </li>
    <li>Verduras </li>
</ul>
```



### Tablas

```jsx title="Sintaxis"
<table> <!-- Contenedores de la tabla -->
    <tr>   <!--Definen una fila -->
        <th> </th>  <!-- Encabezados -->
        <td> </td>  <!-- Celdas -->
    </tr>
</table>

```


```jsx title="Ejemplo"
<table> 
    <tr>   
        <th> Nombre </th> 
        <th> Ciudad </th> 
        <th> Edad </th> 
 
    </tr>
    <tr>   
        <td> Facu </td> 
        <td> Buenos Aires </td> 
        <td> 32 </td>       
    </tr>
</table>
```


### formularios

```jsx title="Sintaxis"
<form action = "/submit" method="post" > <!-- Etiqueta Contenedora -->
    <label for="nombre"> Nombre: </label> <!--for: Identificador del label-->
    <input type="text" name="nombre" id="nombre"> <!--name: Capturar valor del imput desde el servidor-->
                                                  <!--id: Debe coincidir con el for -->

    <label for="password"> Contrseña:</label>
    <input type="password" name="password" id="password">

    <label for="mensaje"> Mensaje:</label>
    <input type="mensaje" name="mensaje" id="mensaje">

    <label for="genero"> Género:</label>
    <input type="radio" name="" id="">
    <label for="">Hombre</label>

    <input type="radio" name="" id="">
    <label for="">Mujer</label>

    <input type="radio" name="" id="">
    <label for="">Prefiero no decirlo</label>

    <label for="suscribirse"> Suscribirse:</label>
    <input type="checkbox" name="suscribirse" id="suscribirse">

    <label for="pais"> País:</label>
    <select name="" id="">
        <option value="">Argentina</option>
        <option value="">Brasil</option>
        <option value="">Uruguay</option>
    </select>

    <input type="submit" value="enviar">

</form>

```


![formularios](/img/formularios.png)


<br/><br/>

### Rutas Absolutas vs Rutas Relativas

1. Rutas Absolutas

Una ruta absoluta proporciona la ubicación completa de un archivo o recurso, ya sea en la web o en el sistema de archivos. Siempre parte de un punto fijo (como el dominio o la raíz del servidor).

```jsx title="En un sitio web"
<a href="https://www.ejemplo.com/pagina/contacto.html">Contacto</a>
```
-    La URL empieza desde el dominio completo https://www.ejemplo.com.


```jsx title="En un proyecto"
<link rel="stylesheet" href="/assets/css/estilos.css">

```
-    Aquí, la ruta absoluta empieza desde la raíz / del servidor.



2. Rutas Relativas

Una ruta relativa es relativa a la ubicación actual del archivo que la referencia. No comienza desde un dominio o raíz, sino desde el directorio actual o un nivel superior.

```jsx title="En un sitio web"
<a href="contacto.html">Contacto</a>

```
-    contacto.html está en el mismo directorio que la página actual.


```jsx title="En un proyecto"
<script src="../js/funciones.js"></script>

```
-    Aquí ../ indica "subir un nivel" desde el directorio actual antes de buscar el archivo funciones.js.

