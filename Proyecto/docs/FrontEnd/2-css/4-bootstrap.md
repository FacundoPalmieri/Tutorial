---
sidebar_position: 4
---

# 4 - Pseudoclases y Bootstrap
---

## **Pseudoclases**

Las pseudoclases son un concepto en CSS que permite aplicar estilos a elementos en ciertos estados o situaciones sin necesidad de modificar su estructura HTML. Son una forma de seleccionar elementos que cumplen ciertas condiciones, como su interacción con el usuario, su posición en el documento, o su relación con otros elementos.

En CSS, las pseudoclases se definen utilizando un colon (:) seguido de un nombre que representa el estado o condición del elemento. Algunas de las pseudoclases más comunes son:


### *: hover*

#### Se aplica cuando el usuario pasa el cursor sobre el elemento.

Cuando un usuario pasa el cursor sobre un elemento, como un enlace o botón, la pseudoclase :hover aplica un estilo específico. Es comúnmente utilizada en botones, enlaces, y otros elementos interactivos para mejorar la experiencia del usuario.

```jsx title="html"
<a href="#">Haz clic aquí</a>

```

```jsx title="css"
a:hover {
    color: red; /* Cambia el color del enlace a rojo cuando el cursor está sobre él */
    text-decoration: underline; /* Subraya el enlace al pasar el cursor */
}

```
<br/><br/>

### *: active*

#### Se aplica cuando un elemento es activado, como al hacer clic en un enlace o botón.

Se activa en el momento en que el usuario hace clic sobre un elemento, generalmente se usa en enlaces o botones.

```jsx title="html"
<button>Hacer clic</button>

```

```jsx title="css"
button:active {
    background-color: blue; /* Cambia el fondo a azul cuando se hace clic */
    color: white; /* Cambia el color del texto a blanco al hacer clic */
}

```
<br/><br/>

### *: focus*

####  Se aplica cuando un elemento, como un campo de formulario, tiene el foco (es seleccionado para escribir).

Se utiliza cuando un elemento como un campo de entrada (input) o área de texto recibe el foco, es decir, cuando se selecciona para que el usuario pueda escribir o interactuar con él.

```jsx title="html"
<input type="text" placeholder="Escribe tu nombre">

```

```jsx title="css"
input:focus {
    border-color: green; /* Cambia el color del borde a verde cuando el campo tiene el foco */
    background-color: lightyellow; /* Cambia el fondo a amarillo claro cuando el campo está enfocado */
}

```
<br/><br/>

### *: nth-child()* 

#### Se aplica a un elemento en función de su posición dentro de su contenedor.

Permite seleccionar elementos basados en su posición en su contenedor. Se puede usar con expresiones numéricas (como odd, even o valores específicos).

```jsx title="html"
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
</ul>

```

```jsx title="css"
li:nth-child(odd) {
    background-color: lightgray; /* Aplica fondo gris a los elementos impares */
}

li:nth-child(2) {
    font-weight: bold; /* Aplica negrita al segundo elemento */
}

```
<br/><br/>

### *: first-child*

#### Selecciona el primer hijo de un elemento.

Se utiliza para seleccionar el primer hijo dentro de un contenedor. Esto puede aplicarse a cualquier tipo de elemento.

```jsx title="html"
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

```
```jsx title="css"
li:first-child {
    color: red; /* Cambia el color del primer elemento de la lista a rojo */
}

```
<br/><br/>

### *: last-child*

#### Selecciona el último hijo de un elemento.

Selecciona el último hijo dentro de un contenedor. Se usa comúnmente para aplicar estilos al último elemento de una lista o grupo de elementos.


```jsx title="html"
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

```
```jsx title="css"
li:last-child {
    font-style: italic; /* Aplica cursiva al último elemento de la lista */
}

```

<br/><br/>

## BEM (Block Element Modifier)

Es una metodología para nombrar y organizar las clases de CSS de manera más estructurada y modular. Ayuda a crear código más fácil de mantener y entender, especialmente en proyectos grandes. 


### *Estructura de BEM*

**Block:** Representa un componente independiente, que es un contenedor o un conjunto de elementos con una funcionalidad definida. El bloque es la parte principal y más grande del componente. 

**Element:** Un elemento es una parte del bloque, que generalmente depende del bloque para tener un contexto.

**Modifier:** Es una variante de un bloque. Los modificadores modifican el estado o apariencia de un bloque o elemento.

### *Ejemplo de la sintaxis de BEM*

**Block:** .button

**Element:** .button__icon

**Modifier:** .button--primary

#### Ejemplo práctico

Supongamos que estamos creando un botón con un ícono y dos variantes (primario y secundario). Usando BEM, el código se organiza de la siguiente forma:

```jsx title="html"
<!-- Block: button -->
<button class="button button--primary">

  <!-- Element: icon -->
  <span class="button__icon">🔥</span>
  Enviar
</button>

<button class="button button--secondary">
  <span class="button__icon">❄️</span>
  Cancelar
</button>

```

```jsx title="css"
/* Block: button */
.button {
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

/* Modifier: button--primary */
.button--primary {
  background-color: blue;
  color: white;
}

/* Modifier: button--secondary */
.button--secondary {
  background-color: gray;
  color: black;
}

/* Element: button__icon */
.button__icon {
  margin-right: 8px;
}

```

#### Explicación del ejemplo

**Block (.button):** Define el componente principal, en este caso, un botón. Es el bloque de nivel superior.

**Element (.button__icon):** Es una parte del bloque (el ícono dentro del botón). El doble guion __ indica que el elemento pertenece al bloque button.

**Modifier (.button--primary y .button--secondary):** Modificadores para aplicar diferentes estilos al botón según su tipo (primario o secundario).

<br/><br/>

## **Bootstrap**

Bootstrap es un **framework front-end desarrollado por Twitter** que facilita la creación de interfaces web modernas y responsivas utilizando CSS y JavaScript. Es una de las herramientas más populares para el desarrollo web debido a su facilidad de uso, amplia documentación y una gran comunidad de usuarios.

### *¿Qué es una Librería y un Framework?*

#### Librería

Una librería es un conjunto de funciones y utilidades preescritas que los desarrolladores pueden usar para realizar tareas comunes de programación. Las librerías ayudan a simplificar el código y a mejorar la eficiencia al proporcionar soluciones reutilizables para problemas comunes. Un ejemplo de librería es jQuery, que ofrece funciones simplificadas para manipular el DOM, manejar eventos y realizar peticiones AJAX.

#### Framework

Un framework es una plataforma o estructura de software que proporciona una base sólida y estándar para el desarrollo de aplicaciones. Los frameworks no solo incluyen librerías de funciones, sino que también establecen una arquitectura y directrices para el desarrollo, ayudando a los desarrolladores a seguir un patrón coherente. Un framework incluye componentes como controladores, modelos, vistas, y herramientas de gestión de rutas. Bootstrap es un framework que ofrece una estructura completa para el desarrollo de interfaces de usuario.


### *Ventajas de Utilizar Bootstrap para Desarrollar Sitios Web Responsive*

**1. Diseño Responsive**

Bootstrap está diseñado para crear sitios web que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos. Utiliza un sistema de rejilla flexible que permite diseñar interfaces que se ajustan a móviles, tabletas y computadoras de escritorio.
<br/>

**2. Componentes Preconstruidos**

Bootstrap incluye una amplia gama de componentes preconstruidos como botones, formularios, tarjetas, menús de navegación, modales, y mucho más. Estos componentes son fáciles de integrar y personalizar, lo que acelera el proceso de desarrollo.
<br/>

**3. Consistencia**

Bootstrap asegura consistencia en el diseño de las interfaces a través de sus componentes y estilos estandarizados. Esto es especialmente útil en equipos de desarrollo grandes donde varios desarrolladores trabajan en el mismo proyecto.
<br/>

**4. Fácil de Usar**

Bootstrap es fácil de usar y no requiere una curva de aprendizaje empinada. Los desarrolladores pueden comenzar rápidamente integrando las hojas de estilo y scripts de Bootstrap en sus proyectos.
<br/>

**5. Gran Comunidad y Documentación**

Bootstrap cuenta con una gran comunidad de usuarios y una documentación extensa y detallada. Esto facilita encontrar soluciones a problemas comunes, acceder a ejemplos prácticos y obtener soporte de otros desarrolladores.
<br/>

**6. Personalización**

Bootstrap es altamente personalizable. Los desarrolladores pueden personalizar los componentes y estilos utilizando variables SASS para ajustarse a los requerimientos específicos de su proyecto.
<br/>


### *Instalación*

Existen dos formas de instalación.

1. Descarga los archivos CSS y JavaScript desde el sitio oficial de Bootstrap.  **https://getbootstrap.com/**

2. Enlazar nuestro proyecto usando la CDN oficial (más sencillo).

#### Enlazar nuestro proyecto usando la CDN oficial

-   Ingresamos a la Web.
-   Vamos al apartado **Docs -> Introduction.** y copiamos toda la estructura de HTML con los enlaces a Bootrsap

![bootstap](/img/bootstrap.png)


```jsx title="Estructura"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>

  <body>
    <h1>Hello, world!</h1>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>

```


## Estructura basada en contenedores

Bootstrap es uno de los frameworks más populares para el desarrollo web frontend. Facilita la creación de sitios web responsive, es decir, que se adaptan a diferentes tamaños de pantalla y dispositivos. **Una de las características fundamentales de Bootstrap es su estructura basada en contenedores.**

#### Tipos de Contenedores

Bootstrap ofrece dos tipos principales de contenedores para estructurar y alinear el contenido en una página web: 

1.  .container
2.  .container-fluid.

#### .container

-   Es un contenedor fijo con un ancho máximo predefinido. Este ancho se ajusta en función del tamaño de la pantalla (breakpoint).

-   Proporciona un margen (padding) a los lados del contenido para que esté centrado en la página.

-   Ideal para layouts centrados y cuando se desea mantener un ancho constante en diferentes dispositivos.


```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fijo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Contenedor Fijo</h1>
        <p>Este contenedor tiene un ancho máximo que se ajusta según el tamaño de la pantalla. Es ideal para centrar contenido en dispositivos de diferentes tamaños.</p>
    </div>
</body>
</html>

```

Este contenedor tendrá márgenes automáticos a los lados para centrar el contenido, y su ancho máximo se ajustará según los puntos de ruptura (breakpoints) predefinidos en Bootstrap.

![container](/img/container.png)

<br/>

#### .container-fluid

-   Es un contenedor de ancho completo que abarca el 100% del ancho del viewport.

-   No tiene márgenes laterales y se adapta completamente al tamaño de la pantalla, proporcionando un diseño más fluido y adaptable.

-   Perfecto para layouts que necesitan ocupar todo el espacio disponible en la pantalla.

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid bg-light p-3">
        <h1>Contenedor Fluido</h1>
        <p>Este contenedor ocupa todo el ancho de la pantalla, sin márgenes laterales. Es perfecto para diseños que necesitan aprovechar todo el espacio disponible.</p>
    </div>
</body>
</html>

```

Este contenedor abarcará el ancho completo del viewport, lo que lo hace ideal para secciones de fondo que ocupan toda la pantalla o layouts más dinámicos.

![container-fluid](/img/container-fluid.png)

<br/><br/>

## Introducción al Sistema de Grillas

El sistema de grillas es el núcleo de la capacidad de Bootstrap para crear layouts responsive. Permite dividir el espacio en filas y columnas, adaptándose a diferentes tamaños de pantalla mediante breakpoints predefinidos.

#### Filas y Columnas

-   **Filas (.row):**

    -   Las filas son contenedores horizontales que agrupan columnas.

    -   Utilizan un sistema flexbox para alinear y distribuir el contenido.

    -   Las filas deben estar siempre dentro de un contenedor (.container o .container-fluid).


-   **Columnas (.col):**

    -   Las columnas dentro de una fila se dividen en 12 partes iguales.

    -   Puedes especificar cuántas columnas ocupará un elemento en diferentes tamaños de pantalla utilizando clases como .col-, .col-sm-, .col-md-, .col-lg-, y .col-xl-.

    -   Permiten crear layouts responsive que se adaptan a diferentes dispositivos y tamaños de pantalla.


### *Breakpoints*

Bootstrap define varios breakpoints que corresponden a diferentes tamaños de pantalla. Estos son:

**xs (extra small):** < 576px

**sm (small):** >= 576px

**md (medium):** >= 768px

**lg (large):** >= 992px

**xl (extra large):** >= 1200px

**xxl (extra extra large):** >= 1400px

<br/><br/>

## Elementos Principales


### *Box Model y Bootstrap*

Bootstrap usa clases utilitarias para controlar márgenes, rellenos y posicionamiento.

#### Márgenes y rellenos

#### *Clases de margen (m-*):*

Las clases de márgenes en Bootstrap permiten agregar o eliminar espacio alrededor de un elemento. 

```jsx title="sintaxis"
m{lado}-{valor}
```
<br/><br/>

#### Lados
**t:** Margen superior (top).

**b:** Margen inferior (bottom).

**l:** Margen izquierdo (left).

**r:** Margen derecho (right).

**x:** Márgenes horizontales (left y right).

**y:** Márgenes verticales (top y bottom).

**(sin especificar):** Se aplica a los 4 lados.

<br/><br/>

#### Valores disponibles

**0:** Sin margen.

**1 a 5:** Tamaños incrementales (0.25 rem a 3 rem).

**auto:** Ajusta automáticamente el margen (por ejemplo, centrar un elemento).

#### *Ejemplos*

**m-0:** Sin margen.
**mt-3:** Margen superior de 1 rem.
**mx-auto:** Márgenes horizontales automáticos.

<br/><br/>

#### *Clases de padding (p-*):*

Las clases de relleno en Bootstrap se utilizan para añadir espacio interno dentro de un elemento.

```jsx title="sintaxis"
p{lado}-{valor}
```

<br/><br/>

#### Lados
**t:** Superior (top).

**b:** Inferior (bottom).

**l:** Izquierdo (left).

**r:** Derecho (right).

**x:** Horizontales (left y right).

**y:** Verticales (top y bottom).

**(sin especificar):** Se aplica a los 4 lados.

<br/><br/>


#### Valores disponibles

**0:** Sin relleno.

**1 a 5:** Tamaños incrementales (0.25 rem a 3 rem).

<br/><br/>

#### *Ejemplos*

**p-3:** Relleno de 1 rem.
**pt-2:** Relleno superior.

<br/><br/>

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container">
    <div class="p-5 m-3 bg-light border">
        Este contenedor tiene un margen externo y relleno interno.
    </div>
</div>

</body>
</html>
```
![boxmodel-boostrap1](/img/boxmodel-boostrap1.png)

<br/><br/>

#### *Posicionamiento*

##### Clases utilitarias:

**position-static:** Posición predeterminada.

**position-relative:** Posiciona un elemento en relación con su contenedor.

**position-absolute:** Permite mover elementos con top, left, right, bottom.

**position-fixed:** Fija el elemento al viewport.

**position-sticky:** Permite que un elemento "se pegue" al scroll.

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container">
    <div class="position-relative bg-secondary text-white" style="height: 200px;">
        <div class="position-absolute bg-primary text-white p-3" style="top: 50px; left: 50px;">
            Caja absoluta
        </div>
    </div>
</div>

</body>
</html>
```

-   La caja azul está posicionada dentro del contenedor gris usando position-absolute con desplazamientos top y left.

![boxmodel-boostrap2](/img/boxmodel-boostrap2.png)

<br/><br/>


### *table*

Bootstrap facilita el diseño de tablas mediante clases prediseñadas.

#### Clases principales para tablas

**.table:** Aplica estilo básico a una tabla.

**.table-striped:** Añade un fondo alterno a las filas.

**.table-bordered:** Agrega bordes alrededor de la tabla y sus celdas.

**.table-hover:** Resalta las filas cuando pasas el cursor sobre ellas.

**table-sm:** Reduce el tamaño de las filas.

**table-dark y .table-light:** Aplica esquemas de color.

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <table class="table table-striped table-hover table-bordered">
    <thead class="table-dark">
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>juan.perez@example.com</td>
            <td><button class="btn btn-primary btn-sm">Editar</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>María López</td>
            <td>maria.lopez@example.com</td>
            <td><button class="btn btn-danger btn-sm">Eliminar</button></td>
        </tr>
    </tbody>
</table>

</body>
</html>
```
La tabla tiene un diseño profesional con estilos responsivos y clases combinadas

![table](/img/table.png)

<br/><br/>

### *Formularios*

Bootstrap facilita la creación de formularios responsivos y estilizados con clases para inputs, botones, y grupos de controles.

#### Clases principales para formularios

**.form-control:** Da estilo a los campos de texto, select, textarea, etc.

**.form-check:** Estiliza checkboxes y radios.

**.form-floating:** Crea un diseño de campos con etiquetas flotantes.

**.input-group:** Agrupa inputs con iconos, texto o botones.

**.btn:** Estiliza los botones.



```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <form>
    <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check">
        <label class="form-check-label" for="check">Recordarme</label>
    </div>
    <button type="submit" class="btn btn-primary">Iniciar sesión</button>
</form>


</body>
</html>
```

-   mb-3 agrega margen inferior entre los elementos.

-   .form-label estiliza etiquetas y .form-control estiliza campos.

![formulario](/img/formulario.png)


#### Formulario con diseño grid


```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <form>
    <div class="row g-3">
        <div class="col-md-6">
            <label for="firstName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="firstName">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="lastName">
        </div>
        <div class="col-12">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="email">
        </div>
    </div>
    <button type="submit" class="btn btn-success mt-3">Registrar</button>
</form>
</body>
</html>
```


-   .row y .col-md-6 dividen el formulario en dos columnas.

![formulario2](/img/formulario2.png)


<br/><br/>

## Introducción al Diseño Responsive y Bootstrap

El diseño responsive es esencial para garantizar que los sitios web sean funcionales y visualmente atractivos en todos los dispositivos. Bootstrap facilita este proceso mediante su sistema de rejilla flexible, que utiliza una estructura de 12 columnas, y sus utilidades predefinidas para adaptarse a los distintos tamaños de pantalla.

### *Cómo Funciona el Sistema de Rejilla en Bootstrap*

1. Dividir en 12 Columnas

-   Bootstrap divide el espacio de una fila (.row) en 12 columnas. Puedes combinar columnas para crear distintos diseños, donde cada columna es un porcentaje del ancho total de la fila. Para eso debemos: 
    -   Declarar primero un contenedor.
    -   Automáticamente mínimo una fila.
    -   Luego la cantidad de columnas que necesitemos.



2. Clases para Tamaños de Pantalla

-   Bootstrap utiliza breakpoints (puntos de corte) para definir cómo deben comportarse las columnas en diferentes tamaños de pantalla

**xs (extra small):** < 576px

**sm (small):** >= 576px

**md (medium):** >= 768px

**lg (large):** >= 992px

**xl (extra large):** >= 1200px

**xxl (extra extra large):** >= 1400px


#### Ejemplos

```jsx title="Ejemplo"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container-fluid">
    <div class="row">

            <!--  Tamaños responsive     /    background color-->
      <div class="col-12 col-md-6 col-lg-4   bg-primary">Columna 1</div>
      <div class="col-12 col-md-6 col-lg-4   bg-secondary">Columna 2</div>
      <div class="col-12 col-lg-4            bg-danger">Columna 3</div>
    </div>
  </div>
  

</body>
</html>

```
<br/><br/>

Explicación:

**Pantallas pequeñas:** Cada columna ocupa el ancho completo (col-12).

![pantalla-pequeña](/img/pantalla-pequeña.png)


<br/><br/>

**Pantallas medianas:** Dos columnas ocupan la mitad cada una (col-md-6).

![pantalla-mediana](/img/pantalla-mediana.png)

<br/><br/>

**Pantallas grandes:** Tres columnas ocupan un tercio del espacio cada una (col-lg-4).

![pantalla-grande](/img/pantalla-grande.png)

<br/><br/>


### *Rejillas con Media Queries*

Bootstrap está diseñado para simplificar la creación de diseños responsive gracias a su sistema de rejilla y utilidades predefinidas. Sin embargo, puede ocurrir que necesitemos aplicar estilos específicos que van más allá de lo que ofrecen las clases integradas de Bootstrap. Las media queries personalizadas en CSS complementan el estilo responsive de Bootstrap.

#### Ejemplo

```jsx title="html"
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor Fluido</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
  <div class="container-fluid">
    <div class="row">

      <!--        Tamaños responsive          background color    Estilos para texto -->
      <div class="col-12 col-md-6 col-lg-4    bg-primary          responsive-text">
        Texto en Columna 1
      </div>
      <div class="col-12 col-md-6 col-lg-4    bg-secondary        responsive-text">
        Texto en Columna 2
      </div>
      <div class="col-12 col-lg-4            bg-danger            responsive-text">
        Texto en Columna 3
      </div>

    </div>
  </div>
</body>
</html>
```


```jsx title="css"
/* Estilos base para el texto */
.responsive-text {
    text-align: center;
    font-weight: bold;
}

/* Pantallas pequeñas: texto pequeño y azul */
@media (max-width: 575px) {
    .responsive-text {
        font-size: 16px;
        color: blue;
    }
}

/* Pantallas medianas: texto mediano y verde */
@media (min-width: 576px) and (max-width: 991px) {
    .responsive-text {
        font-size: 20px;
        color: green;
    }
}

/* Pantallas grandes: texto grande y rojo */
@media (min-width: 992px) {
    .responsive-text {
        font-size: 24px;
        color: red;
    }
}

```

#### Explicación del Comportamiento:

Pantallas Pequeñas (menos de 576px):

    -   El texto tiene un tamaño de fuente pequeño (font-size: 16px).

    -   El color del texto es azul (color: blue).

![pantalla-pequeña2](/img/pantalla-pequeña2.png)

<br/><br/>

Pantallas Medianas (576px a 991px):

    -   El texto aumenta de tamaño a 20px.
    -   El color del texto cambia a verde.

![pantalla-mediana2](/img/pantalla-mediana2.png)

<br/><br/>

    -   Pantallas Grandes (992px o más):

    -   El texto tiene un tamaño más grande (font-size: 24px).
    -   El color del texto es rojo.

    ![pantalla-grande2](/img/pantalla-grande2.png)