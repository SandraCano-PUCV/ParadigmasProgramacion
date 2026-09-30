# Ejercicios POO y Paradigma Funcional
## Python y TypeScript
### Enfoque aplicado a estudiantes de Ciencia de Datos

## 1. Objetivo
Esta guía propone ejercicios breves y progresivos para practicar:

- **Programación Orientada a Objetos (POO)**.
- **Programación Funcional**.

Los ejercicios están pensados para estudiantes de Ciencia de Datos que todavía están desarrollando fundamentos de programación.

La idea es avanzar desde problemas sencillos hasta pequeños casos donde ambos paradigmas puedan combinarse.

---

# 2. Ejercicios de Programación Orientada a Objetos

## Ejercicio 1 — Crear una clase `Estudiante`

Defina una clase:

```python
Estudiante
```

con los atributos:

```text
nombre
edad
carrera
```

Luego cree dos objetos.

Ejemplo:

```python
ana = Estudiante(
    "Ana",
    20,
    "Ciencia de Datos"
)
```

Muestre sus atributos.

**Conceptos:** clase, objeto, constructor, `self`.

---

## Ejercicio 2 — Agregar comportamiento

Agregue a `Estudiante` un método:

```python
mostrar_info()
```

que muestre nombre, edad y carrera.

**Conceptos:** métodos, comportamiento del objeto.

---

## Ejercicio 3 — Lista de objetos

Cree cinco objetos `Estudiante` y almacénelos en una lista:

```python
estudiantes = [
    estudiante1,
    estudiante2,
    estudiante3,
    estudiante4,
    estudiante5
]
```

Recorra la lista utilizando `for` y muestre los nombres.

**Conceptos:** lista de objetos, iteración, acceso a atributos.

---

## Ejercicio 4 — Encapsular una nota

Agregue a `Estudiante` un atributo:

```python
__nota
```

Utilice:

```python
@property
```

y:

```python
@nota.setter
```

La nota solamente puede estar entre `1.0` y `7.0`.

**Conceptos:** encapsulamiento, getter, setter, decoradores.

---

## Ejercicio 5 — Clase `Asignatura`

Cree una clase:

```python
Asignatura
```

con:

```text
codigo
nombre
creditos
```

Cree tres objetos `Asignatura`.

**Conceptos:** modelado mediante clases, objetos independientes.

---

## Ejercicio 6 — Estudiante tiene asignaturas

Agregue a `Estudiante`:

```python
self.asignaturas = []
```

Implemente:

```python
agregar_asignatura()
```

Ejemplo:

```python
ana.agregar_asignatura(
    programacion
)
```

**Conceptos:** atributo lista, lista de objetos, agregación/composición.

---

## Ejercicio 7 — Herencia simple

Cree una clase:

```python
Persona
```

con el atributo:

```text
nombre
```

Luego cree:

```python
Estudiante(Persona)
Docente(Persona)
```

**Conceptos:** herencia, clase padre, clase hija, relación “es un”.

---

## Ejercicio 8 — Sobrescritura

Defina en `Persona`:

```python
presentarse()
```

Luego sobrescriba el método en `Estudiante` y `Docente`.

Cada clase debe mostrar un mensaje diferente.

**Conceptos:** sobrescritura de métodos, especialización.

---

## Ejercicio 9 — Polimorfismo

Cree:

```python
personas = [
    Estudiante(...),
    Docente(...)
]
```

Luego:

```python
for persona in personas:
    persona.presentarse()
```

**Conceptos:** polimorfismo, mismo método, distintos comportamientos.

---

# 3. Ejercicios de Paradigma Funcional

## Ejercicio 10 — Primera función pura

Cree:

```python
def calcular_descuento(
    precio,
    porcentaje
):
    ...
```

Debe retornar el nuevo precio.

La función no debe modificar variables externas.

**Conceptos:** función pura, entrada, salida, ausencia de efectos secundarios.

---

## Ejercicio 11 — Función impura

Analice:

```python
contador = 0

def incrementar():
    global contador
    contador += 1
    return contador
```

Responda:

1. ¿Es una función pura?
2. ¿Qué variable externa modifica?
3. ¿Cómo podría reescribirse como función pura?

**Conceptos:** estado externo, efectos secundarios.

---

## Ejercicio 12 — `lambda`

Convierta:

```python
def duplicar(x):
    return x * 2
```

en una expresión `lambda`.

Luego realice la versión equivalente con función flecha en TypeScript.

**Conceptos:** función anónima, `lambda`, arrow function.

---

## Ejercicio 13 — `map`

Dada:

```python
notas = [
    4.5,
    5.2,
    3.8,
    6.1
]
```

cree una nueva lista aumentando cada nota en `0.2` utilizando `map()`.

No modifique la lista original.

**Conceptos:** transformación, `map`, inmutabilidad.

---

## Ejercicio 14 — `filter`

Dada:

```python
asistencias = [
    90,
    65,
    82,
    74,
    95
]
```

seleccione solamente los valores `>= 80` utilizando `filter()`.

**Conceptos:** filtrado, condiciones, funciones anónimas.

---

## Ejercicio 15 — `reduce`

Dada:

```python
valores = [
    3,
    4,
    5,
    6
]
```

utilice `reduce()` para obtener la suma total.

**Conceptos:** reducción, acumulador, combinación de valores.

---

# 4. Ejercicios que combinan POO y Paradigma Funcional

## Ejercicio 16 — Filtrar objetos

Cree una lista de objetos `Estudiante`.

Cada estudiante debe tener:

```text
nombre
asistencia
```

Utilice `filter()` para seleccionar estudiantes con:

```text
asistencia >= 80
```

**Conceptos:** lista de objetos, `filter`, acceso a atributos.

---

## Ejercicio 17 — Transformar objetos

A partir de una lista de objetos `Estudiante`, utilice `map()` para obtener solamente los nombres.

Resultado esperado:

```python
[
    "Ana",
    "Pedro",
    "Camila"
]
```

**Conceptos:** transformación, objetos, `map`.

---

## Ejercicio 18 — Filtrar por nota

Agregue a `Estudiante`:

```text
nota
```

Utilice `filter()` para obtener estudiantes con:

```text
nota >= 4.0
```

**Conceptos:** POO, filtrado funcional, propiedades.

---

## Ejercicio 19 — Pipeline sencillo

Dada una lista de estudiantes:

1. filtre estudiantes con `asistencia >= 80`;
2. utilice `map()` para obtener sus nombres.

Secuencia:

```text
lista de estudiantes
        ↓
      filter
        ↓
       map
        ↓
lista de nombres
```

**Conceptos:** pipeline, `filter`, `map`.

---

## Ejercicio 20 — Pipeline con tres operaciones

Cada estudiante tiene:

```text
nombre
asistencia
creditos
```

Realice:

```text
filter
   ↓
map
   ↓
reduce
```

Objetivo:

1. conservar asistencia `>= 80`;
2. extraer los créditos;
3. calcular el total de créditos.

**Conceptos:** pipeline funcional, transformación, reducción.

---

# 5. Ejercicios aplicados a Ciencia de Datos

## Ejercicio 21 — Limpiar nombres

Dada:

```python
estudiantes = [
    {
        "nombre": " ana ",
        "asistencia": 85
    },
    {
        "nombre": " PEDRO ",
        "asistencia": 75
    },
    {
        "nombre": " camila ",
        "asistencia": 92
    }
]
```

Utilice `map()` para obtener nuevos registros donde los nombres queden:

```text
Ana
Pedro
Camila
```

No modifique los registros originales.

**Conceptos:** limpieza de datos, transformación inmutable, `map`.

---

## Ejercicio 22 — Datos faltantes

Dada:

```python
datos = [
    {
        "nombre": "Ana",
        "asistencia": 85
    },
    {
        "nombre": "Pedro",
        "asistencia": None
    },
    {
        "nombre": "Camila",
        "asistencia": 93
    }
]
```

Utilice `filter()` para conservar solamente los registros con asistencia válida.

**Conceptos:** limpieza, valores faltantes, `filter`.

---

## Ejercicio 23 — Extraer una columna

Dada:

```python
estudiantes = [
    {
        "nombre": "Ana",
        "creditos": 5
    },
    {
        "nombre": "Pedro",
        "creditos": 4
    },
    {
        "nombre": "Camila",
        "creditos": 6
    }
]
```

Utilice `map()` para obtener:

```python
[
    5,
    4,
    6
]
```

**Conceptos:** extracción de información, transformación.

---

## Ejercicio 24 — Programa académico como objeto

Cree:

```python
class ProgramaAcademico:
```

con:

```text
codigo
nombre
duracion_semestres
```

Luego haga que `Estudiante` tenga:

```python
self.programa
```

que almacene un objeto `ProgramaAcademico`.

Ejemplo:

```python
ana.programa.nombre
```

**Conceptos:** agregación, atributo que referencia otro objeto.

---

## Ejercicio 25 — Lista de objetos relacionados

Cree un objeto:

```python
ciencia_datos
```

de tipo:

```python
ProgramaAcademico
```

Luego cree tres estudiantes asociados al mismo programa.

Guárdelos en:

```python
estudiantes = [...]
```

Recorra la lista y muestre:

```text
nombre del estudiante
nombre del programa
```

**Conceptos:** lista de objetos, agregación, navegación entre objetos.

---

## Ejercicio 26 — Perfil académico

Cree:

```python
class PerfilAcademico:
```

con:

```text
asistencia
horas_estudio
creditos
```

Luego haga que `Estudiante` tenga un atributo:

```python
perfil
```

de tipo `PerfilAcademico`.

**Conceptos:** composición, objetos relacionados.

---

## Ejercicio 27 — Filtrar objetos compuestos

Utilizando:

```python
estudiante.perfil.asistencia
```

filtre estudiantes con:

```text
asistencia >= 80
```

**Conceptos:** composición, `filter`, acceso a objetos internos.

---

## Ejercicio 28 — Pipeline final

Cree estudiantes con:

```text
nombre
nota
PerfilAcademico
```

Cada `PerfilAcademico` debe contener:

```text
asistencia
creditos
```

Construya un pipeline que:

1. seleccione asistencia `>= 80`;
2. seleccione nota `>= 4.0`;
3. obtenga solamente los nombres.

Representación:

```text
lista de Estudiante
        ↓
filter asistencia
        ↓
filter nota
        ↓
map nombre
        ↓
lista de nombres
```

**Conceptos:** POO, composición, programación funcional, pipeline, `filter`, `map`.

---

# 6. Ejercicios para repetir en TypeScript

Los siguientes ejercicios pueden repetirse en TypeScript:

```text
1
3
4
7
8
9
10
12
13
14
16
17
19
20
24
28
```

Equivalencias útiles:

| Python | TypeScript |
|---|---|
| `self` | `this` |
| `__init__()` | `constructor()` |
| `@property` | `get` |
| `@atributo.setter` | `set` |
| `class Hija(Padre)` | `class Hija extends Padre` |
| `lambda x: ...` | `x => ...` |
| `map()` | `.map()` |
| `filter()` | `.filter()` |
| `reduce()` | `.reduce()` |

---

# 7. Ruta sugerida de aprendizaje

```text
ETAPA 1
Clases y objetos
1 → 2 → 3 → 4
```

```text
ETAPA 2
Relaciones entre objetos
5 → 6 → 7 → 8 → 9
```

```text
ETAPA 3
Paradigma funcional
10 → 11 → 12 → 13 → 14 → 15
```

```text
ETAPA 4
Combinar paradigmas
16 → 17 → 18 → 19 → 20
```

```text
ETAPA 5
Aplicación a datos
21 → 22 → 23 → 24 → 25 → 26 → 27 → 28
```

---

# 8. Idea final

La Programación Orientada a Objetos ayuda a modelar:

```text
entidades
atributos
métodos
relaciones
```

Mientras que el paradigma funcional ayuda a expresar:

```text
transformaciones
filtros
pipelines
funciones puras
```

En aplicaciones relacionadas con datos, ambos enfoques pueden combinarse.

Por ejemplo:

```text
Objetos Estudiante
        ↓
filter
        ↓
map
        ↓
resultado
```

El objetivo no es elegir siempre un único paradigma, sino comprender qué aporta cada uno y cómo utilizarlos correctamente.
