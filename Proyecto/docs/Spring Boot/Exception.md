---
sidebar_position: 16
---

# 16 - Exception

El manejo de excepciones es una parte crucial de cualquier aplicación, ya que permite gestionar errores de manera eficiente y proporcionar feedback claro al usuario. En el contexto de una aplicación Spring Boot, es recomendable implementar un enfoque centralizado para manejar excepciones.

Podremos crear clases de excepción personalizadas para manejar diferentes tipos de errores o manejar las excepciones de forma centralizada

###  Configuraciones iniciales
1. Crearemos el package "exception".
2. Creamos las clase de tipo **exception** según necesitemos para personalizar las mismas.

A continuación se verán ejemplos de exception personalizadas que usaremos en el próximo apartado **@Service**, donde estableceremeos los mensajes personalizados.



```jsx title="CursoNotFoundException"
public class CursoNotFoundException extends RuntimeException {
    public CursoNotFoundException(String message) {

        super(message);
    }
}
```

```jsx title="InvalidCursoException"
public class InvalidCursoException extends RuntimeException {
    public InvalidCursoException(String message) {

        super(message);
    }
}
```

```jsx title="TemaException"
public class TemaException extends RuntimeException {
    public TemaException(String message) {

        super(message);
    }
}
```

3. Crearemos una clase común *GlobalExceptionHandler* para manejar de manera global todas las exception.
:::info[Importante]
Para que Spring boot identifique esta interfaz como tal, debemos colocar la annotation @ControllerAdvice
:::



```jsx title="GlobalExceptionHandler"
@ControllerAdvice
public class GlobalExceptionHandler {

    // Clase de excepción personalizada para Curso no encontrado
    @ExceptionHandler(CursoNotFoundException.class)
    public ResponseEntity<?> handleCursoNotFoundException(CursoNotFoundException e) {
        // Respuesta personalizada para CursoNotFoundException
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(e.getMessage());
    }


    // Clase de excepción personalizada para Curso inválido
    @ExceptionHandler(InvalidCursoException.class)
    public ResponseEntity<?> handleInvalidCursoException(InvalidCursoException e) {
        // Respuesta personalizada para InvalidCursoException
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(e.getMessage());
    }


    // Clase de excepción personalizada para errores de Tema
    @ExceptionHandler(TemaException.class)
    public ResponseEntity<?> handleTemaException(TemaException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(e.getMessage());
    }



    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGeneralException(Exception e) {
        // Respuesta para cualquier otra excepción no prevista
        System.err.println("Excepción no controlada: " + e.getMessage());
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Manejando InvalidCursoException: " + e.getMessage());
    }



}
```
