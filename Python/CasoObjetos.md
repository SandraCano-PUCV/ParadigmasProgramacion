# De una fila de datos a una lista de objetos
## Diccionarios, objetos y agregación en Python
### Caso aplicado a estudiantes de Ciencia de Datos

## 1. Propósito

En Ciencia de Datos es común trabajar con información organizada en filas y columnas.

Por ejemplo, un conjunto de datos de estudiantes podría contener:

| id | nombre | semestre | asistencia | programa |
|---|---|---:|---:|---|
| E001 | Ana | 2 | 85 | Ciencia de Datos |
| E002 | Pedro | 1 | 72 | Ciencia de Datos |
| E003 | Camila | 3 | 91 | Ciencia de Datos |

Antes de utilizar herramientas como `pandas`, es importante comprender cómo puede representarse esta información utilizando estructuras básicas de programación.

En esta guía veremos la misma información de tres maneras:

```text
diccionario
    ↓
lista de diccionarios
    ↓
objetos y lista de objetos
```

Después veremos una idea importante de Programación Orientada a Objetos:

> Un atributo de un objeto no tiene que ser solamente un número o un texto. También puede contener una referencia a otro objeto.

Esta relación permite introducir el concepto de **agregación**.

---

## 2. Una fila como diccionario

Podemos representar una fila del dataset utilizando un diccionario.

```python
estudiante = {
    "id": "E001",
    "nombre": "Ana",
    "semestre": 2,
    "asistencia": 85,
    "programa": "Ciencia de Datos"
}
```

Cada clave representa una característica del estudiante.

```python
print(estudiante["nombre"])
print(estudiante["asistencia"])
```

Salida:

```text
Ana
85
```

---

## 3. Varias filas: lista de diccionarios

```python
estudiantes = [
    {
        "id": "E001",
        "nombre": "Ana",
        "semestre": 2,
        "asistencia": 85,
        "programa": "Ciencia de Datos"
    },
    {
        "id": "E002",
        "nombre": "Pedro",
        "semestre": 1,
        "asistencia": 72,
        "programa": "Ciencia de Datos"
    },
    {
        "id": "E003",
        "nombre": "Camila",
        "semestre": 3,
        "asistencia": 91,
        "programa": "Ciencia de Datos"
    }
]
```

Conceptualmente:

```text
estudiantes
    |
    +---- diccionario de Ana
    |
    +---- diccionario de Pedro
    |
    +---- diccionario de Camila
```

Recorrido:

```python
for estudiante in estudiantes:
    print(estudiante["nombre"])
```

---

## 4. Relación con una tabla de datos

Podemos pensar que:

```text
Cada diccionario = una fila
Cada clave        = una columna
La lista          = el conjunto de filas
```

Esta forma de pensar ayuda a conectar programación básica con estructuras que luego aparecerán al trabajar con CSV, JSON, APIs o DataFrames.

---

## 5. ¿Por qué pasar de diccionarios a objetos?

Los diccionarios almacenan datos, pero no obligan a que todos los registros tengan la misma estructura.

Por ejemplo:

```python
estudiante1 = {
    "nombre": "Ana",
    "asistencia": 85
}

estudiante2 = {
    "nombre_estudiante": "Pedro",
    "asist": 72
}
```

Ambos podrían representar estudiantes, pero usan claves diferentes.

Con una clase podemos definir una estructura común.

---

## 6. Clase Estudiante

```python
class Estudiante:

    def __init__(
        self,
        id_estudiante,
        nombre,
        semestre,
        asistencia
    ):
        self.id_estudiante = id_estudiante
        self.nombre = nombre
        self.semestre = semestre
        self.asistencia = asistencia
```

Crear un objeto:

```python
ana = Estudiante(
    "E001",
    "Ana",
    2,
    85
)
```

---

## 7. Diccionario y objeto: equivalencia conceptual

### Diccionario

```python
ana = {
    "id": "E001",
    "nombre": "Ana",
    "semestre": 2,
    "asistencia": 85
}
```

Acceso:

```python
ana["nombre"]
```

### Objeto

```python
ana = Estudiante(
    "E001",
    "Ana",
    2,
    85
)
```

Acceso:

```python
ana.nombre
```

La diferencia es que el objeto pertenece a una clase y puede incorporar comportamiento.

---

## 8. Lista de objetos

```python
ana = Estudiante("E001", "Ana", 2, 85)
pedro = Estudiante("E002", "Pedro", 1, 72)
camila = Estudiante("E003", "Camila", 3, 91)

estudiantes = [
    ana,
    pedro,
    camila
]
```

Conceptualmente:

```text
estudiantes
    |
    +---- objeto ana
    |
    +---- objeto pedro
    |
    +---- objeto camila
```

Recorrido:

```python
for estudiante in estudiantes:
    print(
        estudiante.nombre,
        estudiante.asistencia
    )
```

---

## 9. Los atributos no tienen que ser datos simples

Hasta ahora hemos utilizado atributos como:

```python
self.nombre
self.semestre
self.asistencia
```

Estos contienen valores simples.

Pero un atributo también puede contener **otro objeto**.

Por ejemplo, en lugar de:

```python
self.programa = "Ciencia de Datos"
```

podemos modelar el programa académico mediante otra clase.

---

## 10. Clase ProgramaAcademico

```python
class ProgramaAcademico:

    def __init__(
        self,
        codigo,
        nombre,
        duracion_semestres
    ):
        self.codigo = codigo
        self.nombre = nombre
        self.duracion_semestres = (
            duracion_semestres
        )
```

Creamos un objeto:

```python
ciencia_datos = ProgramaAcademico(
    "CD001",
    "Ciencia de Datos",
    8
)
```

El objeto `ciencia_datos` existe de forma independiente.

---

## 11. Un atributo puede referenciar otro objeto

Modificamos `Estudiante`:

```python
class Estudiante:

    def __init__(
        self,
        id_estudiante,
        nombre,
        semestre,
        asistencia,
        programa
    ):
        self.id_estudiante = id_estudiante
        self.nombre = nombre
        self.semestre = semestre
        self.asistencia = asistencia

        self.programa = programa
```

Aquí:

```python
self.programa = programa
```

significa que el atributo `programa` puede contener una referencia a un objeto `ProgramaAcademico`.

---

## 12. Crear un estudiante con un ProgramaAcademico

```python
ciencia_datos = ProgramaAcademico(
    "CD001",
    "Ciencia de Datos",
    8
)

ana = Estudiante(
    "E001",
    "Ana",
    2,
    85,
    ciencia_datos
)
```

Conceptualmente:

```text
ana
 |
 | programa
 v
ciencia_datos
```

---

## 13. Acceder a atributos de objetos relacionados

```python
print(ana.nombre)
```

Salida:

```text
Ana
```

Y:

```python
print(
    ana.programa.nombre
)
```

Salida:

```text
Ciencia de Datos
```

La cadena:

```text
ana.programa.nombre
```

se interpreta como:

```text
objeto Estudiante
      ↓
atributo programa
      ↓
objeto ProgramaAcademico
      ↓
atributo nombre
```

---

## 14. Agregación

La relación entre `Estudiante` y `ProgramaAcademico` puede modelarse como una **agregación**.

¿Por qué?

Porque:

```text
Estudiante TIENE UN ProgramaAcademico
```

pero `ProgramaAcademico` puede existir de forma independiente del estudiante.

Primero creamos:

```python
ciencia_datos = ProgramaAcademico(
    "CD001",
    "Ciencia de Datos",
    8
)
```

y luego asociamos ese objeto:

```python
ana = Estudiante(
    "E001",
    "Ana",
    2,
    85,
    ciencia_datos
)
```

El programa no fue creado dentro de Ana; fue creado antes y luego entregado al estudiante.

---

## 15. Representación UML conceptual

La agregación suele representarse con rombo blanco:

```text
Estudiante ◇──────── ProgramaAcademico
```

La lectura conceptual es:

```text
Estudiante TIENE UN ProgramaAcademico
```

y ambos pueden existir de forma independiente.

---

## 16. Un mismo objeto puede ser compartido

```python
ciencia_datos = ProgramaAcademico(
    "CD001",
    "Ciencia de Datos",
    8
)

ana = Estudiante(
    "E001",
    "Ana",
    2,
    85,
    ciencia_datos
)

pedro = Estudiante(
    "E002",
    "Pedro",
    1,
    72,
    ciencia_datos
)

camila = Estudiante(
    "E003",
    "Camila",
    3,
    91,
    ciencia_datos
)
```

Conceptualmente:

```text
             ProgramaAcademico
              Ciencia de Datos
                    ^
                   /|\
                  / | \
                 /  |  \
              Ana Pedro Camila
```

Los tres estudiantes referencian el mismo objeto `ciencia_datos`.

Esta es una idea muy útil para comprender agregación.

---

## 17. Lista de objetos con agregación

```python
estudiantes = [
    ana,
    pedro,
    camila
]
```

Y:

```python
for estudiante in estudiantes:

    print(
        estudiante.nombre,
        estudiante.programa.nombre
    )
```

Salida:

```text
Ana Ciencia de Datos
Pedro Ciencia de Datos
Camila Ciencia de Datos
```

Aquí combinamos:

```text
lista de objetos
        +
objetos relacionados por agregación
```

---

## 18. Comparación: lista de diccionarios vs lista de objetos

### Lista de diccionarios

```python
estudiantes = [
    {
        "nombre": "Ana",
        "semestre": 2
    },
    {
        "nombre": "Pedro",
        "semestre": 1
    }
]
```

Acceso:

```python
estudiantes[0]["nombre"]
```

### Lista de objetos

```python
estudiantes = [
    ana,
    pedro
]
```

Acceso:

```python
estudiantes[0].nombre
```

La estructura exterior sigue siendo una lista.

Lo que cambia es el tipo de elemento que contiene.

---

## 19. Un atributo también puede ser una lista de objetos

Ahora pensemos en un curso de programación.

```python
class Curso:

    def __init__(
        self,
        codigo,
        nombre
    ):
        self.codigo = codigo
        self.nombre = nombre

        self.estudiantes = []
```

El atributo:

```python
self.estudiantes
```

es una lista.

Pero esa lista puede almacenar objetos `Estudiante`.

---

## 20. Agregar objetos a la lista

```python
class Curso:

    def __init__(
        self,
        codigo,
        nombre
    ):
        self.codigo = codigo
        self.nombre = nombre
        self.estudiantes = []

    def agregar_estudiante(
        self,
        estudiante
    ):
        self.estudiantes.append(
            estudiante
        )
```

Uso:

```python
programacion = Curso(
    "INF101",
    "Programación"
)

programacion.agregar_estudiante(
    ana
)

programacion.agregar_estudiante(
    pedro
)
```

Ahora:

```text
Curso
 |
 | estudiantes
 v
[ana, pedro]
```

---

## 21. Recorrer un atributo que es lista de objetos

```python
for estudiante in (
    programacion.estudiantes
):
    print(
        estudiante.nombre
    )
```

Salida:

```text
Ana
Pedro
```

Esto muestra que un atributo puede almacenar:

```text
un valor simple
otro objeto
una lista
una lista de objetos
```

---

## 22. Código completo

```python
class ProgramaAcademico:

    def __init__(
        self,
        codigo,
        nombre,
        duracion_semestres
    ):
        self.codigo = codigo
        self.nombre = nombre
        self.duracion_semestres = (
            duracion_semestres
        )


class Estudiante:

    def __init__(
        self,
        id_estudiante,
        nombre,
        semestre,
        asistencia,
        programa
    ):
        self.id_estudiante = id_estudiante
        self.nombre = nombre
        self.semestre = semestre
        self.asistencia = asistencia

        # Agregación
        self.programa = programa

    def mostrar_info(self):

        print(
            f"{self.id_estudiante} | "
            f"{self.nombre} | "
            f"Semestre {self.semestre} | "
            f"Asistencia {self.asistencia}% | "
            f"{self.programa.nombre}"
        )


class Curso:

    def __init__(
        self,
        codigo,
        nombre
    ):
        self.codigo = codigo
        self.nombre = nombre

        # Lista de objetos Estudiante
        self.estudiantes = []

    def agregar_estudiante(
        self,
        estudiante
    ):
        self.estudiantes.append(
            estudiante
        )

    def mostrar_estudiantes(self):

        print(
            f"Curso: {self.nombre}"
        )

        for estudiante in (
            self.estudiantes
        ):
            estudiante.mostrar_info()


ciencia_datos = ProgramaAcademico(
    "CD001",
    "Ciencia de Datos",
    8
)

ana = Estudiante(
    "E001",
    "Ana",
    2,
    85,
    ciencia_datos
)

pedro = Estudiante(
    "E002",
    "Pedro",
    1,
    72,
    ciencia_datos
)

camila = Estudiante(
    "E003",
    "Camila",
    3,
    91,
    ciencia_datos
)

estudiantes = [
    ana,
    pedro,
    camila
]

programacion = Curso(
    "INF101",
    "Programación"
)

programacion.agregar_estudiante(
    ana
)

programacion.agregar_estudiante(
    pedro
)

programacion.agregar_estudiante(
    camila
)

programacion.mostrar_estudiantes()
```

---

## 23. Modelo conceptual

```text
             ProgramaAcademico
              Ciencia de Datos
                    ^
                    |
              agregación
                    |
        -------------------------
        |           |           |
       Ana        Pedro       Camila
        \           |          /
         \          |         /
          \         |        /
           v        v       v
             Curso Programación
             estudiantes = [...]
```

---

## 24. Relación con Ciencia de Datos

Para un estudiante de Ciencia de Datos es útil hacer esta traducción mental:

```text
fila de una tabla
      ↓
diccionario
      ↓
objeto
```

Y:

```text
varias filas
      ↓
lista de diccionarios
      ↓
lista de objetos
```

La POO agrega algo importante: los registros pueden tener no solo datos, sino también relaciones y comportamiento.

---

## 25. Idea clave

Un atributo no tiene que almacenar solamente:

```text
string
int
float
boolean
```

También puede almacenar:

```text
otro objeto
```

como:

```python
self.programa = ciencia_datos
```

o una:

```text
lista de objetos
```

como:

```python
self.estudiantes = []
```

Esta idea permite modelar sistemas con varias entidades relacionadas.

---

## 26. Regla práctica

Si decimos:

```text
Estudiante ES UNA Persona
```

pensamos en:

```text
HERENCIA
```

Si decimos:

```text
Estudiante TIENE UN ProgramaAcademico
```

y ese programa puede existir independientemente, podemos pensar en:

```text
AGREGACIÓN
```

Si decimos:

```text
Curso TIENE varios Estudiantes
```

podemos representar esa relación mediante un atributo que contenga una colección de objetos.

---

## 27. Actividad

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

Luego agregue a `Estudiante`:

```python
self.asignaturas = []
```

e implemente:

```python
agregar_asignatura()
```

Analice:

```text
¿Qué contiene self.asignaturas?

¿Son textos o son objetos?

¿Puede una misma Asignatura estar asociada
a varios estudiantes?

¿La Asignatura puede existir aunque no haya
ningún Estudiante asociado?
```

Estas preguntas ayudan a identificar una relación de agregación.

---

## 28. Preguntas de reflexión

1. ¿Qué representa un diccionario en este caso?
2. ¿Qué representa una lista de diccionarios?
3. ¿Qué diferencia existe entre `estudiante["nombre"]` y `estudiante.nombre`?
4. ¿Qué representa una lista de objetos?
5. ¿Puede un atributo almacenar otro objeto?
6. ¿Qué contiene `ana.programa`?
7. ¿Qué significa `ana.programa.nombre`?
8. ¿Por qué `ProgramaAcademico` puede existir sin un objeto `Estudiante`?
9. ¿Por qué esa relación puede considerarse agregación?
10. ¿Qué contiene `Curso.estudiantes`?
11. ¿Qué diferencia existe entre una lista de números y una lista de objetos?
12. ¿Cómo se relaciona este ejemplo con una tabla o dataset?
