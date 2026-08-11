# Entorno de desarrollo con TypeScript

## Objetivo

Crear y configurar un proyecto TypeScript utilizando **Node.js**, **npm** y el compilador de TypeScript.

Al finalizar esta actividad se tendrá una estructura similar a:

```text
mi_proyecto/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# ¿Qué necesitamos?

Para trabajar con TypeScript necesitamos:

- Node.js
- npm
- TypeScript
- Un editor como Visual Studio Code

Node.js permite ejecutar JavaScript fuera del navegador.

`npm` permite administrar las dependencias del proyecto.

TypeScript incorpora tipos y otras características sobre JavaScript.

---

# 1. Verificar Node.js

Desde la terminal ejecutar:

```bash
node --version
```

Por ejemplo:

```text
vXX.XX.X
```

Luego comprobar `npm`:

```bash
npm --version
```

Si ambos comandos muestran una versión, podemos comenzar a crear el proyecto.

---

# 2. Crear la carpeta del proyecto

Desde la terminal:

```bash
mkdir mi_proyecto
cd mi_proyecto
```

Inicialmente tendremos:

```text
mi_proyecto/
```

---

# 3. Inicializar un proyecto Node.js

Ejecutar:

```bash
npm init -y
```

Este comando crea el archivo:

```text
package.json
```

La estructura ahora será:

```text
mi_proyecto/
└── package.json
```

---

# ¿Qué es `package.json`?

Es uno de los archivos principales de un proyecto Node.js.

Permite registrar información como:

- Nombre del proyecto.
- Versión.
- Dependencias.
- Dependencias de desarrollo.
- Scripts de ejecución.

Ejemplo:

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0"
}
```

---

# 4. Instalar TypeScript

Instalaremos TypeScript como dependencia de desarrollo:

```bash
npm install --save-dev typescript
```

También puede escribirse:

```bash
npm install -D typescript
```

Después de instalar TypeScript aparecerán:

```text
mi_proyecto/
│
├── node_modules/
├── package.json
└── package-lock.json
```

---

# ¿Qué es `node_modules`?

La carpeta:

```text
node_modules/
```

contiene las librerías instaladas para el proyecto.

Por ejemplo:

```text
mi_proyecto/
│
└── node_modules/
    └── typescript/
```

Las dependencias quedan asociadas al proyecto y no es necesario instalar
TypeScript globalmente.

---

# ¿Qué es `package-lock.json`?

El archivo:

```text
package-lock.json
```

registra las versiones exactas de las dependencias instaladas.

Ayuda a que diferentes desarrolladores puedan instalar versiones
consistentes de las dependencias del proyecto.

---

# 5. Comprobar TypeScript

Ejecutar:

```bash
npx tsc --version
```

Por ejemplo:

```text
Version X.X.X
```

Utilizamos:

```text
npx
```

para ejecutar el compilador de TypeScript instalado dentro del proyecto.

---

# 6. Crear el archivo de configuración de TypeScript

Ejecutar:

```bash
npx tsc --init
```

Se creará:

```text
tsconfig.json
```

Ahora tendremos:

```text
mi_proyecto/
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# ¿Qué es `tsconfig.json`?

Es el archivo que configura el comportamiento del compilador de TypeScript.

Permite definir, entre otras cosas:

- Qué archivos se compilan.
- Qué versión de JavaScript se genera.
- Dónde se encuentra el código fuente.
- Dónde se guardará el JavaScript generado.
- Qué verificaciones de tipos se realizarán.

---

# 7. Crear las carpetas del proyecto

Crear:

```text
src/
dist/
```

La estructura será:

```text
mi_proyecto/
│
├── src/
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# 8. Configurar `tsconfig.json`

En `tsconfig.json` podemos establecer, entre otras opciones:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

Donde:

```text
rootDir
   ↓
Carpeta donde se encuentra TypeScript

src/
```

y:

```text
outDir
   ↓
Carpeta donde se generará JavaScript

dist/
```

Por lo tanto:

```text
src/index.ts

     ↓ tsc

dist/index.js
```

---

# 9. Crear nuestro primer programa TypeScript

Crear:

```text
src/index.ts
```

Con el siguiente código:

```typescript
let nombre: string = "TypeScript";
let edad: number = 20;

console.log("Hola", nombre);
console.log("Edad:", edad);
```

---

# 10. Compilar TypeScript

Ejecutar:

```bash
npx tsc
```

El compilador leerá:

```text
src/index.ts
```

y generará:

```text
dist/index.js
```

La estructura será:

```text
mi_proyecto/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# 11. Ejecutar el programa

TypeScript no es el archivo que Node.js ejecutará directamente en este
ejemplo.

Primero:

```text
TypeScript
index.ts
```

se transforma en:

```text
JavaScript
index.js
```

Entonces ejecutamos:

```bash
node dist/index.js
```

Resultado:

```text
Hola TypeScript
Edad: 20
```

---

# Flujo de ejecución

```text
Código TypeScript
     │
     │ index.ts
     ▼
Compilador TypeScript
     │
     │ tsc
     ▼
Código JavaScript
     │
     │ index.js
     ▼
Node.js
     │
     ▼
Motor JavaScript
     │
     ▼
Resultado
```

---

# 12. Comprobar el sistema de tipos

Modificar:

```typescript
let edad: number = 20;
```

por:

```typescript
let edad: number = "veinte";
```

Intentar compilar:

```bash
npx tsc
```

TypeScript detectará un error porque intentamos asignar un texto a una
variable declarada como `number`.

El objetivo del sistema de tipos es detectar este tipo de problemas antes
de ejecutar el programa.

---

# 13. Automatizar comandos con `package.json`

Podemos agregar scripts dentro de `package.json`.

Por ejemplo:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

Ahora podemos compilar mediante:

```bash
npm run build
```

Y ejecutar mediante:

```bash
npm start
```

---

# 14. Instalar nuevamente las dependencias

La carpeta:

```text
node_modules/
```

normalmente no se comparte ni se almacena en el repositorio.

Otro desarrollador puede recibir:

```text
package.json
package-lock.json
```

y ejecutar:

```bash
npm install
```

npm instalará nuevamente las dependencias necesarias.

---

# Comparación con Python

## Python

```text
Proyecto
│
├── .venv/
│      ↓
│   Entorno virtual
│
├── requirements.txt
│      ↓
│   Dependencias
│
└── programa.py
```

## TypeScript

```text
Proyecto
│
├── node_modules/
│      ↓
│   Dependencias
│
├── package.json
│      ↓
│   Definición del proyecto
│
├── package-lock.json
│      ↓
│   Versiones instaladas
│
├── tsconfig.json
│      ↓
│   Configuración TypeScript
│
└── src/
       ↓
    Código .ts
```

---

# Actividad

Realice los siguientes pasos:

1. Cree una carpeta llamada `EntornoTypeScript`.
2. Ingrese a la carpeta.
3. Inicialice el proyecto con `npm init -y`.
4. Instale TypeScript como dependencia de desarrollo.
5. Compruebe la versión de TypeScript.
6. Genere `tsconfig.json`.
7. Cree las carpetas `src` y `dist`.
8. Cree `src/index.ts`.
9. Declare al menos una variable `string` y una variable `number`.
10. Compile el programa.
11. Revise el archivo JavaScript generado.
12. Ejecute el programa con Node.js.
13. Introduzca intencionalmente un error de tipos.
14. Compile nuevamente y analice el error.

---

# Preguntas

## 1. ¿Qué función cumple `npm`?

## 2. ¿Para qué sirve `package.json`?

## 3. ¿Qué contiene `node_modules`?

## 4. ¿Qué función cumple `tsconfig.json`?

## 5. ¿Qué hace el comando `npx tsc`?

## 6. ¿Cuál es la diferencia entre un archivo `.ts` y un archivo `.js`?

## 7. ¿Por qué TypeScript puede detectar algunos errores antes de ejecutar el programa?

---

# Idea principal

```text
              Proyecto TypeScript
                      │
          ┌───────────┼─────────────┐
          ▼           ▼             ▼
        src/      package.json   tsconfig.json
          │           │             │
      Código TS   Dependencias   Configuración
          │
          ▼
         tsc
          │
          ▼
        dist/
          │
     JavaScript
          │
          ▼
        Node.js
          │
          ▼
       Ejecución
```

> TypeScript utiliza un proceso de transformación en el que el código
> `.ts` es convertido a JavaScript. Las dependencias del proyecto se
> administran mediante npm y se mantienen asociadas a cada proyecto.