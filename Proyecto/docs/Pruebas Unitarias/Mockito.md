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



#### Creación Carpetas TEST
