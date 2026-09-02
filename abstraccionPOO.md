# Ejercicios de Abstracción de POO

## Instrucciones generales

Para cada situación problema:

1. Lee cuidadosamente el enunciado.
2. Identifica las posibles **clases**.
3. Define los **atributos** de cada clase.
4. Define los **métodos** que debería tener cada clase.
5. Identifica ejemplos de **objetos**.
6. Justifica brevemente tus decisiones.
7. Solo después del análisis, escribe una propuesta de estructura en Python.

> No existe necesariamente una única solución correcta. Lo importante es justificar adecuadamente la abstracción realizada.

---

## Ejercicio 1. Sistema de biblioteca

Una biblioteca necesita registrar los libros disponibles para préstamo.

De cada libro se requiere conocer:

- título;
- autor;
- año de publicación;
- estado de disponibilidad.

El sistema debe permitir:

- mostrar la información de un libro;
- prestar un libro;
- devolver un libro.

### Preguntas de abstracción

1. ¿Cuál sería la clase principal?
2. ¿Qué atributos debería tener?
3. ¿Qué métodos debería incluir?
4. ¿Qué atributos pueden cambiar durante la ejecución?
5. Da dos ejemplos de objetos de esa clase.
6. ¿Qué atributo representa el estado del objeto?

### Propuesta

Escribe solamente la estructura inicial:

```python
class ...
```

No implementes todavía los métodos.

---

## Ejercicio 2. Control de estudiantes

Una universidad desea representar estudiantes dentro de un sistema académico.

De cada estudiante se necesita registrar:

- nombre;
- carrera;
- semestre;
- promedio.

Además, el estudiante puede:

- mostrar sus datos;
- actualizar su promedio;
- avanzar de semestre.

### Preguntas de abstracción

1. ¿Cuál es la clase?
2. ¿Cuáles son los atributos?
3. ¿Cuáles son los métodos?
4. ¿Qué atributo debería cambiar cuando el estudiante aprueba un semestre?
5. ¿Qué información debería recibir el constructor?
6. ¿Qué método debería recibir un parámetro?
7. ¿Qué parámetro recibiría?

### Desafío

Agrega una nueva necesidad:

> La universidad ahora quiere registrar también el correo institucional.

Responde:

1. ¿Qué parte del modelo debe modificarse?
2. ¿Es necesario crear una nueva clase?
3. ¿Es necesario crear un nuevo método?

---

## Ejercicio 3. Tienda de productos

Una tienda necesita representar los productos que mantiene en inventario.

De cada producto se registra:

- nombre;
- precio;
- cantidad disponible.

El sistema debe permitir:

- mostrar los datos del producto;
- vender cierta cantidad;
- reponer unidades;
- modificar el precio.

### Preguntas

1. Identifica la clase.
2. Identifica los atributos.
3. Identifica los métodos.
4. ¿Qué métodos deberían recibir parámetros?
5. ¿Qué atributos podrían cambiar?
6. ¿Qué método podría disminuir un atributo?
7. ¿Qué método podría aumentar un atributo?

### Modificación del problema

La tienda decide agregar una categoría para cada producto:

```text
Computación
Hogar
Electrónica
Accesorios
```

Pregunta:

¿`categoria` debería representarse inicialmente como atributo, método o nueva clase? Justifica.

---

## Ejercicio 4. Robot móvil

Un laboratorio desarrolla un robot móvil.

El robot posee:

- un nombre;
- una posición;
- un nivel de batería.

El robot puede:

- avanzar;
- retroceder;
- mostrar su estado;
- recargar su batería.

Cada movimiento consume batería.

### Actividad de abstracción

Completa:

```text
Clase:
Atributos:
Métodos:
Estado inicial:
Atributos que cambian:
```

### Preguntas

1. ¿Qué atributo representa la ubicación del robot?
2. ¿Qué atributo representa un recurso limitado?
3. ¿Qué métodos modifican la posición?
4. ¿Qué método modifica la batería positivamente?
5. ¿Qué ocurriría conceptualmente si la batería llega a cero?
6. ¿Sería conveniente agregar alguna validación a los métodos? Explica.

### Ampliación
Ahora se requiere registrar también la velocidad del robot.

¿Qué cambios harías al modelo?

---

## Ejercicio 5. Reserva de habitaciones

Un pequeño hotel necesita representar sus habitaciones.

De cada habitación interesa conocer:

- número;
- tipo;
- precio por noche;
- si está disponible o no.

El sistema debe permitir:

- reservar una habitación;
- liberar una habitación;
- mostrar sus datos.

### Preguntas

1. ¿Cuál sería la clase principal?
2. ¿Qué atributos son descriptivos?
3. ¿Qué atributo representa el estado?
4. ¿Cuáles son los métodos?
5. ¿Qué método debería cambiar el estado a ocupado?
6. ¿Qué método debería cambiarlo nuevamente a disponible?
7. Da tres posibles objetos.

### Cambio de requerimiento

Ahora el hotel quiere registrar el nombre de la persona que realiza la reserva.

Pregunta:

¿Agregarías simplemente un atributo o comenzarías a pensar en una nueva clase `Huesped`? Justifica.

---

## Ejercicio 6. Videojuego

Un videojuego necesita representar a sus personajes.

Cada personaje tiene:

- nombre;
- nivel;
- energía;
- puntos.

Un personaje puede:

- mostrar su estado;
- ganar puntos;
- perder energía;
- recuperar energía;
- subir de nivel.

### Actividad

Identifica:

```text
Clase:
Atributos:
Métodos:
```

### Preguntas

1. ¿Qué atributos podrían cambiar durante el juego?
2. ¿Qué método debería recibir una cantidad de puntos?
3. ¿Qué método debería recibir una cantidad de energía?
4. ¿Qué atributo podría comenzar siempre en `1`?
5. ¿Qué atributo podría comenzar siempre en `0`?
6. ¿Qué decisiones de diseño tendrías que tomar antes de programar?

### Desafío

Agrega un nuevo requerimiento:

> Cada personaje debe tener un tipo: guerrero, mago o arquero.

¿Lo representarías inicialmente como atributo o clase? Explica.

---

## Ejercicio 7. Bicicleta compartida

Una empresa ofrece bicicletas para uso compartido.

Cada bicicleta debe registrar:

- código;
- ubicación;
- estado de disponibilidad;
- kilómetros recorridos.

Una bicicleta puede:

- ser utilizada;
- ser devuelta;
- cambiar de ubicación;
- acumular kilómetros.

### Preguntas de análisis

1. ¿Qué clase identificarías?
2. ¿Cuáles son sus atributos?
3. ¿Cuáles son sus métodos?
4. ¿Qué atributo cambia cuando la bicicleta es trasladada?
5. ¿Qué atributo debería aumentar después de cada viaje?
6. ¿Qué atributo permite determinar si puede ser utilizada?

### Nueva necesidad

La empresa quiere registrar además a los usuarios.

Pregunta:

1. ¿Seguirías trabajando con una sola clase?
2. ¿Qué nueva clase podría aparecer?
3. ¿Qué atributos tendría?
4. ¿Qué acciones podría realizar?

---

## Ejercicio 8. Curso universitario

Un curso universitario tiene:

- un nombre;
- un código;
- una cantidad máxima de estudiantes.

El curso puede:

- mostrar información;
- registrar estudiantes;
- eliminar estudiantes;
- mostrar la cantidad de estudiantes inscritos.

Cada estudiante posee nombre, identificador y carrera.

### Preguntas

1. ¿Cuántas clases identificas?
2. ¿Cuáles serían?
3. ¿Qué atributos pertenecerían a `Curso`?
4. ¿Qué atributos pertenecerían a `Estudiante`?
5. ¿Qué métodos debería tener `Curso`?
6. ¿Qué método debería recibir un objeto `Estudiante`?
7. ¿Qué relación conceptual existe entre ambas clases?

### Desafío

Sin implementar código, representa el modelo así:

```text
Curso
 ├── atributos:
 └── métodos:

Estudiante
 ├── atributos:
 └── métodos:
```

---

## Ejercicio 9. Clínica veterinaria

Una clínica veterinaria desea registrar mascotas.

De cada mascota se requiere:

- nombre;
- especie;
- edad;
- peso.

Una mascota puede:

- mostrar sus datos;
- actualizar su peso;
- cumplir años.

Además, la clínica necesita registrar al dueño de cada mascota.

Del dueño se requiere:

- nombre;
- teléfono;
- correo.

### Preguntas

1. ¿Cuántas clases puedes identificar?
2. ¿Cuáles son?
3. ¿Qué atributos tendría cada clase?
4. ¿Qué métodos tendría `Mascota`?
5. ¿Qué métodos podría tener `Dueno`?
6. ¿Dónde debería almacenarse la relación entre dueño y mascota?
7. ¿Una persona podría tener varias mascotas?

### Reflexión

Explica por qué en este problema puede ser mejor utilizar dos clases en lugar de almacenar todos los datos dentro de `Mascota`.

---

## Ejercicio 10. Sistema de transporte

Una empresa de transporte administra distintos vehículos.

De cada vehículo se necesita registrar:

- patente;
- marca;
- kilometraje;
- combustible.

Un vehículo puede:

- avanzar;
- cargar combustible;
- mostrar información.

Cada vez que avanza:

- aumenta el kilometraje;
- disminuye el combustible.

### Preguntas

1. ¿Cuál sería la clase inicial?
2. ¿Qué atributos identificas?
3. ¿Qué métodos identificas?
4. ¿Qué método modifica más de un atributo?
5. ¿Qué método debería recibir una cantidad?
6. ¿Qué restricciones deberían considerarse?

### Cambio del problema

Ahora existen:

- automóviles;
- buses;
- motocicletas.

Sin utilizar todavía herencia, responde:

1. ¿Seguirías utilizando una sola clase?
2. ¿Qué diferencias entre los vehículos podrían transformarse en nuevos atributos?
3. ¿En qué momento considerarías crear clases diferentes?

---

## Ejercicio 11. Plataforma de streaming

Una plataforma necesita representar películas.

De cada película se conoce:

- título;
- género;
- duración;
- cantidad de reproducciones.

Una película puede:

- mostrar sus datos;
- reproducirse;
- aumentar su contador de reproducciones.

### Preguntas

1. Identifica clase, atributos y métodos.
2. ¿Qué atributo debería cambiar al ejecutar `reproducir()`?
3. ¿Qué valor inicial podría tener ese atributo?
4. ¿Es necesario recibir la cantidad de reproducciones al construir un objeto?
5. Da tres ejemplos de objetos.

### Ampliación

Ahora la plataforma necesita también representar series.

Cada serie tiene:

- título;
- género;
- número de temporadas.

¿Qué elementos son similares a una película y cuáles son diferentes?

---

## Ejercicio 12. Cajero automático

Un sistema bancario necesita representar cuentas.

Cada cuenta tiene:

- número;
- titular;
- saldo.

La cuenta puede:

- consultar saldo;
- depositar dinero;
- retirar dinero.

### Preguntas

1. ¿Cuál es la clase?
2. ¿Cuáles son los atributos?
3. ¿Cuáles son los métodos?
4. ¿Qué métodos modifican el saldo?
5. ¿Qué métodos deberían recibir parámetros?
6. ¿Qué validaciones serían necesarias?
7. ¿Qué debería ocurrir si se intenta retirar más dinero del disponible?

### Nueva necesidad

El banco necesita registrar además el tipo de cuenta:

```text
Corriente
Vista
Ahorro
```

¿Lo modelarías inicialmente como atributo o clase? Justifica.

---

## Ejercicio 13. Estacionamiento

Un estacionamiento registra vehículos que ingresan.

De cada vehículo interesa conocer:

- patente;
- marca;
- hora de ingreso;
- si se encuentra dentro del estacionamiento.

El sistema debe poder:

- registrar ingreso;
- registrar salida;
- mostrar información.

### Preguntas

1. ¿Qué clase inicial identificas?
2. ¿Qué atributos tiene?
3. ¿Qué métodos necesita?
4. ¿Cuál es el atributo de estado?
5. ¿Qué debería cambiar cuando el vehículo sale?

### Ampliación

Ahora se necesita registrar también:

- número de estacionamiento;
- cantidad total de espacios;
- cantidad de espacios disponibles.

¿Aparece una nueva clase? ¿Cuál?

---

## Ejercicio 14. Red social simple

Una aplicación necesita representar usuarios.

Cada usuario tiene:

- nombre;
- nombre de usuario;
- cantidad de seguidores.

Un usuario puede:

- mostrar su perfil;
- ganar un seguidor;
- perder un seguidor.

### Preguntas

1. Identifica la clase.
2. Identifica los atributos.
3. Identifica los métodos.
4. ¿Qué atributo cambia con mayor frecuencia?
5. ¿Qué valor mínimo debería tener?
6. ¿Qué validación sería conveniente implementar?

### Cambio de requerimiento

Ahora cada usuario puede publicar mensajes.

Cada publicación posee:

- texto;
- fecha;
- cantidad de "me gusta".

Pregunta:

1. ¿Agregarías todos estos datos a `Usuario`?
2. ¿Qué nueva clase podrías crear?
3. ¿Qué relación existiría entre ambas?

---

## Ejercicio 15. Pedido de comida

Una aplicación permite registrar pedidos.

Un pedido tiene:

- número;
- estado;
- total.

Puede:

- mostrar su información;
- cambiar de estado;
- actualizar el total.

Los estados posibles son:

```text
Recibido
En preparación
En camino
Entregado
```

### Preguntas

1. ¿Qué clase identificas?
2. ¿Cuáles son sus atributos?
3. ¿Cuáles son sus métodos?
4. ¿Qué atributo representa el estado del pedido?
5. ¿Qué método debería modificarlo?
6. ¿Qué valores son válidos para ese atributo?

### Ampliación

Ahora cada pedido contiene varios productos.

Preguntas:

1. ¿Aparece una nueva clase?
2. ¿Qué atributos tendría `Producto`?
3. ¿Qué debería almacenar `Pedido` para representar varios productos?
4. ¿Qué nuevo método podrías agregar?

---

## Ejercicio 16. Abstracción libre

Escoge uno de los siguientes sistemas:

- gimnasio;
- aeropuerto;
- restaurante;
- laboratorio;
- tienda en línea;
- hospital;
- escuela;
- sistema de préstamos;
- plataforma de música;
- robot doméstico.

## Actividad

Redacta una situación problema de al menos 5 líneas.

Luego identifica:

```text
Clases:
Atributos:
Métodos:
Objetos:
Relaciones:
```

Después crea un esquema:

```text
Clase 1
 ├── atributos
 └── métodos

Clase 2
 ├── atributos
 └── métodos
```

Finalmente responde:

1. ¿Qué elementos del problema transformaste en clases?
2. ¿Qué elementos transformaste en atributos?
3. ¿Qué acciones transformaste en métodos?
4. ¿Qué información descartaste por no ser relevante para el modelo?
5. ¿Qué parte del problema fue más difícil de abstraer?

---
## Ejercicio 17:  Dataset

Un equipo de Ciencia de Datos trabaja con diferentes conjuntos de datos. De cada conjunto necesita conocer su nombre, cantidad de registros, cantidad de variables, formato y fecha de creación.

Además, necesita realizar algunas acciones como mostrar información general del conjunto de datos, agregar nuevos registros y eliminar registros.

*¿Qué es un dataset?*
Conjunto de datos es una colección organizada de datos que se utiliza para almacenar, analizar y procesar información.

En Ciencia de Datos, normalmente se representa en forma de tabla:
- **Filas**: corresponden a registros, observaciones o casos.
- **Columnas**: corresponden a variables o características.

**Preguntas**
1. ¿Cuál sería la clase principal?
2. ¿Cuáles serían sus atributos?
3. ¿Cuáles serían sus métodos?
4. ¿Qué atributo cambiaría si se agregan nuevos registros?
5. ¿Qué atributo podría mantenerse sin cambios?
6. Da dos ejemplos concretos de objetos de esta clase.

---
## Ejercicio 12. Detección de valores faltantes

Un analista desea representar el proceso de limpieza de un conjunto de datos.

De cada proceso de limpieza se registra:

nombre del dataset;
cantidad inicial de registros;
valores faltantes detectados;
registros eliminados;
registros finales.

El proceso puede:

detectar valores faltantes;
eliminar registros;
mostrar un resumen.
Preguntas
¿Cuál podría ser la clase?
¿Cuáles son sus atributos?
¿Cuáles son sus métodos?
¿Qué atributos cambian durante la ejecución?
¿Qué relación matemática debería existir entre registros iniciales, eliminados y finales?
¿Dónde debería realizarse esa actualización: fuera del objeto o mediante un método?

---

# Ejercicio integrador. Sistema de arriendo de bicicletas

Una universidad desea implementar un sistema de préstamo de bicicletas para estudiantes.

Cada bicicleta posee:

- código;
- modelo;
- estado;
- ubicación.

Cada estudiante posee:

- nombre;
- identificador;
- carrera.

Cuando un estudiante solicita una bicicleta:

- debe verificarse que esté disponible;
- la bicicleta cambia a estado prestado;
- debe registrarse qué estudiante la utiliza.

Cuando la devuelve:

- la bicicleta vuelve a estar disponible;
- puede actualizarse su ubicación.

El sistema también debe permitir consultar:

- bicicletas disponibles;
- bicicletas prestadas;
- información de estudiantes.

## Parte 1. Abstracción

Identifica todas las clases posibles.

## Parte 2. Atributos

Para cada clase escribe sus atributos.

## Parte 3. Métodos

Para cada clase escribe sus métodos.

## Parte 4. Relaciones

Responde:

1. ¿Qué clase utiliza o contiene objetos de otra clase?
2. ¿Qué objeto debe asociarse con una bicicleta durante un préstamo?
3. ¿Qué atributo representa el estado de la bicicleta?
4. ¿Qué métodos modifican ese estado?

## Parte 5. Diseño inicial

Representa tu propuesta:

```text
Clase:
Atributos:
Métodos:

Clase:
Atributos:
Métodos:
```

## Parte 6. Implementación

Solo después de completar el análisis anterior, implementa las clases en Python.

No es necesario utilizar herencia.
