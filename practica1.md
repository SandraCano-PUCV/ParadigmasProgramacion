# Guía práctica: Procesamiento de Datos, POO, Programación Funcional y Pandas

## 1. Objetivo

En esta actividad desarrollaremos un flujo completo de trabajo con datos utilizando Python.

Integraremos:

- **Pandas** para cargar, explorar, limpiar y transformar datos.
- **Programación Orientada a Objetos (POO)** para representar entidades del dominio.
- **Programación funcional** mediante `map()`, `filter()`, `reduce()` y funciones `lambda`.
- Análisis estadístico básico mediante Pandas.

El proceso que seguiremos será:

```text
Dataset
   ↓
1. Carga
   ↓
2. Comprensión de los datos
   ↓
3. Exploración
   ↓
4. Verificación de calidad
   ↓
5. Limpieza
   ↓
6. Transformación
   ↓
7. Creación de nuevas variables
   ↓
8. Modelado mediante POO
   ↓
9. Procesamiento funcional
   ↓
10. Análisis con Pandas
   ↓
11. Exportación
```

---

# 2. Dataset

Trabajaremos con el archivo:

```text
dataset.xlsx
```

El archivo contiene dos hojas:

```text
Mat → datos de Matemática
Por → datos de Portugués
```

La hoja `Mat` contiene:

```text
395 estudiantes
33 variables
```

Algunas de las variables son:

```text
school
sex
age
address
famsize
Pstatus
Medu
Fedu
studytime
failures
schoolsup
famsup
activities
internet
health
absences
G1
G2
G3
```

Las variables `G1`, `G2` y `G3` representan resultados académicos.

---

# 3. Importar las bibliotecas

Comenzamos importando Pandas.

```python
import pandas as pd
```

También utilizaremos:

```python
from functools import reduce
```

`reduce` pertenece al módulo `functools` y será utilizado cuando trabajemos con programación funcional.

---

# 4. Etapa 1: Carga de los datos

Como nuestro dataset se encuentra en un archivo Excel utilizamos:

```python
df = pd.read_excel(
    "dataset.xlsx",
    sheet_name="Mat"
)
```

La función:

```python
pd.read_excel()
```

permite leer archivos Excel.

El parámetro:

```python
sheet_name="Mat"
```

indica qué hoja queremos cargar.

---

# 5. Comprobar que los datos fueron cargados

Una primera buena práctica es comprobar que el archivo se cargó correctamente.

```python
print(df.head())
```

`head()` muestra las primeras cinco filas.

También podemos mostrar una cantidad determinada:

```python
print(df.head(10))
```

Para observar las últimas filas:

```python
print(df.tail())
```

---

# 6. Etapa 2: Comprensión inicial del dataset

Antes de modificar los datos debemos comprender su estructura.

## Dimensiones

```python
print(df.shape)
```

En este dataset obtendremos:

```text
(395, 33)
```

Esto significa:

```text
395 filas
33 columnas
```

Cada fila corresponde a una observación y cada columna a una variable.

---

# 7. Conocer las columnas

```python
print(df.columns)
```

También podemos recorrerlas:

```python
for columna in df.columns:
    print(columna)
```

Esto es importante porque antes de analizar un dataset debemos conocer qué variables contiene.

---

# 8. Tipos de datos

Podemos consultar:

```python
print(df.dtypes)
```

Pandas identifica automáticamente los tipos.

Por ejemplo:

```text
age         int64
studytime   int64
absences    int64
G1          int64
G2          int64
G3          int64

school      object
sex         object
address     object
```

En Pandas:

```text
int64   → números enteros
float64 → números decimales
object  → normalmente texto o categorías
bool    → verdadero/falso
```

---

# 9. `info()`: obtener información general

Una de las operaciones más importantes cuando recibimos un dataset es:

```python
df.info()
```

Esta función muestra:

- número de registros;
- número de columnas;
- nombres de las variables;
- cantidad de datos no nulos;
- tipo de cada variable;
- memoria utilizada.

---

# 10. Etapa 3: Exploración de los datos

Antes de limpiar los datos debemos explorarlos.

Podemos obtener estadísticas descriptivas mediante:

```python
print(df.describe())
```

Pandas mostrará:

```text
count
mean
std
min
25%
50%
75%
max
```

Por ejemplo, para analizar las notas:

```python
print(
    df[["G1", "G2", "G3"]].describe()
)
```

---

# 11. Analizar una variable específica

Por ejemplo:

```python
print(df["G3"].mean())
```

Calcula la media de la nota final.

También podemos utilizar:

```python
df["G3"].median()
df["G3"].min()
df["G3"].max()
df["G3"].std()
```

---

# 12. Explorar variables categóricas

No todas las variables son numéricas.

Por ejemplo:

```python
print(df["sex"].value_counts())
```

`value_counts()` cuenta cuántas veces aparece cada valor.

También podemos analizar:

```python
print(df["school"].value_counts())

print(df["address"].value_counts())

print(df["internet"].value_counts())
```

---

# 13. Etapa 4: Evaluación de la calidad de los datos

Antes del análisis debemos revisar la calidad del dataset.

Debemos comprobar al menos:

```text
1. Datos faltantes
2. Datos duplicados
3. Tipos incorrectos
4. Valores fuera de rango
5. Inconsistencias
6. Valores extremos
```

Aunque un dataset parezca limpio, siempre debemos realizar estas verificaciones.

---

# 14. Detectar valores faltantes

Utilizamos:

```python
print(df.isnull())
```

Pero normalmente interesa conocer cuántos existen:

```python
print(df.isnull().sum())
```

En este dataset original no aparecen valores nulos.

Sin embargo, esto no significa que podamos saltarnos esta etapa.

Una regla importante del análisis de datos es:

> La ausencia de valores nulos debe comprobarse, no suponerse.

---

# 15. Porcentaje de datos faltantes

También podemos calcular el porcentaje:

```python
porcentaje_nulos = (
    df.isnull().sum()
    / len(df)
) * 100

print(porcentaje_nulos)
```

Esto es especialmente útil cuando trabajamos con datasets grandes.

---

# 16. ¿Qué hacer si existen datos faltantes?

Supongamos que `G3` tuviera valores faltantes.

Una posibilidad sería eliminar esas filas:

```python
df = df.dropna(
    subset=["G3"]
)
```

Otra posibilidad sería completar los valores.

Por ejemplo:

```python
media = df["G3"].mean()

df["G3"] = (
    df["G3"]
    .fillna(media)
)
```

Pero la estrategia depende del significado de la variable.

No siempre es correcto reemplazar un valor nulo por la media.

---

# 17. Detectar duplicados

Otra verificación importante es:

```python
print(df.duplicated())
```

Para saber cuántos registros están duplicados:

```python
print(
    df.duplicated().sum()
)
```

---

# 18. Eliminar duplicados

Si verificamos que realmente se trata de registros duplicados:

```python
df = df.drop_duplicates()
```

Es importante no eliminar duplicados automáticamente.

Dos estudiantes diferentes pueden compartir características similares.

Por eso debemos analizar primero el significado de los datos.

---

# 19. Verificar valores posibles

Por ejemplo, sabemos que la variable:

```text
sex
```

debería contener categorías válidas.

Podemos comprobarlas mediante:

```python
print(
    df["sex"].unique()
)
```

También podemos usar:

```python
print(
    df["school"].unique()
)
```

La función:

```python
unique()
```

permite detectar valores inesperados.

---

# 20. Verificar rangos

Supongamos que sabemos que las notas deben encontrarse entre:

```text
0 y 20
```

Podemos comprobar:

```python
print(df["G3"].min())
print(df["G3"].max())
```

También podemos detectar valores inválidos:

```python
notas_invalidas = df[
    (df["G3"] < 0) |
    (df["G3"] > 20)
]

print(notas_invalidas)
```

---

# 21. Validar varias columnas

Podemos verificar:

```python
for columna in ["G1", "G2", "G3"]:

    invalidos = df[
        (df[columna] < 0) |
        (df[columna] > 20)
    ]

    print(
        columna,
        len(invalidos)
    )
```

Aquí estamos comenzando a combinar procesamiento de datos con programación estructurada.

---

# 22. Detectar valores extremos

Una variable interesante es:

```text
absences
```

Podemos observar:

```python
print(
    df["absences"].describe()
)
```

También podemos ordenar:

```python
print(
    df
    .sort_values(
        "absences",
        ascending=False
    )
    [["age", "absences", "G3"]]
    .head(10)
)
```

Esto permite observar estudiantes con una cantidad elevada de ausencias.

Un valor extremo no necesariamente es un error.

Puede ser un dato real que requiere análisis.

---

# 23. Etapa 5: Limpieza de datos

Después de evaluar la calidad podemos construir una versión limpia del dataset.

Es conveniente trabajar sobre una copia.

```python
df_limpio = df.copy()
```

Esto permite mantener intactos los datos originales.

---

# 24. Normalizar los nombres de las columnas

En datasets reales encontramos nombres como:

```text
Final Grade
final-grade
FINAL_GRADE
```

Una buena práctica es normalizar los nombres.

```python
df_limpio.columns = (
    df_limpio.columns
    .str.strip()
    .str.lower()
)
```

Ahora:

```text
G1 → g1
G2 → g2
G3 → g3
Medu → medu
```

Esto simplifica el código posterior.

---

# 25. Eliminar espacios innecesarios

Las variables de texto podrían contener espacios.

Podemos limpiarlas:

```python
columnas_texto = (
    df_limpio
    .select_dtypes(include="object")
    .columns
)

for columna in columnas_texto:

    df_limpio[columna] = (
        df_limpio[columna]
        .str.strip()
    )
```

---

# 26. Estandarizar texto

También podemos convertir texto a minúsculas:

```python
for columna in columnas_texto:

    df_limpio[columna] = (
        df_limpio[columna]
        .str.lower()
    )
```

Por ejemplo:

```text
YES
Yes
yes
```

se transformarán en:

```text
yes
```

Esto evita que Pandas interprete estos valores como categorías distintas.

---

# 27. Etapa 6: Transformación de los datos

Una vez limpiados podemos transformar determinadas variables.

Por ejemplo, las variables:

```text
yes
no
```

podrían convertirse a valores booleanos.

Creamos una función:

```python
def convertir_booleano(valor):

    if valor == "yes":
        return True

    if valor == "no":
        return False

    return valor
```

Podemos utilizar:

```python
df_limpio["internet"] = (
    df_limpio["internet"]
    .apply(convertir_booleano)
)
```

---

# 28. `apply()`

`apply()` permite aplicar una función a los elementos de una columna.

La estructura es:

```python
df["columna"].apply(funcion)
```

Por ejemplo:

```python
df_limpio["internet"] = (
    df_limpio["internet"]
    .apply(
        lambda x:
            True if x == "yes"
            else False
    )
)
```

Aquí comenzamos a integrar Pandas con programación funcional.

---

# 29. Etapa 7: Ingeniería de características

Una parte importante del procesamiento de datos consiste en generar nuevas variables a partir de las existentes.

A esto se le denomina frecuentemente:

```text
Feature Engineering
```

Crearemos algunas variables que faciliten el análisis.

---

# 30. Crear promedio académico

Tenemos:

```text
g1
g2
g3
```

Podemos calcular:

```python
df_limpio["promedio"] = (
    df_limpio[
        ["g1", "g2", "g3"]
    ]
    .mean(axis=1)
)
```

El parámetro:

```python
axis=1
```

indica que la operación se realiza horizontalmente, es decir, por fila.

---

# 31. Crear estado académico

Podemos clasificar a los estudiantes.

```python
def clasificar_estudiante(nota):

    if nota >= 10:
        return "aprobado"

    return "reprobado"
```

Aplicamos:

```python
df_limpio["estado"] = (
    df_limpio["g3"]
    .apply(clasificar_estudiante)
)
```

---

# 32. Crear nivel de rendimiento

También podemos crear:

```python
def clasificar_rendimiento(nota):

    if nota >= 15:
        return "alto"

    elif nota >= 10:
        return "medio"

    return "bajo"
```

Aplicamos:

```python
df_limpio["rendimiento"] = (
    df_limpio["g3"]
    .apply(clasificar_rendimiento)
)
```

---

# 33. Crear indicador de ausentismo

Podemos crear otra variable:

```python
df_limpio["alto_ausentismo"] = (
    df_limpio["absences"]
    .apply(
        lambda x:
            True if x >= 10
            else False
    )
)
```

---

# 34. Dataset después del procesamiento

Ahora hemos pasado de los datos originales a datos preparados para análisis.

Conceptualmente:

```text
DATOS CRUDOS

age
studytime
failures
absences
g1
g2
g3

          ↓

LIMPIEZA
VALIDACIÓN
TRANSFORMACIÓN

          ↓

DATOS PROCESADOS

age
studytime
failures
absences
g1
g2
g3
promedio
estado
rendimiento
alto_ausentismo
```

---

# 35. Etapa 8: Integración con POO

Ahora utilizaremos POO para representar conceptualmente a un estudiante.

Creamos una clase base:

```python
class Persona:

    def __init__(
        self,
        edad,
        sexo
    ):

        self.edad = edad
        self.sexo = sexo

    def mostrar_persona(self):

        return (
            f"Edad: {self.edad}, "
            f"Sexo: {self.sexo}"
        )
```

---

# 36. Herencia

Creamos:

```python
class Estudiante(Persona):

    def __init__(
        self,
        edad,
        sexo,
        tiempo_estudio,
        ausencias,
        g1,
        g2,
        g3
    ):

        super().__init__(
            edad,
            sexo
        )

        self.tiempo_estudio = tiempo_estudio
        self.ausencias = ausencias

        self.g1 = g1
        self.g2 = g2
        self.g3 = g3

    def promedio(self):

        return (
            self.g1 +
            self.g2 +
            self.g3
        ) / 3

    def esta_aprobado(self):

        return self.g3 >= 10
```

Aquí aparecen conceptos de POO:

```text
Clase
Objeto
Atributos
Métodos
Herencia
```

---

# 37. DataFrame → objetos

Ahora convertiremos los datos procesados en objetos.

```python
estudiantes = []

for _, fila in df_limpio.iterrows():

    estudiante = Estudiante(
        fila["age"],
        fila["sex"],
        fila["studytime"],
        fila["absences"],
        fila["g1"],
        fila["g2"],
        fila["g3"]
    )

    estudiantes.append(
        estudiante
    )
```

Ahora tenemos:

```text
DataFrame
    ↓
filas
    ↓
objetos Estudiante
```

---

# 38. Comprobar los objetos

Por ejemplo:

```python
primer_estudiante = estudiantes[0]

print(
    primer_estudiante.promedio()
)

print(
    primer_estudiante.esta_aprobado()
)
```

---

# 39. Etapa 9: Programación funcional

Ahora procesaremos nuestra colección de objetos mediante:

```text
filter()
map()
reduce()
```

---

# 40. `filter()`: seleccionar estudiantes

Queremos obtener estudiantes aprobados.

```python
aprobados = list(

    filter(
        lambda estudiante:
            estudiante.esta_aprobado(),

        estudiantes
    )

)
```

`filter()` realiza conceptualmente:

```text
colección
    ↓
condición
    ↓
True / False
    ↓
elementos seleccionados
```

---

# 41. `map()`: transformar elementos

Queremos obtener las notas finales.

```python
notas_finales = list(

    map(
        lambda estudiante:
            estudiante.g3,

        estudiantes
    )

)
```

Podemos comprobar:

```python
print(
    notas_finales[:10]
)
```

---

# 42. Obtener promedios mediante `map()`

```python
promedios = list(

    map(
        lambda estudiante:
            estudiante.promedio(),

        estudiantes
    )

)
```

---

# 43. `reduce()`: reducir una colección

Podemos calcular la suma de todas las notas finales.

```python
suma_notas = reduce(

    lambda acumulador, estudiante:
        acumulador + estudiante.g3,

    estudiantes,

    0
)
```

Luego:

```python
promedio_general = (
    suma_notas /
    len(estudiantes)
)

print(promedio_general)
```

---

# 44. Comparar programación funcional con Pandas

La misma operación en Pandas sería:

```python
print(
    df_limpio["g3"].mean()
)
```

Tenemos entonces dos formas de resolver el mismo problema.

### Programación funcional

```python
suma = reduce(
    lambda acumulador, estudiante:
        acumulador + estudiante.g3,
    estudiantes,
    0
)

promedio = suma / len(estudiantes)
```

### Pandas

```python
promedio = (
    df_limpio["g3"].mean()
)
```

Pandas simplifica considerablemente operaciones orientadas a datos.

---

# 45. Etapa 10: Análisis de datos con Pandas

Ahora podemos realizar preguntas sobre el dataset.

Por ejemplo:

## ¿Cuál es la nota final promedio?

```python
df_limpio["g3"].mean()
```

---

# 46. ¿Cuántos aprobaron?

```python
df_limpio[
    df_limpio["g3"] >= 10
].shape[0]
```

---

# 47. ¿Cuántos reprobaron?

```python
df_limpio[
    df_limpio["g3"] < 10
].shape[0]
```

---

# 48. Distribución del rendimiento

```python
print(
    df_limpio[
        "rendimiento"
    ].value_counts()
)
```

---

# 49. Promedio según sexo

Podemos utilizar:

```python
resultado = (
    df_limpio
    .groupby("sex")["g3"]
    .mean()
)

print(resultado)
```

---

# 50. Promedio según tiempo de estudio

```python
resultado = (
    df_limpio
    .groupby("studytime")["g3"]
    .mean()
)

print(resultado)
```

---

# 51. Promedio según acceso a Internet

```python
resultado = (
    df_limpio
    .groupby("internet")["g3"]
    .mean()
)

print(resultado)
```

---

# 52. Varias estadísticas mediante `agg()`

Podemos calcular varias estadísticas simultáneamente.

```python
resultado = (
    df_limpio
    .groupby("sex")["g3"]
    .agg([
        "count",
        "mean",
        "median",
        "min",
        "max"
    ])
)

print(resultado)
```

---

# 53. Ordenamiento

Podemos obtener estudiantes ordenados según su nota final.

```python
resultado = (
    df_limpio
    .sort_values(
        "g3",
        ascending=False
    )
)

print(
    resultado.head(10)
)
```

---

# 54. Filtrado

Por ejemplo, estudiantes con nota final mayor o igual a 15:

```python
destacados = df_limpio[
    df_limpio["g3"] >= 15
]
```

---

# 55. Múltiples condiciones

Por ejemplo:

```python
resultado = df_limpio[
    (df_limpio["g3"] >= 15) &
    (df_limpio["absences"] <= 5)
]
```

Estamos buscando estudiantes que:

```text
G3 >= 15

Y

ausencias <= 5
```

---

# 56. Utilizar `query()`

Podemos escribir la misma consulta utilizando:

```python
resultado = (
    df_limpio
    .query(
        "g3 >= 15 and absences <= 5"
    )
)
```

Esto puede mejorar la legibilidad del código.

---

# 57. Encadenamiento de operaciones

Pandas permite trabajar como una secuencia de transformaciones.

```python
resultado = (
    df_limpio
    .query("g3 >= 10")
    .sort_values(
        "g3",
        ascending=False
    )
    [["age", "sex", "studytime", "absences", "g3"]]
)

print(resultado)
```

Conceptualmente:

```text
DataFrame

   ↓

filtrar aprobados

   ↓

ordenar por nota

   ↓

seleccionar variables

   ↓

resultado
```

Esta lógica tiene una relación importante con el paradigma funcional.

---

# 58. ¿Es necesario normalizar los datos?

Depende de lo que hagamos posteriormente.

Para análisis descriptivo como:

```python
mean()
groupby()
value_counts()
```

generalmente no es necesario normalizar las variables numéricas.

Pero si posteriormente utilizamos algoritmos de Machine Learning, variables con escalas diferentes podrían necesitar transformación.

Por ejemplo:

```text
age       → 15 a 22

absences  → 0 a valores mucho mayores

G3        → 0 a 20
```

---

# 59. Normalización Min-Max

Una transformación posible sería:

```python
df_limpio["absences_norm"] = (

    df_limpio["absences"] -
    df_limpio["absences"].min()

) / (

    df_limpio["absences"].max() -
    df_limpio["absences"].min()

)
```

Los valores quedan aproximadamente entre:

```text
0 y 1
```

Sin embargo, esta transformación **no debe realizarse automáticamente**.

Debe existir una razón para hacerlo.

---

# 60. Codificación de variables categóricas

Si posteriormente utilizáramos Machine Learning tendríamos que convertir algunas categorías en valores numéricos.

Por ejemplo:

```python
df_limpio["sex_num"] = (
    df_limpio["sex"]
    .map({
        "f": 0,
        "m": 1
    })
)
```

Pero para análisis descriptivo con Pandas podemos trabajar directamente con las categorías originales.

---

# 61. Etapa 11: Exportar resultados

Después de limpiar y transformar los datos podemos guardar un nuevo dataset.

```python
df_limpio.to_csv(
    "dataset_procesado.csv",
    index=False
)
```

También podemos generar Excel:

```python
df_limpio.to_excel(
    "dataset_procesado.xlsx",
    index=False
)
```

---

# 62. Flujo completo

El proceso realizado puede resumirse así:

```text
                 dataset.xlsx
                      │
                      ▼
               pd.read_excel()
                      │
                      ▼
             ┌─────────────────┐
             │ EXPLORACIÓN     │
             ├─────────────────┤
             │ head()          │
             │ info()          │
             │ describe()      │
             │ value_counts()  │
             └─────────────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ CALIDAD         │
             ├─────────────────┤
             │ isnull()        │
             │ duplicated()    │
             │ unique()        │
             │ rangos          │
             │ outliers        │
             └─────────────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ LIMPIEZA        │
             ├─────────────────┤
             │ dropna()        │
             │ fillna()        │
             │ drop_duplicates │
             │ strip()         │
             │ lower()         │
             └─────────────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ TRANSFORMACIÓN  │
             ├─────────────────┤
             │ apply()         │
             │ map()           │
             │ nuevas columnas │
             └─────────────────┘
                      │
              ┌───────┴────────┐
              ▼                ▼
           PANDAS             POO
              │                │
              │              Persona
              │                │
              │            Estudiante
              │                │
              │                ▼
              │         lista de objetos
              │                │
              │                ▼
              │      map/filter/reduce
              │                │
              └───────┬────────┘
                      ▼
                  ANÁLISIS
                      │
                      ▼
              dataset procesado
```

---

# 63. Ejercicio práctico

Utilizando `dataset.xlsx`, realice las siguientes actividades.

### Parte 1. Carga

1. Cargue la hoja `Mat`.
2. Muestre las primeras 10 filas.
3. Determine el número de filas y columnas.

### Parte 2. Exploración

4. Obtenga los tipos de las variables.
5. Utilice `info()`.
6. Utilice `describe()`.
7. Determine los valores posibles de `sex`.
8. Determine los valores posibles de `internet`.

### Parte 3. Calidad

9. Determine si existen datos nulos.
10. Determine si existen registros duplicados.
11. Compruebe que `G1`, `G2` y `G3` estén entre 0 y 20.
12. Analice los valores de `absences`.

### Parte 4. Limpieza

13. Cree una copia del DataFrame.
14. Transforme los nombres de columnas a minúsculas.
15. Elimine espacios innecesarios de las variables de texto.

### Parte 5. Transformación

16. Cree una columna llamada `promedio`.
17. Cree una columna llamada `estado`.
18. Cree una columna llamada `rendimiento`.
19. Cree una columna `alto_ausentismo`.

### Parte 6. POO

20. Diseñe una clase `Persona`.
21. Diseñe una clase `Estudiante` que herede de `Persona`.
22. Incorpore el método `promedio()`.
23. Incorpore el método `esta_aprobado()`.
24. Convierta cada fila del DataFrame en un objeto `Estudiante`.

### Parte 7. Programación funcional

25. Utilice `filter()` para seleccionar estudiantes aprobados.
26. Utilice `map()` para obtener sus notas finales.
27. Utilice `map()` para calcular sus promedios.
28. Utilice `reduce()` para calcular el promedio general.

### Parte 8. Pandas

29. Calcule el promedio de `G3`.
30. Agrupe el promedio de `G3` según sexo.
31. Agrupe el promedio de `G3` según tiempo de estudio.
32. Determine cuántos estudiantes aprobaron.
33. Determine cuántos estudiantes reprobaron.
34. Obtenga los 10 estudiantes con mayor `G3`.
35. Analice la relación descriptiva entre ausencias y rendimiento.

### Parte 9. Exportación

36. Exporte el resultado a:

```text
dataset_procesado.csv
```

---

# 64. Conceptos aprendidos

Al finalizar esta actividad habremos integrado cuatro dimensiones del desarrollo con Python.

| Dimensión | Conceptos |
|---|---|
| Procesamiento de datos | calidad, limpieza, transformación |
| Pandas | DataFrame, Series, filtros, agrupaciones |
| POO | clases, objetos, atributos, métodos, herencia |
| Funcional | lambda, map, filter, reduce |

La idea fundamental es comprender que **POO, programación funcional y Pandas no son enfoques incompatibles**.

Cada uno resuelve una parte distinta del problema:

```text
Pandas
→ manipula eficientemente los datos.

POO
→ modela las entidades y su comportamiento.

Programación funcional
→ expresa transformaciones sobre colecciones.

Procesamiento de datos
→ garantiza que los datos utilizados sean adecuados para el análisis.
```

Por lo tanto, en un problema real el flujo puede ser:

```text
datos crudos
    ↓
preparación con Pandas
    ↓
datos limpios
    ↓
modelado mediante objetos
    ↓
procesamiento funcional
    ↓
análisis
    ↓
resultados
```