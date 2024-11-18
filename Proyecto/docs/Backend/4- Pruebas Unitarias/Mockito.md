---
sidebar_position: 2
---

# 2 - Mockito

## Introducción a Mockito
Mockito es un popular framework en Java que se usa para crear mocks (objetos simulados o falsos) en las pruebas unitarias. Es especialmente útil cuando necesitas probar una clase o método que depende de otras clases externas, como bases de datos, servicios externos, o componentes que pueden ser complejos o lentos de ejecutar.

### ¿Qué es un mock?
Un mock es un objeto simulado que imita el comportamiento de un objeto real, pero permite definir cómo debería responder en diferentes situaciones. En una prueba unitaria, usar mocks te permite:
-   Controlar el entorno de prueba al definir respuestas específicas.

-   Asegurarte de que las pruebas sean rápidas y no dependan de componentes externos.

### ¿Por qué usar Mockito?
Mockito facilita el proceso de crear y manejar mocks en Java. Sus beneficios incluyen:

**Aislamiento de dependencias:** Permite probar el código en aislamiento, sin necesidad de que las dependencias se ejecuten realmente.

**Personalización de respuestas:** Puedes especificar cómo debería comportarse el mock en ciertas llamadas, de manera que simule diferentes escenarios.

**Verificación de interacciones:** Mockito permite verificar si un método fue llamado, cuántas veces, y con qué parámetros, lo cual ayuda a asegurar que el código está interactuando correctamente con sus dependencias.

### Principales características de Mockito
**Creación de mocks:** Puedes crear un mock de cualquier clase o interfaz usando Mockito.mock(ClassName.class).
**Definición de comportamiento:** Con when y thenReturn, puedes especificar qué respuesta devolverá un método cuando se llame.
**Verificación de interacciones:** Con verify, puedes confirmar que ciertos métodos del mock se llamaron con parámetros específicos.


### Simulación de Proyecto

#### Dependencias y Plugins
```jsx title="JUnit"
        <!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.11.0-M2</version>
            <scope>test</scope>
        </dependency>
 

```

```jsx title="JaCoCo"

// Se añade desde el bloque Plugin dentro de los bloques Build y Plugins ya existentes.
<build>      <!--Bloque existente en Proyecto -->
        <plugins>      <!--Bloque existente en Proyecto -->

            <plugin> <!--DESDE ACA -->
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.12</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>jacoco-check</id>
                        <goals>
                            <goal>check</goal>
                        </goals>
                        <configuration>
                            <rules>
                                <rule>
                                    <element>PACKAGE</element>
                                    <limits>
                                        <limit>
                                            <counter>LINE</counter>
                                            <value>COVEREDRATIO</value>
                                            <minimum>0.85</minimum>  <!--Cobertura 85% -->
                                        </limit>
                                    </limits>
                                </rule>
                            </rules>
                        </configuration>
                    </execution>
                </executions>
            </plugin> <!--HASTA ACA -->


        </plugins>
    </build>
```



-----------------------------------------------------------------------------------------------------------------

#### Creación de Base de datos TEST

Para evitar que la aplicación acceda a la base de datos productiva durante las pruebas, vamos a crear un archivo de configuración específico para el entorno de test. Así, cuando Spring Boot ejecute los tests, utilizará este archivo y no se conectará a la base de datos productiva. 


- En el mismo directorio donde está el archivo de producción (application.properties), se creará un archivo llamado application-test.properties.

```jsx title="application-test.properties"
# Evitar la conexión a la base de datos en el contexto de prueba
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=false
```


![BDTest](/img/bdtest.png)

-----------------------------------------------------------------------------------------------------------------

#### Creación Estructura TEST

Debemos generar una réplica de nuestra estructura principal.
:::tip
Para generar la clase Test con los métodos a probar, se hace click derecho sobre la clase original, y se da la opción de generación test.
:::

Tomando como ejemplo SOLO la clase CursoService, nos debería quedar una estructura simular a esta: 

![EstructuraMockito](/img/estructuramockito.png)





<br/><br/>
Luego generamos en la Raiz donde se alojaran las clases TEST(com.plantilla.xxxx), una clase "DataProvider" que va a simular una base de datos.

![EstructuraMockito2](/img/estructuramockito2.png)


-----------------------------------------------------------------------------------------------------------------

<br/><br/>

#### Annotation e Inyección de dependencias.

:::info[Important]
JUnit --> Trabaja con la clase a probar.

Mockito --> Trabaja con la dependencia de esa clase a probar.
:::

```jsx title="Clase Test"
@ActiveProfiles("test")
@SpringBootTest
public class CursoServiceTest {

    @Mock
    private CursoRepository cursoRepository;

    @Mock
    private TemaService temaService;

    @InjectMocks
    private CursoService cursoService;

    @BeforeEach
    void init(){
        MockitoAnnotations.openMocks(this); //Habilitar annotations.
    }

    @Test
    //Métodos


}

```

```jsx title="Data Provider"

@ActiveProfiles("test")
public class DataProvider {

    //Métodos

}
```


```jsx title="ApplicationTests"

@SpringBootTest
@ActiveProfiles("test")
class ApiEstudiantesApplicationTests {

    @Test
    void contextLoads() {
    }

}
```


<br/><br/>

Una vez realizada la estructura de carpetas, junto con el "DataProvider" y la inyección de dependencias en nuestras 3 clases, deberia quedar así

- Curso Service Test

![EstructuraMockito3](/img/estructuramockito3.png)


- Data Provider

![EstructuraMockito4](/img/estructuramockito4.png)

- ApplicationTest

![EstructuraMockito5](/img/estructuramockito5.png)

<br/><br/>
### Testeo de Métodos


**void testSaveCurso()**
- Este método deberá devolver un objeto Response al guardar el curso

Como se menciono antes, la idea de estas pruebas es NO depender de servicios externos, como por ejemplo una base de datos. 

1. En la clase "DataProvider" haremos un método con los datos que necesitamos que nos devuelva.

```jsx title="Nuevo Curso - DataProvider"
 public static Curso nuevoCursoMock(){
        Curso curso = new Curso(3L, "Curso de Spring boot", "Virtual", new Date(), nuevaListaTemaMock());
        return curso;
    }

```


2.  Ahora realizamos la lógica para probar el método en sí.

```jsx title="testSaveCurso"
    @Test
    void testSaveCurso() {
        //Given - Dado tales elementos
        Curso curso = DataProvider.nuevoCursoMock();


        //When

        // Simula que el curso no existe en la base de datos (findById retorna un Optional vacío)
        when(this.cursoRepository.findById(curso.getId_curso())).thenReturn(Optional.empty());

        // Configura el comportamiento de temaService para evitar el NullPointerException
        when(this.temaService.findById(anyLong())).thenReturn(new Tema(1,"",""));

        //Simula los datos a retornar al guardar el curso.
        when(this.cursoRepository.save(curso)).thenReturn(DataProvider.nuevoCursoMock());

        //llamado al servicio.
        Map<String, Object> response =  this.cursoService.saveCurso(curso);

        // Recupero el curso guardado desde el Map
        Curso cursoResponse = (Curso) response.get("curso"); 

        // Then
        assertNotNull(response);
        assertNotNull(cursoResponse); // Verifica que el curso guardado no sea nulo
        assertEquals(3L, cursoResponse.getId_curso());
        assertEquals("Curso de Spring boot", cursoResponse.getNombre());
        assertEquals("Virtual", cursoResponse.getModalidad());

        // Verificar que efectivamente se llame al método (1 vez)
        verify(this.cursoRepository, times(1)).save(curso);


    }


```


-----------------------------------------------------------------------------------------------------------------

<br/><br/>

**void testGetCursos()**
- Este método deberá devolver todos los cursos.

1. En la clase "DataProvider" haremos un método con los datos que necesitamos que nos devuelva.

```jsx title="DataProvider"
public class DataProvider {

   public static List<Tema> listaTemas1Mock (){

        // 1. Crear algunos temas simulados
        Tema tema1 = new Tema(1L,"Introducción a Java","Conceptos básicos y sintaxis de Java." );
        Tema tema2 = new Tema(2L,"POO en Java","Principios de Programación Orientada a Objetos en Java." );

        List<Tema> listaDeTemasCurso = Arrays.asList(tema1, tema2);

        return listaDeTemasCurso;
    }


    public static List<Tema> listaTemas2Mock (){

        // 1. Crear algunos temas simulados
        Tema tema3 = new Tema(3L,"Bases de datos","Introducción a bases de datos y JDBC en Java.");

        List<Tema> listaDeTemasCurso = Arrays.asList(tema3);

        return listaDeTemasCurso;
    }




    // LISTA DE CURSOS
    public static Page<Curso> ListaCursosMock(int page, int size) {

        // 1. Crear algunos cursos simulados con los temas creados
        Curso curso1 = new Curso(1L, "Curso de Java Básico","Virtual",new Date(),listaTemas1Mock());
        Curso curso2 = new Curso(2L, "Curso de Java Avanzado", "Presencial", new Date(),listaTemas2Mock());

        List<Curso> cursos = Arrays.asList(curso1, curso2);

        // 3. Configurar la paginación
        Pageable pageable = PageRequest.of(page, size);

        // 4. Crear una página simulada con PageImpl
        return new PageImpl<>(cursos, pageable, cursos.size());

    }

}


```


2.  Ahora realizamos la lógica para probar el método en sí.

```jsx title="testGetCursos()"
    @Test
    void testGetCursos() {

        //Given - Dado tales elementos:
        int page = 1;
        int size = 10;
        // Crear la lista de temas esperados
        List<Tema> temasEsperados = Arrays.asList(
                new Tema(1L,"Introducción a Java","Conceptos básicos y sintaxis de Java." ),
                new Tema(2L,"POO en Java","Principios de Programación Orientada a Objetos en Java." )
        );



        //When
        when(this.cursoRepository.findAll(any(Pageable.class))).thenReturn(DataProvider.ListaCursosMock(page, size));
        Page<Curso> result = this.cursoService.getCursos(page,size);

        /*
        Usamos `any(Pageable.class)` para indicar que no nos importa el valor exacto del `Pageable`, solo que sea del tipo
        adecuado para que el mock funcione.
         */


        //Then
        assertNotNull(result);
        assertFalse(result.isEmpty());
        assertEquals(page,result.getNumber());
        assertEquals(size,result.getSize());
        assertEquals(1, result.getContent().get(0).getId_curso());
        assertEquals("Curso de Java Básico", result.getContent().get(0).getNombre());
        assertEquals("Virtual", result.getContent().get(0).getModalidad());
        assertEquals(temasEsperados,result.getContent().get(0).getListaDeTemas());

        //Verificar que efectivamente  se llame al metodo (1 vez)
        verify(this.cursoRepository, times(1)).findAll(any(Pageable.class));

    }

```


-----------------------------------------------------------------------------------------------------------------

<br/><br/>

**void testGetCursoById()**
- Este método deberá devolver un cursoDTO según el ID que recibe

:::info
CursoDTO : Nombre del curso y Nombre de los temas.
:::


1. En la clase "DataProvider" haremos un método con los datos que necesitamos que nos devuelva.

```jsx title="DataProvider"

      public static Curso cursoMock() {

        Curso curso2 = new Curso(2L, "Curso de Java Avanzado", "Presencial", new Date(), Arrays.asList(
                new Tema(2L,"POO en Java","Principios de Programación Orientada a Objetos en Java." ),
                new Tema(3L,"Bases de datos","Introducción a bases de datos y JDBC en Java.")
        ));

        return curso2;
    }

```

2.  Ahora realizamos la lógica para probar el método en sí.

```jsx title="testGetCursoById()"
   @Test
    void testGetCursoById() {
        //Given - Dado
        long id = 1;

        // Crear la lista de temas esperados
        List<String> temasEsperados = Arrays.asList(
                    "POO en Java",
                    "Bases de datos"
                    );


        //When
        when(this.cursoRepository.findById(id)).thenReturn(Optional.of(DataProvider.cursoMock()));
        CursoTemaDto cursoTemaDto = this.cursoService.getCursoById(id);

        //Then
        assertNotNull(cursoTemaDto);
        assertEquals("Curso de Java Avanzado",cursoTemaDto.getNombre());
        assertEquals(temasEsperados, cursoTemaDto.getListaDeTemas());

        //Verificar que efectivamente  se llame al metodo (1 vez)
        verify(this.cursoRepository, times(1)).findById(id);
    }

```

-----------------------------------------------------------------------------------------------------------------

<br/><br/>

**void testEditCurso()**
- Este método deberá devolver un curso con la "Modalidad" Editada.

```jsx title="Curso Editado - DataProvider"
 public static Curso cursoEditadoMock(){
        Curso curso = new Curso(3L, "Curso de Spring boot", "Presencial", new Date(), nuevaListaTemaMock());
        return curso;
    }
```


2.  Ahora realizamos la lógica para probar el método en sí.

```jsx title="testEditCurso"
    @Test
    void testEditCurso() {
        //Given
        long id = 3;
        String nuevaModalidad = "Presencial";

        //WHEN
        //Simula que el curso existe en la base de datos
        when(this.cursoRepository.existsById(anyLong())).thenReturn(true);

        // Simula que el curso se encuentra al buscar por ID
        when(this.cursoRepository.findById(anyLong())).thenReturn(Optional.of(DataProvider.nuevoCursoMock()));

        //Simula los datos a retornar al guardar el curso editado.
        when(this.cursoRepository.save(any(Curso.class))).thenReturn(DataProvider.cursoEditadoMock());

        //Llamado al servicio
        Map<String,Object> response = this.cursoService.editCurso(id, nuevaModalidad);

        // Recupero el curso guardado desde el Map
        Curso cursoResponse = (Curso) response.get("curso");

        //Then
        assertNotNull(response);
        assertEquals(3L, cursoResponse.getId_curso());
        assertEquals("Curso de Spring boot", cursoResponse.getNombre());
        assertEquals("Presencial", cursoResponse.getModalidad());

        //Verificar que efectivamente  se llame al metodo (1 vez)
       verify(this.cursoRepository, times(1)).save(DataProvider.cursoEditadoMock());

    }

```


-----------------------------------------------------------------------------------------------------------------

### Informe de cobertura

JaCoCo analiza el código fuente de la aplicación mientras ejecutas las pruebas y registra cuáles líneas, métodos, y clases han sido ejecutadas y cuáles no. Al final, genera un informe de cobertura que muestra qué porcentaje de código fue cubierto por las pruebas.

1. Ejectuar las pruebas generales en Test

![jacoco](/img/jacoco.png)


2. Ingresaremos al informe de cobertura, arrastrando el Index al navegador
![jacoco2](/img/jacoco2.png)

![jacoco3](/img/jacoco3.png)






