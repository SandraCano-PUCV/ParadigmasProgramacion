# Prácticas

## 1. Sistema experto que analice síntomas

Se requiere crear un prototipo de sistema experto que analice **síntomas ficticios** de tres pacientes y asigne una **etiqueta ilustrativa** cuando se cumplan determinadas reglas. Para facilitar el ejercicio, las etiquetas utilizadas serán `resfriado`, `gripe` y `alergia`.

El sistema contendrá:

- **Hechos:** síntomas registrados en los pacientes.
- **Reglas:** condiciones inventadas para asignar una etiqueta.
- **Consultas:** preguntas formuladas por el estudiante.
- **Motor de inferencia:** componente de Prolog que busca hechos y aplica reglas para responder.

### Paso 1: Crear  base de conocimiento (hechos)
```prolog
% =====================================
% BASE DE CONOCIMIENTO: HECHOS
% =====================================

% Pacientes ficticios
paciente(ana).
paciente(luis).
paciente(sofia).

% Sintomas registrados
sintoma(ana, tos).
sintoma(ana, congestion).

sintoma(luis, fiebre).
sintoma(luis, tos).
sintoma(luis, dolor_muscular).

sintoma(sofia, estornudos).
sintoma(sofia, picazon_ojos).
```
Otra opción es adicionarlos como lista 

```prolog
sintoma(ana, [tos, congestion, estornudos]).
sintoma(luis, [fiebre, tos, dolor_muscular]).
sintoma(sofia, [fiebre, dolor_cabeza, tos]).
sintoma(pedro, [tos, congestion, dolor_garganta]).
```

### Consultas:
**Prueba 1.** ¿Qué síntomas tiene Ana?:

```prolog
sintoma(ana, tos).
```
**A tener en cuenta:** En Prolog, las palabras que comienzan con minúsculas son constantes, mientras que las palabras que comienzan con mayúsculas representan variables

**Prueba 2.** ¿Cuáles son los pacientes y sus síntomas?

```prolog
sintoma(Paciente, Sintomas).
```

**Prueba 3.** ¿Qué paciente tiene exactamente esa lista de síntomas?

```prolog
sintoma(X, [tos, estornudos]).
```
**Prueba 4.** ¿Existe literalmente el hecho sintoma(paciente, sintomas)?

```prolog
sintoma(paciente, sintomas).
```

**Prueba 5.** ¿Qué pacientes tienen fiebre?
```prolog
sintoma(Paciente, Sintomas),
   member(fiebre, Sintomas).
```


### ¿Qué es `member/2`?

En Prolog, `member/2` es un **predicado predefinido** que permite comprobar si un elemento pertenece a una lista.

Su estructura es:

```prolog
member(Elemento, Lista).
```

Donde:

- **Elemento:** es el valor que deseamos buscar dentro de la lista.
- **Lista:** es la colección de elementos en la que realizaremos la búsqueda.

El número `/2` indica que el predicado recibe **dos argumentos**.

### Ejemplo 1. Verificar si un elemento pertenece a una lista

Supongamos la siguiente consulta:

```prolog
?- member(fiebre, [tos, fiebre, congestion]).
```

**Resultado:**

```text
true.
```

Esto ocurre porque `fiebre` está presente en la lista.

Ahora consultemos:

```prolog
?- member(dolor_muscular, [tos, fiebre, congestion]).
```

**Resultado:**

```text
false.
```

El motor de Prolog no encuentra el elemento `dolor_muscular` dentro de la lista.

### Ejemplo 2. Utilizar `member/2` con variables

También podemos utilizar una variable para recuperar los elementos de una lista.

```prolog
?- member(X, [tos, fiebre, congestion]).
```

**Resultados:**

```text
X = tos ;
X = fiebre ;
X = congestion.
```

### Ejemplo 3. Consultar síntomas de pacientes

Consideremos la siguiente base de conocimiento:

```prolog
% HECHOS: pacientes y síntomas

sintoma(ana, [tos, fiebre, congestion]).

sintoma(luis, [fiebre, dolor_muscular]).

sintoma(sofia, [tos, estornudos]).
```

**Consulta 1. ¿Qué síntomas tiene Ana?**

```prolog
?- sintoma(ana, Sintomas).
```

Resultado:

```text
Sintomas = [tos, fiebre, congestion].
```

**Consulta 2. ¿Qué pacientes tienen fiebre?**

```prolog
?- sintoma(Paciente, Sintomas),
   member(fiebre, Sintomas).
```

Resultados:

```text
Paciente = ana,
Sintomas = [tos, fiebre, congestion] ;

Paciente = luis,
Sintomas = [fiebre, dolor_muscular].
```

### Reglas

**¿Qué es una regla?***

Una regla en Prolog es una expresión lógica que permite establecer una conclusión a partir de una o varias condiciones.

Las reglas forman parte de la base de conocimiento y son utilizadas por el motor de inferencia para responder consultas.

La estructura general de una regla es:
conclusion :- condicion1, condicion2.

Utilizaremos el predicado member/2 para comprobar si un síntoma pertenece a la lista de síntomas de un paciente.

```prolog
tiene_sintoma(Paciente, Sintoma) :-
    sintoma(Paciente, Lista),
    member(Sintoma, Lista).
```
** Ejemplo de consulta:**
```prolog
tiene_sintoma(luis, fiebre).
```

**Crear reglas de posibles enfermedades**

## Regla 1. Posible resfriado
```prolog

posible_enfermedad(Paciente, gripe) :-
    sintoma(Paciente, Sintomas),
    member(fiebre, Sintomas),
    member(tos, Sintomas),
    member(dolor_muscular, Sintomas).
```
**consulta:**
```prolog
posible_enfermedad(ana, resfriado).
```
¿ Por qué el resultado es **false**?

# Regla 2.
```prolog
posible_enfermedad(Paciente, alergia) :-
    sintoma(Paciente, Sintomas),
    member(estornudos, Sintomas),
    member(congestion, Sintomas).
 ```
## Regla 3. 
```prolog
posible_enfermedad(Paciente, resfriado) :-
    sintoma(Paciente, Sintomas),
    member(tos, Sintomas),
    member(congestion, Sintomas).
```

**¿Qué hace el motor de inferencia?**

Cuando ejecutas:
```prolog
?- posible_enfermedad(luis, gripe).
```

El motor:
1. Unificación: encuentra la regla posible_enfermedad(Paciente, gripe) y asigna Paciente = luis.
2. Resolución: intenta demostrar cada condición de la regla, consultando los hechos y evaluando member/2.
3. Backtracking: si una alternativa falla o se solicitan otras soluciones, retrocede para buscar alternativas.

**El backtracking** es la capacidad de Prolog para regresar a un punto donde existen alternativas pendientes, probar otras posibilidades y encontrar nuevas soluciones sin que el programador tenga que implementar explícitamente el algoritmo de búsqueda.


## 2. Sistema de recomendación de películas 
Una plataforma de streaming, similar a Netflix, desea desarrollar un sistema que recomiende películas a sus usuarios considerando sus preferencias y su historial de visualización.

La plataforma dispone de información sobre películas, usuarios, géneros preferidos y películas vistas.
El desafío consiste en analizar estos datos, diseñar una base de conocimiento e implementar reglas lógicas que permitan recomendar películas.

### Dataset 1. Usuarios

| ID | Nombre |
|---|---|
| U01 | Ana |
| U02 | Luis |
| U03 | Sofía |
| U04 | Pedro |

### Dataset 2. Catálogo de películas

| ID | Película | Género | Año |
|---|---|---|---:|
| P01 | Inception | Ciencia ficción | 2010 |
| P02 | Interstellar | Ciencia ficción | 2014 |
| P03 | Matrix | Ciencia ficción | 1999 |
| P04 | Titanic | Romance | 1997 |
| P05 | The Notebook | Romance | 2004 |
| P06 | Avatar | Aventura | 2009 |
| P07 | Jumanji | Aventura | 1995 |
| P08 | Toy Story | Animación | 1995 |

### Dataset 3. Preferencias de los usuarios

| Usuario | Género preferido |
|---|---|
| Ana | Ciencia ficción |
| Ana | Aventura |
| Luis | Romance |
| Sofía | Animación |
| Sofía | Aventura |
| Pedro | Ciencia ficción |

### Dataset 4. Historial de visualización

| Usuario | Película vista |
|---|---|
| Ana | Inception |
| Ana | Matrix |
| Luis | Titanic |
| Sofía | Toy Story |
| Pedro | Interstellar |

### Preguntas
1. ¿Cuáles son las entidades del dominio?
2. ¿Qué atributos describen a las entidades?
3. ¿Qué relaciones existen entre usuarios, películas y géneros?
4. ¿Qué datos se representarán como **hechos**?
5. ¿Qué información no aparece directamente en las tablas, pero puede **inferirse mediante reglas**?

### Base de Conocimiento (Hechos)
```prolog
% =======================================
% BASE DE CONOCIMIENTO: USUARIOS
% =======================================
usuario(ana).
usuario(luis).
usuario(sofia).
usuario(pedro).

% =======================================
% BASE DE CONOCIMIENTO: PELICULAS
% pelicula(Titulo, Genero, Anio).
% =======================================
pelicula(inception, ciencia_ficcion, 2010).
pelicula(interstellar, ciencia_ficcion, 2014).
pelicula(matrix, ciencia_ficcion, 1999).
pelicula(titanic, romance, 1997).
pelicula(the_notebook, romance, 2004).
pelicula(avatar, aventura, 2009).
pelicula(jumanji, aventura, 1995).
pelicula(toy_story, animacion, 1995).

% =======================================
% BASE DE CONOCIMIENTO: PREFERENCIAS
% =======================================
prefiere(ana, ciencia_ficcion).
prefiere(ana, aventura).
prefiere(luis, romance).
prefiere(sofia, animacion).
prefiere(sofia, aventura).
prefiere(pedro, ciencia_ficcion).

% Historial 
vio(ana, inception).
vio(ana, matrix).
vio(luis, titanic).
vio(sofia, toy_story).
vio(pedro, interstellar).

```
### Definir las reglas
**Regla 1:**
Una película se recomienda a un usuario según sus géneros preferidos.

```prolog
recomendar(Usuario, Pelicula) :-
    usuario(Usuario),
    prefiere(Usuario, Genero),
    pelicula(Pelicula, Genero, _).
```

Se interpreta como **Recomendar una película a un usuario SI el usuario está registrado Y tiene un género preferido Y existe una película perteneciente a ese género.**

**_** es una Variable anónima: el año de la película no nos interesa en esta consulta

La consulta podría ser: recomendar(ana,Pelicula)

**Regla 2:** 
```prolog
recomendar_nueva(Usuario, Pelicula) :-
    recomendar(Usuario, Pelicula),
    \+ vio(Usuario, Pelicula).
```

***\+ se denomina negación por fallo***

**¿Qué sucedería si invertimos el orden de las condiciones?**

**Regla 3**
```prolog
recomendar_reciente(Usuario, Pelicula) :-
    recomendar_nueva(Usuario, Pelicula),
    pelicula(Pelicula, _, Anio),
    Anio >= 2010.
```