---
sidebar_position: 10
---

# 10 - Inicio de Proyecto
![inicio proyecto](/img/InicioProyecto.png)

## Dependencias
![dependenciasboot](/img/dependenciasboot.png)


```jsx title="Annotation - validaciones a usarse en DTO"
<dependency>
    <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

```





### Configuraciones en el application.properties
- Base de datos mediante variables de entorno.

```jsx title="Configuraciones de BD"
#Configuraciones de BD
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=${BD_URL} // jdbc:mysql://localhost:3306/NombreBD?createDatabaseIfNotExist=true
spring.datasource.username=${BD_USER}
spring.datasource.password=${BD_PASSWORD}
```

-  Configurar variablde de entorno

![config1](/img/config1.png)

![config2](/img/config2.png)

![config3](/img/config3.png)

