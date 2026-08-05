# Introducción a Python

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Nivel](https://img.shields.io/badge/Nivel-Introducción-green)
![Uso](https://img.shields.io/badge/Uso-Educativo-orange)

## Descripción
Este repositorio contiene una introducción al lenguaje de programación **Python**. Su propósito es presentar los conceptos fundamentales necesarios para comenzar a escribir, ejecutar y comprender programas sencillos.

Python es un lenguaje de programación:

- de alto nivel;
- interpretado;
- multiplataforma;
- de propósito general;
- con tipado dinámico;
- de sintaxis clara y legible;
- compatible con distintos paradigmas de programación.

Se utiliza en áreas como desarrollo web, análisis de datos, inteligencia artificial, automatización, robótica, computación científica y educación.

---

## 1. ¿Cómo funciona Python?

Python es un lenguaje **interpretado**. Esto significa que un programa denominado **intérprete** lee y ejecuta las instrucciones escritas en el código fuente.

El proceso general es:

```text
Código fuente (.py)
        ↓
Intérprete de Python
        ↓
Bytecode
        ↓
Máquina virtual de Python
        ↓
Resultado
```

A diferencia de los lenguajes compilados tradicionales, normalmente no es necesario crear manualmente un archivo ejecutable antes de probar el programa.

---

## 2. Formas de trabajar con Python

Python puede utilizarse de diferentes maneras.

### 2.1 Intérprete interactivo

Permite escribir y ejecutar instrucciones directamente:

```python
>>> 2 + 3
5
```

Es útil para realizar pruebas rápidas.

### 2.2 Archivos Python

Los programas pueden guardarse en archivos con extensión `.py`.

Ejemplo:

```python
print("Hola, Python")
```

Para ejecutarlo desde una terminal:

```bash
python programa.py
```

En algunos sistemas puede ser necesario utilizar:

```bash
python3 programa.py
```

### 2.3 Jupyter Notebook

Jupyter permite combinar:

- código;
- texto explicativo;
- fórmulas;
- tablas;
- gráficos.

Es ampliamente utilizado en ciencia de datos, inteligencia artificial y educación.

### 2.4 Google Colab

Google Colab permite ejecutar notebooks de Python desde un navegador web, sin realizar una instalación local.

### 2.5 Visual Studio Code

Visual Studio Code es un editor que permite crear proyectos de Python, ejecutar programas, depurar errores y administrar extensiones.

---

## 3. Requisitos

Para trabajar localmente se recomienda contar con:

- Python 3;
- un editor de código;
- una terminal o consola;
- opcionalmente, Git.

Para comprobar que Python está instalado:

```bash
python --version
```

o:

```bash
python3 --version
```

---

## 4. Primer programa

Cree un archivo llamado `hola.py`:

```python
print("Hola, mundo")
```

Ejecútelo desde la terminal:

```bash
python hola.py
```

Salida esperada:

```text
Hola, mundo
```

La función `print()` muestra información en la pantalla.

---

## 5. Comentarios

Los comentarios permiten documentar el código y no son ejecutados por Python.

```python
# Este es un comentario

print("Hola")  # Comentario al final de una línea
```

También pueden utilizarse cadenas multilínea para documentar funciones, clases o módulos:

```python
"""
Este programa presenta
un ejemplo introductorio.
"""
```

---

## 6. Variables

Una variable almacena un valor que puede ser utilizado posteriormente.

```python
nombre = "Ana"
edad = 20
altura = 1.68
es_estudiante = True
```

Python utiliza **tipado dinámico**, por lo que no es necesario declarar explícitamente el tipo de una variable.

```python
dato = 10
dato = "Ahora contiene texto"
```

### Reglas básicas para nombrar variables

Los nombres:

- pueden contener letras, números y guion bajo;
- no pueden comenzar con un número;
- no deben contener espacios;
- distinguen entre mayúsculas y minúsculas;
- no pueden utilizar palabras reservadas.

Ejemplo recomendado:

```python
promedio_final = 6.2
```

---

## 7. Tipos de datos básicos

### Números enteros

```python
cantidad = 25
```

Tipo: `int`

### Números decimales

```python
temperatura = 23.5
```

Tipo: `float`

### Cadenas de texto

```python
mensaje = "Introducción a Python"
```

Tipo: `str`

### Valores booleanos

```python
activo = True
finalizado = False
```

Tipo: `bool`

Para conocer el tipo de un valor:

```python
numero = 10
print(type(numero))
```

---

## 8. Entrada y salida de datos

### Salida

```python
nombre = "Carlos"
print("Hola", nombre)
```

También pueden utilizarse cadenas formateadas:

```python
nombre = "Carlos"
edad = 19

print(f"{nombre} tiene {edad} años")
```

### Entrada

La función `input()` permite leer información ingresada por el usuario:

```python
nombre = input("Ingrese su nombre: ")
print(f"Bienvenido, {nombre}")
```

El resultado de `input()` siempre es una cadena de texto.

Para leer un número:

```python
edad = int(input("Ingrese su edad: "))
altura = float(input("Ingrese su altura: "))
```

---

## 9. Operadores

### Operadores aritméticos

```python
a = 10
b = 3

print(a + b)   # Suma
print(a - b)   # Resta
print(a * b)   # Multiplicación
print(a / b)   # División decimal
print(a // b)  # División entera
print(a % b)   # Resto
print(a ** b)  # Potencia
```

### Operadores de comparación

```python
a == b
a != b
a > b
a < b
a >= b
a <= b
```

Estos operadores producen un valor booleano.

### Operadores lógicos

```python
and
or
not
```

Ejemplo:

```python
edad = 20
tiene_identificacion = True

puede_ingresar = edad >= 18 and tiene_identificacion
print(puede_ingresar)
```

---

## 10. Estructuras condicionales

Las estructuras condicionales permiten tomar decisiones.

```python
edad = 18

if edad >= 18:
    print("Es mayor de edad")
else:
    print("Es menor de edad")
```

Con más de una condición:

```python
nota = 5.5

if nota >= 6.0:
    print("Desempeño destacado")
elif nota >= 4.0:
    print("Asignatura aprobada")
else:
    print("Asignatura reprobada")
```

> En Python, la indentación forma parte de la sintaxis.

---

## 11. Estructuras repetitivas

### Ciclo `for`

Se utiliza para recorrer una secuencia:

```python
for numero in range(1, 6):
    print(numero)
```

Salida:

```text
1
2
3
4
5
```

Recorrido de una lista:

```python
lenguajes = ["Python", "Java", "JavaScript"]

for lenguaje in lenguajes:
    print(lenguaje)
```

### Ciclo `while`

Repite instrucciones mientras una condición sea verdadera:

```python
contador = 1

while contador <= 5:
    print(contador)
    contador += 1
```

---

## 12. Colecciones

### Listas

Las listas almacenan elementos ordenados y modificables.

```python
frutas = ["manzana", "pera", "naranja"]

print(frutas[0])

frutas.append("uva")
frutas.remove("pera")
```

### Tuplas

Las tuplas son colecciones ordenadas que no pueden modificarse después de ser creadas.

```python
coordenada = (10, 20)
```

### Conjuntos

Los conjuntos almacenan elementos únicos.

```python
numeros = {1, 2, 3, 3, 4}
print(numeros)
```

### Diccionarios

Los diccionarios almacenan pares clave-valor.

```python
estudiante = {
    "nombre": "Sofía",
    "edad": 21,
    "carrera": "Ingeniería Informática"
}

print(estudiante["nombre"])
```

---

## 13. Funciones

Una función agrupa instrucciones que realizan una tarea específica.

```python
def saludar(nombre):
    return f"Hola, {nombre}"


mensaje = saludar("Daniel")
print(mensaje)
```

Una función puede recibir varios parámetros:

```python
def sumar(a, b):
    return a + b


resultado = sumar(3, 4)
print(resultado)
```

### Parámetros con valores predeterminados

```python
def saludar(nombre, mensaje="Bienvenido"):
    return f"{mensaje}, {nombre}"


print(saludar("Andrea"))
print(saludar("Andrea", "Buenos días"))
```

---

## 14. Funciones lambda

Una función `lambda` es una función anónima y breve.

```python
doble = lambda numero: numero * 2

print(doble(5))
```

Equivale aproximadamente a:

```python
def doble(numero):
    return numero * 2
```

Las funciones lambda suelen utilizarse junto con funciones de orden superior.

```python
numeros = [1, 2, 3, 4]

dobles = list(map(lambda numero: numero * 2, numeros))

print(dobles)
```

---

## 15. Funciones de orden superior

Una función de orden superior puede recibir una función como argumento o retornar otra función.

Ejemplo con `map()`:

```python
numeros = [1, 2, 3, 4]

cuadrados = list(map(lambda numero: numero ** 2, numeros))

print(cuadrados)
```

Ejemplo con `filter()`:

```python
numeros = [1, 2, 3, 4, 5, 6]

pares = list(filter(lambda numero: numero % 2 == 0, numeros))

print(pares)
```

---

## 16. Comprensión de listas

Python permite crear listas de manera compacta.

```python
cuadrados = [numero ** 2 for numero in range(1, 6)]

print(cuadrados)
```

Con una condición:

```python
pares = [numero for numero in range(1, 11) if numero % 2 == 0]

print(pares)
```

---

## 17. Manejo de errores

Los errores que ocurren durante la ejecución pueden controlarse con `try` y `except`.

```python
try:
    numero = int(input("Ingrese un número entero: "))
    resultado = 10 / numero
    print(resultado)
except ValueError:
    print("Debe ingresar un número entero")
except ZeroDivisionError:
    print("No es posible dividir por cero")
```

---

## 18. Módulos

Un módulo es un archivo que contiene funciones, clases o variables reutilizables.

Python incluye numerosos módulos en su biblioteca estándar.

```python
import math

resultado = math.sqrt(25)

print(resultado)
```

También se pueden importar elementos específicos:

```python
from random import randint

numero = randint(1, 10)

print(numero)
```

---

## 19. Instalación de paquetes

`pip` es el administrador de paquetes de Python.

Ejemplo:

```bash
pip install numpy
```

Uso del paquete:

```python
import numpy as np

datos = np.array([10, 20, 30])

print(datos)
```

Para revisar los paquetes instalados:

```bash
pip list
```

---

## 20. Entornos virtuales

Un entorno virtual permite mantener separadas las dependencias de cada proyecto.

Creación:

```bash
python -m venv .venv
```

Activación en Windows:

```bash
.venv\Scripts\activate
```

Activación en macOS o Linux:

```bash
source .venv/bin/activate
```

Instalación de dependencias:

```bash
pip install nombre_paquete
```

Desactivación:

```bash
deactivate
```

---

## 21. Organización básica de un proyecto

Una estructura sencilla puede ser:

```text
introduccion-python/
├── README.md
├── src/
│   └── main.py
├── ejercicios/
│   ├── ejercicio_01.py
│   └── ejercicio_02.py
├── notebooks/
│   └── introduccion.ipynb
├── tests/
└── requirements.txt
```

El archivo `requirements.txt` puede generarse con:

```bash
pip freeze > requirements.txt
```

Para instalar sus dependencias:

```bash
pip install -r requirements.txt
```

---

## 22. Ejemplo integrador

El siguiente programa solicita tres calificaciones, calcula el promedio e informa el resultado:

```python
def calcular_promedio(notas):
    return sum(notas) / len(notas)


def determinar_estado(promedio):
    if promedio >= 4.0:
        return "Aprobado"

    return "Reprobado"


notas = []

for numero in range(1, 4):
    nota = float(input(f"Ingrese la nota {numero}: "))
    notas.append(nota)

promedio = calcular_promedio(notas)
estado = determinar_estado(promedio)

print(f"Promedio: {promedio:.1f}")
print(f"Estado: {estado}")
```

Este ejemplo utiliza variables, entrada y salida de datos, listas, ciclos, funciones, condicionales y cadenas formateadas.

---

## 23. Ejercicios propuestos

1. Crear un programa que solicite dos números y muestre su suma, resta, multiplicación y división.
2. Solicitar una edad e indicar si la persona es menor o mayor de edad.
3. Mostrar los números del 1 al 20 utilizando un ciclo.
4. Crear una lista con cinco calificaciones y calcular su promedio.
5. Crear una función que determine si un número es par.
6. Crear una función que reciba una lista y retorne su valor máximo.
7. Utilizar `filter()` y una función lambda para obtener los números mayores que 10.
8. Crear un diccionario con información de un estudiante y mostrar sus datos.
9. Controlar el error producido cuando el usuario ingresa texto en lugar de un número.
10. Organizar una solución utilizando al menos dos archivos Python.

---

## 24. Buenas prácticas iniciales

- Utilizar nombres descriptivos para variables y funciones.
- Mantener una indentación consistente de cuatro espacios.
- Separar los problemas complejos en funciones pequeñas.
- Evitar repetir código.
- Agregar comentarios cuando expliquen una decisión relevante.
- Validar los datos ingresados por el usuario.
- Utilizar entornos virtuales en cada proyecto.
- Seguir las convenciones de estilo definidas en PEP 8.

---


## 24. Buenas prácticas iniciales

- Utilizar nombres descriptivos para variables y funciones.
- Mantener una indentación consistente de cuatro espacios.
- Separar los problemas complejos en funciones pequeñas.
- Evitar repetir código.
- Agregar comentarios cuando expliquen una decisión relevante.
- Validar los datos ingresados por el usuario.
- Utilizar entornos virtuales en cada proyecto.
- Seguir las convenciones de estilo definidas en PEP 8.

---


## 25. Guía de estilo: PEP 8

**PEP 8** es la guía de estilo oficial para escribir código Python legible y consistente. No modifica el funcionamiento del programa, pero establece convenciones que facilitan su lectura, revisión y mantenimiento.

### 25.1 Indentación

Utilice **cuatro espacios** por cada nivel de indentación.

```python
def evaluar_nota(nota):
    if nota >= 4.0:
        return "Aprobado"

    return "Reprobado"
```

No se recomienda mezclar tabulaciones y espacios dentro de un mismo proyecto.

### 25.2 Longitud de las líneas

Como referencia general:

- el código debe limitarse a 79 caracteres por línea;
- los comentarios y docstrings extensos deben limitarse a 72 caracteres por línea.

Cuando una expresión es extensa, puede dividirse utilizando paréntesis:

```python
promedio_ponderado = (
    nota_prueba * ponderacion_prueba
    + nota_proyecto * ponderacion_proyecto
)
```

Se recomienda evitar el uso de `\` para dividir líneas cuando los paréntesis permiten expresar la continuación de forma más clara.

### 25.3 Líneas en blanco

Utilice líneas en blanco para separar elementos del programa:

- dos líneas en blanco entre funciones o clases de nivel superior;
- una línea en blanco entre métodos de una clase;
- líneas en blanco dentro de una función cuando ayuden a distinguir etapas lógicas.

```python
def calcular_area(base, altura):
    return base * altura


def calcular_perimetro(base, altura):
    return 2 * (base + altura)
```

### 25.4 Convenciones de nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Variables | `snake_case` | `promedio_final` |
| Funciones | `snake_case` | `calcular_promedio()` |
| Clases | `PascalCase` | `RegistroEstudiante` |
| Constantes | `MAYUSCULAS_CON_GUION_BAJO` | `NOTA_APROBACION` |
| Módulos | nombres breves en minúscula | `calificaciones.py` |
| Uso interno | guion bajo inicial | `_validar_dato()` |

Ejemplo:

```python
NOTA_APROBACION = 4.0


class RegistroEstudiante:
    def __init__(self, nombre):
        self.nombre = nombre

    def determinar_estado(self, promedio):
        return promedio >= NOTA_APROBACION
```

Los nombres deben describir el propósito del elemento.

```python
# Poco descriptivo
x = 6.2

# Más descriptivo
promedio_final = 6.2
```

### 25.5 Espacios alrededor de operadores

Utilice un espacio alrededor de operadores de asignación, comparación y aritméticos:

```python
promedio = suma_notas / cantidad_notas
aprobado = promedio >= 4.0
```

Evite espacios innecesarios dentro de paréntesis o antes de una coma:

```python
# Recomendado
resultado = sumar(3, 5)

# No recomendado
resultado = sumar( 3, 5 )
```

En argumentos con valores predeterminados no se agregan espacios alrededor de `=`:

```python
def saludar(nombre, mensaje="Bienvenido"):
    return f"{mensaje}, {nombre}"
```

### 25.6 Importaciones

Normalmente, cada módulo debe importarse en una línea separada:

```python
import math
import statistics
```

Las importaciones se organizan en el siguiente orden:

1. biblioteca estándar de Python;
2. bibliotecas externas;
3. módulos propios del proyecto.

Cada grupo se separa mediante una línea en blanco:

```python
import math
from pathlib import Path

import numpy as np
import pandas as pd

from proyecto.calculos import calcular_promedio
```

Evite las importaciones con asterisco:

```python
# Evitar
from math import *

# Recomendado
from math import pi, sqrt
```

### 25.7 Comparaciones recomendadas

Para comparar con `None`, utilice `is` o `is not`:

```python
if resultado is None:
    print("No existe un resultado")
```

Evite comparar valores booleanos con `True` o `False` de manera explícita:

```python
# Recomendado
if es_valido:
    print("Dato válido")

# Evitar
if es_valido == True:
    print("Dato válido")
```

Las colecciones pueden evaluarse directamente:

```python
estudiantes = []

if not estudiantes:
    print("No existen estudiantes registrados")
```

### 25.8 Código legible antes que código compacto

Una expresión breve no siempre es la más comprensible.

```python
# Menos legible
estado = "Aprobado" if promedio >= 4.0 else "Reprobado"

# Alternativa apropiada cuando se requiere explicar la decisión
if promedio >= 4.0:
    estado = "Aprobado"
else:
    estado = "Reprobado"
```

Ambas formas son válidas. La selección debe considerar la claridad y el contexto.

### 25.9 Ejemplo sin aplicar convenciones

```python
import math,random
NOTA_aprobacion=4.0
def CalcularEstado(n):
 if n>=NOTA_aprobacion:return "Aprobado"
 else:return "Reprobado"
```

### 25.10 Ejemplo corregido según PEP 8

```python
import math
import random

NOTA_APROBACION = 4.0


def calcular_estado(nota):
    if nota >= NOTA_APROBACION:
        return "Aprobado"

    return "Reprobado"
```

---

## 26. Documentación del código: PEP 257

**PEP 257** define convenciones para escribir **docstrings**. Una docstring es una cadena ubicada al comienzo de un módulo, clase, función o método que explica su propósito y forma de uso.

Los comentarios y las docstrings tienen funciones diferentes:

- un comentario explica decisiones internas o el motivo de una solución;
- una docstring describe la interfaz y el comportamiento de un elemento;
- el archivo `README.md` explica el propósito general, instalación y uso del proyecto.

### 26.1 Docstring de una función

```python
def calcular_promedio(notas):
    """Calcula y retorna el promedio de una colección de notas."""
    return sum(notas) / len(notas)
```

La primera línea debe ser una descripción breve, escrita como una instrucción o acción.

### 26.2 Docstring de varias líneas

Cuando se requiere más información, la descripción breve se separa del resto mediante una línea en blanco:

```python
def calcular_promedio(notas):
    """Calcula el promedio aritmético de una colección de notas.

    Args:
        notas: Colección no vacía de valores numéricos.

    Returns:
        El promedio aritmético de los valores recibidos.

    Raises:
        ValueError: Si la colección no contiene elementos.
    """
    if not notas:
        raise ValueError("La colección de notas no puede estar vacía")

    return sum(notas) / len(notas)
```

Las secciones `Args`, `Returns` y `Raises` corresponden a un estilo ampliamente utilizado. PEP 257 define la estructura general de las docstrings, pero no exige un formato único para describir parámetros.

### 26.3 Docstring de una clase

```python
class Estudiante:
    """Representa a un estudiante y sus calificaciones."""

    def __init__(self, nombre, notas=None):
        """Inicializa un estudiante con su nombre y sus notas."""
        self.nombre = nombre
        self.notas = notas or []

    def calcular_promedio(self):
        """Retorna el promedio de las notas registradas."""
        if not self.notas:
            return 0.0

        return sum(self.notas) / len(self.notas)
```

### 26.4 Docstring de un módulo

Al comienzo de un archivo puede documentarse su objetivo:

```python
"""Funciones para registrar y analizar calificaciones estudiantiles."""

NOTA_APROBACION = 4.0
```

### 26.5 Consultar la documentación desde Python

La función `help()` permite consultar docstrings:

```python
help(calcular_promedio)
```

También puede accederse directamente mediante `__doc__`:

```python
print(calcular_promedio.__doc__)
```

---

## 27. Comentarios útiles

Los comentarios deben aportar información que no resulte evidente al leer el código.

```python
# Se utiliza una copia para conservar intacta la lista original.
notas_ordenadas = sorted(notas)
```

Evite comentarios que solo repitan la instrucción:

```python
# Suma uno a contador.
contador += 1
```

También es recomendable evitar grandes bloques de código comentado. El historial de cambios debe mantenerse mediante un sistema de control de versiones como Git.

---

## 28. Anotaciones de tipo

Las anotaciones de tipo ayudan a documentar los valores esperados y mejoran el soporte de los editores.

```python
def calcular_promedio(notas: list[float]) -> float:
    """Calcula el promedio de una lista de notas."""
    if not notas:
        raise ValueError("La lista no puede estar vacía")

    return sum(notas) / len(notas)
```

Las anotaciones:

- no reemplazan las validaciones;
- no modifican por sí solas el comportamiento del programa;
- no sustituyen una buena docstring;
- permiten utilizar herramientas de análisis estático.

Ejemplo con un valor opcional:

```python
def buscar_estudiante(nombre: str) -> dict | None:
    """Busca un estudiante y retorna sus datos si existe."""
    return None
```

---

## 29. Estilos habituales para docstrings

En proyectos Python se utilizan principalmente tres formatos:

### Estilo Google

```python
def dividir(dividendo, divisor):
    """Divide dos números.

    Args:
        dividendo: Número que será dividido.
        divisor: Número por el cual se dividirá.

    Returns:
        El resultado de la división.

    Raises:
        ZeroDivisionError: Si el divisor es cero.
    """
    return dividendo / divisor
```

### Estilo NumPy

```python
def dividir(dividendo, divisor):
    """Divide dos números.

    Parameters
    ----------
    dividendo : float
        Número que será dividido.
    divisor : float
        Número por el cual se dividirá.

    Returns
    -------
    float
        Resultado de la división.
    """
    return dividendo / divisor
```

### Estilo reStructuredText

```python
def dividir(dividendo, divisor):
    """Divide dos números.

    :param dividendo: Número que será dividido.
    :param divisor: Número por el cual se dividirá.
    :return: Resultado de la división.
    :raises ZeroDivisionError: Si el divisor es cero.
    """
    return dividendo / divisor
```

No es necesario utilizar los tres estilos. Cada proyecto debe seleccionar uno y aplicarlo de manera consistente.

---

## 30. Herramientas de calidad y formato

Existen herramientas que ayudan a comprobar la calidad del código:

| Herramienta | Propósito principal |
|---|---|
| `Ruff` | revisión rápida de estilo y errores frecuentes |
| `Black` | formateo automático del código |
| `Flake8` | comprobación de estilo y errores básicos |
| `Pylint` | análisis amplio de calidad |
| `isort` | ordenamiento automático de importaciones |
| `pydocstyle` | revisión de convenciones de docstrings |
| `mypy` | análisis estático de anotaciones de tipo |

Ejemplo de instalación:

```bash
python -m pip install ruff black
```

Revisión con Ruff:

```bash
ruff check .
```

Formateo con Ruff:

```bash
ruff format .
```

Formateo con Black:

```bash
black .
```

Estas herramientas apoyan la revisión, pero no reemplazan el criterio del equipo ni la legibilidad del código.

---

## 31. Lista de verificación

Antes de entregar un programa, compruebe que:

- [ ] utiliza cuatro espacios para la indentación;
- [ ] las variables y funciones usan `snake_case`;
- [ ] las clases usan `PascalCase`;
- [ ] las constantes usan mayúsculas;
- [ ] las importaciones están organizadas;
- [ ] no existen importaciones con `*`;
- [ ] las funciones públicas poseen docstrings;
- [ ] los comentarios explican decisiones relevantes;
- [ ] las líneas extensas se han dividido claramente;
- [ ] las comparaciones con `None` utilizan `is` o `is not`;
- [ ] los nombres describen la finalidad de cada elemento;
- [ ] el código fue ejecutado y revisado antes de su entrega.

---

## 32. Guías oficiales y recursos

### Estilo y documentación

- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [PEP 257 — Docstring Conventions](https://peps.python.org/pep-0257/)
- [PEP 287 — reStructuredText Docstring Format](https://peps.python.org/pep-0287/)
- [Índice oficial de PEP](https://peps.python.org/)

### Aprendizaje del lenguaje

- [Tutorial oficial de Python](https://docs.python.org/3/tutorial/)
- [Referencia del lenguaje Python](https://docs.python.org/3/reference/)
- [Biblioteca estándar de Python](https://docs.python.org/3/library/)
- [Funciones incorporadas](https://docs.python.org/3/library/functions.html)

### Desarrollo y documentación de proyectos

- [Python Developer’s Guide](https://devguide.python.org/)
- [Guía de documentación de Python](https://devguide.python.org/documentation/)

> PEP 8 es una guía de estilo. La consistencia interna del proyecto y la
> legibilidad tienen prioridad cuando una regla general no se ajusta al
> contexto.


## 33. Recursos de aprendizaje

Para continuar el aprendizaje se recomienda consultar:

- la documentación oficial de Python;
- tutoriales de Jupyter Notebook;
- la documentación de Google Colab;
- la extensión de Python para Visual Studio Code;
- ejercicios prácticos de programación;
- proyectos pequeños relacionados con problemas reales.

---

## 34. Objetivos de aprendizaje

Al finalizar esta introducción, se espera que el estudiante pueda:

- reconocer las características principales de Python;
- ejecutar programas en distintos entornos;
- declarar variables y utilizar tipos de datos;
- aplicar operadores y estructuras de control;
- utilizar colecciones;
- crear funciones;
- comprender el uso básico de funciones lambda;
- importar módulos y paquetes;
- resolver problemas sencillos mediante programas estructurados.

---

## 35. Licencia

Este material puede utilizarse y adaptarse con fines educativos.
