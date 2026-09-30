# Paradigma Funcional con Python y TypeScript

## 1. Objetivo
El objetivo es comprender una forma diferente de organizar programas, especialmente útil cuando trabajamos con:

- listas de datos;
- transformaciones;
- filtros;
- validación;
- procesamiento de registros;
- pipelines de operaciones.
- programación declarativa;
- funciones puras;
- efectos secundarios;
- inmutabilidad;
- funciones como valores;
- funciones de orden superior;
- funciones anónimas;
- `lambda` en Python;
- funciones flecha en TypeScript;
- `map`;
- `filter`;
- `reduce`;
- composición de funciones;
- pipelines;
- recursión.


---

# 2. ¿Qué es el paradigma funcional?

La **programación funcional** es un paradigma que organiza los programas principalmente mediante **funciones y transformaciones de datos**.

Una idea común es pensar:

```text
entrada
   ↓
función
   ↓
salida
```

En lugar de modificar continuamente variables y estados, se intenta construir nuevas salidas a partir de datos de entrada.

Ejemplo conceptual:

```text
datos originales
      ↓
    filtrar
      ↓
  transformar
      ↓
   resumir
      ↓
resultado
```

---

# 3. Programación imperativa y funcional

La diferencia puede observarse con un problema sencillo.

Queremos obtener el cuadrado de cada número:

```python
numeros = [1, 2, 3, 4]
```

## 3.1 Estilo imperativo en Python

```python
numeros = [1, 2, 3, 4]

cuadrados = []

for numero in numeros:
    cuadrados.append(
        numero * numero
    )

print(cuadrados)
```

Salida:

```text
[1, 4, 9, 16]
```

Aquí indicamos paso a paso:

```text
crear lista
recorrer
calcular
agregar
```

---

## 3.2 Estilo funcional en Python

```python
numeros = [1, 2, 3, 4]

cuadrados = list(
    map(
        lambda x: x * x,
        numeros
    )
)

print(cuadrados)
```

En este caso expresamos principalmente:

> Aplicar la operación `x * x` a cada elemento.

---

## 3.3 TypeScript

### Imperativo

```typescript
const numeros: number[] = [
  1, 2, 3, 4
];

const cuadrados: number[] = [];

for (const numero of numeros) {
  cuadrados.push(
    numero * numero
  );
}

console.log(cuadrados);
```

### Funcional

```typescript
const numeros: number[] = [
  1, 2, 3, 4
];

const cuadrados =
  numeros.map(
    numero => numero * numero
  );

console.log(cuadrados);
```

---

# 4. ¿Qué significa declarativo?

Un estilo **imperativo** se concentra en:

> ¿Cómo hago el proceso paso a paso?

Un estilo **declarativo** se concentra más en:

> ¿Qué transformación quiero realizar?

Por ejemplo:

```python
resultado = list(
    filter(
        lambda x: x > 10,
        datos
    )
)
```

indica:

> Quiero los elementos mayores que 10.

No describe explícitamente todos los pasos para construir la nueva lista.

---

# 5. Funciones puras

Uno de los conceptos más importantes del paradigma funcional es la **función pura**.

Una función es pura cuando:

1. Para los mismos argumentos produce siempre el mismo resultado.
2. No modifica variables externas.
3. No modifica los datos que recibe.
4. No produce efectos secundarios observables como parte de su cálculo.

Podemos pensar:

```text
entrada
   ↓
función pura
   ↓
salida
```

La función depende solamente de sus entradas.

---

# 6. Función pura en Python y TypeScript

## Python

```python
def calcular_total(
    precio,
    cantidad
):
    return precio * cantidad
```

Uso:

```python
total = calcular_total(
    1500,
    3
)

print(total)
```

Salida:

```text
4500
```

## TypeScript

```typescript
function calcularTotal(
  precio: number,
  cantidad: number
): number {
  return precio * cantidad;
}
```

Uso:

```typescript
const total =
  calcularTotal(
    1500,
    3
  );

console.log(total);
```

En ambos casos:

```text
calcular(1500, 3)
```

siempre produce:

```text
4500
```

y no modifica ninguna variable externa.

---

# 7. Función impura

Ahora observemos una función que modifica estado externo.

## Python

```python
total = 0

def agregar(valor):
    global total

    total = total + valor

    return total
```

Cada llamada depende del valor anterior de:

```python
total
```

Por ejemplo:

```python
print(agregar(5))
print(agregar(5))
```

podría producir:

```text
5
10
```

Aunque la entrada fue la misma.

---

## TypeScript

```typescript
let total: number = 0;

function agregar(
  valor: number
): number {
  total = total + valor;

  return total;
}
```

La función modifica:

```typescript
total
```

que existe fuera de ella.

Por eso no es pura.

---

# 8. Efectos secundarios

Un **efecto secundario** ocurre cuando una función modifica o interactúa con algo externo a su resultado.

Ejemplos:

```text
modificar una variable global
modificar una lista recibida
escribir un archivo
actualizar una base de datos
enviar una petición
mostrar información en pantalla
```

Esto no significa que los efectos secundarios sean siempre incorrectos.

Una aplicación real necesita entrada y salida.

La idea funcional es:

> Separar las transformaciones puras de las operaciones que producen efectos secundarios.

---

# 9. Inmutabilidad

Otro principio importante es la **inmutabilidad**.

Significa:

> En lugar de modificar un dato existente, producir un nuevo valor.

---

## 9.1 Ejemplo con Python

### Modificación directa

```python
numeros = [1, 2, 3]

numeros.append(4)

print(numeros)
```

La lista original fue modificada.

---

### Crear una nueva lista

```python
numeros = [1, 2, 3]

nuevos_numeros = [
    *numeros,
    4
]

print(numeros)
print(nuevos_numeros)
```

Salida:

```text
[1, 2, 3]

[1, 2, 3, 4]
```

La lista original permanece igual.

---

## 9.2 TypeScript

```typescript
const numeros: number[] = [
  1, 2, 3
];

const nuevosNumeros = [
  ...numeros,
  4
];

console.log(numeros);
console.log(nuevosNumeros);
```

---

# 10. Transformar un registro sin modificarlo

Supongamos que tenemos información de un estudiante.

## Python

```python
estudiante = {
    "nombre": "Ana",
    "asistencia": 80
}
```

Queremos actualizar la asistencia sin modificar el diccionario original.

```python
actualizado = {
    **estudiante,
    "asistencia": 85
}
```

Ahora:

```python
print(estudiante)
print(actualizado)
```

produce dos diccionarios diferentes.

---

## TypeScript

```typescript
const estudiante = {
  nombre: "Ana",
  asistencia: 80
};

const actualizado = {
  ...estudiante,
  asistencia: 85
};
```

Esta idea aparece constantemente cuando procesamos datos mediante transformaciones.

---

# 11. Las funciones también son valores

En programación funcional una función puede tratarse como un valor.

Esto significa que una función puede:

- almacenarse en una variable;
- pasarse como argumento;
- devolverse desde otra función.

---

# 12. Función almacenada en una variable

## Python

```python
def duplicar(x):
    return x * 2


operacion = duplicar

print(
    operacion(5)
)
```

Salida:

```text
10
```

`operacion` referencia una función.

---

## TypeScript

```typescript
function duplicar(
  x: number
): number {
  return x * 2;
}

const operacion = duplicar;

console.log(
  operacion(5)
);
```

---

# 13. Funciones de orden superior

Una **función de orden superior** es una función que:

- recibe otra función como argumento; o
- devuelve una función.

Ejemplo conceptual:

```text
función
   recibe
     ↓
otra función
```

---

# 14. Función de orden superior en Python

```python
def aplicar(
    funcion,
    valor
):
    return funcion(valor)


def doble(x):
    return x * 2


resultado = aplicar(
    doble,
    5
)

print(resultado)
```

Salida:

```text
10
```

`aplicar()` recibe otra función:

```python
doble
```

---

# 15. Función de orden superior en TypeScript

```typescript
function aplicar(
  funcion: (x: number) => number,
  valor: number
): number {
  return funcion(valor);
}

function doble(
  x: number
): number {
  return x * 2;
}

const resultado =
  aplicar(
    doble,
    5
  );

console.log(resultado);
```

---

# 16. Funciones anónimas

Una función anónima es una función que no necesita declarar un nombre tradicional.

Son especialmente útiles cuando una función se necesita solamente para una operación breve.

---

# 17. `lambda` en Python

Python utiliza:

```python
lambda
```

para crear funciones anónimas de una sola expresión.

Sintaxis:

```python
lambda parametros: expresion
```

Ejemplo:

```python
doble = lambda x: x * 2
```

Uso:

```python
print(
    doble(5)
)
```

Salida:

```text
10
```

Una función equivalente sería:

```python
def doble(x):
    return x * 2
```

---

# 18. Funciones flecha en TypeScript

TypeScript puede utilizar funciones flecha:

```typescript
const doble =
  (x: number): number =>
    x * 2;
```

También puede escribirse:

```typescript
const doble =
  (x: number) => x * 2;
```

Uso:

```typescript
console.log(
  doble(5)
);
```

---

# 19. Una función anónima no es necesariamente pura

Es importante no confundir:

```text
función anónima
```

con:

```text
función pura
```

Por ejemplo:

```python
contador = 0

incrementar = lambda x: x + contador
```

Esta función depende de:

```python
contador
```

que existe fuera de ella.

Por lo tanto, que una función sea `lambda` no significa automáticamente que sea pura.

---

# 20. `map`: transformar elementos

`map` aplica una función a cada elemento de una colección.

Conceptualmente:

```text
[1, 2, 3]
    |
   map
 x -> x*2
    |
    v
[2, 4, 6]
```

---

# 21. `map` en Python

```python
numeros = [
    1,
    2,
    3,
    4
]

resultado = list(
    map(
        lambda x: x * 2,
        numeros
    )
)

print(resultado)
```

Salida:

```text
[2, 4, 6, 8]
```

---

# 22. `map` en TypeScript

```typescript
const numeros: number[] = [
  1,
  2,
  3,
  4
];

const resultado =
  numeros.map(
    x => x * 2
  );

console.log(resultado);
```

---

# 23. `map` con registros de estudiantes

Tenemos:

```python
estudiantes = [
    {
        "nombre": "ana",
        "asistencia": 85
    },
    {
        "nombre": "pedro",
        "asistencia": 72
    }
]
```

Queremos obtener los nombres en mayúsculas.

```python
nombres = list(
    map(
        lambda e:
            e["nombre"].upper(),
        estudiantes
    )
)

print(nombres)
```

Resultado:

```text
['ANA', 'PEDRO']
```

---

## TypeScript

```typescript
const estudiantes = [
  {
    nombre: "ana",
    asistencia: 85
  },
  {
    nombre: "pedro",
    asistencia: 72
  }
];

const nombres =
  estudiantes.map(
    e => e.nombre.toUpperCase()
  );
```

---

# 24. `filter`: seleccionar elementos

`filter` conserva solamente los elementos que cumplen una condición.

```text
[55, 90, 72, 88]
        |
      filter
      >= 80
        |
        v
   [90, 88]
```

---

# 25. `filter` en Python

```python
asistencias = [
    55,
    90,
    72,
    88
]

resultado = list(
    filter(
        lambda x: x >= 80,
        asistencias
    )
)

print(resultado)
```

---

# 26. `filter` en TypeScript

```typescript
const asistencias = [
  55,
  90,
  72,
  88
];

const resultado =
  asistencias.filter(
    x => x >= 80
  );

console.log(resultado);
```

---

# 27. Filtrar estudiantes

## Python

```python
estudiantes = [
    {
        "nombre": "Ana",
        "asistencia": 85
    },
    {
        "nombre": "Pedro",
        "asistencia": 72
    },
    {
        "nombre": "Camila",
        "asistencia": 93
    }
]

resultado = list(
    filter(
        lambda e:
            e["asistencia"] >= 80,
        estudiantes
    )
)
```

---

## TypeScript

```typescript
const resultado =
  estudiantes.filter(
    e => e.asistencia >= 80
  );
```

---

# 28. `reduce`: combinar muchos valores en uno

`reduce` procesa una colección para producir un único resultado.

Conceptualmente:

```text
[2, 4, 6]
   ↓
 reduce
   ↓
  12
```

---

# 29. `reduce` en Python

En Python se importa desde:

```python
functools
```

Ejemplo:

```python
from functools import reduce


numeros = [
    2,
    4,
    6
]

total = reduce(
    lambda acumulado, valor:
        acumulado + valor,
    numeros,
    0
)

print(total)
```

Salida:

```text
12
```

---

# 30. `reduce` en TypeScript

```typescript
const numeros = [
  2,
  4,
  6
];

const total =
  numeros.reduce(
    (
      acumulado,
      valor
    ) =>
      acumulado + valor,
    0
  );

console.log(total);
```

---

# 31. ¿Qué hace cada operación?

| Operación | Pregunta |
|---|---|
| `map` | ¿Cómo transformo cada elemento? |
| `filter` | ¿Qué elementos quiero conservar? |
| `reduce` | ¿Cómo combino todos los elementos en un resultado? |

Una forma sencilla de recordarlo:

```text
map
transforma

filter
selecciona

reduce
combina
```

---

# 32. Pipelines de transformación

Las operaciones funcionales pueden encadenarse.

Ejemplo conceptual:

```text
datos
  ↓
filter
  ↓
map
  ↓
reduce
  ↓
resultado
```

Esto se denomina a menudo un **pipeline de transformación**.

---

# 33. Pipeline en TypeScript

Supongamos que tenemos:

```typescript
const estudiantes = [
  {
    nombre: "Ana",
    asistencia: 85,
    creditos: 5
  },
  {
    nombre: "Pedro",
    asistencia: 72,
    creditos: 4
  },
  {
    nombre: "Camila",
    asistencia: 93,
    creditos: 6
  }
];
```

Queremos:

1. conservar asistencia >= 80;
2. obtener solamente los créditos;
3. sumar los créditos.

```typescript
const totalCreditos =
  estudiantes
    .filter(
      e => e.asistencia >= 80
    )
    .map(
      e => e.creditos
    )
    .reduce(
      (total, creditos) =>
        total + creditos,
      0
    );

console.log(totalCreditos);
```

---

# 34. Pipeline equivalente en Python

```python
from functools import reduce


estudiantes = [
    {
        "nombre": "Ana",
        "asistencia": 85,
        "creditos": 5
    },
    {
        "nombre": "Pedro",
        "asistencia": 72,
        "creditos": 4
    },
    {
        "nombre": "Camila",
        "asistencia": 93,
        "creditos": 6
    }
]


filtrados = filter(
    lambda e:
        e["asistencia"] >= 80,
    estudiantes
)

creditos = map(
    lambda e:
        e["creditos"],
    filtrados
)

total = reduce(
    lambda acumulado, valor:
        acumulado + valor,
    creditos,
    0
)

print(total)
```

---

# 35. Nota sobre Python

Aunque `map()` y `filter()` son útiles para aprender programación funcional, en Python muchas veces se prefieren las **comprensiones de listas** por legibilidad.

Por ejemplo:

```python
cuadrados = [
    x * x
    for x in numeros
]
```

y:

```python
filtrados = [
    e
    for e in estudiantes
    if e["asistencia"] >= 80
]
```

Esto no elimina el concepto funcional.

La idea central sigue siendo:

> construir una nueva colección a partir de otra sin modificarla directamente.

---

# 36. Composición de funciones

La **composición** consiste en combinar funciones pequeñas para formar una operación mayor.

Supongamos:

```text
duplicar
sumar uno
```

Queremos:

```text
entrada
  ↓
duplicar
  ↓
sumar uno
  ↓
salida
```

---

# 37. Composición en Python

```python
def duplicar(x):
    return x * 2


def sumar_uno(x):
    return x + 1


def procesar(x):
    return sumar_uno(
        duplicar(x)
    )


print(
    procesar(5)
)
```

Resultado:

```text
11
```

---

# 38. Composición en TypeScript

```typescript
function duplicar(
  x: number
): number {
  return x * 2;
}

function sumarUno(
  x: number
): number {
  return x + 1;
}

function procesar(
  x: number
): number {
  return sumarUno(
    duplicar(x)
  );
}

console.log(
  procesar(5)
);
```

---

# 39. ¿Por qué usar funciones pequeñas?

Las funciones pequeñas facilitan:

- lectura;
- reutilización;
- pruebas;
- composición;
- detección de errores.

En lugar de una función extensa:

```text
limpiar + validar + transformar + resumir
```

podemos separar:

```text
limpiar()
validar()
transformar()
resumir()
```

y luego combinarlas.

---

# 40. Recursión

Una función es **recursiva** cuando se llama a sí misma.

Debe contener:

1. un **caso base**;
2. un **paso recursivo** que avance hacia ese caso base.

---

# 41. Factorial en Python

```python
def factorial(n):

    if n <= 1:
        return 1

    return (
        n
        * factorial(n - 1)
    )
```

Uso:

```python
print(
    factorial(5)
)
```

---

# 42. Factorial en TypeScript

```typescript
function factorial(
  n: number
): number {

  if (n <= 1) {
    return 1;
  }

  return (
    n
    * factorial(n - 1)
  );
}
```

---

# 43. La recursión no define por sí sola al paradigma funcional

La recursión aparece con frecuencia en programación funcional porque permite describir procesos sin depender de variables que cambian continuamente.

Sin embargo:

> Una función recursiva no es automáticamente una función pura.

Y:

> Un programa funcional no necesita ser completamente recursivo.

Es un recurso, no la definición del paradigma.

---

# 44. Python y TypeScript: comparación

| Concepto | Python | TypeScript |
|---|---|---|
| Función | `def` | `function` |
| Función anónima | `lambda` | función flecha |
| Función como valor | Sí | Sí |
| `map` | `map()` | `.map()` |
| `filter` | `filter()` | `.filter()` |
| `reduce` | `functools.reduce()` | `.reduce()` |
| Spread de lista/arreglo | `[*datos, valor]` | `[...datos, valor]` |
| Spread de objeto/diccionario | `{**d, ...}` | `{...obj, ...}` |
| Recursión | Sí | Sí |
| Funciones de orden superior | Sí | Sí |

Ambos lenguajes son **multiparadigma**.

Esto significa que permiten combinar:

```text
programación imperativa
POO
programación funcional
```

---

# 45. Programación funcional y POO no son enemigas

Podemos tener objetos y utilizar transformaciones funcionales.

Por ejemplo, en TypeScript:

```typescript
class Estudiante {

  constructor(
    public nombre: string,
    public asistencia: number
  ) {}

}


const estudiantes = [
  new Estudiante(
    "Ana",
    85
  ),
  new Estudiante(
    "Pedro",
    72
  )
];


const seleccionados =
  estudiantes.filter(
    e => e.asistencia >= 80
  );
```

Aquí combinamos:

```text
POO
+
programación funcional
```

---

# 46. Caso aplicado a Ciencia de Datos

Supongamos que recibimos registros como:

```python
estudiantes = [
    {
        "nombre": " ana ",
        "asistencia": 85,
        "creditos": 5
    },
    {
        "nombre": " PEDRO ",
        "asistencia": 72,
        "creditos": 4
    },
    {
        "nombre": " camila ",
        "asistencia": 93,
        "creditos": 6
    }
]
```

Queremos construir un pequeño pipeline:

```text
datos originales
       ↓
limpiar nombres
       ↓
filtrar asistencia
       ↓
extraer créditos
       ↓
sumar
```

---

# 47. Limpiar un registro sin modificarlo

## Python

```python
def limpiar_nombre(
    estudiante
):

    return {
        **estudiante,
        "nombre":
            estudiante[
                "nombre"
            ]
            .strip()
            .title()
    }
```

La función retorna un nuevo diccionario.

---

## TypeScript

```typescript
function limpiarNombre(
  estudiante: {
    nombre: string;
    asistencia: number;
    creditos: number;
  }
) {

  return {
    ...estudiante,

    nombre:
      estudiante
        .nombre
        .trim()
        .toLowerCase()
  };
}
```

---

# 48. Pipeline aplicado a los registros

## Python

```python
limpios = list(
    map(
        limpiar_nombre,
        estudiantes
    )
)

seleccionados = list(
    filter(
        lambda e:
            e["asistencia"] >= 80,
        limpios
    )
)

print(seleccionados)
```

---

## TypeScript

```typescript
const seleccionados =
  estudiantes
    .map(limpiarNombre)
    .filter(
      e => e.asistencia >= 80
    );
```

---

# 49. Errores conceptuales frecuentes

## Error 1

Pensar que:

```text
lambda = programación funcional
```

No.

`lambda` es solamente una forma de escribir una función.

---

## Error 2

Pensar que:

```text
función anónima = función pura
```

No necesariamente.

La pureza depende de su comportamiento.

---

## Error 3

Pensar que:

```text
map + filter = programa funcional
```

No basta con utilizar esos métodos.

También importa:

- evitar mutación innecesaria;
- separar efectos secundarios;
- construir transformaciones pequeñas;
- favorecer funciones puras.

---

## Error 4

Pensar que POO y funcional no pueden combinarse.

Python y TypeScript permiten ambos estilos.

---

# 50. Resumen conceptual

El paradigma funcional favorece:

```text
FUNCIONES PURAS
      +
INMUTABILIDAD
      +
FUNCIONES COMO VALORES
      +
FUNCIONES DE ORDEN SUPERIOR
      +
COMPOSICIÓN
      +
TRANSFORMACIONES
```

Una secuencia típica puede ser:

```text
datos
  ↓
filter
  ↓
map
  ↓
reduce
  ↓
resultado
```

---

# EJERCICIOS

## Ejercicio 1 — Función pura

Implemente una función que reciba:

```text
precio
descuento
```

y retorne el precio final.

### Python

```python
def aplicar_descuento(
    precio,
    descuento
):
    # completar
```

### TypeScript

```typescript
function aplicarDescuento(
  precio: number,
  descuento: number
): number {
  // completar
}
```

La función no debe modificar variables externas.

---

## Ejercicio 2 — Identificar pureza

Analice:

```python
contador = 0

def registrar():
    global contador

    contador += 1

    return contador
```

Responda:

1. ¿Es pura?
2. ¿Qué estado externo utiliza?
3. ¿Cómo podría rediseñarse para recibir el valor como argumento y devolver uno nuevo?

---

## Ejercicio 3 — Inmutabilidad

Dada:

```python
numeros = [
    10,
    20,
    30
]
```

cree una nueva lista que también contenga:

```text
40
```

sin utilizar:

```python
append()
```

sobre la lista original.

---

## Ejercicio 4 — Función como valor

Cree:

```python
def triple(x):
    return x * 3
```

Asigne la función a:

```python
operacion
```

y utilice:

```python
operacion(4)
```

---

## Ejercicio 5 — Función de orden superior

Implemente:

```python
def ejecutar(
    funcion,
    valor
):
    ...
```

Luego pruebe con:

```python
doble
triple
```

---

## Ejercicio 6 — Lambda

Transforme:

```python
def cuadrado(x):
    return x * x
```

en una función `lambda`.

Realice también su versión con función flecha en TypeScript.

---

## Ejercicio 7 — `map`

Dada:

```python
datos = [
    2,
    4,
    6,
    8
]
```

genere:

```text
[4, 8, 12, 16]
```

utilizando `map`.

Resuelva en:

- Python;
- TypeScript.

---

## Ejercicio 8 — `filter`

Dada:

```python
datos = [
    25,
    70,
    90,
    45,
    82
]
```

seleccione los valores:

```text
>= 70
```

utilizando `filter`.

---

## Ejercicio 9 — `reduce`

Dada:

```python
valores = [
    3,
    4,
    5,
    6
]
```

utilice `reduce` para calcular la suma total.

---

## Ejercicio 10 — Composición

Cree dos funciones puras:

```text
duplicar(x)
restar_uno(x)
```

Luego cree:

```text
procesar(x)
```

que aplique ambas operaciones.

---

# EJERCICIOS APLICADOS A CIENCIA DE DATOS

## Ejercicio 11 — Transformación de registros

Dado:

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

Utilice `map` para producir una nueva colección donde los nombres queden:

```text
Ana
Pedro
Camila
```

No modifique los diccionarios originales.

---

## Ejercicio 12 — Filtrar registros

Utilizando los mismos datos, seleccione estudiantes con:

```text
asistencia >= 80
```

Debe utilizar:

```text
filter
```

---

## Ejercicio 13 — Extraer una columna

Dado:

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

Utilice `map` para obtener:

```text
[5, 4, 6]
```

---

## Ejercicio 14 — Pipeline de datos

Utilice:

```text
filter
→
map
→
reduce
```

para:

1. conservar estudiantes con asistencia >= 80;
2. extraer sus créditos;
3. calcular el total de créditos.

Datos:

```python
estudiantes = [
    {
        "nombre": "Ana",
        "asistencia": 85,
        "creditos": 5
    },
    {
        "nombre": "Pedro",
        "asistencia": 72,
        "creditos": 4
    },
    {
        "nombre": "Camila",
        "asistencia": 93,
        "creditos": 6
    },
    {
        "nombre": "Luis",
        "asistencia": 88,
        "creditos": 5
    }
]
```

Resuelva primero en Python y después en TypeScript.

---

## Ejercicio 15 — Datos faltantes

Dado:

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

Utilice `filter` para obtener solamente registros cuya asistencia tenga un valor válido.

No utilice todavía librerías de Ciencia de Datos.

---

## Ejercicio 16 — Transformación inmutable

Dado:

```python
estudiante = {
    "nombre": "Ana",
    "asistencia": 85
}
```

cree un nuevo registro:

```python
{
    "nombre": "Ana",
    "asistencia": 90
}
```

sin modificar el diccionario original.

Resuelva en Python y TypeScript.

---

## Ejercicio 17 — Funciones reutilizables

Construya funciones puras:

```text
limpiar_nombre()
tiene_asistencia_valida()
cumple_asistencia_minima()
```

Después utilícelas dentro de un pipeline.

La idea es evitar colocar toda la lógica en una sola función.

---

## Ejercicio 18 — Desafío integrador

Dado un conjunto de registros:

```python
registros = [
    {
        "nombre": " ana ",
        "asistencia": 85,
        "creditos": 5
    },
    {
        "nombre": " pedro ",
        "asistencia": None,
        "creditos": 4
    },
    {
        "nombre": " CAMILA ",
        "asistencia": 93,
        "creditos": 6
    },
    {
        "nombre": " luis ",
        "asistencia": 78,
        "creditos": 5
    }
]
```

Construya un pipeline que:

1. elimine registros con asistencia faltante;
2. limpie los nombres;
3. conserve asistencia >= 80;
4. extraiga los créditos;
5. calcule el total.

Restricciones:

- no modificar la lista original;
- utilizar funciones pequeñas;
- favorecer funciones puras;
- utilizar `map`, `filter` y `reduce`;
- implementar una versión en Python;
- implementar una versión en TypeScript.

---

# Preguntas de reflexión

1. ¿Qué diferencia existe entre una función pura y una función impura?
2. ¿Por qué una función `lambda` no es necesariamente pura?
3. ¿Qué significa inmutabilidad?
4. ¿Qué ventaja tiene crear una nueva lista en lugar de modificar la existente?
5. ¿Qué significa que una función sea un valor?
6. ¿Qué caracteriza a una función de orden superior?
7. ¿Qué diferencia existe entre `map` y `filter`?
8. ¿Qué función cumple `reduce`?
9. ¿Qué significa componer funciones?
10. ¿Por qué un pipeline puede ser más fácil de leer que muchos ciclos y variables temporales?
11. ¿La recursión es obligatoria en programación funcional?
12. ¿POO y programación funcional pueden utilizarse en el mismo programa?
13. ¿Qué operaciones de preparación de datos pueden expresarse como transformaciones funcionales?
14. ¿Por qué las funciones puras son más fáciles de probar?
15. ¿Qué parte de un programa real probablemente seguirá necesitando efectos secundarios?

---

# Ejercicios
1. **Analítica** de actividad en una plataforma educativa
# Ejercicio 1 — Actividad de estudiantes en una plataforma
Una plataforma educativa registra la actividad semanal de varios estudiantes.

Cada registro contiene:
```text
nombre
minutos_conectado
actividades_entregadas
porcentaje_avance
```

## Datos
| Estudiante | Minutos conectado | Actividades entregadas | Avance |
|---|---:|---:|---:|
| Ana | 180 | 8 | 90 |
| Pedro | 75 | 3 | 45 |
| Camila | 220 | 9 | 95 |
| Luis | 110 | 5 | 70 |
| Sofía | 160 | 7 | 85 |
---

---

# Ejercicio 2 — Lecturas de sensores ambientales

## Contexto

Un sistema registra mediciones ambientales en distintas salas.

Cada registro contiene:

```text
sala
temperatura
humedad
co2
```

## Datos

| Sala | Temperatura | Humedad | CO2 |
|---|---:|---:|---:|
| A101 | 21.5 | 45 | 550 |
| A102 | 25.2 | 48 | 820 |
| B201 | 23.8 | 51 | 760 |
| B202 | 27.1 | 55 | 910 |
| C301 | 22.4 | 43 | 600 |

---