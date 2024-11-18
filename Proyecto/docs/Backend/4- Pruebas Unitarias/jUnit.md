---
sidebar_position: 1
---

# 1 - JUnit

## Introducción a JUnit.
JUnit es un framework de prueba de unidad en Java que permite a los desarrolladores verificar que cada pequeña pieza de código (como funciones o métodos) funcione correctamente de forma aislada. Es esencial en el desarrollo de software porque ayuda a identificar y corregir errores temprano, manteniendo el código confiable y fácil de modificar.

### ¿Qué es una prueba unitaria?
Una prueba unitaria es una prueba que examina una pequeña unidad de funcionalidad dentro de una aplicación, como un método específico, sin depender de otras partes del sistema. Su objetivo es asegurar que el método haga exactamente lo que se espera en diversas condiciones.

### ¿Por qué usar JUnit?
- Automatización de pruebas: Puedes ejecutar automáticamente pruebas cada vez que cambies el código, ahorrando tiempo.

- Identificación rápida de errores: Al probar partes pequeñas y aisladas del código, JUnit ayuda a detectar errores de manera rápida y precisa.

- Facilidad para hacer cambios: Con pruebas bien estructuradas, puedes modificar el código con mayor seguridad, sabiendo que los tests verifican que no haya efectos indeseados.

### Principales características de JUnit
- **Sencillo de configurar y usar:** La estructura de JUnit permite definir y ejecutar pruebas de forma fácil.

- **Anotaciones para organizar pruebas:** JUnit usa anotaciones como :
    - *@Test*      : Para marcar un método como prueba.
    - *@BeforeEach*: Para preparar el entorno antes de cada prueba.
    - *@AfterEach* : Para limpiar después de una prueba.

- **Assertions:** JUnit proporciona métodos como:
    - assertEquals, assertTrue, y assertNotNull para verificar si los resultados cumplen con lo esperado.

- **Integración con herramientas de desarrollo:** Funciona bien con entornos como Maven, Gradle, y GitHub Actions, y es compatible con otros frameworks como Spring Boot para hacer pruebas de servicios y controladores.


### ¿Como funciona JUnit?

La metodología de las pruebas está en la comparación entre el valor esperado y el valor real que produce el método que estás probando. **Esto se hace mediante assertions (afirmaciones), que son métodos especiales para comprobar que el código funciona como se espera.**

Cuando se ejecuta una prueba en JUnit, el framework toma el valor esperado (que definimos nosotros en la prueba) y lo compara con el valor real (el resultado que devuelve el código). Si ambos valores coinciden, la prueba pasa. Si no coinciden, la prueba falla y JUnit muestra un mensaje de error, indicando que algo no funcionó como esperabas.

:::info[Importante]
Siempre por defecto los test pasan correctamente. Es decir, si no definiomos lógica dentro de las clases de test, los test darán OK. Solo fallarán cuando se desarrolle la lógica y el resultado esperado no sea igual al valor real recibido.
:::

:::info[Ejemplo]
En el siguiente ejemplo tendremos una clase "Example" que tiene un método sumar. Este método lo que hace es recibir dos valores, sumarlos y retornar el resultado.
Veamos como funciona JUnit, realizando la comparación entre el valor esperado y el valor real.


- Tendremos nuestra clase desarrollada, la cual tine un método que suma los valores y retorna el resultado.
```jsx title="Clase Example - Método Sumar"
public class Example{
    public int sumar(int a, int b){
        return a + b;
    }

}
```
<br/><br/>

- Tendremos nuestra clase TEST. En la misma se llama al método sumar, y se guarda el valor en una variable.

- Luego utilizamos el método de comparación y colocamos primero el valor ESPERADO(ingresado por nosotros) y luego la variable que almacena la suma REAL del método.

```jsx title="Clase ExampleTest - Método Sumar"
import static org.junit.jupiter.api.Assertions.* // Importamos la libtería
public class ExampleTest{

    @Test
    public int testSumar(int a, int b){
        Example example = new Example();

        //Se llama al método REAL y se pasan los dos valores para que sume.
        //Se guarda el valor en una variable
        int result = example.sumar(4,4); // 

        /*El método compara el valor ESPERADO ingresado por nosotros 
        contra la variable con el valor REAL que devuelve el método */
        assertEquals(8, result); 
    }

}
```
:::


### Dependencias y Plugins
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
<build>
        <plugins>
            <plugin>
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
            </plugin>
        </plugins>
    </build>
```

#### ¿Que es Jacoco?
Es un plugin que se utiliza en proyectos de Java para medir la cobertura de código de las pruebas. En otras palabras, JaCoCo evalúa qué tan bien tus pruebas abarcan el código de tu aplicación. Esta herramienta es muy útil para identificar áreas que no están siendo probadas adecuadamente, ayudando a mejorar la calidad y robustez de la aplicación.

#### ¿Cómo funciona JaCoCo?
JaCoCo analiza el código fuente de la aplicación mientras ejecutas las pruebas y registra cuáles líneas, métodos, y clases han sido ejecutadas y cuáles no. Al final, genera un informe de cobertura que muestra qué porcentaje de código fue cubierto por las pruebas.

#### Principales métricas de cobertura en JaCoCo
**Cobertura de instrucciones:** Mide el porcentaje de instrucciones de código que se ejecutaron.

**Cobertura de ramas:** Evalúa el porcentaje de rutas condicionales (if, switch) que fueron probadas.

**Cobertura de métodos:** Mide qué porcentaje de métodos fue llamado al menos una vez durante las pruebas.

**Cobertura de clases:** Mide qué porcentaje de clases fue cubierto.


#### Infome de cobertura

- Correr todas las pruebas y actualizar informe

![InformeCobertura](/img/informecobertura.png)

- Acceder al informe
![InformeCobertura2](/img/informecobertura2.png)


- Veremos nuestro proyecto, junto con el código de cobertura
![InformeCobertura3](/img/informecobertura3.png)


- Nos indicara en color verde las clases y métodos cubiertos por Test.
![InformeCobertura4](/img/informecobertura4.png)


- Metodos cubiertos.

  ![InformeCobertura5](/img/informecobertura5.png)



### Estructura del proyecto

Para utilizar los Test, debemos crear una nueva estructuras de carpeta a nivel raiz, e ir replicando en cascada.

![ProyectoJUnit](/img/EstructuraProyectoJUnit.png)



Ahora bien, dentro de la "ExampleTest" necesitaremos llamar a todos los método a testear de la clase "Example", para eso, vamos a inyectar la dependencia

```jsx title=""
public class ExampleTest {

    private Example example; // Dependencia (En spring utilizar @Autowired)

    @BeforeEach // Permite instanciar un nuevo objeto antes de cada test.
    public void init() {
        this.example = new Example();
    }
}
```


### Tipo de Assertions.

- **assertEquals(esperado, resultado);** --> Evaluar un valor esperado, con un valor actual.

- **assertTrue(resultado > x );** --> Siempre espera verdadero

- **assertFalse(resultado > x);** --> Siempre espera falso 

- **assertThrows();** --> Valida excepeciones

- **assertNotNull(resultado);** --> valida que el objeto resultado NO sea nulo.

- **assertInstanceOf(Integer.class, resultado);** --> Evalua que la respuesta sea del tipo de dato que le indico.


<br/><br/>

#### Ejemplos con cada uno de ellos

 
**1. assertEquals(esperado, resultado);** --> Evaluar un valor esperado, con un valor actual.

```jsx title="Clase Example - checkPositivo"
public class Example{
      public String revertirCadena(String cadena) {
        return new StringBuilder(cadena).reverse().toString();
    }
}
```
- Tendremos nuestra clase desarrollada, la cual tine un método que revierte una cadena de caracteres y la retorna

<br/><br/>


```jsx title="Clase Example - checkPositivo"
public class Example{

      @Test
    public void testRevertirCadena() {
           // Given - Dado/Necesito una cadena para enviar al método
        String cadena = "carro"; // orrac

        // When - Cuando llamo al método le paso mi cadena
        String result = this.example.revertirCadena(cadena);

        // Then - Entonces se compara los resultados
        assertEquals("orrac", result);
    }
}
```
- Tendremos nuestra clase TEST, que identificamos con la annotation @Test.

-  En la misma se llama al método revertirCadena y se guarda en la variable result.

- Luego utilizamos el método de comparación que compara el valor esperado vs. real

<br/><br/>

**2. assertTrue(resultado > x );** --> Siempre espera verdadero


```jsx title="Clase Example - checkPositivo"
public class Example{
      public boolean checkPositivo(int numero) {
        if (numero < 0) {
            throw new IllegalArgumentException("El número no puede ser negativo");
        }
        return true;
    }
}
```
- Tendremos nuestra clase desarrollada, la cual tine un método que valida que un número sea positivo. **En caso contrario Arroja una Exception.**

<br/><br/>



```jsx title="Clase Example - checkPositivo"
public class Example{

     @Test
    public void testCheckPositivo() {
        // Given - Dado/Necesito
        int number = 4; // Colocamos un valor positivo, por tal el resultado deberá dar true.

        // When - Cuando llamo al método le paso el número
        boolean result = example.checkPositivo(number);

        // Then - Entonces valido resultado
        assertTrue(result);
    }
}
```
- Tendremos nuestra clase TEST, que identificamos con la annotation @Test.

-  En la misma se llama al método checkPositivo y se guarda en la variable result.

- Luego utilizamos el método de comparación que valida un true(Porque el método devuelve un Boolean).

<br/><br/>

Ahora deberemos verificar el otro flujo del condicional del método testeado. Es decir, al pasarle un valor positivo deberá devolver true, caso contrario arrojar una Exception. Por tal, vamos a testear ese camino.

**3. assertThrows();** --> Valida excepeciones

```jsx title="Clase Example - checkPositivoError"
public class Example{

    @Test
    public void testCheckPositivoError() {
        // Given - Dado/Necesito
        int number = -4;

        // Then
        assertThrows(IllegalArgumentException.class, () -> {
            example.checkPositivo(number);
        });
    }
}
```
- Declaramos una variable con valor NEGATIVO.

-  Armamos un nuevo método y llamamos a checkPositivo. Guardamos el valor en una variable result.

- Luego utilizamos el método de comparación que valida Exceptions. 

<br/><br/>

**4. assertNotNull(resultado);** --> valida que el objeto resultado NO sea nulo.


```jsx title="Clase Example - ccontarLetrasA(cadena)"
public class Example{
    public int contarLetrasA(String cadena) {
        return (int) cadena.chars()
                .filter(letra -> letra == 'a')
                .count();
    }
}
```
- Tendremos nuestra clase desarrollada, la cual tine un método que cuenta letras 'A'

<br/><br/>

```jsx title="Clase Example - contarLetrasA"
public class Example{
    @Test
    public void testContarLetrasA() {
        // Given - Dado/Necesito
        String cadena = "unprogramadornace";

        // When
        int result = example.contarLetrasA(cadena);

        // Then
        assertNotNull(result);
        assertEquals(3, result);
    }

}
```

- Tendremos nuestra clase TEST, que identificamos con la annotation @Test.

-  En la misma se llama al método contarLetrasA y se guarda en la variable result.

- Luego utilizamos el método para verificar que el valor NO sea Nulo, y que compare la cantidad de letras 'A' esperadas vs. Reales





