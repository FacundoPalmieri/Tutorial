---
sidebar_position: 6
---

# 6- Proyecto Base

## 1.  Creación de un wireframe

-   Ingresamos a https://whimsical.com/

-   Iremos a la sección "Board" para crear nuestro prototipo-

-   Diseñaremos nuestra web

![prototipoweb](/img/prototipoweb.png)



-   Diseñaremos nuestra web de manera responsive
 
![prototipomovil](/img/prototipomovil.png)


## 2.  Plasmarlo en HTML

-   Creamos la estructura de carpeta que necesitemos.

![proyectohtml1.png](/img/proyectohtml1.png)

<br/><br/>

-   Iniciamos con la estructura básica.

:::tip
Colocando ! + tab tenemos la estructura inicial.
:::

```jsx title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> <!--Título en la pestaña del navegador-->
</head>
<body>
    
</body>
</html>
```

<br/><br/>

- Daremos forma a la estructura colocando dentro del body 
    -   Header.
    -   Barra Navegación.
    -   Main. (Contenido Principal)
        -   Section. (Por temas)
    -   Footer.

```jsx title="index.html"

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce</title>
</head>

<body> <!--Cuerpo-->

    <header> <!--Encabezado-->
    <h1>MercadoLibre</h1>
        <nav> <!--Barra de navegación-->
           
        </nav>

    </header>

    <main> <!--Contenido Principal-->
        <section> <!--Divisón de contenido por temática (HERO SECTION 1° MAS IMPORTANTE)-->
        
        </section>
        <section>
        
        </section>
    </main>

    <footer> <!--Pie de página-->

    </footer>
</body>
</html>

```

<br/><br/>

- Creamos las distintas páginas dentro de la web y sus accesos desde la barra de navegación
    -   Creación de páginas dentro de la carpeta pages.

    ![proyectohtml2.png](/img/proyectohtml2.png)


    -   En el Index, creamos ahora una lista (No ordenada) para enlazar con cada una de las páginas   creadas. 


```jsx title="index.html"
        <header> <!--Encabezado-->
        <h1>MercadoLibre</h1>
         <nav> <!--Barra de navegación-->
                <ul>
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./pages/nosotros.html">Nosotros</a></li>
                    <li><a href="./pages/productos.html">Productos</a></li>
                    <li><a href="./pages/servicios.html">Servicios</a></li>
                    <li><a href="./pages/contacto.html">Contacto </a></li>
             </ul>
         </nav>
       </header>

```

:::tip
Con este comando, modificando el valor, se creara la sintaxis para la lista -->  ul>li*5>a
:::

    -   Enlacaremos el resto de la páginas con el index

    ```jsx title="nosotros.html"
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header> <!--Encabezado-->
            <h1>Nosotros</h1>
                <nav> <!--Barra de navegación-->
                 <ul>
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./pages/nosotros.html">Nosotros</a></li>
                    <li><a href="./pages/productos.html">Productos</a></li>
                    <li><a href="./pages/servicios.html">Servicios</a></li>
                    <li><a href="./pages/contacto.html">Contacto </a></li>
                 </ul>
                </nav>
        </header> 
    </body>
    </html>

```


-   Terminanos de crear el resto de la estructura del index.
    -   Main.
        - Section.

```jsx title="index.html"
 <main> <!--Contenido Principal-->
        <section> <!--Divisón de contenido por temática (HERO SECTION 1° MAS IMPORTANTE)-->
            <h2>Fundado en 1905</h2>
        </section>
        <section>
            <h2>Bienvenidos a la Página</h2>
        </section>
        <section>
            <h2> Productos Destacados</h2>
            <div>
                <img src="" alt="">
                <h3>Producto 1 </h3>
            </div>
            <div>
                <img src="" alt="">
                <h3>Producto 2 </h3>
            </div>
        </section>
     
    </main>

```



## 3. Resultado final

```jsx title="index.html"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce</title>
</head>

<body> <!--Cuerpo-->

    <header> <!--Encabezado-->
    <h1>MercadoLibre</h1>

        <nav> <!--Barra de navegación-->
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/nosotros.html">Nosotros</a></li>
                <li><a href="./pages/productos.html">Productos</a></li>
                <li><a href="./pages/servicios.html">Servicios</a></li>
                <li><a href="./pages/contacto.html">Contacto </a></li>
            </ul>
        </nav>

    </header>

    <main> <!--Contenido Principal-->

        <section> <!--Divisón de contenido por temática (HERO SECTION 1° MAS IMPORTANTE)-->
            <h2>Fundado en 1905</h2>
        </section>

        <section>
            <h2>Bienvenidos a la Página</h2>
        </section>

        <section>
            <h2> Productos Destacados</h2>
            <div>
                <img src="" alt="">
                <h3>Producto 1 </h3>
            </div>

            <div>
                <img src="" alt="">
                <h3>Producto 2 </h3>
            </div>
        </section>
     
    </main>
    
    <footer> <!--Pie de página-->

    </footer>
</body>
</html>
```


```jsx title="nosotros.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="./nosotros.html">Nosotros</a></li>
        <li><a href="./productos.html">Productos</a></li>
        <li><a href="./servicios.html">Servicios</a></li>
        <li><a href="./contacto.html">Contacto </a></li>
    </ul>
    
</body>
</html>

```