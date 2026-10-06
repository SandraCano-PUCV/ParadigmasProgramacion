# Laboratorio: Procesamiento de Datos con Pandas, POO y Programación Funcional

## Objetivo

En este laboratorio trabajaremos con un dataset almacenado en un archivo:

```text
dataset.csv
```

El objetivo será desarrollar progresivamente un programa que permita:

1. Cargar un archivo CSV.
2. Comprender su estructura.
3. Revisar la calidad de los datos.
4. Limpiar y transformar los datos.
5. Crear nuevas variables.
6. Representar los datos mediante clases y objetos.
7. Aplicar programación funcional.
8. Realizar análisis con Pandas.
9. Exportar el resultado.

---

# Parte 1. Preparar el entorno

## Paso 1. Importar Pandas

Cree un nuevo archivo Python o Notebook e importe Pandas:

```python
import pandas as pd
```

Pandas se importa habitualmente utilizando el alias:

```python
pd
```

Compruebe que la biblioteca se encuentre instalada:

```python
print(pd.__version__)
```

---

# Parte 2. Leer el archivo CSV

## Paso 2. Cargar el dataset

Para leer un archivo CSV utilizaremos:

```python
pd.read_csv()
```

Escriba:

```python
df = pd.read_csv("dataset.csv")
```

La función `read_csv()` lee los datos del archivo y crea un objeto de tipo:

```text
DataFrame
```

---

## Paso 3. Comprobar el tipo de estructura creada

Ejecute:

```python
print(type(df))
```

Debería aparecer:

```text
<class 'pandas.core.frame.DataFrame'>
```

### Pregunta

¿Qué estructura de Pandas representa una tabla formada por filas y columnas?

---

# Parte 3. Visualizar el dataset

## Paso 4. Mostrar los primeros registros

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

Modifique el código para mostrar los primeros 15 registros.

```python
print(df.head(____))
```

---

## Paso 5. Mostrar los últimos registros

Ejecute:

```python
print(df.tail())
```

Ahora pruebe:

```python
print(df.tail(10))
```

### Pregunta

¿Qué diferencia existe entre `head()` y `tail()`?

---

# Parte 4. Conocer las dimensiones

## Paso 6. Obtener número de filas y columnas

Ejecute:

```python
print(df.shape)
```

El resultado tendrá la forma:

```text
(filas, columnas)
```

También podemos separar ambos valores:

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

---

# Parte 5. Conocer las columnas

## Paso 7. Mostrar los nombres de las columnas

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

Seleccione cinco variables del dataset y escriba qué cree que representa cada una.

```text
Variable 1: __________

Variable 2: __________

Variable 3: __________

Variable 4: __________

Variable 5: __________
```

---

# Parte 6. Investigar los tipos de datos

## Paso 8. Mostrar tipos

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

Por ejemplo:

```text
int64
```

representa normalmente números enteros.

```text
float64
```

representa números decimales.

```text
object
```

normalmente representa texto o variables categóricas.

---

# Paso 9. Utilizar `info()`

Ejecute:

```python
df.info()
```

Observe:

- cantidad de filas;
- cantidad de columnas;
- nombres;
- valores no nulos;
- tipos de datos.

### Pregunta

¿Qué diferencia existe entre:

```python
df.dtypes
```

y:

```python
df.info()
```

?

---

# Parte 7. Exploración estadística inicial

## Paso 10. Utilizar `describe()`

Ejecute:

```python
print(df.describe())
```

Observe:

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

### Pregunta

¿Qué tipo de variables aparecen principalmente en `describe()`?

---

# Paso 11. Analizar una columna numérica

Seleccione una variable numérica del dataset.

Por ejemplo:

```python
print(df["G3"])
```

Calcule su promedio:

```python
print(df["G3"].mean())
```

---

# Paso 12. Calcular estadísticas básicas

Complete:

```python
print("Media:", df["G3"].mean())

print("Mediana:", df["G3"].________())
