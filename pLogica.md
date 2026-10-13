# Guía práctica: programación lógica con Prolog en SWISH

**Asignatura:** Paradigmas de Programación  
**Carrera:** Ingeniería en Ciencias de Datos  
**Modalidad:** laboratorio guiado  
**Duración sugerida:** 90–120 minutos  
**Entorno:** [SWISH — SWI-Prolog](https://swish.swi-prolog.org/)

## 1. Objetivos de aprendizaje

Al finalizar esta práctica, podrás:

1. Distinguir **hechos**, **predicados**, **reglas** y **consultas**.
2. Construir una **base de conocimiento** sencilla.
3. Utilizar consultas con variables para recuperar información.
4. Explicar cómo intervienen la **unificación**, la **resolución** y el **backtracking**.
5. Aplicar reglas a un problema básico relacionado con datos académicos.

## 2. ¿Qué es la programación lógica?

La **programación lógica** es un paradigma declarativo: se describen hechos y reglas que expresan relaciones entre elementos. En lugar de escribir explícitamente una secuencia de instrucciones para encontrar cada respuesta, se realizan consultas y el motor de Prolog intenta demostrarlas.

| Concepto | Significado | Ejemplo |
|---|---|---|
| **Hecho** | Información declarada como verdadera en el dominio | `estudiante(ana).` |
| **Predicado** | Relación identificada por nombre y cantidad de argumentos | `aprobo/2` |
| **Regla** | Relación que se cumple si se cumplen ciertas condiciones | `puede_cursar_ia(X) :- ...` |
| **Consulta** | Pregunta dirigida al sistema | `puede_cursar_ia(ana).` |
| **Base de conocimiento** | Conjunto de hechos y reglas | El programa completo |
| **Motor de inferencia** | Mecanismo que intenta responder consultas usando hechos y reglas | Motor de SWI-Prolog |

> **Importante:** en Prolog, un resultado `false` generalmente indica que la consulta *no pudo demostrarse* con la base de conocimiento disponible; no necesariamente que sea falsa en la realidad.

## 3. Primeros pasos en SWISH

1. Abre <https://swish.swi-prolog.org/>.
2. Copia el **programa** en el editor principal.
3. En el campo de consultas, escribe una consulta **sin** el prefijo `?-` (SWISH ya proporciona el contexto de consulta).
4. Presiona **Run!** para obtener resultados.
5. Si aparecen varias soluciones, utiliza la opción de solicitar más respuestas.

**Convenciones básicas:**

- Cada hecho y regla termina en punto (`.`).
- Los nombres de predicados y los átomos, como `ana`, comienzan con minúscula.
- Las variables, como `X`, `Estudiante` o `Curso`, comienzan con mayúscula o guion bajo.
- `:-` se lee «si»; la coma `,` se interpreta como «y».
- `%` inicia un comentario.

## 4. Ejemplo guiado: estudiantes y asignaturas

### 4.1. Base de conocimiento

Copia **todo** el siguiente programa en SWISH:

```prolog
% HECHOS: estudiantes
estudiante(ana).
estudiante(luis).
estudiante(sofia).

% HECHOS: asignaturas aprobadas
aprobo(ana, programacion).
aprobo(ana, matematicas).
aprobo(luis, programacion).
aprobo(sofia, matematicas).

% REGLA: para cursar IA se requieren dos asignaturas
puede_cursar_ia(X) :-
    estudiante(X),
    aprobo(X, programacion),
    aprobo(X, matematicas).
```

**Lectura de la regla:** «Un estudiante `X` puede cursar IA **si** está registrado, aprobó Programación **y** aprobó Matemáticas».

### 4.2. Consultas cerradas

Son preguntas que no dejan variables por descubrir. Ejecuta una por vez:

```prolog
estudiante(ana).
```

**Resultado:** `true`.

```prolog
aprobo(luis, matematicas).
```

**Resultado:** `false` (esa aprobación no está registrada).

```prolog
puede_cursar_ia(ana).
```

**Resultado:** `true`.

```prolog
puede_cursar_ia(luis).
```

**Resultado:** `false`.

### 4.3. Consultas abiertas

En estas consultas, Prolog busca valores para las variables.

```prolog
aprobo(Estudiante, programacion).
```

**Soluciones:** `Estudiante = ana` y `Estudiante = luis`.

```prolog
aprobo(ana, Asignatura).
```

**Soluciones:** `Asignatura = programacion` y `Asignatura = matematicas`.

```prolog
puede_cursar_ia(X).
```

**Solución:** `X = ana`.

### 4.4. ¿Qué hizo el motor de inferencia?

Para resolver `puede_cursar_ia(ana).`:

1. Encuentra la regla `puede_cursar_ia(X)`.
2. **Unifica** la variable `X` con el átomo `ana`.
3. Comprueba `estudiante(ana)`.
4. Comprueba `aprobo(ana, programacion)`.
5. Comprueba `aprobo(ana, matematicas)`.
6. Como todas las condiciones se cumplen, responde `true`.

Para `puede_cursar_ia(X).`, Prolog explora los valores posibles de `X`. Cuando solicita otra solución, puede **retroceder** (*backtracking*) y probar alternativas. La **resolución** consiste en utilizar las reglas para intentar demostrar la consulta.

## 5. Segundo ejemplo: prerrequisitos como datos

En el primer ejemplo los requisitos de IA estaban escritos directamente en la regla. Ahora los representaremos como **hechos**, para separar los datos de la lógica.

> Para evitar mezclar versiones del mismo predicado, **borra el programa anterior** y pega este nuevo programa completo.

```prolog
% Estudiantes
estudiante(ana).
estudiante(luis).
estudiante(sofia).

% Asignaturas aprobadas
aprobo(ana, programacion).
aprobo(ana, matematicas).
aprobo(luis, programacion).
aprobo(sofia, matematicas).

% Prerrequisitos de IA
requisito(ia, programacion).
requisito(ia, matematicas).

% Un requisito está pendiente si no consta su aprobación
requisito_pendiente(E, Curso, R) :-
    estudiante(E),
    requisito(Curso, R),
    \+ aprobo(E, R).

% Cumple todos los requisitos cuando no existe uno pendiente
puede_cursar(E, Curso) :-
    estudiante(E),
    requisito(Curso, _),
    \+ requisito_pendiente(E, Curso, _).
```

**¿Qué significa `\+`?** Es «negación por fallo»: `\+ Objetivo` tiene éxito si Prolog no consigue demostrar `Objetivo`. En este ejercicio asumimos que la lista de asignaturas aprobadas está completa para nuestros tres estudiantes.

### Prueba las siguientes consultas

| Consulta en SWISH | Resultado esperado |
|---|---|
| `requisito(ia, R).` | `R = programacion` y `R = matematicas` |
| `requisito_pendiente(luis, ia, R).` | `R = matematicas` |
| `requisito_pendiente(sofia, ia, R).` | `R = programacion` |
| `puede_cursar(ana, ia).` | `true` |
| `puede_cursar(luis, ia).` | `false` |
| `puede_cursar(E, ia).` | `E = ana` |

**Pregunta de análisis:** ¿Qué ventaja tiene almacenar los prerrequisitos con el predicado `requisito/2` en lugar de escribirlos directamente en todas las reglas?

## 6. Aplicación en Ciencias de Datos: validar registros

Otra aplicación de la lógica consiste en detectar datos que no cumplen restricciones de calidad.

> Borra el programa anterior y pega este bloque para el tercer ejemplo.

```prolog
% Registros: alumno(ID, Edad, Nota, Creditos)
alumno(a1, 19, 5.8, 30).
alumno(a2, -2, 6.1, 24).
alumno(a3, 21, 8.5, 40).
alumno(a4, 20, 4.9, -5).

% Restricciones simplificadas para el ejercicio
edad_invalida(ID) :-
    alumno(ID, Edad, _, _),
    Edad < 0.

nota_invalida(ID) :-
    alumno(ID, _, Nota, _),
    (Nota < 1.0 ; Nota > 7.0).

creditos_invalidos(ID) :-
    alumno(ID, _, _, Creditos),
    Creditos < 0.

% Identifica el tipo de inconsistencia
problema(ID, edad) :- edad_invalida(ID).
problema(ID, nota) :- nota_invalida(ID).
problema(ID, creditos) :- creditos_invalidos(ID).
```

La escala de notas entre **1,0 y 7,0** es una restricción asumida para esta actividad. No sustituye las políticas reales de validación de una institución.

### Consultas

```prolog
problema(ID, Tipo).
```

**Soluciones esperadas:**

```text
ID = a2, Tipo = edad ;
ID = a3, Tipo = nota ;
ID = a4, Tipo = creditos.
```

```prolog
problema(a1, Tipo).
```

**Resultado:** `false`: no se encontró ninguna inconsistencia definida por estas reglas.

**Conexión con Ciencias de Datos:** antes de analizar o entrenar modelos con un dataset, es útil verificar reglas de integridad. Un sistema de reglas puede detectar registros sospechosos, pero no garantiza por sí solo la calidad completa de los datos.

## 7. Ejercicios para desarrollar

### Ejercicio 1. Ampliar los hechos (básico)

Utilizando el programa de la sección 4:

1. Agrega el estudiante `pedro`.
2. Registra que Pedro aprobó Programación y Matemáticas.
3. Consulta todas las personas que pueden cursar IA.
4. Explica por qué aparecen las soluciones obtenidas.

**Resultado esperado:** `ana` y `pedro` pueden cursar IA.

### Ejercicio 2. Crear una nueva regla (intermedio)

Utilizando el programa de la sección 4, implementa la relación `aprobo_ambas(X)` que sea verdadera cuando `X` aprobó Programación y Matemáticas. Reutiliza esa regla para redefinir `puede_cursar_ia/1`.

**Preguntas:** ¿Qué conocimientos quedan representados como hechos? ¿Cuáles se deducen a través de reglas?

### Ejercicio 3. Explorar el backtracking (intermedio)

En el programa de la sección 4, ejecuta:

```prolog
aprobo(X, Asignatura).
```

Registra todas las soluciones. Después ejecuta:

```prolog
aprobo(X, programacion), aprobo(X, matematicas).
```

Explica por qué la segunda consulta devuelve menos respuestas.

### Ejercicio 4. Calidad de datos (intermedio)

Utilizando el programa de la sección 6:

1. Añade `alumno(a5, 22, 6.0, 40).`.
2. Añade `alumno(a6, 18, 0.5, -3).`.
3. Consulta `problema(ID, Tipo).`.
4. Explica por qué un mismo registro puede producir más de una solución.

**Resultado esperado:** `a6` presenta problemas de nota y créditos.

### Ejercicio 5. Comparar paradigmas (reflexión)

¿Cómo resolverías la detección de notas fuera de rango usando:

- **POO:** una clase `Alumno` con un método `validar_nota()`.
- **Programación funcional:** `filter()` y una función predicado.
- **Programación lógica:** hechos `alumno/4`, regla `nota_invalida/1` y consulta.

Describe cómo cambia la forma de expresar el problema y de recuperar respuestas.

## 8. Preguntas de cierre

1. ¿Cuál es la diferencia entre un **hecho** y una **regla**?
2. ¿Qué papel cumple el **motor de inferencia**?
3. ¿Cuál es la diferencia entre `aprobo(ana, matematicas).` y `aprobo(X, matematicas).` cuando se usan como consultas?
4. ¿Por qué Prolog puede entregar varias soluciones a una consulta?
5. ¿Qué limitación tiene interpretar `false` como «no ocurrió» cuando faltan datos?
6. ¿Qué diferencias encuentras entre una **regla definida explícitamente** y un patrón que un futuro modelo de aprendizaje automático podría aprender a partir de datos?

## 9. Relación con asignaturas posteriores

La programación lógica permite entender cómo un sistema **representa conocimiento y deduce conclusiones** usando reglas. Más adelante, en Aprendizaje Automático I y II, se estudiarán técnicas que **ajustan modelos a partir de datos**. Los dos enfoques no son equivalentes: las reglas expresan condiciones explícitas y los modelos entrenados aprenden relaciones estadísticas. En ciertas aplicaciones, pueden combinarse, por ejemplo, para comprobar restricciones sobre decisiones producidas por un modelo.

---

**Sugerencia de entrega:** archivo `.pl` o enlace compartido de SWISH, consultas realizadas, captura de resultados y una explicación breve de cómo se obtuvo al menos una conclusión.
