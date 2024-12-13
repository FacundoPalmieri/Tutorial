---
sidebar_position: 3
---

# 3 - CSS Grids
---
CSS Grid es un sistema de diseño bidimensional que permite alinear elementos tanto en filas (horizontal) como en columnas (vertical) de manera sencilla. Puede usarse para crear diseños de página complejos de forma más fácil que con otros métodos flexbox.

CSS Grid se aplican al contenedor padre y las propiedades que se utilicen permiten definir la estructura y disposición de los elementos hijos dentro de una grilla.

## Propiedades generales de los Grids.

## display: grid

Para utilizar CSS Grid, lo primero que se debe hacer es aplicar la propiedad **display: grid** a un contenedor. Esto convierte un elemento en un contenedor de grilla, lo que permite organizar sus elementos hijos en filas y columnas.

```jsx title="Ejemplo"
.container {
    display: grid;
}
```

<br/><br/>


### grid-template-columns

La propiedad **grid-template-columns** define la estructura de las columnas en la grilla. Para establecer el tamaño de cada columna se puede utilizar las siguientes unidades de medida :
-   px (Pixeles).
-   %. (Porcentaje)
-   fr (Fracción).

```jsx title="html"
<body>

    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>

</body>

```

```jsx title="css"
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

```
![grid-template-columns](/img/grid-template-columns.png)


<br/><br/>

### grid-template-rows

La propiedad **grid-template-rows** define la estructura de las filas en la grilla, similar a cómo **grid-template-columns** define las columnas.

```jsx title="html"
<body>

    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
    </div>

</body>

```

```jsx title="css"
.grid-container {
    display: grid;
        grid-template-rows: 100px 200px;
}

```

![grid-template-rows](/img/grid-template-rows.png)

<br/><br/>

### grid-template-areas

La propiedad **grid-template-areas** permite nombrar áreas dentro de la grilla para facilitar el posicionamiento de los elementos hijos. Se usan nombres de áreas definidos en los elementos hijos.

Suponiendo que tengamos 2 columnas y 3 filas podremos definir áreas de la siguiente manera: 

```jsx title="sintaxsis"
    grid-template-areas: 
      "header  header" /* Coloco nombres a las áreas. Es decir a las dos columnas de la primera fila*/
      "sidebar main"   /* Coloco nombres a las áreas. Es decir a las dos columnas de la segunda fila*/
      "footer  footer";/* Coloco nombres a las áreas. Es decir a las dos columnas de la tercera fila*/
```

En caso de colocar el mismo nombre a dos áreas de una misma fila, estaremos indicando que debe ocupar todo el ancho. 


```jsx title="html"
<body>

    <div class="container">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="footer">Footer</div>
      </div>
      

</body>
```

```jsx title="css"
.container {
    display: grid;
    grid-template-columns: 1fr 3fr; /* Dos columnas: ocuparan 1 parte y 3 partes */
    grid-template-rows: auto 1fr auto; /* Tres filas: automática, flexible y automática */
    grid-template-areas: 
      "header  header" /* Coloco nombres a las áreas. Es decir a las dos columnas de la primera fila*/
      "sidebar main"   /* Coloco nombres a las áreas. Es decir a las dos columnas de la segunda fila*/
      "footer  footer";/* Coloco nombres a las áreas. Es decir a las dos columnas de la tercera fila*/
    gap: 10px; /* Espacio entre las celdas */
  }
  
  .header {
    grid-area: header;
    background-color: lightblue;
  }
  
  .sidebar {
    grid-area: sidebar;
    background-color: lightgreen;
  }
  
  .main {
    grid-area: main;
    background-color: lightyellow;
  }
  
  .footer {
    grid-area: footer;
    background-color: lightcoral;
  }
  
```

![grid-template-areas](/img/grid-template-areas.png)


<br/><br/>

### column-gap

La propiedad column-gap (anteriormente grid-column-gap) define el espacio entre las columnas de la grilla.

-   No afecta el ancho de las columnas, solo crea un espacio visual entre ellas.

-   Es útil para organizar contenido sin necesidad de usar márgenes manuales entre los elementos.

```jsx title="sintaxsis"
grid-container {
  column-gap: <valor>; / Es la distancia deseada entre las columnas. 
                        Se puede usar unidades como px, em, %  /
}

```



```jsx title="html"
<body>

 <div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
      

</body>
```

```jsx title="css"
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Tres columnas iguales */
    column-gap: 20px; /* Espacio horizontal entre columnas */
  }

  .item {
    background-color: lightblue;
    text-align: center;
    padding: 10px;
    border: 1px solid darkblue;
  }
  
```

![gap](/img/gap.png)

<br/><br/>

### row-gap

La propiedad **row-gap**  (anteriormente grid-row-gap) define el espacio entre las filas de la grilla.

-   No afecta la altura de las filas, solo crea un espacio visual entre ellas.

-   Es útil para separar el contenido de una cuadrícula en el eje vertical sin necesidad de usar márgenes.

```jsx title="sintaxsis"
grid-container {
  row-gap: <valor>; / Es la distancia deseada entre las filas. 
                        Se puede usar unidades como px, em, %, rem  /
}

```

```jsx title="html"
<body>

<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
      

</body>
```

```jsx title="css"
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
    grid-template-rows: auto auto; /* Dos filas automáticas */
    row-gap: 20px; /* Espacio vertical entre filas */
  }

  .item {
    background-color: lightblue;
    text-align: center;
    padding: 10px;
    border: 1px solid darkblue;
  }
```

![rowgap](/img/rowgap.png)


<br/><br/>


## Flexibilización de Ítems Individuales en CSS Grid.

En este módulo, aprenderemos cómo flexibilizar y posicionar ítems individuales dentro de una grilla de CSS Grid. 
Para ajustar la posición y el tamaño de elementos específicos, utilizaremos propiedades como : 

- **grid-column** 

- **grid-row**

- **grid-auto-row**

- **grid-area**

### grid-column

La propiedad **grid-column** se utiliza para definir en qué columna comienza un ítem y cuántas columnas ocupa. 
Esta propiedad combina **grid-column-start** y **grid-column-end.**

```jsx title="sintaxsis"
.item {
  grid-column: <start> / <end>;
}

```

-   < start>: La línea donde el elemento comienza.
-   < end>  : La línea donde el elemento termina.


**Inicio y fin usando números:** Las líneas de una cuadrícula están numeradas desde 1 hacia adelante. Puede referirse a ellas explícitamente:

-   grid-column: 1 / 4; significa que un elemento comienza en la línea 1 y termina en la línea 4 (ocupa 3 columnas).


**Usar span para simplificar:** En lugar de especificar el final con un número, puedes usar span para indicar cuántas columnas ocupar:


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">Header</div>
  <div class="item b">Sidebar</div>
  <div class="item c">Main</div>
  <div class="item d">Footer</div>
</div>

</body>
```

```jsx title="css"
 .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .a {
    grid-column: 1 / 5; /* Ocupa todo el ancho */
  }

  .b {
    grid-column: 1 / 2; /* Ocupa solo la primera columna */
  }

  .c {
    grid-column: 2 / 5; /* Desde la segunda columna hasta la cuarta */
  }

  .d {
    grid-column: 1 / 5; /* Footer en toda la fila */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 20px;
    border: 1px solid darkred;
  }
```

-   El header ocupa todo el ancho.

-   El sidebar está en la primera columna.

-   El main ocupa las columnas 2, 3 y 4.

-   El footer ocupa todo el ancho al final.

![grid-column](/img/grid-column.png)


<br/><br/>

### grid-row

La propiedad **grid-row** se utiliza para definir en qué fila comienza un ítem y cuántas filas ocupa. Esta propiedad combina grid-row-start y grid-row-end.

```jsx title="sintaxsis"
.item {
  grid-row: <start> / <end>;
}

```

-   < start>: La línea donde el elemento comienza.
-   < end>  : La línea donde el elemento termina.

Si no se define < end>, el elemento ocupará solo una fila.


**Inicio y fin usando números:** Las líneas de una cuadrícula están numeradas desde 1 hacia adelante. Puede referirse a ellas explícitamente:

-   grid-row: 1 / 4; significa que un elemento comienza en la línea 1 y termina en la línea 4 (ocupa 3 filas).


**Usar span para simplificar:** Al igual que con grid-column, puedes usar span para especificar cuántas filas ocupa un elemento sin referirte explícitamente a las líneas finales.


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
.grid {
    display: grid;
    grid-template-rows: repeat(4, 100px); /* Cuatro filas de 100px */
    grid-template-columns: repeat(2, 1fr); /* Dos columnas iguales */
    gap: 10px; /* Espaciado entre elementos */
  }

  .item {
    background-color: lightgreen;
    text-align: center;
    padding: 10px;
    border: 1px solid green;
  }

  .a {
    grid-row: span 2; /* Ocupa las filas 1 y 2 */
    grid-column: 1; /* Primera columna */
  }

  .b {
    grid-row: 3 / span 2; /* Comienza en la fila 3 y ocupa las filas 3 y 4 */
    grid-column: 1; /* Primera columna */
  }

  .c {
    grid-row: 1 / 5; /* Ocupa desde la fila 1 hasta la fila 4 */
    grid-column: 2; /* Segunda columna */
  }
```

-   A estará en la primera columna y ocupará las filas 1 y 2.

-   B estará en la primera columna y ocupará las filas 3 y 4.

-   C estará en la segunda columna y ocupará todas las filas disponibles (1 a 4).


![grid-row](/img/grid-row.png)


<br/><br/>

### grid-auto-rows

La propiedad **grid-auto-rows** se utiliza en un contenedor CSS Grid para especificar la altura de las filas que se generan automáticamente. Cuando se añaden elementos al grid que superan la cantidad de filas explícitamente definidas, estas nuevas filas usarán el tamaño especificado por grid-auto-rows.


```jsx title="sintaxsis"
grid-auto-rows: <valor>;

```

< valor>: Puede ser una longitud fija (como px, em, rem), un porcentaje, o una unidad flexible como fr (fracción del espacio disponible).


#### Cómo Funciona

**- Filas explícitas:** Las filas definidas con grid-template-rows tienen prioridad.

**- Filas implícitas:** Si los elementos desbordan las filas explícitas, CSS genera filas adicionales automáticamente, utilizando la altura definida en grid-auto-rows.

<br/><br/>

### grid-area

La propiedad **grid-area** se utiliza para definir la ubicación de un elemento en una cuadrícula. Es una forma más compacta de combinar las propiedades:

-   **grid-row-start:** Dónde empieza el elemento en filas.

-   **grid-row-end:** Dónde termina en filas.

-   **grid-column-start:** Dónde empieza en columnas.

-   **grid-column-end:** Dónde termina en columnas.

Con grid-area, se puede especificar todo esto en una sola línea.


```jsx title="sintaxsis"
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}


```


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
 .grid {
    display: grid;
    grid-template-rows: repeat(3, 100px); /* Tres filas */
    grid-template-columns: repeat(2, 1fr); /* Dos columnas iguales */
    gap: 10px; /* Espaciado */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }

  .a {
    grid-area: 1 / 1 / 3 / 2; /* Fila 1 a 3, Columna 1 a 2 */
  }

  .b {
    grid-area: 1 / 2 / 2 / 3; /* Fila 1 a 2, Columna 2 a 3 */
  }

  .c {
    grid-area: 2 / 2 / 4 / 3; /* Fila 2 a 4, Columna 2 a 3 */
  }
```

-   A ocupará las filas 1 a 2 y estará en la primera columna.

-   B estará en la fila 1, segunda columna.

-   C ocupará desde la fila 2 a la 3 en la segunda columna.


![grid-area](/img/grid-area.png)


:::tip[Diferencias clave entre grid-area y grid-template-areas]

- **grid-area:** Define manualmente las líneas de inicio y fin para filas y columnas de un elemento específico.

- **grid-template-areas:** Diseña un esquema general nombrando áreas específicas dentro del grid.

:::


<br/><br/>

## Propiedades de Distribución en CSS Grid

Existen cuatro propiedades fundamentales de CSS Grid que afectan la distribución de los elementos dentro de la grilla:

-   justify-items.

-   align-items.

-   justify-content.

-   align-content. 

Estas propiedades nos permiten alinear y distribuir los ítems y las áreas de la grilla de manera precisa. A continuación, se describe cada una de estas propiedades junto con ejemplos de código CSS y su efecto visual.


### justify-items

La propiedad justify-items se usa para alinear los elementos dentro de sus celdas, a lo largo del eje horizontal (Eje X - de izquierda a derecha) dentro de una cuadrícula (grid). Controla cómo se alinean los elementos en sus celdas, sin importar el tamaño de la celda.

:::tip
Sirve para aplicar estilo sobre el Eje "X".

![justify-content0](/img/justify-content0.png)

:::

```jsx title="sintaxsis"
.grid {
  justify-items: <valor>;
}


```

#### Valores de justify-items

**start:** Alinea los elementos al inicio de la celda (es decir, alineación a la izquierda en una dirección horizontal).

**end:** Alinea los elementos al final de la celda (es decir, alineación a la derecha en una dirección horizontal).

**center:** Centra los elementos dentro de la celda en el eje horizontal.

**stretch (valor por defecto):** Los elementos se estiran para llenar completamente el espacio disponible en la celda en el eje horizontal.

```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas de 100px cada una */
    gap: 10px;
    justify-items: center; /* Centrar los items dentro de las celdas */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![justify-items](/img/justify-items.png)


:::tip[¿Por qué usar justify-items?]
Usar justify-items es útil cuando necesitas alinear el contenido dentro de las celdas de la cuadrícula sin tener que manipular cada uno de los elementos individualmente. Es muy práctico para diseños rápidos y responsivos.
:::

<br/><br/>

### align-items

La propiedad **align-items** se utiliza para alinear los elementos dentro de sus celdas a lo largo del eje vertical (Eje Y - Arriba a abajo) en una cuadrícula (grid). Al igual que justify-items, esta propiedad se aplica dentro de las celdas de la cuadrícula, pero en lugar de afectar la alineación horizontal, lo hace de manera vertical.


:::tip
Sirve para aplicar estilo sobre el Eje "Y".

![align-items0](/img/align-items0.png)
:::

```jsx title="sintaxsis"
.grid {
  align-items: <valor>;
}


```

#### Valores de align-items

**start:** Alinea los elementos al inicio de la celda en el eje vertical (es decir, alineación en la parte superior).

**end:** Alinea los elementos al final de la celda en el eje vertical (es decir, alineación en la parte inferior).

**center:** Centra los elementos dentro de la celda en el eje  vertical.

**stretch (valor por defecto):** Los elementos se estiran para llenar completamente el espacio disponible en la celda en el eje vertical.

```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas de 100px cada una */
    gap: 10px;
    align-items: center; /* Centrar los items dentro de las celdas verticalmente */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![align-items](/img/align-items.png)


<br/><br/>

### justify-content

La propiedad **justify-content** se utiliza para alinear todo el contenido de la cuadrícula (grid) en el eje horizontal (Eje x), pero a diferencia de justify-items, justify-content afecta la distribución del espacio entre las filas o columnas completas dentro del contenedor de la cuadrícula. Es decir, mueve todo el contenido de la cuadrícula (en su conjunto) dentro de la cuadrícula en el eje horizontal.

```jsx title="sintaxsis"
.grid {
  justify-content: <valor>;
}
```

#### Valores de justify-content

**start:** Alinea todo el contenido de la cuadrícula al inicio del contenedor (a la izquierda en un diseño de izquierda a derecha).

**end:** Alinea todo el contenido de la cuadrícula al final del contenedor (a la derecha en un diseño de izquierda a derecha).

**center:** Centra todo el contenido de la cuadrícula dentro del contenedor.

**space-between:** Distribuye el espacio entre los elementos de la cuadrícula dejando el primer elemento al principio y el último al final, con el resto de los elementos distribuidos uniformemente entre ellos.

**space-around:** Distribuye el espacio de forma que haya espacio igual alrededor de cada elemento.

**space-evenly:** Distribuye el espacio de manera uniforme entre todos los elementos, incluyendo el espacio antes del primer elemento y después del último.


#### Ejemplos

- justify-content : center


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas */
    gap: 10px;
    justify-content: center; /* Centrar todo el contenido de la cuadrícula */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![justify-center](/img/justify-center.png)


- justify-content : end

```jsx title="css"
.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas */
    gap: 10px;
    justify-content: end; /* Centrar todo el contenido de la cuadrícula */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![justify-end](/img/justify-end.png)



<br/><br/>

### align-content

La propiedad **align-content** se utiliza para alinear el contenido de la cuadrícula (grid) en el eje vertical (Eje Y) dentro del contenedor de la cuadrícula. Es decir, mueve todo el contenido de la cuadrícula en el eje vertical (arriba/abajo), pero afecta a todo el bloque de contenido, no a los elementos individuales.

Es similar a **justify-content**, pero en lugar de mover el contenido en el eje horizontal, lo hace en el eje vertical. align-content solo tiene efecto si el contenido de la cuadrícula es más pequeño que el contenedor, es decir, si hay espacio vacío en la parte superior o inferior del contenedor.


```jsx title="sintaxsis"
.grid {
  justify-content: <valor>;
}
```

#### Valores de align-content

**start:** Alinea todo el contenido de la cuadrícula al inicio del contenedor  (parte superior).

**end:** Alinea todo el contenido de la cuadrícula al final del contenedor (parte inferior).

**center:** Centra todo el contenido de la cuadrícula dentro del contenedor verticalmente.

**space-between:** Distribuye el espacio entre las filas de la cuadrícula dejando la primera fila en la parte superior y la última en la parte inferior, con el resto de las filas distribuidas uniformemente entre ellas.

**space-around:** Distribuye el espacio de manera que haya espacio igual alrededor de cada fila de la cuadrícula..

**space-evenly:** Distribuye el espacio de manera uniforme entre todas las filas de la cuadrícula, incluyendo el espacio antes de la primera fila y después de la última.

**stretch:** Estira el contenido para que ocupe todo el espacio disponible (este es el valor predeterminado si no se especifica ningún valor para align-content).


#### Ejemplos

- align-content : center


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas */
    grid-template-rows: 100px 100px; /* Dos filas */
    gap: 10px;
    height: 500px; /* Hacemos que el contenedor sea más alto */
    align-content: center; /* Centrar todo el contenido verticalmente */
  }

  .item {
    background-color: lightcoral;
    text-align: center;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![align-center-grids](/img/align-center-grids.png)




- align-content : end


```jsx title="html"
<body>

<div class="grid">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
</div>

</body>
```

```jsx title="css"
.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Tres columnas */
    grid-template-rows: 100px 100px; /* Dos filas */
    gap: 10px;
    height: 500px; /* Hacemos que el contenedor sea más alto */
    align-content: end; /* Centrar todo el contenido verticalmente */
  }

  .item {
    background-color: lightcoral;
    text-align: end;
    padding: 10px;
    border: 1px solid darkred;
  }
```

![align-end-grids](/img/align-end-grids.png)

![align-end-grids1](/img/align-end-grids1.png)



<br/><br/>

## Resumen Grids

**grid-template-columns y grid-template-rows:** Se usan para definir la estructura de las filas y columnas (cómo de grandes o pequeñas deben ser). Son útiles cuando defines el diseño básico de la cuadrícula.

**grid-template-areas:** Usado para asignar áreas visuales a las celdas de la cuadrícula. Ideal cuando prefieres un diseño más semántico y visual, basado en nombres para las áreas.

**grid-column y grid-row:** Usadas cuando quieres ubicar un elemento específico en una posición exacta dentro de la cuadrícula, utilizando las líneas de la cuadrícula. Son ideales para un control más preciso sobre la ubicación de los elementos.

**grid-area:** Esta propiedad se usa para colocar un elemento en una área definida previamente en la cuadrícula, ya sea usando un nombre de área (de grid-template-areas) o líneas específicas de la cuadrícula.

![Resumen-grids](/img/resumen-grids.png)

<br/><br/>

## Introducción al Diseño Responsive y su Importancia en el Desarrollo Web.

El diseño responsive es un enfoque en el desarrollo web que garantiza que los sitios web se vean y funcionen bien en una amplia variedad de dispositivos y tamaños de pantalla, desde teléfonos móviles hasta computadoras de escritorio. La importancia del diseño responsive radica en la creciente diversidad de dispositivos utilizados para acceder a la web, lo que hace esencial que los sitios sean accesibles y fáciles de usar en cualquier dispositivo.

### Importancia del Diseño Responsive

1.  *Mejora la Experiencia del Usuario:* Un sitio web que se adapta a diferentes tamaños de pantalla proporciona una mejor experiencia de usuario, lo que puede aumentar el tiempo de permanencia y la satisfacción del usuario.

2.  *Optimización para Motores de Búsqueda:* Google y otros motores de búsqueda favorecen los sitios web que son móviles y responsivos, lo que puede mejorar el ranking en los resultados de búsqueda.

3.  *Mayor Alcance:* Un diseño responsive garantiza que el sitio sea accesible para una mayor audiencia, incluidos los usuarios de dispositivos móviles, tabletas y computadoras de escritorio.

3.  *Reducción de Costos de Desarrollo:* En lugar de crear y mantener múltiples versiones de un sitio para diferentes dispositivos, un diseño responsive permite gestionar un solo sitio que se adapta a todos los dispositivos.

### Uso de Media Queries en CSS

Las media queries son una característica de CSS que permiten aplicar estilos específicos en función de las características del dispositivo, como el ancho y la altura de la pantalla.

A continuación, se presentan ejemplos de cómo utilizar media queries para adaptar el diseño a diferentes tamaños de pantalla.


:::info[Important!]
No hay medidas exactas para el diseño responvise, ya que son estándares que se llevan y pueden variar. De igual forma, a medida que se vaya practicando y mejorando con flex, grid, medidas relativas, etc., el diseño se va a adaptar de una forma excelente.
:::

```jsx title="sintaxsis"
@media (condición) {
  /* Reglas CSS */
}

```

<br/><br/>

Ejemplo: Cambiar el diseño cuando el ancho de la pantalla es menor a 600px.

```jsx title="sintaxsis"
@media (max-width: 600px) {
  /* Reglas CSS que se aplicarán cuando el ancho sea menor a 600px */
}


```
<br/><br/>


Ejemplo Básico de Media Query

```jsx title="css"
/* Estilos para dispositivos móviles */
body {
    font-size: 16px;
    padding: 10px;
}

/* Media query para tabletas */
@media (min-width: 600px) {
    body {
        font-size: 18px;
        padding: 20px;
    }
}

/* Media query para computadoras de escritorio */
@media (min-width: 1024px) {
    body {
        font-size: 20px;
        padding: 30px;
    }
}

```
<br/><br/>


### Ejemplo de Diseño Responsive barra de navegación.

Este ejemplo tendrá:

1.  Una barra de navegación en la parte superior.

2.  En pantallas grandes, la barra tendrá enlaces alineados horizontalmente.

3.  En pantallas pequeñas, la barra de navegación se convertirá en un menú tipo "hamburguesa" utilizando un input de tipo checkbox.

```jsx title="html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Barra de Navegación</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">
      <a href="#">MiLogo</a>
    </div>
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <nav class="menu">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>



```


```jsx title="css"
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Estilo para la barra de navegación */
.navbar {
  display: grid;
  grid-template-columns: 1fr auto;  /* Logo a la izquierda, menú a la derecha */
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  grid-template-areas: "logo menu";
}

.logo a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Menú en formato de lista */
.menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.menu ul li a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

/* Estilo para el icono de hamburguesa (checkbox) */
.menu-toggle {
  display: none; /* Ocultar checkbox */
}

.menu-icon {
  display: none;  /* Ocultar ícono de hamburguesa en pantallas grandes */
  font-size: 2rem;
  cursor: pointer;
}

/* Media Query para pantallas pequeñas */
@media (max-width: 768px) {
  .navbar {
    grid-template-columns: 1fr;  /* Un solo bloque */
    grid-template-areas:
      "logo"
      "menu";
  }

  .menu ul {
    display: none;  /* Esconder los enlaces en dispositivos pequeños */
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #333;
    padding: 1rem 0;
  }

  .menu ul li {
    width: 100%;
    text-align: center;
  }

  .menu ul li a {
    padding: 0.8rem;
    width: 100%;
    display: block;
  }

  .menu-icon {
    display: block;  /* Mostrar el ícono de hamburguesa */
  }

  /* Mostrar el menú cuando el checkbox está marcado */
  .menu-toggle:checked + .menu-icon + .menu ul {
    display: flex;
  }
}

```

**Explicación:**

1. HTML:

- Hemos agregado un input de tipo checkbox con el id menu-toggle. Este checkbox servirá para controlar si el menú está visible o no en dispositivos pequeños.

- El label con el atributo for="menu-toggle" actúa como el ícono de hamburguesa (representado por &#9776;).

- La barra de navegación contiene una lista de enlaces dentro de un elemento nav con la clase .menu.


2.  CSS:

- En pantallas grandes, el menú se muestra de forma horizontal usando flex y se mantiene visible.

- En pantallas pequeñas, cuando el usuario hace clic en el ícono de hamburguesa (checkbox), el menú se despliega verticalmente. El menú está inicialmente oculto (display: none;), y solo se muestra cuando el checkbox está marcado (.menu-toggle:checked).


3.  Media Query:

- Para pantallas más pequeñas (por debajo de 768px), el menú se convierte en un bloque vertical y el ícono de hamburguesa se muestra.

- Cuando el checkbox (.menu-toggle) se marca, los enlaces del menú (.menu ul) se hacen visibles.

Imagen Navegador

![navegador](/img/navegador.png)

<br/>

Imagen Celular

![celular](/img/celular.png)

<br/><br/>

### Ejemplo de Diseño Responsive con CSS Grid y Media Queries

Veamos un ejemplo donde usamos CSS Grid para crear un diseño que se adapte a diferentes tamaños de pantalla.

**Estructura del Diseño:**

Queremos un diseño con tres columnas en pantallas grandes (escritorio) y una sola columna en pantallas más pequeñas (móviles).

```jsx title="html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño con Grid</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">

    <!-- Área del encabezado -->
    <header class="header">
      <h1>Encabezado</h1>
    </header>

    <!-- Área de la barra lateral -->
    <aside class="sidebar">
      <h2>Barra Lateral</h2>
      <p>Contenido de la barra lateral.</p>
    </aside>

    <!-- Área del contenido principal -->
    <main class="main">
      <h2>Contenido Principal</h2>
      <p>Este es el contenido principal de la página.</p>
    </main>

    <!-- Área del contenido adicional -->
    <aside class="aside">
      <h2>Contenido Adicional</h2>
      <p>Información o enlaces adicionales.</p>
    </aside>

    <!-- Área del pie de página -->
    <footer class="footer">
      <p>&copy; 2024 Mi Sitio Web</p>
    </footer>

  </div>
</body>
</html>
```



```jsx title="css"
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Tres columnas */
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 10px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}

/* Media Query para pantallas pequeñas (menos de 600px de ancho) */
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;  /* Una sola columna */
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
  }
}


```


**Explicación:**

**En pantallas grandes (por ejemplo, computadoras de escritorio):**

- **Usamos tres columnas:** la columna del medio (main) es más ancha (2fr), mientras que las otras dos (sidebar y aside) son de igual tamaño (1fr).

- **Las áreas se definen en 3 filas:** header en la primera fila, sidebar, main y aside en la segunda fila, y footer en la última fila.


**En pantallas pequeñas (por ejemplo, teléfonos móviles):**

- Usamos una sola columna para todo el contenido (grid-template-columns: 1fr).

- Cambiamos las áreas de la cuadrícula para que los elementos se acomoden en una única columna (header, main, sidebar, aside, footer).



Imagen Navegador

![navegador1](/img/navegador1.png)

<br/>

Imagen Celular

![celular1](/img/celular1.png)

<br/><br/>

### Mobile First.

El enfoque de desarrollo **mobile first** implica diseñar y desarrollar un sitio web inicialmente para dispositivos móviles y luego adaptarlo progresivamente para pantallas más grandes como tabletas y computadoras de escritorio. Este enfoque garantiza que el contenido y la funcionalidad principal estén accesibles y optimizados para los usuarios móviles, que representan una gran parte del tráfico web actual.

```jsx title="html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño con Grid</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">

    <!-- Área del encabezado -->
    <header class="header">
      <h1>Encabezado</h1>
    </header>

    <!-- Área de la barra lateral -->
    <aside class="sidebar">
      <h2>Barra Lateral</h2>
      <p>Contenido de la barra lateral.</p>
    </aside>

    <!-- Área del contenido principal -->
    <main class="main">
      <h2>Contenido Principal</h2>
      <p>Este es el contenido principal de la página.</p>
    </main>

    <!-- Área del contenido adicional -->
    <aside class="aside">
      <h2>Contenido Adicional</h2>
      <p>Información o enlaces adicionales.</p>
    </aside>

    <!-- Área del pie de página -->
    <footer class="footer">
      <p>&copy; 2024 Mi Sitio Web</p>
    </footer>

  </div>
</body>
</html>
```



```jsx title="css"
/* Estilo base para móviles (una sola columna) */
.container {
  display: grid;
  grid-template-columns: 1fr;  /* Una sola columna */
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "aside"
    "footer";
  gap: 10px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}

/* Media Query para pantallas medianas y grandes */
@media (min-width: 600px) {
  .container {
    grid-template-columns: 1fr 2fr 1fr; /* Tres columnas */
    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
  }
}

```

#### Explicación del enfoque Mobile First

**1.  Estilos base (para móviles):**

- El diseño inicial usa una sola columna con todas las áreas apiladas verticalmente. Esto garantiza que sea funcional en pantallas pequeñas sin necesidad de ajustes adicionales.

**2.  Media Query para pantallas más grandes:**

- A partir de 600px de ancho, aplicamos un diseño más complejo con tres columnas y áreas distribuidas horizontalmente, aprovechando mejor el espacio disponible.