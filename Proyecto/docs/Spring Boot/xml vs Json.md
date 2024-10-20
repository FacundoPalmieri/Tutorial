---
sidebar_position: 2
---

# 2 - XML vs JSON


## XML (Lenguaje de Marcado Extensible)

Es un lenguaje de marcado diseñado para almacenar y transportar datos de manera estructurada.

### Características clave de XML:

Estructurado: Organiza los datos en forma de árbol, con etiquetas que anidan otros datos o etiquetas. Esto permite que la información esté jerárquicamente organizada.

Legible por humanos: Es fácil de entender al leerlo, ya que las etiquetas describen el tipo de datos que contienen.

Personalizable: No tiene un conjunto fijo de etiquetas, a diferencia de HTML. Puedes crear tus propias etiquetas, lo que lo hace extensible y adecuado para cualquier tipo de datos.

Portabilidad: XML es independiente de plataformas y tecnologías, lo que significa que los datos en XML pueden ser intercambiados entre diferentes sistemas.

```jsx title="XML"
<persona>
    <nombre>Juan</nombre>
    <edad>30</edad>
    <direccion>
        <calle>Calle Falsa 123</calle>
        <ciudad>Buenos Aires</ciudad>
    </direccion>
</persona>

```

## JSON (Notación de Objetos de JavaScript.)

JSON o mejor conocido como “Java Script Object Notation”, es un formato de texto que es utilizado principalmente para el intercambio de datos mediante el protocolo HTTP entre diferentes sistemas o APIS interconectados entre si.

Sirve como un lenguaje “intermedio”, dado que independientemente del lenguaje de programación, es posible traducir los datos que se requieren transferir entre sistemas a JSON.

JSON se vale del concepto “clave-valor”, donde para cada clave existe un valor asociado. Un conjunto de claves y valores conforman un objeto, que en JSON se representa mediante la apertura y cierre de llaves {}. Un ejemplo sencillo de la sintaxis de un mensaje JSON podemos verlo a continuación:

:::tip
**Tipos de datos en JSON:**
```jsx title=""
String: "texto"
```
```jsx title=""
Número: 123
```
```jsx title=""
Booleano: true o false
```
```jsx title=""
Null: null
```

```jsx title=""
Array: [valor1, valor2, valor3]
```
```jsx title=""
Objeto: { "clave": "valor" }
```


:::


### Ejemplos: 

```jsx title="Solo un objeto"
{
  "nombre": "Cristiano",
  "apellido": "Ronaldo",
  "edad": 39
}

```


```jsx title="Un objeto con array"
{
  "nombre": "Cristiano",
  "apellido": "Ronaldo",
  "edad": 39,
  "equipos": ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al-Nassr"]
}

```



```jsx title="Varios objetos con arrays"
{
  "jugadores": [
    {
      "nombre": "Cristiano",
      "apellido": "Ronaldo",
      "edad": 39,
      "equipos": ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al-Nassr"]
    },

    {
      "nombre": "Lionel",
      "apellido": "Messi",
      "edad": 37,
      "equipos": ["Barcelona", "Paris Saint-Germain", "Inter Miami"]
    },

    {
      "nombre": "Kylian",
      "apellido": "Mbappé",
      "edad": 25,
      "equipos": ["Monaco", "Paris Saint-Germain"]
    }
  ]
}


```
:::important
**¿Por qué es importante manejar y conocer JSON?**

Porque la mayor parte de las API REST que se encuentran productivas en la actualidad, utilizan a JSON como formato de mensaje para comunicarse mediante el protocolo HTTP.
:::