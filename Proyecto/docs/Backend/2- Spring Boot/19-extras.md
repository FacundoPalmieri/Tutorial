---
sidebar_position: 19
---

# 19 - Extras

## **Streams y Lambdas**

### *Sintaxis de .map()*

El método map() toma una función como argumento. Esa función define cómo transformar cada elemento de la lista original en un nuevo valor.

La estructura general es:

```jsx title="Ejemplo"
.map(elemento -> transformación)

```

#### 1.  elemento:

-   Es el objeto individual que estás procesando en el stream.

-   Corresponde a un elemento de la lista original.

-   Tú decides el nombre de esta variable (por ejemplo, tema, n, etc.).


#### 2.  transformación:

Es la operación que le haces al elemento.

Puede ser:

-   Acceder a un atributo.

-   Aplicar un método.

-   Realizar una operación matemática o lógica.



#### Regla para .map()

Piensa en .map() como un "transformador". Por cada elemento de la lista:

-   Nombramos al elemento (ejemplo: tema, numero, palabra).

-   Le hacemos algo (ejemplo: acceder a un atributo, aplicar una operación, llamar un método).

-   El resultado de esa transformación es lo que entra a la nueva lista.

#### Ejemplo Simple

Tienes una lista de números y quieres multiplicar cada número por 2:


```jsx title="Ejemplo"
List<Integer> numeros = List.of(1, 2, 3);

List<Integer> resultado = numeros.stream()
        .map(numero -> numero * 2) // "numero" es el elemento, y lo multiplicamos por 2.
        .collect(Collectors.toList());

System.out.println(resultado); // Salida: [2, 4, 6]

```

#### ¿Qué hay dentro del .map()?

**numero:** El elemento individual del stream (en este caso, cada número).

**numero * 2:** La transformación (multiplicar por 2).


### *Ejemplo real*

Tienes una lista de objetos Tema y quieres obtener los nombres (String) de esos temas. La transformación será "convertir un Tema en su nombre".

```jsx title="Ejemplo"
List<String> nombres = listaDeTemas.stream()
        .map(tema -> tema.getNombre()) // "tema" es el elemento, "tema.getNombre()" es la transformación.
        .toList();

```

#### ¿Qué hay dentro del .map()?

**tema:** Es el objeto actual del stream (cada Tema en la lista).

**tema.getNombre():** Es cómo convertimos un Tema en su nombre (String).


### *Referencias de Método*

Si estás llamando directamente a un método (como getNombre()), puedes usar una referencia de método en lugar de una expresión lambda. Es más corto pero hace lo mismo.

```jsx title="Ejemplo"
.map(Tema::getNombre)

```

Esto es equivalente a:

```jsx title="Ejemplo"
.map(tema -> tema.getNombre())

```


### *Convertir una lista de un tipo de Objeto a otro Tipo de Objeto (.map)*

```jsx title="Tema"
private List<Tema> listaDeTemas;

```

```jsx title="TemaDto"
private List<TemaDto> listaDeTemas,
```

```jsx title="Conversión"
List<TemaDto> temaDtos = temas.stream()                           // Fuente: Stream de objetos Tema.
        .map(tema -> new TemaDto(tema.getId(), tema.getNombre())) // Transformación: Tema -> TemaDto
        .toList();                                               // Recolectamos como lista

```


#### Paso a Paso Explicado

1.  **Fuente de datos:** .stream()

    -   Creamos un flujo (stream) desde la lista original **temas.**

    -   **temas.stream()** significa que cada elemento del stream será un objeto de tipo Tema.


2.  **Transformación: .map()**

    -   El **.map()** toma cada objeto Tema y lo transforma en un objeto **TemaDto.**

    -   La expresión lambda **tema -> new TemaDto(tema.getId(), tema.getNombre())**

        -   **tema:** Es un elemento individual de tipo Tema.

        -   **new TemaDto(tema.getId(), tema.getNombre()):** Crea un nuevo objeto TemaDto usando los datos de 
        tema.

3-  Recolectar en una lista:  **.toList();**

    -   Convierte el stream procesado (que ahora contiene objetos TemaDto) en una lista de tipo List< TemaDto>.



### *Convertir una lista de un tipo de Objeto a otro Tipo de Objeto (referencia de método)*

Esto también puede realizarse de manera mas limpia

1.  En mi clase a al cual yo quiero convertir realizo un método:

```jsx title="Class TemaDto"
public class TemaDto {
    private Long id;
    private String nombre;

    // Constructor
    public TemaDto(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    // ¡¡¡¡  Método estático que convierte un Tema a TemaDto!!!!!!!!
    public static TemaDto fromTema(Tema tema) {
        return new TemaDto(tema.getId(), tema.getNombre());
    }
}
```

2.  Luego, en el map(), usas la referencia de método:


```jsx title="Ejemplo"
List<TemaDto> temaDtos = temas.stream()
        .map(TemaDto::fromTema)  // Usamos el método estático fromTema
        .collect(Collectors.toList());


```

#### ¿Cuándo usarlo?

-   Usar la referencia de método es más limpio y reutilizable, especialmente si la conversión es más compleja o si necesitas reutilizarla en varios lugares.

-   Ideal cuando la conversión está definida de manera independiente en un método estático o de instancia, lo cual puede ser más fácil de mantener si la lógica es más compleja.

![comparacion-lambdas](/img/comparacion-lambas.png)



---------


## **Patrón Builder**

### *Construir builder simple*

```jsx title="Ejemplo"
    private Tema buildTemaDto(TemaDto temaDto, Curso curso) {

        return Tema.builder()
                .id(temaDto.id_Tema())
                .nombre(temaDto.nombre())
                .descripcion(temaDto.descripcion())
                .curso(curso)
                .build();
    }

```


### *Construir builder compuesto*

```jsx title="Ejemplo"
private Tema buildTemaDto(TemaDto temaDto, Curso curso) {
    return Tema.builder()
            .id(temaDto.id_Tema())
            .nombre(temaDto.nombre())
            .descripcion(temaDto.descripcion())
            .curso(Curso.builder() // Objeto Curso dentro de Objeto Tema
                    .id(temaDto.curso().getId())
                    .build()) // Construir el curso correctamente
            .build();

}

```

----

## **Return seguido de una operación**

En Spring Boot (y en Java en general), puedes utilizar un return seguido de una operación cuando deseas devolver directamente el resultado de una operación o la creación de un objeto. Esto es muy común en el uso de patrones de diseño como el Builder Pattern o en flujos funcionales como los proporcionados por las Streams. El ejemplo que proporcionaste encaja perfectamente en esta situación.

#### Casos donde es válido y útil realizar un return seguido de una operación:

1.  **Creación de Objetos Complejos:**

Usas un Builder (como en tu ejemplo) para construir un objeto de manera fluida y devolverlo inmediatamente. Esto es útil para mantener el código limpio y evitar la necesidad de variables temporales.
```jsx title="Ejemplo"
return Tema.builder()
    .id(temaDto.id_Tema())
    .nombre(temaDto.nombre())
    .descripcion(temaDto.descripcion())
    .curso(Curso.builder()
        .id(temaDto.curso().getId())
        .build())
    .build();

```


2.  **Streams y Operaciones Funcionales:**

Si estás trabajando con colecciones o flujos de datos, puedes devolver directamente el resultado de una operación funcional.


```jsx title="Ejemplo"
return temas.stream()
    .filter(tema -> tema.isActivo())
    .toList();

```

## **.orElseThrow**

En Spring Data, puedes usar .orElseThrow(() -> ...) en los métodos que devuelven un objeto del tipo Optional < T >, ya que este método es específico de la clase Optional. Aquí te explico cuáles métodos proporcionados por Spring Data son compatibles y en qué casos podrías usar .orElseThrow()

### *Métodos comunes de Spring Data que devuelven Optional*

1. **findbyId() :** Devuelve un Optional< T > donde T es la entidad que estás buscando.

```jsx title="Ejemplo"
return cursoRepository.findById(cursoId)
        .orElseThrow(() -> new CursoNotFoundException("El curso no existe"));

```
<br/><br/>

2. **findOne(Example< S > example)**: Busca una entidad que coincida con un Example. Si la encuentra, la devuelve como Optional< T >.

```jsx title="Ejemplo"
Example<Tema> example = Example.of(new Tema("Java Básico"));

return temaRepository.findOne(example)
        .orElseThrow(() -> new TemaNotFoundException("El tema no existe"));
```
<br/><br/>

3. **Otros métodos personalizados con consultas derivadas (@Query)** : Si defines un método en tu repositorio que devuelve Optional< T >, puedes usar .orElseThrow de la misma manera.

```jsx title="repository"
Optional<Curso> findByNombre(String nombre);

```


### *Métodos que NO son compatibles directamente*

1. **findAll():** Devuelve una lista (List< T >), no un Optional. No puedes usar .orElseThrow directamente.

```jsx title="Ejemplo"
List<Curso> cursos = cursoRepository.findAll();
if (cursos.isEmpty()) {
    throw new CursoNotFoundException("No hay cursos disponibles");
}
return cursos;

```
<br/><br/>

2.  **save():** Devuelve la entidad guardada (T), no un Optional. No tiene sentido usar .orElseThrow

3. **deleteById(ID id)**: No devuelve ningún valor, simplemente realiza la operación de borrado.

4. **existsById(ID id)**: Devuelve un booleano (true o false), no un Optional.



