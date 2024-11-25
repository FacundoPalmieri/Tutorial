---
sidebar_position: 6
---

# 6- Proyecto Base

## 1.  Creación de un wireframe

-   Ingresamos a https://whimsical.com/

-   Iremos a la sección "Board" para crear nuestro prototipo.

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
    <title>El fuego de Buenos Aires</title>
</head>

<body> <!--Cuerpo-->

    <header> <!--Encabezado-->
    <h1>El fuego de Buenos Aires</h1>
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
        <h1>El fuego de Buenos Aires</h1>
         <nav> <!--Barra de navegación-->
                <ul>
                    <li><a href="./pages/nosotros.html">Sobre nosotros</a></li>
                    <li><a href="./pages/menu.html">Menú</a></li>
                    <li><a href="./pages/contacto.html">Contacto</a></li>
                    <li><a href="./pages/reservas.html">Reservas</a></li>
             </ul>
         </nav>
       </header>

```

:::tip
Con este comando, modificando el valor, se creara la sintaxis para la lista -->  ul>li*5>a
:::

   


-   Terminanos de crear el resto de la estructura del index.
    -   main.
        - section.
    

```jsx title="index.html"
 <main> <!--Contenido Principal-->
        <section> <!--Divisón de contenido por temática (HERO SECTION 1° MAS IMPORTANTE)-->
            <h2>Auténtica Parrilla Argentina</h2>
        </section>

        <section>
            <h2>Bienvenidos a la Página</h2>
        </section>

        <section>
            <div>
                <h3>Nuestros vinos</h3>
                <p>Nosotros soñamos con el vino ideal, aquel que pudiera acompañar con elegancia la exquisita carta de su restaurante.
                   Puso a rodar el sueño y luego de una larga espera en barricas de roble francés, la mejor selección de uvas dio lugar 
                   productos únicos, que prometen acompañar de forma excelente cada plato de nuestra parilla.
                </p>
                <img src="./img/vino.jpg" alt="imágen de vino">
            </div>
        </section>
            
        
        <section>
            <div>
                <h3>Platos destacados</h3>
            </div>
        </section>
     
    </main>
```
<br/><br/>

-   footer

   ```jsx title="index.html"

    <footer>
        <p>Local Boedo</p>
        <p>&#x1F4CD; - Av. Siempre viva 123</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 01:30 Hs</p> 
        <br>

        <p>Local Palermo</p>
        <p>&#x1F4CD; - Calle falsa 1234</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 16:00Hs y 20:00hs a 23:00Hs</p>

        <p>Seguinos en nuestras redes!</p>
        <a href="https://wa.me/5491123456789" target="_blank"> 
            <img src="./img/whatsapp.png" alt="Logo whatsapp">
        </a>
        
        <a href="https://www.facebook.com/" target="_blank">
            <img src="./img/facebook.png" alt="Logo facebook">
        </a>
        
        <a href="https://www.instagram.com/" target="_blank">
            <img src="./img/instagram.png" alt="Logo instagram">
        </a>
    </footer>

    ```
-   Enlazaremos el resto de la páginas con el index

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
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="./contacto.html">Contacto</a></li>
                        <li><a href="./menu.html">Menú</a></li>
                        <li><a href="./reservas.html">Reservas</a></li>
                   </ul>
                </nav>
        </header> 
    </body>
    </html>

```


## 3. Resultado final

```jsx title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Parrilla Libre: los mejores cortes, atención y reservas online.">

    <title>El fuego de Buenos Aires &#x1F525;</title>
</head>
<body>
    <header>
    <h1>El fuego de Buenos Aires &#x1F525;</h1>
        <nav>
            <ul>
                <li><a href="./pages/nosotros.html">Sobre nosotros</a></li>
                <li><a href="./pages/menu.html">Menú</a></li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
                <li><a href="./pages/reservas.html">Reservas</a></li>
       
            </ul>
        </nav>
    </header>

    <main>
        <section>
           <h2>Auténtica Parrilla Argentina</h2>
           <!-- Se agregará desde css, una imagen de fondo. -->
        </section>

        <section>
            <div>
                <h3>Nuestros vinos</h3>
                <p>Nosotros soñamos con el vino ideal, aquel que pudiera acompañar con elegancia la exquisita carta de su restaurante.
                   Puso a rodar el sueño y luego de una larga espera en barricas de roble francés, la mejor selección de uvas dio lugar 
                   productos únicos, que prometen acompañar de forma excelente cada plato de nuestra parilla.
                </p>
                <img src="./img/vino.jpg" alt="imágen de vino">

            </div>
        </section>

        <section>
            <div>
                <h3>Platos destacados</h3>
            </div>
        </section>
    </main>

    <footer>
        <p>Local Boedo</p>
        <p>&#x1F4CD; - Av. Siempre viva 123</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 01:30 Hs</p> 
        <br>

        <p>Local Palermo</p>
        <p>&#x1F4CD; - Calle falsa 1234</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 16:00Hs y 20:00hs a 23:00Hs</p>

        <p>Seguinos en nuestras redes!</p>
        <a href="https://wa.me/5491123456789" target="_blank"> 
            <img src="./img/whatsapp.png" alt="Logo whatsapp">
        </a>
        
        <a href="https://www.facebook.com/" target="_blank">
            <img src="./img/facebook.png" alt="Logo facebook">
        </a>
        
        <a href="https://www.instagram.com/" target="_blank">
            <img src="./img/instagram.png" alt="Logo instagram">
        </a>
       

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

    <!-- CSS -->
    <link rel="stylesheet" href="../css/style.css">

    <title>El fuego de Buenos Aires &#x1F525;</title>
</head>
<body>
    <header>
        <h1><img src="../img/logo.png" alt="logo"></h1>
            <nav>
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="./menu.html">Menú</a></li>
                    <li><a href="./contacto.html">Contacto</a></li>
                    <li><a href="./reservas.html">Reservas</a></li>
           
                </ul>
            </nav>
        </header>
    <main>

    </main>

    <footer>
        <p>Local Boedo</p>
        <p>&#x1F4CD; - Av. Siempre viva 123</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 01:30 Hs</p> 
        <br>

        <p>Local Palermo</p>
        <p>&#x1F4CD; - Calle falsa 1234</p>
        <p>&#x1F551; - Lunes a Domingo 12:00hs a 16:00Hs y 20:00hs a 23:00Hs</p>

        <p>Seguinos en nuestras redes!</p>
        <a href="https://wa.me/5491123456789" target="_blank"> 
            <img src="./img/whatsapp.png" alt="Logo whatsapp">
        </a>
        
        <a href="https://www.facebook.com/" target="_blank">
            <img src="./img/facebook.png" alt="Logo facebook">
        </a>
        
        <a href="https://www.instagram.com/" target="_blank">
            <img src="./img/instagram.png" alt="Logo instagram">
        </a>
       

    </footer>
    
</body>
</html>

```