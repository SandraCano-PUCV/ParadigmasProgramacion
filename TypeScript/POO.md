# Programación Orientada a Objetos con TypeScript

# I. Introducción
## 1. Objetivo
Este material introduce la implementación de **clases y objetos en TypeScript**.

Los conceptos de Programación Orientada a Objetos ya conocidos se mantienen:

- **Clase:** define la estructura general.
- **Objeto o instancia:** representa una entidad concreta creada a partir de una clase.
- **Atributos:** representan el estado del objeto.
- **Métodos:** representan su comportamiento.

La principal diferencia está en la **sintaxis de TypeScript** y en el uso explícito de tipos.

---

## 2. Primera clase en TypeScript

Una clase se declara utilizando la palabra reservada `class`.

```typescript
class Persona {
    nombre: string;
    edad: number;
}
```

En este ejemplo:

- `Persona` es la **clase**.
- `nombre` es un atributo de tipo `string`.
- `edad` es un atributo de tipo `number`.

TypeScript permite indicar explícitamente el tipo de los atributos.

---

## 3. El constructor

En TypeScript se utiliza el método especial `constructor` para inicializar los atributos de un objeto.

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

El constructor recibe los valores necesarios cuando se crea una nueva instancia.

### Partes del constructor

```typescript
constructor(nombre: string, edad: number)
```

Los parámetros son:

- `nombre`, de tipo `string`.
- `edad`, de tipo `number`.

Luego:

```typescript
this.nombre = nombre;
this.edad = edad;
```

los valores recibidos se almacenan en los atributos del objeto.

---

## 4. ¿Qué significa `this`?

`this` hace referencia a la **instancia actual** que está ejecutando el código.

Por ejemplo:

```typescript
this.nombre = nombre;
```

hay dos elementos llamados `nombre`, pero representan cosas diferentes:

- `nombre` corresponde al **parámetro** recibido por el constructor.
- `this.nombre` corresponde al **atributo del objeto actual**.

Podemos interpretarlo como:

```text
atributo del objeto = valor recibido
```

---

## 5. Comparación rápida con Python

La estructura conceptual es la misma, pero cambia la sintaxis.

### Python

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
```

### TypeScript

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

Equivalencias principales:

| Python | TypeScript |
|---|---|
| `class Persona:` | `class Persona { }` |
| `__init__` | `constructor` |
| `self` | `this` |
| `self.nombre` | `this.nombre` |
| `Persona("Ana", 20)` | `new Persona("Ana", 20)` |
| `print()` | `console.log()` |

---

## 6. Crear objetos

En TypeScript, para crear una instancia se utiliza la palabra reservada `new`.

```typescript
const ana = new Persona("Ana", 20);
const pedro = new Persona("Pedro", 22);
```

Aquí:

- `Persona` es la clase.
- `ana` es una instancia de `Persona`.
- `pedro` es otra instancia de `Persona`.

Cada instancia mantiene su propio estado.

```typescript
console.log(ana.nombre);
console.log(pedro.nombre);
```

Salida:

```text
Ana
Pedro
```

---

## 7. Agregar métodos

Los métodos representan el **comportamiento** de los objetos.

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log("Hola, soy " + this.nombre);
    }
}
```

El método:

```typescript
saludar(): void
```

no retorna un valor, por eso se indica `void`.

---

## 8. Ejecutar un método

Primero se crea el objeto:

```typescript
const ana = new Persona("Ana", 20);
```

Luego se puede ejecutar uno de sus métodos:

```typescript
ana.saludar();
```

Salida:

```text
Hola, soy Ana
```

Cuando se ejecuta:

```typescript
ana.saludar();
```

dentro del método:

```typescript
this
```

hace referencia al objeto `ana`.

---

## 9. Varias instancias de una misma clase

```typescript
const ana = new Persona("Ana", 20);
const pedro = new Persona("Pedro", 22);

ana.saludar();
pedro.saludar();
```

Salida:

```text
Hola, soy Ana
Hola, soy Pedro
```

Aunque ambos objetos fueron creados a partir de la misma clase, poseen valores diferentes.

Podemos representarlo de la siguiente manera:

```text
                 Persona
                    |
          ---------------------
          |                   |
         ana                pedro
          |                   |
   nombre = "Ana"      nombre = "Pedro"
   edad = 20           edad = 22
```

---

## 10. Estado y comportamiento

Considere nuevamente:

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log("Hola, soy " + this.nombre);
    }
}
```

Podemos identificar:

### Estado

Está representado por los atributos:

```typescript
nombre: string;
edad: number;
```

### Comportamiento

Está representado por los métodos:

```typescript
saludar(): void
```

Por lo tanto:

```text
Objeto = Estado + Comportamiento
```

---

## 11. Métodos con parámetros

Los métodos también pueden recibir información.

```typescript
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludarA(otraPersona: string): void {
        console.log(
            "Hola " + otraPersona + ", soy " + this.nombre
        );
    }
}
```

Uso:

```typescript
const ana = new Persona("Ana");

ana.saludarA("Pedro");
```

Salida:

```text
Hola Pedro, soy Ana
```

---

## 12. Métodos que retornan valores

Un método puede retornar un resultado.

```typescript
class Rectangulo {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}
```

Uso:

```typescript
const figura = new Rectangulo(5, 3);

const area: number = figura.calcularArea();

console.log(area);
```

Salida:

```text
15
```

En:

```typescript
calcularArea(): number
```

`number` indica que el método retorna un número.

---

## 13. Modificar el estado de un objeto

Los métodos también pueden modificar atributos.

```typescript
class Cuenta {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        this.saldo = this.saldo + monto;
    }
}
```

Uso:

```typescript
const cuenta = new Cuenta(1000);

cuenta.depositar(500);

console.log(cuenta.saldo);
```

Salida:

```text
1500
```

El método `depositar()` modifica el estado del objeto.

---

## 14. Ejemplo completo: clase `Estudiante`

```typescript
class Estudiante {
    nombre: string;
    carrera: string;
    edad: number;

    constructor(
        nombre: string,
        carrera: string,
        edad: number
    ) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.edad = edad;
    }

    presentarse(): void {
        console.log(
            "Soy " + this.nombre +
            ", estudio " + this.carrera
        );
    }

    mostrarEdad(): void {
        console.log("Tengo " + this.edad + " años");
    }
}
```

Crear objetos:

```typescript
const estudiante1 =
    new Estudiante("Ana", "Ingeniería Informática", 20);

const estudiante2 =
    new Estudiante("Pedro", "Ingeniería Civil", 22);
```

Ejecutar métodos:

```typescript
estudiante1.presentarse();
estudiante1.mostrarEdad();

estudiante2.presentarse();
```

---

## 15. Forma abreviada del constructor en TypeScript

TypeScript también permite declarar e inicializar atributos directamente en los parámetros del constructor.

La siguiente clase:

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

puede escribirse de forma más compacta:

```typescript
class Persona {
    constructor(
        public nombre: string,
        public edad: number
    ) {}
}
```

Ambas formas permiten crear objetos como:

```typescript
const ana = new Persona("Ana", 20);
```

Para una primera aproximación a POO es recomendable comprender primero la **forma explícita**, porque permite observar claramente la relación entre parámetros, atributos y `this`.

---

## 16. Errores frecuentes

### Olvidar `new`

Incorrecto:

```typescript
const ana = Persona("Ana", 20);
```

Correcto:

```typescript
const ana = new Persona("Ana", 20);
```

---

### Confundir parámetro y atributo

```typescript
constructor(nombre: string) {
    this.nombre = nombre;
}
```

- `nombre`: parámetro.
- `this.nombre`: atributo del objeto.

---

### Usar `self` en TypeScript

Incorrecto:

```typescript
self.nombre = nombre;
```

Correcto:

```typescript
this.nombre = nombre;
```

`self` se utiliza habitualmente en Python. En TypeScript se utiliza `this`.

---

### No declarar el tipo

TypeScript permite trabajar con tipos explícitos:

```typescript
nombre: string;
edad: number;
```

Esto ayuda a detectar errores durante el desarrollo.

---

## 17. Ejercicio

Diseñe una clase `Libro` con:

- atributo `titulo` de tipo `string`;
- atributo `autor` de tipo `string`;
- atributo `paginas` de tipo `number`;
- constructor para inicializar los tres atributos;
- método `mostrarInfo()`.

El método debe mostrar un mensaje similar a:

```text
El libro Clean Code fue escrito por Robert C. Martin
```

Luego cree dos instancias diferentes de `Libro`.

### Estructura inicial

```typescript
class Libro {

    // atributos

    constructor(/* parámetros */) {

    }

    mostrarInfo(): void {

    }
}
```

---

## 18. Resumen

Una clase en TypeScript puede visualizarse como:

```typescript
class NombreClase {

    // Estado
    atributo: tipo;

    // Inicialización
    constructor(valor: tipo) {
        this.atributo = valor;
    }

    // Comportamiento
    metodo(): void {
        // instrucciones
    }
}
```

Y una instancia se crea utilizando:

```typescript
const objeto = new NombreClase(valor);
```

Conceptualmente:

```text
Clase
  ↓
new
  ↓
Instancia
  ↓
Estado       → atributos
Comportamiento → métodos
```

Las ideas fundamentales de POO no cambian al pasar de Python a TypeScript. Lo que cambia principalmente es la sintaxis:

```text
Python          TypeScript
--------------------------------
__init__   →    constructor
self       →    this
print()    →    console.log()
instancia  →    new Clase(...)
```

## 19. Ejercicios prácticos

Los siguientes ejercicios están organizados de forma progresiva. La idea es practicar la declaración de clases, atributos, `constructor`, `this`, creación de objetos con `new`, métodos, parámetros, valores de retorno y modificación del estado de una instancia.

---

### Ejercicio 1. Identificar los elementos de una clase

Observe el siguiente código:

```typescript
class Mascota {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(): void {
        console.log(this.nombre + " tiene " + this.edad + " años");
    }
}
```

Responda:

1. ¿Cuál es el nombre de la clase?
2. ¿Cuáles son sus atributos?
3. ¿Cuál es el método?
4. ¿Cuál es la función del `constructor`?
5. ¿Qué representa `this.nombre`?
6. ¿Qué tipo de dato tiene `edad`?

---

### Ejercicio 2. Crear objetos

Utilice la clase `Mascota` del ejercicio anterior y cree dos objetos:

```typescript
const mascota1 = new Mascota("Luna", 3);
const mascota2 = new Mascota("Toby", 5);
```

Luego:

1. Muestre el nombre de `mascota1`.
2. Muestre la edad de `mascota2`.
3. Ejecute `mostrarInfo()` para ambos objetos.
4. Explique por qué `mascota1` y `mascota2` pueden tener valores diferentes si pertenecen a la misma clase.

---

### Ejercicio 3. Completar una clase

Complete el siguiente código:

```typescript
class Libro {
    titulo: string;
    autor: string;

    constructor(__________________, __________________) {
        __________________________
        __________________________
    }

    mostrarInfo(): void {
        console.log(
            "Título: " + __________________ +
            " - Autor: " + __________________
        );
    }
}
```

Luego cree:

```typescript
const libro1 = new Libro("Clean Code", "Robert C. Martin");
```

y ejecute el método `mostrarInfo()`.

---

### Ejercicio 4. Diseñar una clase `Producto`

Cree una clase llamada `Producto` con los atributos:

```text
nombre
precio
```

Tipos:

- `nombre`: `string`
- `precio`: `number`

Debe incluir un constructor y un método `mostrarProducto()`.

Ejemplo de uso esperado:

```typescript
const producto1 = new Producto("Teclado", 25000);
producto1.mostrarProducto();
```

Salida esperada:

```text
Producto: Teclado - Precio: 25000
```

---

### Ejercicio 5. Agregar un nuevo atributo

Considere la siguiente clase:

```typescript
class Estudiante {
    nombre: string;
    carrera: string;

    constructor(nombre: string, carrera: string) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    presentarse(): void {
        console.log(
            "Soy " + this.nombre +
            " y estudio " + this.carrera
        );
    }
}
```

Modifique la clase para incorporar:

```typescript
edad: number;
```

El constructor debe recibir también la edad. Luego cree:

```typescript
const estudiante1 =
    new Estudiante("Ana", "Ingeniería Informática", 20);
```

Agregue además un método:

```typescript
mostrarEdad(): void
```

que muestre:

```text
Tengo 20 años
```

---

### Ejercicio 6. Método con parámetro

Cree una clase llamada `Robot` con un atributo:

```typescript
nombre: string;
```

y un método:

```typescript
saludarA(persona: string): void
```

Ejemplo:

```typescript
const robot1 = new Robot("NOVA");
robot1.saludarA("Ana");
```

Salida esperada:

```text
Hola Ana, soy NOVA
```

Responda también:

1. ¿Cuál es el atributo?
2. ¿Cuál es el parámetro del método?
3. ¿A qué objeto hace referencia `this` cuando se ejecuta `robot1.saludarA("Ana")`?

---

### Ejercicio 7. Método que retorna un valor

Cree una clase `Rectangulo` con:

```typescript
ancho: number;
alto: number;
```

Agregue el método:

```typescript
calcularArea(): number
```

El método debe retornar el área del rectángulo.

Ejemplo:

```typescript
const r1 = new Rectangulo(5, 4);
const area: number = r1.calcularArea();
console.log(area);
```

Salida esperada:

```text
20
```

---

### Ejercicio 8. Modificar el estado de un objeto

Cree una clase llamada `Contador` con el atributo:

```typescript
valor: number;
```

El constructor debe inicializar `valor` con el valor recibido. Agregue:

```typescript
incrementar(): void
```

que aumente el valor en uno:

```typescript
this.valor = this.valor + 1;
```

Ejemplo:

```typescript
const contador = new Contador(0);

contador.incrementar();
contador.incrementar();

console.log(contador.valor);
```

Salida esperada:

```text
2
```

Responda:

1. ¿Qué atributo representa el estado del objeto?
2. ¿Qué método modifica ese estado?
3. ¿Cuántas veces se ejecutó `incrementar()`?

---

### Ejercicio 9. Clase `Cuenta`

Diseñe una clase `Cuenta` con el atributo:

```typescript
saldo: number;
```

Debe incluir:

```typescript
depositar(monto: number): void
```

El método debe sumar el monto al saldo actual.

Ejemplo:

```typescript
const cuenta1 = new Cuenta(1000);
cuenta1.depositar(500);
console.log(cuenta1.saldo);
```

Salida:

```text
1500
```

Luego agregue:

```typescript
retirar(monto: number): void
```

que reste el monto indicado al saldo.

---

### Ejercicio 10. Dos objetos con estados diferentes

Considere:

```typescript
class Auto {
    marca: string;
    velocidad: number;

    constructor(marca: string, velocidad: number) {
        this.marca = marca;
        this.velocidad = velocidad;
    }

    acelerar(): void {
        this.velocidad = this.velocidad + 10;
    }
}
```

Cree:

```typescript
const auto1 = new Auto("Toyota", 0);
const auto2 = new Auto("Ford", 30);
```

Ejecute:

```typescript
auto1.acelerar();
auto1.acelerar();
auto2.acelerar();
```

Antes de ejecutar el programa, responda:

1. ¿Cuál será la velocidad final de `auto1`?
2. ¿Cuál será la velocidad final de `auto2`?
3. ¿Por qué modificar `auto1.velocidad` no modifica `auto2.velocidad`?

Después ejecute el programa para comprobar sus respuestas.

---

### Ejercicio 11. Corregir errores

El siguiente código contiene errores:

```typescript
class Pelicula {
    titulo: string;
    anio: number;

    constructor(titulo: string, anio: number) {
        titulo = titulo;
        anio = anio;
    }

    mostrar(): void {
        console.log(self.titulo);
    }
}

const pelicula1 = Pelicula("Interstellar", 2014);
```

Corrija el código considerando:

1. el uso de `this`;
2. la inicialización de atributos;
3. la creación de objetos con `new`.

Luego ejecute:

```typescript
pelicula1.mostrar();
```

---

### Ejercicio 12. Predicción de salida

Observe:

```typescript
class Curso {
    nombre: string;
    estudiantes: number;

    constructor(nombre: string, estudiantes: number) {
        this.nombre = nombre;
        this.estudiantes = estudiantes;
    }

    agregarEstudiante(): void {
        this.estudiantes = this.estudiantes + 1;
    }

    mostrarCantidad(): void {
        console.log(this.estudiantes);
    }
}

const curso1 = new Curso("POO", 20);

curso1.agregarEstudiante();
curso1.agregarEstudiante();
curso1.mostrarCantidad();
```

¿Qué valor mostrará el programa? Explique cómo cambia el estado del objeto después de cada llamada a `agregarEstudiante()`.

---

## 20. Desafíos de modelado

En los siguientes ejercicios no se entrega la clase completa. Primero identifique la **clase**, sus **atributos**, sus **métodos** y los **tipos de datos**. Luego implemente la solución en TypeScript.

### Desafío 1. Videojuego

Se necesita representar un personaje de un videojuego. Cada personaje tiene nombre, puntos de vida y nivel. El personaje puede mostrar su información, recibir daño y aumentar de nivel.

Diseñe la clase `Personaje`.

### Desafío 2. Asignatura

Se necesita representar una asignatura universitaria. Cada asignatura tiene nombre, código y cantidad de estudiantes. Debe permitir mostrar su información y agregar un estudiante.

Diseñe la clase `Asignatura`.

### Desafío 3. Sensor

Se necesita representar un sensor de temperatura. Cada sensor tiene un identificador y una temperatura actual. Debe permitir mostrar y actualizar la temperatura.

Ejemplo de uso:

```typescript
const sensor1 = new Sensor("S01", 20);
sensor1.actualizarTemperatura(23);
sensor1.mostrarTemperatura();
```

Salida esperada:

```text
Sensor S01: 23 grados
```

### Desafío 4. Biblioteca

Diseñe una clase `Libro` con título, autor y número de páginas. Debe tener un método `mostrarInfo(): void`.

Cree tres objetos diferentes y muestre la información de cada uno. Después responda:

1. ¿Qué elementos son comunes a todos los objetos?
2. ¿Qué elementos pueden cambiar entre una instancia y otra?
3. ¿Qué define la clase y qué mantiene cada objeto?

---

## 21. Actividad final integradora

Diseñe una clase `Estudiante` que permita representar estudiantes de una asignatura.

Debe poseer:

```typescript
nombre: string;
nota1: number;
nota2: number;
nota3: number;
```

Debe incluir:

```typescript
constructor(...)
calcularPromedio(): number
mostrarInfo(): void
```

Para calcular el promedio utilice operaciones aritméticas simples:

```typescript
const promedio =
    (this.nota1 + this.nota2 + this.nota3) / 3;
```

No es necesario utilizar arreglos ni métodos como `reduce()`.

Ejemplo:

```typescript
const estudiante =
    new Estudiante("Ana", 6.0, 5.5, 6.5);

estudiante.mostrarInfo();
```

Una posible salida es:

```text
Estudiante: Ana
Promedio: 6
```

### Preguntas de reflexión

1. ¿Qué parte del código representa la clase?
2. ¿Qué elementos representan el estado del estudiante?
3. ¿Qué métodos representan su comportamiento?
4. ¿Para qué se utiliza `this`?
5. ¿Para qué se utiliza `new`?
6. ¿Qué diferencia existe entre `constructor` en TypeScript y `__init__` en Python?
7. ¿Por qué dos objetos de `Estudiante` pueden tener notas diferentes?

