---
sidebar_position: 1
---

# 2 - Box Model y FlexBox

---------
## **Box Model** 


## Detalle de las Cuatro Partes Principales del Box Model.

El Box Model es un concepto fundamental en CSS que describe cómo se colocan y se dimensionan los elementos HTML en una página web. 

Comprender las cuatro partes principales del Box Model es esencial para controlar el tamaño y el espaciado de los elementos.

**El Box Model es la estructura básica de diseño en CSS. Cada elemento en una página web se trata como una caja rectangular y su tamaño y posición se determinan por las siguientes propiedades:**
    -   content
    -   padding
    -   border
    -   margin

<br/><br/>

###  Content

El contenido (content) es el área donde se muestra el contenido del elemento, como texto, imágenes o otros elementos embebidos.
```jsx title="Ejemplo"
<div class="content-box">Contenido del elemento</div>
```
![content](/img/content.png)

<br/><br/>

### Padding

El relleno (padding) es el espacio entre el contenido del elemento y su borde. El padding expande el tamaño del elemento sin afectar a otros elementos adyacentes.

```jsx title="Ejemplo"
<div class="padding-box">Contenido con Padding</div>
```

```jsx title="Ejemplo"
.padding-box {
    width: 200px;
    height: 100px;
    background-color: lightgray;
    padding: 20px;
}
```
Aquí, el padding de 20px agrega espacio alrededor del contenido dentro del elemento, aumentando su tamaño visual sin cambiar las dimensiones definidas por width y height.

![padding](/img/padding.png)

<br/><br/>

### Border

El borde (border) es una línea que rodea el padding (si existe) y el contenido del elemento. El borde también aumenta el tamaño total del elemento.

:::info[important]
Esta propiedad lleva 3 valores:
    -    Tamaño.
    -    Estilo.
    -    Color.
:::

Distintos tipos de bordes:
    -   **solid :** Línea Continua.
    -   **dashed:** Línea discontinua con guiones.
    -   **dotted:** Línea formada por puntos.
    -   **double:** Dos líneas paralelas con un espacio entre ellas.
    -   **groove:** Apariencia de un borde tallado o en relieve, basado en la iluminación.
    -   **ridge :** Apariencia de un borde elevado, lo opuesto a groove.
    -   **inset :** Hace que el borde parezca empotrado en el elemento (hacia adentro).
    -   **outset:** Hace que el borde parezca sobresalir del elemento (hacia afuera).
    -   **none  :** Sin borde
    -   **hidden:** Similar a none, pero afecta al diseño de tablas (oculta bordes sin alterar el modelo de caja).


![border2](/img/border2.png)

```jsx title="Ejemplo"
<div class="border-box">Contenido con Border</div>
```

```jsx title="Ejemplo"
.border-box {
    width: 200px;
    height: 100px;
    background-color: lightgray;
    padding: 20px;
    border: 5px solid black;
}
```

En este caso, el borde de 5px rodea el padding y el contenido, incrementando el tamaño visual del elemento.

![border](/img/border.png)




<br/><br/>

### Margin

El margen (margin) es el espacio fuera del borde del elemento. El margen no afecta el tamaño del elemento, pero sí crea espacio entre el elemento y otros elementos adyacentes.

```jsx title="Ejemplo"
<div class="margin-box">Contenido con Margin</div>
```

```jsx title="Ejemplo"
.margin-box {
    width: 200px;
    height: 100px;
    background-color: lightgray;
    padding: 20px;
    border: 5px solid black;
    margin: 30px;
}
```

En este ejemplo, el margen de 30px crea espacio adicional alrededor del borde del elemento, separándolo de otros elementos circundantes.


![margin](/img/margin.png)

<br/><br/>

## Efecto en el Tamaño y Espaciado

### Tamaño del Elemento
El tamaño total del elemento se calcula sumando el contenido, el padding, el borde y el margen. La fórmula es:

```jsx title="Ejemplo"
Tamaño total = width + padding izquierdo + padding derecho + borde izquierdo + borde derecho + margin izquierdo + margin derecho
```

Ejemplo

```jsx title="Ejemplo"
<div class="box-model">Box Model Completo</div>
```

```jsx title="Ejemplo"
.box-model {
    width: 200px;
    height: 100px;
    background-color: lightgray;
    padding: 20px;
    border: 5px solid black;
    margin: 30px;
}
```

En este ejemplo, el tamaño total visual del elemento sería:

Ancho total = 200px (content) + 40px (padding) + 10px (border) + 60px (margin) = 310px

Alto total = 100px (content) + 40px (padding) + 10px (border) + 60px (margin) = 210px


:::tip[Conclusión]
**El padding determina el espacio del border hacia adentro, es decir, cómo generar más espacio entre el content.** 

**El border; y el margin es la separación del border hacia afuera.**
:::



## Display y position

La propiedad display en CSS es una de las más importantes para controlar cómo se muestran los elementos HTML en una página web. A continuación, se explican los valores :

-   display: block.

-   display: inline.

-   display: inline-block.


### display: block.

El valor block hace que un elemento se comporte como un bloque. Los elementos de bloque ocupan todo el ancho disponible de su contenedor y comienzan en una nueva línea.

```jsx title="Por defecto, los siguientes elementos son de tipo bloque"
<div>,
<p>, 
<h1> - <h6>, 
<section>, 
<article>, 
<header>, 
<footer>.
```

```jsx title="html"
<div class="block-element">Elemento de Bloque</div>
<p class="block-element">Este es un párrafo.</p>
```


```jsx title="css"
.block-element {
        display: block;
    width: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: lightblue;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    font-size: 16px;
}

```

![display-block](/img/display-block.png)


Si utilizamos un elemento en bloque, como puede ser un < h2 >, por más que tengas poco material en el content (término del cual hablamos antes), por defecto va a ocupar el 100% de la pantalla.

De igual forma, ten en cuenta que todo esto podemos cambiarlo, recuerda que con CSS podemos modificar todo lo que este referido a estilos.


### display: inline.

El valor inline hace que un elemento se comporte como un elemento en línea. Los elementos en línea no comienzan en una nueva línea y solo ocupan el espacio necesario para su contenido, todo lo contrario que en el display: block .

:::info[important!]
en un elemento con este tipo de display, no se puede aplicar margin, padding, height ni width.
:::

```jsx title="Por defecto, los siguientes elementos son de tipo línea"
<span>, 
<a>, 
<img>, 
<strong>, 
<em>.
```
```jsx title="html"
<span class="inline-element">Elemento en Línea</span>
<a href="#" class="inline-element">Enlace</a>
```


```jsx title="css"
.inline-element {
    display: inline;
    color: red;
    font-weight: bold;
}

```


![display-inline](/img/display-inline.png)

En este ejemplo, los elementos < span > y  < a > se muestran en línea, ocupando solo el espacio necesario para su contenido y permitiendo que otros elementos se alineen a su lado en la misma línea.


### display: inline-block

El valor inline-block combina características de los elementos en línea y de bloque. 
Un elemento con display: inline-block se muestra en línea con otros elementos, pero permite definir dimensiones como ancho y alto, similares a un elemento de bloque.


```jsx title="html"
<div class="inline-block-element">Elemento Inline-Block</div>
```


```jsx title="css"
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 100px;
    background-color: lightgreen;
    margin: 10px;
}

```

![display-inline-block](/img/display-inline-block.png)



En este ejemplo, el elemento < div > se muestra en línea con otros elementos, pero permite definir su tamaño y aplicar márgenes, comportándose como un bloque dentro de una línea.

Este tipo de display es muy útil, ya que si queremos que un elemento solamente ocupe el ancho de su contenido (display: inline) pero necesitamos a su vez aplicarle margin, padding, height o width, podemos usarlo. En conclusión, nos permite usar margin y padding, darle un width y un height, y el elemento entonces ocupará el tamaño de su contenido.


### Comparación de los Valores display

#### block

-   Ocupación de Ancho Completo: Ocupa todo el ancho disponible.

-   Nueva Línea: Siempre comienza en una nueva línea.

-   Dimensiones: Permite definir ancho y alto.

<br/>

#### inline

-   Ocupación de Espacio Necesario: Solo ocupa el espacio necesario para su contenido.

-   Misma Línea: Permite que otros elementos se alineen en la misma línea.

-   Dimensiones: No permite definir ancho y alto.

<br/>

#### inline-block

-   Comportamiento Híbrido: Se alinea en línea con otros elementos pero permite definir dimensiones.

-   Dimensiones: Permite definir ancho y alto.

-   Misma Línea: Permite que otros elementos se alineen en la misma línea.


## Propiedades de Posicionamiento en CSS

El posicionamiento en CSS es fundamental para controlar cómo se colocan los elementos en una página web.
A continuación, se describen las diferentes propiedades de posicionamiento: 
-   position: static.
-   position: relative.
-   position: absolute.
-   position: fixed.
-   position: sticky. 

### position: static.

Es el valor por defecto. Los elementos con este valor se posicionan según el flujo normal del documento, sin afectar otros elementos.

#### Uso
Se utiliza cuando no se necesita un posicionamiento especial.

En este ejemplo, el elemento < div > se posiciona de acuerdo al flujo normal del documento.
```jsx title="html"
<div class="static-box">Elemento Estático</div>
```
```jsx title="css"
.static-box {
    position: static;
    display: block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}
```

![static](/img/static.png)

<br/><br/>

### position: relative.

Posiciona el elemento en relación con su posición original en el flujo del documento. Se pueden usar las propiedades top, right, bottom y left para desplazar el elemento.

Esta propiedad permite mover el elemento en cualquier dirección y que este no pierda su espacio en el documento.

#### Uso
Útil para desplazar un elemento ligeramente desde su posición original sin sacarlo del flujo del documento.

En este ejemplo, el elemento < div > se desplaza 20px hacia abajo y 10px hacia la derecha desde su posición original.

```jsx title="html"
<div class="relative-box">Elemento Relativo</div>
```
```jsx title="css"
.relative-box {
    position: relative;
    top: 20px;
    left: 10px;
    background-color: lightblue;
    padding: 10px;
}
```

![relativo](/img/relativo.png)

<br/><br/>

### position: absolute.

posiciona el elemento en relación con el primer ancestro posicionado (no estático). El elemento se elimina del flujo del documento, permitiendo que otros elementos ocupen su lugar.

#### Uso
Se usa para colocar un elemento en una ubicación exacta dentro de su contenedor posicionado.

En este ejemplo, el elemento < div class="absolute-box"> se posiciona 50px desde la parte superior y 50px desde la izquierda del contenedor relativo.

```jsx title="html"
<div class="container">
    <div class="absolute-box">Elemento Absoluto</div>
</div>
```
```jsx title="css"
.container {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: lightgray;
}

.absolute-box {
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: lightcoral;
    padding: 10px;
}
```
![abosulte](/img/absolute.png)

<br/><br/>

### position: fixed

Posiciona el elemento en relación con la ventana del navegador. El elemento se mantiene en la misma posición incluso cuando se desplaza la página.

#### Uso
Ideal para elementos que deben estar siempre visibles, como menús de navegación o icono de whatsapp.

En este ejemplo, el elemento < div class="fixed-box"> se mantiene en la esquina superior derecha de la ventana del navegador, incluso al desplazarse

```jsx title="html"
<div class="fixed-box">Elemento Fijo</div>
```
```jsx title="css"
.fixed-box {
    position: fixed;
    top: 0;
    right: 0;
    background-color: lightgreen;
    padding: 10px;
}
```

![fixed](/img/fixed.png)

<br/><br/>

### position: sticky

Alterna entre relative y fixed dependiendo del desplazamiento de la página. El elemento se comporta como relative hasta que su contenedor alcanza una posición de desplazamiento específica, momento en el que se comporta como fixed.

#### Uso
Útil para encabezados de tablas o menús dentro de una sección, que deben quedarse fijos después de desplazarse una cierta distancia.

:::info[important!]
sticky está limitado al contenedor padre y no siempre se mantiene visible.
:::

En este ejemplo, el elemento < div class="sticky-box"> se mantiene a 10px del borde superior de la ventana del navegador cuando se desplaza, hasta que se alcanza el final de su contenedor.

```jsx title="html"
<div class="sticky-container">
    <div class="sticky-box">Elemento Sticky</div>
    <p>Contenido de ejemplo...</p>
</div>
```
```jsx title="css"
.sticky-container {
    height: 1000px;
    background-color: lightyellow;
}

.sticky-box {
    position: sticky;
    top: 10px;
    background-color: lightpink;
    padding: 10px;
}
```

![sitcky](/img/sticky.png)

<br/><br/>

-------------------------------------------------------------------------------------------------

## **Flex Box** 

## Propiedades Principales de Flexbox para el Contenedor
Flexbox es un modelo de diseño en CSS que facilita la creación de layouts (Disposición de los elementos en una página) flexibles y eficientes. Se centra en el uso de un contenedor flexible (flex container) y elementos hijos flexibles (flex items). Esto nos permitirá organizar los elementos de nuestra web de una forma más dinámica, y servirá a futuro para adaptar tu sitio a distintos dispositivos.

:::tip
**Trabaja con elementos Hijos, pero el estilo debe aplicarse al padre.**
:::

A continuación, se explican las propiedades principales que se aplican al contenedor flex, junto con ejemplos de código CSS.

### display: flex

La propiedad **display: flex** define un contenedor como un flex container y habilita el uso de todas las propiedades Flexbox en sus elementos hijos.


```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container { 
    display: flex; 
    background-color: lightgray; 
}
```

En este ejemplo, el contenedor < div class="flex-container"> se convierte en un flex container, permitiendo que sus hijos se comporten como flex items.

![flex-container](/img/flex-container.png)

<br/><br/>


### flex-direction

La propiedad flex-direction especifica la dirección en la que los elementos flexibles (flex items) se colocan dentro del contenedor.

#### Valores

-   row (valor por defecto): Los elementos se colocan en una fila horizontal.

-   row-reverse: Los elementos se colocan en una fila horizontal en orden inverso.

-   column: Los elementos se colocan en una columna vertical.

-   column-reverse: Los elementos se colocan en una columna vertical en orden inverso.

En este ejemplo quedarán los elementos alineados uno al lado del otro (En fila)

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    flex-direction: row;
}
```

![flex-direction](/img/flex-direction.png)




En este ejemplo quedarán los elementos alineados uno debajo del otro (en columna)

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    flex-direction: column;
}
```

![flex-direction2](/img/flex-direction2.png)



<br/><br/>

### flex-wrap

La propiedad flex-wrap controla si los elementos de un contenedor flex deben ajustarse a una nueva línea cuando no hay suficiente espacio disponible en una sola fila.

#### Valores

-   nowrap (valor por defecto): Todos los elementos se colocan en una sola línea.

-   wrap:  Permite que los elementos "salten" a una nueva línea si no caben.

-   wrap-reverse: Los elementos se envuelven en múltiples líneas en orden inverso.

#### nowrap

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    flex-wrap: nowrap; /* Prueba con nowrap para ver la diferencia */
    width: 15px; /* Ancho reducido para forzar el ajuste */
    border: 2px solid black;
}
.flex-container div {
    width: 100px;
    height: 50px;
    background-color: lightblue;
    margin: 5px;
    text-align: center;
    line-height: 50px;
}

```

![nowrap](/img/nowrap.png)


#### wrap

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Prueba con nowrap para ver la diferencia */
    width: 15px; /* Ancho reducido para forzar el ajuste */
    border: 2px solid black;
}
.flex-container div {
    width: 100px;
    height: 50px;
    background-color: lightblue;
    margin: 5px;
    text-align: center;
    line-height: 50px;
}

```

![wrap](/img/wrap.png)


<br/><br/>



### flex-flow

La propiedad flex-flow es una forma abreviada de establecer tanto flex-direction como flex-wrap.

```jsx title="sintaxsis"
flex-flow: <flex-direction> <flex-wrap>;
```

```jsx title="css"
.flex-container {
    display: flex;
    flex-flow: row wrap;
}

```


<br/><br/>

### justify-content (Eje X)

La propiedad justify-content alinea los elementos flexibles a lo largo del eje principal del contenedor (horizontalmente en una fila, verticalmente en una columna).

:::tip
Sirve para aplicar estilo sobre el Eje "X".

![justify-content0](/img/justify-content0.png)

:::

#### Valores

**flex-start (valor por defecto):** Los elementos se alinean al inicio del contenedor.

**flex-end:** Los elementos se alinean al final del contenedor.

**center:** Los elementos se centran en el contenedor.

**space-between:** Los elementos se distribuyen uniformemente con el primer elemento al inicio y el último al final.

**space-around:** Los elementos se distribuyen uniformemente con espacio igual alrededor de cada uno.

**space-evenly:** Los elementos se distribuyen con espacio igual entre ellos.

```jsx title="css"
.flex-container {
    display: flex;
    justify-content: center;
}
```

![justify-content](/img/justify-content.png)

<br/><br/>

### align-items (Eje Y)

La propiedad align-items alinea los elementos flexibles a lo largo del eje transversal (perpendicular al eje principal) del contenedor.

:::tip
Sirve para aplicar estilo sobre el Eje "Y".

![align-items0](/img/align-items0.png)

:::

**Podría decirse que se encarga de alinear los elementos en altura.**

#### valores:

**- align-items: stretch (por defecto):** Los elementos se estiran para llenar todo el espacio vertical del contenedor.

**- align-items: flex-start:** Los elementos se alinean al inicio (parte superior) del contenedor.

**- align-items: flex-end:** Los elementos se alinean al final (parte inferior) del contenedor.

**- align-items: center:** Los elementos se centran verticalmente dentro del contenedor.

**- align-items: baseline:** Los elementos se alinean según la línea base del texto.

Ejemplos:


-   Alinearemos los elementos en el centro

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    height: 200px; /* Para visualizar el espacio vertical */
    border: 2px solid black;
    align-items: center; /* Cambia entre los valores para probar!!!!!! */
}

.flex-container div {
    width: 50px;
    height: 50px;
    background-color: lightblue;
    margin: 5px;
    text-align: center;
    line-height: 50px; /* Para centrar el texto */
}


```

![align-center](/img/align-center.png)


-   Alinearemos los elementos al final

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    height: 200px; /* Para visualizar el espacio vertical */
    border: 2px solid black;
    align-items: flex-end; /* Cambia entre los valores para probar!!!!!! */
}

.flex-container div {
    width: 50px;
    height: 50px;
    background-color: lightblue;
    margin: 5px;
    text-align: center;
    line-height: 50px; /* Para centrar el texto */
}


```

![align-end](/img/align-end.png)


<br/><br/>

### align-content

 se usa para alinear varias líneas de elementos flexibles dentro de un contenedor en el eje transversal. **Es importante destacar que align-content solo tiene efecto si hay múltiples líneas de contenido (es decir, cuando los elementos se envuelven usando flex-wrap: wrap o wrap-reverse).**

#### Diferencia entre align-items y align-content

**- align-items:** Alinea los elementos individuales dentro de su línea en el eje transversal.

**- align-content:** Alinea el conjunto de líneas cuando hay varias, dentro del contenedor en el eje transversal.
Si tienes un solo línea de contenido (por ejemplo, flex-wrap: nowrap), align-content no tendrá efecto.


#### Valores de align-content:

**- stretch (valor predeterminado):** Las líneas de contenido se estiran para llenar todo el espacio disponible en el eje cruzado.

**- flex-start:** Las líneas de contenido se alinean al inicio del contenedor en el eje cruzado.

**- flex-end:** Las líneas de contenido se alinean al final del contenedor en el eje cruzado.

**- center:** Las líneas de contenido se centran en el eje cruzado.

**- space-between:** Distribuye las líneas de contenido con espacio igual entre ellas, dejando los bordes tocando el inicio y el final del contenedor.

**- space-around:** Distribuye las líneas con espacio igual alrededor de cada línea.

**- space-evenly:** Distribuye las líneas con espacios iguales entre ellas y los bordes del contenedor.


Ejemplo:

**1. Contamos con 6 elementos**

```jsx title="html"
<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>

```

![align-content1](/img/align-content1.png)


**2. aplicamos estilos y utilizamos stretch**

```jsx title="css"
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Permitir que los elementos se envuelvan */
    align-content: stretch; /* ¡¡¡Cambiar este valor para probar diferentes efectos!!! */
    height: 300px; /* Altura fija para visualizar el eje cruzado */
    gap: 10px;
    border: 2px solid black;
}

.flex-container div {
    width: 100px;
    height: 50px;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    border: 1px solid blue;
}


```

![align-content2](/img/align-content2.png)





**3.flech start**

![align-content3](/img/align-content3.png)



**4.flech end**

![align-content4](/img/align-content4.png)



**5.center**

![align-content5](/img/align-content5.png)



**6.space-between**

![align-content6](/img/align-content6.png)



**7.space-around**

![align-content7](/img/align-content7.png)



**7.space-evenly**

![align-content8](/img/align-content8.png)


<br/><br/>

## Propiedades de Flexbox Aplicadas a los Ítems (Flex Items)

Además de las propiedades que se aplican al contenedor flex (flex container), Flexbox ofrece varias propiedades que afectan directamente a los elementos hijos (flex items).
A continuación, se describen las propiedades :
-   order.
-   flex-grow.
-   flex-shrink.
-   flex-basis.


### order

La propiedad order determina el orden en que se muestran los ítems flexibles dentro del contenedor flex. Por defecto, todos los ítems tienen un valor order de 0.

#### Uso

Se utiliza para cambiar el orden de los ítems sin alterar el orden en el HTML.

```jsx title="html"
   <div class="flex-container">
        <div class="item" style="order: 2;">Item 1</div>
        <div class="item" style="order: 1;">Item 2</div>
        <div class="item" style="order: 3;">Item 3</div>
    </div>
```
```jsx title="css"
.flex-container { 
    display: flex; 
} 
.item { 
    padding: 10px; 
    background-color: lightcoral; 
    margin: 5px; 
}

```

![order](/img/order.png)

En este ejemplo, aunque Item 1 aparece primero en el HTML, Item 2 se mostrará primero en el contenedor flex debido a su valor order de 1, seguido por Item 1 con order 2, y finalmente Item 3 con order 3.

<br/><br/>

### flex-grow

La propiedad flex-grow define la capacidad de un ítem flexible para crecer en proporción a los demás ítems flexibles dentro del mismo contenedor. 
El valor por defecto es 0 (no crece).

#### Uso

Se utiliza para permitir que un ítem ocupe más espacio disponible dentro del contenedor.

```jsx title="html"
<div class="flex-container">
    <div class="item" style="flex-grow: 1;">Item 1</div>
    <div class="item" style="flex-grow: 2;">Item 2</div>
    <div class="item" style="flex-grow: 1;">Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
}
.item {
    padding: 10px;
    background-color: lightblue;
    margin: 5px;
}

```

![flex-grow](/img/flex-grow.png)

En este ejemplo, Item 2 crecerá dos veces más que Item 1 y Item 3 debido a su valor flex-grow de 2.


<br/><br/>

### flex-shrink

La propiedad flex-shrink determina la capacidad de un ítem flexible para reducir su tamaño si es necesario. El valor por defecto es 1 (puede encogerse).

#### Uso

Se utiliza para controlar cuánto puede encogerse un ítem en relación con los demás ítems dentro del contenedor.

```jsx title="html"
<div class="flex-container">
    <div class="item" style="flex-shrink: 1;">Item 1</div>
    <div class="item" style="flex-shrink: 3;">Item 2</div>
    <div class="item" style="flex-shrink: 1;">Item 3</div>
</div>
```
```jsx title="css"
.flex-container {
    display: flex;
    width: 300px;
}
.item {
    width: 200px;
    padding: 10px;
    background-color: lightgreen;
    margin: 5px;
}

```

![flex-shrink](/img/flex-shrink.png)

En este ejemplo, cuando el contenedor tiene un ancho de 300px, Item 2 se encogerá tres veces más que Item 1 y Item 3 debido a su valor flex-shrink de 3.

<br/><br/>

### flex-basis

La propiedad flex-basis define el tamaño inicial de un ítem flexible antes de que se distribuya el espacio restante. Puede ser un valor fijo (px, em, etc.) o auto.

#### Uso

Se utiliza para establecer el tamaño base de un ítem antes de aplicar flex-grow o flex-shrink.


```jsx title="html"
<div class="flex-container">
    <div class="item" style="flex-basis: 100px;">Item 1</div>
    <div class="item" style="flex-basis: 150px;">Item 2</div>
    <div class="item" style="flex-basis: 100px;">Item 3</div>
</div>
```
```jsx title="css"

.flex-container {
    display: flex;
}
.item {
    padding: 10px;
    background-color: lightblue;
    margin: 5px;
}

```

![flex-basis](/img/flex-basis.png)

En este ejemplo, Item 1 y Item 3 tendrán un tamaño inicial de 100px, mientras que Item 2 tendrá un tamaño inicial de 150px.


<br/><br/>