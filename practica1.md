# Laboratorio: Procesamiento de Datos con Pandas, POO y Programación Funcional

## Objetivo

En este laboratorio trabajaremos con un dataset almacenado en un archivo CSV.

El objetivo será desarrollar progresivamente un programa que permita:

1. Leer un archivo CSV.
2. Comprender la estructura de los datos.
3. Explorar el dataset.
4. Revisar la calidad de los datos.
5. Limpiar los datos.
6. Transformar variables.
7. Crear nuevas variables.
8. Representar los registros mediante Programación Orientada a Objetos.
9. Aplicar programación funcional.
10. Analizar los datos mediante Pandas.
11. Exportar los resultados a un nuevo archivo CSV.

El flujo general será:

```text
dataset.csv
     ↓
Lectura
     ↓
Exploración
     ↓
Validación
     ↓
Limpieza
     ↓
Transformación
     ↓
POO
     ↓
Programación funcional
     ↓
Análisis con Pandas
     ↓
dataset_procesado.csv
```

---

# Parte 1. Preparar el entorno

## Paso 1. Importar Pandas

Cree un nuevo archivo Python o un Notebook.

Importe la biblioteca Pandas:

```python
import pandas as pd
```

Pandas se importa habitualmente utilizando el alias:

```python
pd
```

Esto permite escribir:

```python
pd.read_csv()
```

en lugar de:

```python
pandas.read_csv()
```

### Compruebe la versión instalada

```python
print(pd.__version__)
```

### Pregunta

¿Qué biblioteca utilizaremos principalmente para manipular el dataset?

---

# Parte 2. Leer el archivo CSV

## Paso 2. Analizar el formato del archivo

Antes de cargar un archivo CSV es importante conocer cómo están separados los datos.

Nuestro archivo utiliza:

```text
;
```

como separador.

Por ejemplo, una línea del archivo puede tener una estructura similar a:

```text
school;sex;age;address;studytime;absences;G1;G2;G3
```

Esto significa que cada variable está separada mediante un punto y coma.

---

## Paso 3. Leer el archivo

Utilizaremos:

```python
pd.read_csv()
```

Como el archivo utiliza `;`, debemos indicar:

```python
sep=";"
```

Escriba:

```python
df = pd.read_csv(
    "dataset.csv",
    sep=";"
)
```

También puede escribirse en una sola línea:

```python
df = pd.read_csv("dataset.csv", sep=";")
```

### ¿Qué significa `sep=";"`?

El parámetro:

```python
sep=";"
```

indica a Pandas que las columnas están separadas mediante punto y coma.

Si no indicamos este parámetro, Pandas normalmente intentará utilizar:

```text
,
```

como separador.

---

## Paso 4. Comprobar el tipo de objeto creado

Ejecute:

```python
print(type(df))
```

Debería aparecer:

```text
<class 'pandas.core.frame.DataFrame'>
```

Un `DataFrame` es una estructura tabular formada por:

```text
filas
columnas
índices
```

### Pregunta

¿Qué estructura de Pandas se creó al leer el archivo CSV?

---

# Parte 3. Comprobar que el CSV fue leído correctamente

## Paso 5. Mostrar los primeros registros

Ejecute:

```python
print(df.head())
```

`head()` muestra por defecto las primeras cinco filas.

Ahora pruebe:

```python
print(df.head(10))
```

### Actividad

Muestre los primeros 15 registros.

Complete:

```python
print(df.head(_____))
```

---

## Paso 6. Revisar las columnas

Ejecute:

```python
print(df.columns)
```

Deberían aparecer varias columnas independientes.

Por ejemplo:

```text
school
sex
age
address
studytime
absences
G1
G2
G3
```

### Importante

Si aparece algo parecido a:

```text
school;sex;age;address;studytime;absences;G1;G2;G3
```

como una sola columna, significa que el archivo no fue leído con el separador correcto.

Verifique que haya utilizado:

```python
df = pd.read_csv(
    "dataset.csv",
    sep=";"
)
```

---

# Parte 4. Conocer las dimensiones del dataset

## Paso 7. Obtener filas y columnas

Ejecute:

```python
print(df.shape)
```

El resultado tendrá la forma:

```text
(filas, columnas)
```

También puede escribir:

```python
filas, columnas = df.shape

print("Filas:", filas)
print("Columnas:", columnas)
```

### Complete

```text
Número de registros: __________

Número de variables: __________
```

### Preguntas

¿Qué representa una fila?

¿Qué representa una columna?

---

# Parte 5. Investigar las variables

## Paso 8. Mostrar las columnas

Ejecute:

```python
print(df.columns)
```

También puede recorrerlas:

```python
for columna in df.columns:
    print(columna)
```

### Actividad

Seleccione cinco variables del dataset.

```text
Variable 1: __________________

Variable 2: __________________

Variable 3: __________________

Variable 4: __________________

Variable 5: __________________
```

Intente describir qué representa cada una.

---

# Parte 6. Analizar tipos de datos

## Paso 9. Consultar los tipos

Ejecute:

```python
print(df.dtypes)
```

Pandas puede reconocer tipos como:

```text
int64
float64
object
bool
```

Generalmente:

```text
int64
```

representa números enteros.

```text
float64
```

representa números decimales.

```text
object
```

representa normalmente texto o variables categóricas.

---

## Paso 10. Utilizar `info()`

Ejecute:

```python
df.info()
```

Observe:

- cantidad de registros;
- cantidad de columnas;
- nombre de las columnas;
- valores no nulos;
- tipos de datos;
- memoria utilizada.

### Pregunta

¿Qué información entrega `info()` que no aparece directamente en `head()`?

---

# Parte 7. Exploración inicial

## Paso 11. Obtener estadísticas descriptivas

Ejecute:

```python
print(df.describe())
```

Observe valores como:

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

### ¿Qué significan?

- `count`: cantidad de observaciones.
- `mean`: media.
- `std`: desviación estándar.
- `min`: valor mínimo.
- `25%`: primer cuartil.
- `50%`: mediana.
- `75%`: tercer cuartil.
- `max`: valor máximo.

---

# Parte 8. Analizar una variable numérica

## Paso 12. Seleccionar una columna

Por ejemplo:

```python
print(df["G3"])
```

Ahora obtenga el promedio:

```python
print(df["G3"].mean())
```

---

## Paso 13. Calcular diferentes estadísticas

Complete:

```python
print("Media:", df["G3"].mean())

print("Mediana:", df["G3"].________())

print("Mínimo:", df["G3