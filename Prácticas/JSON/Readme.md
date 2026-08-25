# Práctica: resolución de problemas con TypeScript y JSON

## Propósito
Introducir TypeScript y JSON mediante problemas progresivos que utilicen:

- interfaces para modelar datos;
- parámetros y retornos tipados;
- funciones que retornan números, objetos y arreglos;
- conversión entre objetos y texto JSON;
- validación básica de datos externos.

## 1. Conceptos iniciales
### ¿Qué es JSON?
JSON significa **JavaScript Object Notation**. Es un formato de texto para almacenar e intercambiar datos.

```json
{
  "nombre": "Ana",
  "edad": 20,
  "activo": true
}
```

JSON puede contener textos, números, booleanos, `null`, arreglos y objetos. No contiene interfaces: estas pertenecen a TypeScript y describen la estructura que esperamos que tengan los datos.

### Funciones que retornan valores

```ts
function sumar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

const resultado: number = sumar(4, 6);
```

El `: number` posterior a los paréntesis declara el tipo retornado.

## 2. Preparar el proyecto

```bash
mkdir practica-typescript-json
cd practica-typescript-json
npm init -y
npm install --save-dev typescript @types/node
npx tsc --init
mkdir src
```

Configuración principal de `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
  }
}
```

## 3. Modelo inicial

```ts
interface Estudiante {
  id: number;
  nombre: string;
  calificaciones: number[];
}

interface ResultadoAcademico {
  nombre: string;
  promedio: number;
  aprobado: boolean;
}

const estudiante: Estudiante = {
  id: 1,
  nombre: "Ana Torres",
  calificaciones: [5.5, 6.0, 6.5]
};
```
# ¿Qué es una constante?
Es una variable que, una vez que se le asigna un valor, **no puede ser reasignada**. Se declara utilizando la palabra clave o reservada `const`

# ¿Qué es una interface?
Es una forma de definir la estructura que debe tener un **objeto**. Entonces **¿Qué es un objeto?**, es una unidad básica para combinar datos (estado) y comportamientos (funciones) relacionados entre sí. 

## Problema 1: calcular un promedio
Implemente una función que reciba un estudiante y retorne su promedio.

```ts
function calcularPromedio(estudiante: Estudiante): number {
  // Implementar
}
```

Resultado esperado: `6.0`.

<details>
<summary>Solución orientativa</summary>

```ts
function calcularPromedio(estudiante: Estudiante): number {
  const suma = estudiante.calificaciones.reduce(
    (acumulador, nota) => acumulador + nota,
    0
  );

  return suma / estudiante.calificaciones.length;
}
```

</details>

La función retorna el promedio en lugar de imprimirlo. Así, el valor puede utilizarse en otros procesos.

## Problema 2: evaluar al estudiante

Un estudiante aprueba cuando su promedio es igual o superior a `4.0`. Construya una función que retorne un objeto `ResultadoAcademico`.

```ts
function evaluarEstudiante(
  estudiante: Estudiante
): ResultadoAcademico {
  // Implementar
}
```

<details>
<summary>Solución orientativa</summary>

```ts
function evaluarEstudiante(
  estudiante: Estudiante
): ResultadoAcademico {
  const promedio = calcularPromedio(estudiante);

  return {
    nombre: estudiante.nombre,
    promedio,
    aprobado: promedio >= 4.0
  };
}
```

</details>

## Problema 3: convertir el resultado a JSON

Implemente una función que reciba un resultado y retorne un `string` con formato JSON.

```ts
function convertirAJson(resultado: ResultadoAcademico): string {
  // Implementar
}
```

<details>
<summary>Solución orientativa</summary>

```ts
function convertirAJson(resultado: ResultadoAcademico): string {
  return JSON.stringify(resultado, null, 2);
}

const resultado = evaluarEstudiante(estudiante);
console.log(convertirAJson(resultado));
```

</details>

`JSON.stringify()` transforma un valor de TypeScript/JavaScript en texto JSON.

## Problema 4: convertir JSON en un estudiante

El sistema recibe este texto desde una API:

```ts
const textoRecibido = `{
  "id": 2,
  "nombre": "Luis Pérez",
  "calificaciones": [3.5, 4.2, 5.0]
}`;
```

Implemente una función que retorne un estudiante.

```ts
function convertirAEstudiante(textoJson: string): Estudiante {
  // Implementar
}
```

<details>
<summary>Solución inicial</summary>

```ts
function convertirAEstudiante(textoJson: string): Estudiante {
  return JSON.parse(textoJson) as Estudiante;
}
```

</details>

`JSON.parse()` transforma texto JSON en un valor utilizable. Sin embargo, `as Estudiante` solo informa al compilador del tipo esperado; no valida los datos durante la ejecución.

## Problema 5: conversión segura

Los datos externos pueden estar mal formados. Cree una función que retorne un estudiante o `null`.

```ts
function esEstudiante(valor: unknown): valor is Estudiante {
  if (typeof valor !== "object" || valor === null) {
    return false;
  }

  const dato = valor as Record<string, unknown>;

  return (
    typeof dato.id === "number" &&
    typeof dato.nombre === "string" &&
    Array.isArray(dato.calificaciones) &&
    dato.calificaciones.every((nota) => typeof nota === "number")
  );
}
```

Complete la siguiente función:

```ts
function convertirAEstudianteSeguro(
  textoJson: string
): Estudiante | null {
  // Implementar con JSON.parse(), try...catch y esEstudiante()
}
```

<details>
<summary>Solución orientativa</summary>

```ts
function convertirAEstudianteSeguro(
  textoJson: string
): Estudiante | null {
  try {
    const dato: unknown = JSON.parse(textoJson);
    return esEstudiante(dato) ? dato : null;
  } catch {
    return null;
  }
}
```

</details>

El retorno `Estudiante | null` expresa dos resultados posibles y obliga al programa a considerar el fracaso de la conversión.

## Problema 6: evaluar una lista

```ts
const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Ana Torres", calificaciones: [5.5, 6.0, 6.5] },
  { id: 2, nombre: "Luis Pérez", calificaciones: [3.5, 4.2, 5.0] },
  { id: 3, nombre: "Carla Díaz", calificaciones: [3.1, 3.8, 3.5] }
];
```

Implemente una función que transforme el arreglo de estudiantes en un arreglo de resultados.

```ts
function evaluarCurso(
  estudiantes: Estudiante[]
): ResultadoAcademico[] {
  // Implementar
}
```

<details>
<summary>Solución orientativa</summary>

```ts
function evaluarCurso(
  estudiantes: Estudiante[]
): ResultadoAcademico[] {
  return estudiantes.map(evaluarEstudiante);
}
```

</details>

## Problema 7: resumir un curso

Defina el resultado mediante una interfaz:

```ts
interface ResumenCurso {
  totalEstudiantes: number;
  cantidadAprobados: number;
  cantidadReprobados: number;
  promedioGeneral: number;
}
```

Implemente:

```ts
function generarResumen(
  resultados: ResultadoAcademico[]
): ResumenCurso {
  // Implementar
}
```

La función debe contar estudiantes aprobados y reprobados y calcular el promedio general.

<details>
<summary>Solución orientativa</summary>

```ts
function generarResumen(
  resultados: ResultadoAcademico[]
): ResumenCurso {
  const cantidadAprobados = resultados.filter(
    (resultado) => resultado.aprobado
  ).length;

  const suma = resultados.reduce(
    (acumulador, resultado) => acumulador + resultado.promedio,
    0
  );

  return {
    totalEstudiantes: resultados.length,
    cantidadAprobados,
    cantidadReprobados: resultados.length - cantidadAprobados,
    promedioGeneral: suma / resultados.length
  };
}
```

</details>

## Problema 8: buscar por identificador

La función debe retornar el estudiante encontrado o `undefined`.

```ts
function buscarEstudiantePorId(
  estudiantes: Estudiante[],
  id: number
): Estudiante | undefined {
  return estudiantes.find((estudiante) => estudiante.id === id);
}
```

Use la función controlando ambos resultados:

```ts
const encontrado = buscarEstudiantePorId(estudiantes, 2);

if (encontrado) {
  console.log(encontrado.nombre);
} else {
  console.log("Estudiante no encontrado");
}
```

## Problema integrador: generar un reporte

### Nuevas interfaces

```ts
interface Curso {
  codigo: string;
  nombre: string;
  estudiantes: Estudiante[];
}

interface ReporteCurso {
  codigo: string;
  nombreCurso: string;
  resultados: ResultadoAcademico[];
  resumen: ResumenCurso;
}
```

### Archivo `src/curso.json`

```json
{
  "codigo": "ICI-101",
  "nombre": "Introducción a la Programación",
  "estudiantes": [
    {
      "id": 1,
      "nombre": "Ana Torres",
      "calificaciones": [5.5, 6.0, 6.5]
    },
    {
      "id": 2,
      "nombre": "Luis Pérez",
      "calificaciones": [3.5, 4.2, 5.0]
    }
  ]
}
```

### Funciones requeridas

```ts
function leerCurso(textoJson: string): Curso | null;

function calcularPromedio(estudiante: Estudiante): number;

function evaluarEstudiante(
  estudiante: Estudiante
): ResultadoAcademico;

function evaluarCurso(
  estudiantes: Estudiante[]
): ResultadoAcademico[];

function generarResumen(
  resultados: ResultadoAcademico[]
): ResumenCurso;

function generarReporte(curso: Curso): ReporteCurso;

function convertirReporteAJson(reporte: ReporteCurso): string;
```

### Flujo solicitado

1. Leer el texto de `curso.json`.
2. Convertirlo en un objeto `Curso`.
3. Evaluar a los estudiantes.
4. Generar el resumen.
5. Construir un `ReporteCurso`.
6. convertir el reporte final a JSON.

## Preguntas de cierre

1. ¿Qué diferencia existe entre una interfaz y un objeto?
2. ¿Por qué conviene que una función retorne un valor en vez de imprimirlo?
3. ¿Qué diferencia existe entre `JSON.parse()` y `JSON.stringify()`?
4. ¿Qué significa el retorno `Estudiante | null`?
5. ¿Por qué `as Estudiante` no valida realmente los datos?
6. ¿Qué ventaja aporta que `generarReporte()` retorne `ReporteCurso`?

## Criterios de logro

- Define interfaces relacionadas.
- Declara parámetros y retornos explícitos.
- Construye funciones que retornan valores simples, objetos y arreglos.
- Convierte objetos a JSON y JSON a objetos.
- Maneja datos inválidos con `null`, `unknown` y `try...catch`.
- Reutiliza funciones pequeñas para resolver un problema mayor.