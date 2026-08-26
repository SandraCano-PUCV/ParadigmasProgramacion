# Programación Orientada a Objetos (POO) en TypeScript

## 1. Introducción

La **Programación Orientada a Objetos (POO)** organiza un programa mediante **objetos** que combinan:

- **Estado**: datos del objeto, representados mediante propiedades.
- **Comportamiento**: acciones del objeto, representadas mediante métodos.

```text
Objeto
├── Estado → propiedades
└── Comportamiento → métodos
```

TypeScript agrega a JavaScript un sistema de tipos que permite describir con mayor precisión las propiedades, parámetros, retornos y contratos de los objetos antes de ejecutar el programa.

---

## 2. Clase, objeto e instancia

Una **clase** es una definición o plantilla que describe cómo serán los objetos.

```typescript
class Persona {
}
```

Un **objeto** es una entidad concreta creada a partir de una clase.

```typescript
const ana = new Persona();
```

Una **instancia** es un objeto concreto creado a partir de una clase.

```typescript
const ana = new Persona();
const pedro = new Persona();
```

Ambos objetos son instancias de `Persona`.

```text
             Persona
                │
        ┌───────┴───────┐
        ▼               ▼
       ana             pedro
   instancia         instancia
```

> **Clase = definición general. Instancia = objeto concreto creado a partir de esa clase.**

---

## 3. Propiedades

Las **propiedades** representan el estado de un objeto.

```typescript
class Persona {
    nombre: string;
    edad: number;
}
```

Aquí:

```text
nombre → string
edad   → number
```

---

## 4. El constructor

El `constructor` se ejecuta cuando se crea una instancia con `new`.

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

Crear una instancia:

```typescript
const ana = new Persona("Ana", 20);
```

Flujo conceptual:

```text
new Persona("Ana", 20)
        ↓
constructor(...)
        ↓
this.nombre = "Ana"
this.edad = 20
        ↓
objeto inicializado
```

---

## 5. ¿Qué significa `this`?

`this` representa la **instancia actual**.

```typescript
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
```

```typescript
const ana = new Persona("Ana");
const pedro = new Persona("Pedro");

ana.saludar();
pedro.saludar();
```

Conceptualmente:

```text
ana.saludar()   → this referencia a ana
pedro.saludar() → this referencia a pedro
```

---

## 6. Métodos

Un **método** es una función definida dentro de una clase.

```typescript
class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }
}
```

Uso:

```typescript
const calculadora = new Calculadora();
const resultado = calculadora.sumar(5, 3);

console.log(resultado);
```

TypeScript permite indicar:

```text
a: number
b: number
       ↓
tipos de parámetros

:number
       ↓
tipo de retorno
```

Si un método no retorna un valor útil:

```typescript
saludar(): void {
    console.log("Hola");
}
```

---

## 7. Ejemplo completo

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const ana = new Persona("Ana", 20);
const pedro = new Persona("Pedro", 22);

ana.saludar();
pedro.saludar();
```

Identificación:

```text
Clase       → Persona
Propiedades → nombre, edad
Constructor → constructor()
Método      → saludar()
Instancias  → ana, pedro
this        → instancia actual
```

---

## 8. Modificadores de acceso

TypeScript dispone de:

- `public`
- `private`
- `protected`

### `public`

Es el acceso por defecto.

```typescript
class Persona {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
```

```typescript
const ana = new Persona("Ana");
console.log(ana.nombre);
```

También puede omitirse `public`.

### `private`

Solo puede utilizarse directamente dentro de la clase.

```typescript
class Cuenta {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    obtenerSaldo(): number {
        return this.saldo;
    }
}
```

Esto no es válido:

```typescript
console.log(cuenta.saldo);
```

### `protected`

Puede utilizarse dentro de la clase y sus subclases, pero no desde código externo.

```typescript
class Persona {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
```

| Modificador | Misma clase | Subclase | Desde fuera |
|---|---:|---:|---:|
| `public` | Sí | Sí | Sí |
| `protected` | Sí | Sí | No |
| `private` | Sí | No | No |

---

## 9. `readonly`

`readonly` indica que una propiedad no debe reasignarse después de inicializarse.

```typescript
class Estudiante {
    readonly id: number;
    nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}
```

Esto produce un error de TypeScript:

```typescript
estudiante.id = 20;
```

---

## 10. Sintaxis abreviada del constructor

Versión explícita:

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

Versión abreviada:

```typescript
class Persona {
    constructor(
        public nombre: string,
        public edad: number
    ) {}
}
```

Para aprender POO conviene comprender primero la versión explícita.

---

## 11. Encapsulamiento

El **encapsulamiento** consiste en proteger el estado interno del objeto y controlar cómo se modifica.

```typescript
class Cuenta {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
        }
    }

    obtenerSaldo(): number {
        return this.saldo;
    }
}
```

Uso:

```typescript
const cuenta = new Cuenta(1000);

cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());
```

---

## 12. Getters y setters

```typescript
class Persona {
    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(valor: number) {
        if (valor >= 0) {
            this._edad = valor;
        }
    }
}
```

Uso:

```typescript
const ana = new Persona(20);

console.log(ana.edad);
ana.edad = 21;
```

---

## 13. Restricciones de dominio

Un dato puede tener el tipo correcto y aun así ser inválido.

```typescript
let nota: number = 20;
```

El tipo es correcto (`number`), pero puede violar la regla del dominio.

```typescript
class Estudiante {
    private nota: number;

    constructor(
        public nombre: string,
        nota: number
    ) {
        if (nota < 1.0 || nota > 7.0) {
            throw new Error(
                "La nota debe estar entre 1.0 y 7.0"
            );
        }

        this.nota = nota;
    }
}
```

```text
Tipo correcto
      ≠
Valor válido en el dominio
```

---

## 14. Propiedades opcionales y valores ausentes

Una propiedad puede ser opcional:

```typescript
class Persona {
    nombre: string;
    telefono?: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
```

También puede expresarse explícitamente la ausencia:

```typescript
class Estudiante {
    nota: number | null;

    constructor() {
        this.nota = null;
    }
}
```

Aquí:

```text
nota puede ser number o null
```

---

## 15. Propiedades y métodos `static`

Una propiedad `static` pertenece a la clase.

```typescript
class Persona {
    static cantidad: number = 0;

    constructor() {
        Persona.cantidad++;
    }
}
```

```typescript
new Persona();
new Persona();

console.log(Persona.cantidad);
```

También existen métodos estáticos:

```typescript
class Calculadora {
    static sumar(a: number, b: number): number {
        return a + b;
    }
}
```

Uso:

```typescript
const resultado = Calculadora.sumar(5, 3);
```

No se necesita crear una instancia.

---

## 16. Herencia

La **herencia** permite crear una clase basada en otra.

```typescript
class Persona {
    constructor(public nombre: string) {}

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
```

```typescript
class Estudiante extends Persona {
    estudiar(): void {
        console.log("Estoy estudiando");
    }
}
```

Uso:

```typescript
const ana = new Estudiante("Ana");

ana.saludar();
ana.estudiar();
```

Relación conceptual:

```text
Estudiante ES UNA Persona
```

---

## 17. `super()`

Una subclase puede llamar al constructor de la clase padre mediante `super()`.

```typescript
class Persona {
    constructor(public nombre: string) {}
}

class Estudiante extends Persona {
    constructor(
        nombre: string,
        public carrera: string
    ) {
        super(nombre);
    }
}
```

---

## 18. Sobrescritura de métodos

```typescript
class Persona {
    presentarse(): void {
        console.log("Soy una persona");
    }
}

class Estudiante extends Persona {
    override presentarse(): void {
        console.log("Soy estudiante");
    }
}
```

`override` indica que estamos redefiniendo un método heredado.

---

## 19. Polimorfismo

```typescript
class Animal {
    hablar(): void {
        console.log("Sonido");
    }
}

class Perro extends Animal {
    override hablar(): void {
        console.log("Guau");
    }
}

class Gato extends Animal {
    override hablar(): void {
        console.log("Miau");
    }
}
```

```typescript
const animales: Animal[] = [
    new Perro(),
    new Gato()
];

for (const animal of animales) {
    animal.hablar();
}
```

Salida:

```text
Guau
Miau
```

Diferentes objetos responden al mismo método de manera distinta.

---

## 20. Clases abstractas

Una clase abstracta define una base que no está destinada a instanciarse directamente.

```typescript
abstract class Figura {
    abstract area(): number;
}
```

```typescript
class Rectangulo extends Figura {
    constructor(
        private ancho: number,
        private alto: number
    ) {
        super();
    }

    area(): number {
        return this.ancho * this.alto;
    }
}
```

No puede hacerse:

```typescript
const figura = new Figura();
```

---

## 21. Interfaces

Una `interface` describe un contrato estructural.

```typescript
interface Hablante {
    hablar(): void;
}
```

Una clase puede cumplir ese contrato:

```typescript
class Persona implements Hablante {
    hablar(): void {
        console.log("Hola");
    }
}
```

La interfaz indica **qué operaciones deben existir**; la clase determina **cómo se implementan**.

---

## 22. `extends` vs. `implements`

Herencia:

```typescript
class Estudiante extends Persona
```

Significa:

```text
Estudiante ES UNA Persona
```

Implementación de interfaz:

```typescript
class Robot implements Hablante
```

Significa:

```text
Robot CUMPLE el contrato Hablante
```

---

## 23. Tipado estructural

TypeScript usa principalmente **tipado estructural**.

```typescript
interface Persona {
    nombre: string;
    edad: number;
}
```

```typescript
const estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Informática"
};
```

Esto es válido:

```typescript
const persona: Persona = estudiante;
```

porque `estudiante` posee al menos:

```text
nombre
edad
```

La compatibilidad depende de la estructura, no necesariamente del nombre explícito del tipo.

---

## 24. Composición

La **composición** ocurre cuando un objeto contiene otros objetos.

```typescript
class Motor {
    encender(): void {
        console.log("Motor encendido");
    }
}

class Auto {
    private motor: Motor;

    constructor() {
        this.motor = new Motor();
    }

    arrancar(): void {
        this.motor.encender();
    }
}
```

Uso:

```typescript
const auto = new Auto();
auto.arrancar();
```

Relación:

```text
Auto TIENE UN Motor
```

Comparación:

```text
Herencia    → "es un"
Composición → "tiene un"
```

---

## 25. Clases genéricas

```typescript
class Caja<T> {
    constructor(private valor: T) {}

    obtener(): T {
        return this.valor;
    }
}
```

Uso:

```typescript
const cajaNumero = new Caja<number>(10);
const cajaTexto = new Caja<string>("Hola");
```

---

## 26. Tipo Abstracto de Datos: Pila

Podemos definir el contrato:

```typescript
interface Pila<T> {
    agregar(elemento: T): void;
    sacar(): T | undefined;
    estaVacia(): boolean;
}
```

Implementación:

```typescript
class PilaArray<T> implements Pila<T> {
    private datos: T[] = [];

    agregar(elemento: T): void {
        this.datos.push(elemento);
    }

    sacar(): T | undefined {
        return this.datos.pop();
    }

    estaVacia(): boolean {
        return this.datos.length === 0;
    }
}
```

Uso:

```typescript
const pila = new PilaArray<number>();

pila.agregar(10);
pila.agregar(20);

console.log(pila.sacar());
```

La interfaz describe **qué hace** la pila; la clase define **cómo lo hace**.

---

## 27. Ejemplo integrador

```typescript
class Estudiante {
    static institucion: string = "Universidad";

    constructor(
        public nombre: string,
        public edad: number,
        private nota: number
    ) {
        this.validarNota(nota);
    }

    private validarNota(nota: number): void {
        if (nota < 1.0 || nota > 7.0) {
            throw new Error("Nota inválida");
        }
    }

    estaAprobado(): boolean {
        return this.nota >= 4.0;
    }

    mostrarEstado(): void {
        const estado = this.estaAprobado()
            ? "Aprobado"
            : "Reprobado";

        console.log(
            `${this.nombre} - ${this.nota} - ${estado}`
        );
    }
}

const ana = new Estudiante("Ana", 20, 5.8);
const pedro = new Estudiante("Pedro", 21, 3.5);

ana.mostrarEstado();
pedro.mostrarEstado();
```

Identificación:

```text
Clase                 → Estudiante
Propiedad estática    → institucion
Propiedades públicas  → nombre, edad
Propiedad privada     → nota
Constructor            → constructor()
Método privado         → validarNota()
Métodos públicos       → estaAprobado(), mostrarEstado()
Instancias             → ana, pedro
Restricción de dominio → 1.0 <= nota <= 7.0
```

---

## 28. Comparación Python vs. TypeScript

| Concepto | Python | TypeScript |
|---|---|---|
| Clase | `class Persona:` | `class Persona {}` |
| Instancia | `Persona()` | `new Persona()` |
| Inicialización | `__init__()` | `constructor()` |
| Instancia actual | `self` | `this` |
| Método | `def metodo(self)` | `metodo(): void` |
| Público | convención | `public` |
| Privado | convención / name mangling | `private` |
| Protegido | convención | `protected` |
| Solo lectura | diseño/propiedades | `readonly` |
| Herencia | `class B(A)` | `class B extends A` |
| Clase padre | `super()` | `super()` |
| Interface | `Protocol` / ABC según caso | `interface` |
| Clase abstracta | `ABC` | `abstract class` |
| Propiedad de clase | atributo de clase | `static` |

---

## 29. Resumen

```text
                    POO
                     │
                     ▼
                   Clase
                     │
                     ▼
                 Instancias
                     │
           ┌─────────┴─────────┐
           ▼                   ▼
         Estado            Comportamiento
           │                   │
      Propiedades            Métodos
           │
           └───────┬───────────┘
                   ▼
             Encapsulamiento
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
    Herencia   Polimorfismo  Composición
```

| Concepto | Significado |
|---|---|
| Clase | Definición o plantilla |
| Objeto | Entidad concreta |
| Instancia | Objeto creado a partir de una clase |
| Propiedad | Dato asociado al objeto |
| Método | Función asociada a una clase |
| `constructor` | Inicializa el objeto |
| `this` | Referencia a la instancia actual |
| `public` | Accesible públicamente |
| `private` | Accesible dentro de la clase |
| `protected` | Accesible en clase y subclases |
| `readonly` | Evita reasignaciones posteriores |
| `static` | Pertenece a la clase |
| `extends` | Define herencia |
| `super()` | Accede al constructor de la clase padre |
| `implements` | Cumple una interfaz |
| `abstract` | Define una clase incompleta/base |
| `interface` | Define un contrato estructural |

---

## 30. Ejercicios

### Ejercicio 1: Libro

Crear una clase `Libro` con:

```text
titulo: string
autor: string
anio: number
```

Agregar:

```text
mostrarInformacion(): void
```

Crear dos instancias.

### Ejercicio 2: Cuenta bancaria

Crear una clase `Cuenta` con:

```text
titular
saldo
```

Hacer `saldo` privado.

Agregar:

```text
depositar()
retirar()
obtenerSaldo()
```

Restricciones:

- no permitir depósitos negativos;
- no permitir retiros superiores al saldo.

### Ejercicio 3: Estudiante

Crear una clase `Estudiante` con:

```text
nombre
notas
```

Métodos:

```text
agregarNota()
promedio()
estaAprobado()
```

Las notas deben estar entre `1.0` y `7.0`.

### Ejercicio 4: Herencia

Crear `Persona` con:

```text
nombre
edad
```

Luego:

```typescript
class Estudiante extends Persona
```

Agregar:

```text
carrera
```

### Ejercicio 5: Interface

Definir:

```typescript
interface Vehiculo {
    arrancar(): void;
    detener(): void;
}
```

Crear `Auto` y `Moto` que implementen la interfaz.

---

## 31. Preguntas de comprensión

1. ¿Cuál es la diferencia entre clase, objeto e instancia?
2. ¿Qué función cumple `new`?
3. ¿Para qué sirve `constructor`?
4. ¿Qué representa `this`?
5. ¿Qué diferencia hay entre propiedad y método?
6. ¿Qué diferencia existe entre `public`, `private` y `protected`?
7. ¿Qué significa `readonly`?
8. ¿Qué diferencia hay entre una propiedad de instancia y una `static`?
9. ¿Qué significa `extends`?
10. ¿Para qué se usa `super()`?
11. ¿Qué es sobrescritura de métodos?
12. ¿Qué es polimorfismo?
13. ¿Qué es una clase abstracta?
14. ¿Qué es una `interface`?
15. ¿Qué significa tipado estructural?
16. ¿Qué diferencia existe entre `extends` e `implements`?
17. ¿Qué diferencia existe entre herencia y composición?
18. ¿Cómo puede una clase proteger restricciones de dominio?

---

# Idea final

> En TypeScript, la Programación Orientada a Objetos permite organizar programas mediante clases y objetos con propiedades y métodos. El sistema de tipos agrega mecanismos como modificadores de acceso, interfaces, clases abstractas, `readonly` y genéricos que permiten describir y verificar con mayor precisión la estructura de los objetos durante el desarrollo