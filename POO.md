# Programación Orientada a Objetos
## Encapsulamiento, Getters, Setters y Herencia

En Programación Orientada a Objetos (POO), una clase define la estructura de los objetos.

Un objeto combina principalmente:

```text
Objeto = Estado + Comportamiento
```
- **Estado:** se representa mediante atributos.
- **Comportamiento:** se representa mediante métodos.

Ejemplo:

```text
Estudiante
├── nombre
├── edad
├── carrera
├── estudiar()
└── mostrarInformacion()
```

A medida que una aplicación aumenta en tamaño, no siempre es conveniente permitir que todos los atributos puedan modificarse directamente.

Para controlar este acceso aparece el concepto de **encapsulamiento**.

---

# 1. Encapsulamiento

El **encapsulamiento** consiste en agrupar los datos y comportamientos de un objeto y **controlar la forma en que otras partes del programa pueden acceder o modificar su estado interno**.

La idea principal es:

> Un objeto debería controlar su propio estado.

Por ejemplo, imaginemos una clase `Estudiante` que contiene el atributo `edad`.

Sin ningún control podríamos hacer:

```python
estudiante.edad = -10
```

Desde el punto de vista del lenguaje esta asignación podría ser válida, pero desde el punto de vista del problema una edad negativa no tiene sentido.

Podemos utilizar encapsulamiento para impedir o controlar este tipo de modificaciones.

```text
Programa
    |
    | solicita modificar edad
    v
Objeto Estudiante
    |
    v
Validación
    |
    +------ valor válido ------> modifica edad
    |
    +------ valor inválido ----> rechaza modificación
```

---

# 2. ¿Por qué utilizar encapsulamiento?

El encapsulamiento permite:

- proteger el estado interno de los objetos;
- validar los datos antes de modificarlos;
- reducir modificaciones incorrectas;
- controlar qué información puede ser consultada;
- ocultar detalles internos de implementación;
- facilitar el mantenimiento del software.

Por ejemplo:

```text
CuentaBancaria
-----------------
saldo
-----------------
depositar()
retirar()
consultarSaldo()
```

No sería conveniente permitir:

```text
saldo = -500000
```

El objeto debería controlar cómo se modifica su saldo.

---

# 3. Modificadores de acceso

En muchos lenguajes orientados a objetos encontramos tres niveles principales de acceso:

| Modificador | Acceso |
|---|---|
| `public` | Puede accederse desde cualquier parte |
| `private` | Solo debería accederse desde la propia clase |
| `protected` | Puede acceder la propia clase y sus clases derivadas |

Los mecanismos concretos cambian entre **Python** y **TypeScript**.

---

# 4. Encapsulamiento en Python

Python utiliza principalmente **convenciones de nombres** para indicar el nivel de acceso de los atributos.

## Atributo público

```python
class Estudiante:
    def __init__(self, nombre):
        self.nombre = nombre
```

Podemos acceder directamente:

```python
ana = Estudiante("Ana")

print(ana.nombre)

ana.nombre = "Andrea"
```

En este caso `nombre` es un atributo público.

---

## Atributo con `_`

En Python, colocar un guion bajo delante del atributo indica por convención que debería utilizarse solamente internamente o desde clases relacionadas.

```python
class Estudiante:
    def __init__(self, nombre):
        self._nombre = nombre
```

El atributo sigue siendo accesible:

```python
ana = Estudiante("Ana")

print(ana._nombre)
```

Pero el `_` comunica al programador:

```text
Este atributo es de uso interno.
```

Python no impide técnicamente acceder a él.

---

## Atributos con `__`

También podemos utilizar dos guiones bajos:

```python
class Estudiante:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.__edad = edad
```

Ahora:

```python
ana = Estudiante("Ana", 20)

print(ana.__edad)
```

producirá un error.

Python transforma internamente el nombre del atributo mediante un mecanismo conocido como **name mangling**.

El objetivo es dificultar el acceso accidental directo al atributo.

---

# 5. Getters y Setters

Cuando un atributo se encuentra encapsulado podemos utilizar métodos para acceder a él.

Tradicionalmente estos métodos se denominan:

```text
Getter → obtiene un valor
Setter → modifica un valor
```

Por ejemplo:

```text
          Getter
Programa ---------> Objeto
           obtiene edad


          Setter
Programa ---------> Objeto
           modifica edad
```

---

# 6. Getter y Setter tradicionales en Python

```python
class Estudiante:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.__edad = edad

    def get_edad(self):
        return self.__edad

    def set_edad(self, edad):
        if edad >= 0:
            self.__edad = edad
```

Utilización:

```python
ana = Estudiante("Ana", 20)

print(ana.get_edad())

ana.set_edad(21)

print(ana.get_edad())
```

Resultado:

```text
20
21
```

La ventaja aparece cuando necesitamos validar el nuevo valor.

```python
ana.set_edad(-5)
```

El setter puede evitar que el objeto adopte un estado incorrecto.

---

# 7. Propiedades en Python

Python proporciona una forma más natural de implementar getters y setters mediante `@property`.

```python
class Estudiante:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.__edad = edad

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, nueva_edad):
        if nueva_edad >= 0:
            self.__edad = nueva_edad
        else:
            print("La edad no puede ser negativa")
```

Podemos utilizarlo como si `edad` fuera un atributo normal:

```python
ana = Estudiante("Ana", 20)

print(ana.edad)

ana.edad = 21

print(ana.edad)
```

Sin embargo, internamente se están ejecutando métodos.

```text
ana.edad
    |
    v
@property
    |
    v
return self.__edad
```

Y cuando hacemos:

```python
ana.edad = 21
```

ocurre:

```text
ana.edad = 21
      |
      v
@edad.setter
      |
      v
validación
      |
      v
self.__edad = 21
```

---

# 8. Validación mediante Setter en Python

Podemos implementar reglas más completas.

```python
class Producto:

    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.__precio = precio

    @property
    def precio(self):
        return self.__precio

    @precio.setter
    def precio(self, nuevo_precio):
        if nuevo_precio >= 0:
            self.__precio = nuevo_precio
        else:
            print("El precio debe ser mayor o igual a cero")
```

Uso:

```python
teclado = Producto("Teclado", 20000)

print(teclado.precio)

teclado.precio = 25000

print(teclado.precio)
```

Si intentamos:

```python
teclado.precio = -5000
```

el objeto puede impedir la modificación.

---

# 9. Encapsulamiento en TypeScript

TypeScript posee modificadores de acceso explícitos:

```typescript
public
private
protected
```

Por defecto, los atributos son públicos.

Ejemplo:

```typescript
class Estudiante {

    public nombre: string;
    public edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

Podemos realizar:

```typescript
const ana = new Estudiante("Ana", 20);

console.log(ana.edad);

ana.edad = 21;
```

---

# 10. Atributos privados en TypeScript

Podemos declarar un atributo como `private`.

```typescript
class Estudiante {

    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

Ahora no deberíamos acceder directamente desde fuera de la clase:

```typescript
const ana = new Estudiante("Ana", 20);

console.log(ana.edad);
```

TypeScript indicará un error porque `edad` fue declarado como privado.

---

# 11. Getter en TypeScript

TypeScript proporciona la palabra reservada `get`.

```typescript
class Estudiante {

    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }
}
```

Uso:

```typescript
const ana = new Estudiante(20);

console.log(ana.edad);
```

Aunque escribimos:

```typescript
ana.edad
```

internamente estamos ejecutando:

```typescript
get edad()
```

---

# 12. Setter en TypeScript

Para modificar el atributo podemos utilizar `set`.

```typescript
class Estudiante {

    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(nuevaEdad: number) {

        if (nuevaEdad >= 0) {
            this._edad = nuevaEdad;
        }

    }
}
```

Uso:

```typescript
const ana = new Estudiante(20);

console.log(ana.edad);

ana.edad = 21;

console.log(ana.edad);
```

---

# 13. Validaciones en TypeScript

Podemos incorporar reglas dentro del setter.

```typescript
class Producto {

    private _precio: number;

    constructor(precio: number) {
        this._precio = precio;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(nuevoPrecio: number) {

        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo");
        }

    }
}
```

Uso:

```typescript
const teclado = new Producto(20000);

console.log(teclado.precio);

teclado.precio = 25000;

console.log(teclado.precio);
```

---

# 14. Comparación Python y TypeScript

## Python

```python
class Producto:

    def __init__(self, precio):
        self.__precio = precio

    @property
    def precio(self):
        return self.__precio

    @precio.setter
    def precio(self, valor):
        if valor >= 0:
            self.__precio = valor
```

## TypeScript

```typescript
class Producto {

    private _precio: number;

    constructor(precio: number) {
        this._precio = precio;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(valor: number) {
        if (valor >= 0) {
            this._precio = valor;
        }
    }
}
```

Conceptualmente ambos realizan lo mismo:

```text
        acceso
           |
           v
       Getter
           |
           v
       Atributo
           ^
           |
       Setter
           ^
           |
      modificación
```

---

# 15. ¿Siempre debemos crear Getters y Setters?

No.

Encapsular no significa crear automáticamente un getter y un setter para todos los atributos.

Debemos preguntarnos:

```text
¿Este atributo necesita ser consultado desde fuera?

¿Este atributo debería poder modificarse?

¿Necesita validación?

¿Existe alguna regla de negocio asociada?
```

Por ejemplo, podríamos permitir consultar el saldo de una cuenta pero no modificarlo directamente.

```python
class Cuenta:

    def __init__(self, saldo):
        self.__saldo = saldo

    @property
    def saldo(self):
        return self.__saldo

    def depositar(self, monto):
        if monto > 0:
            self.__saldo += monto
```

Uso:

```python
cuenta = Cuenta(100000)

cuenta.depositar(50000)

print(cuenta.saldo)
```

En este diseño no existe:

```python
cuenta.saldo = 10000000
```

El saldo solamente cambia mediante operaciones permitidas por la clase.

---

# 16. Herencia

Otro concepto fundamental de POO es la **herencia**.

La herencia permite crear una nueva clase tomando como base otra clase existente.

Podemos pensar en ella como una relación:

```text
ES UN
```

Por ejemplo:

```text
Estudiante ES UNA Persona
Docente ES UNA Persona
Perro ES UN Animal
Automóvil ES UN Vehículo
```

La clase más general se denomina:

```text
Clase padre
Clase base
Superclase
```

La clase especializada se denomina:

```text
Clase hija
Clase derivada
Subclase
```

---

# 17. Ejemplo conceptual de Herencia

Podemos tener:

```text
              Persona
           /           \
          /             \
   Estudiante          Docente
```

`Persona` puede definir características comunes:

```text
Persona
----------------
nombre
edad
----------------
saludar()
```

Mientras que `Estudiante` puede agregar:

```text
Estudiante
----------------
carrera
----------------
estudiar()
```

y `Docente`:

```text
Docente
----------------
asignatura
----------------
enseñar()
```

La ventaja es que no tenemos que repetir en ambas clases los elementos comunes de `Persona`.

---

# 18. Herencia en Python

En Python una clase hereda de otra colocando el nombre de la clase padre entre paréntesis.

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print("Hola, mi nombre es", self.nombre)


class Estudiante(Persona):

    def estudiar(self):
        print("Estoy estudiando")
```

Creamos un estudiante:

```python
ana = Estudiante("Ana")
```

Aunque `Estudiante` no define directamente `nombre` ni `saludar()`, los hereda de `Persona`.

```python
print(ana.nombre)

ana.saludar()

ana.estudiar()
```

Resultado:

```text
Ana
Hola, mi nombre es Ana
Estoy estudiando
```

---

# 19. Constructor y `super()` en Python

Normalmente una clase hija necesita agregar atributos propios.

Ejemplo:

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad


class Estudiante(Persona):

    def __init__(self, nombre, edad, carrera):

        super().__init__(nombre, edad)

        self.carrera = carrera
```

Creamos un objeto:

```python
ana = Estudiante(
    "Ana",
    20,
    "Ingeniería Informática"
)
```

Podemos acceder a atributos heredados:

```python
print(ana.nombre)
print(ana.edad)
```

y al atributo propio:

```python
print(ana.carrera)
```

---

# 20. ¿Qué hace `super()`?

La instrucción:

```python
super().__init__(nombre, edad)
```

permite ejecutar el constructor de la clase padre.

Podemos visualizarlo de esta forma:

```text
Estudiante(...)
      |
      v
__init__ de Estudiante
      |
      v
super().__init__()
      |
      v
__init__ de Persona
      |
      +---- nombre
      |
      +---- edad
      |
      v
Estudiante agrega carrera
```

De esta forma evitamos repetir código.

---

# 21. Herencia en TypeScript

En TypeScript utilizamos `extends`.

```typescript
class Persona {

    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}


class Estudiante extends Persona {

    estudiar(): void {
        console.log("Estoy estudiando");
    }
}
```

Creamos una instancia:

```typescript
const ana = new Estudiante("Ana");

ana.saludar();
ana.estudiar();
```

`Estudiante` hereda los elementos definidos en `Persona`.

---

# 22. Constructor y `super()` en TypeScript

Si la clase hija define su propio constructor, debe llamar al constructor de la clase padre mediante `super()`.

```typescript
class Persona {

    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


class Estudiante extends Persona {

    carrera: string;

    constructor(
        nombre: string,
        edad: number,
        carrera: string
    ) {

        super(nombre, edad);

        this.carrera = carrera;
    }
}
```

Uso:

```typescript
const ana = new Estudiante(
    "Ana",
    20,
    "Ingeniería Informática"
);

console.log(ana.nombre);
console.log(ana.edad);
console.log(ana.carrera);
```

---

# 23. Comparación de Herencia

## Python

```python
class Persona:
    pass


class Estudiante(Persona):
    pass
```

La herencia se declara mediante:

```python
class Estudiante(Persona):
```

---

## TypeScript

```typescript
class Persona {

}

class Estudiante extends Persona {

}
```

La herencia se declara mediante:

```typescript
extends
```

Conceptualmente:

```text
Python

Estudiante(Persona)
        |
        v
    hereda de
        |
        v
      Persona
```

```text
TypeScript

Estudiante extends Persona
        |
        v
    hereda de
        |
        v
      Persona
```

---

# 24. Sobrescritura de métodos

Una clase hija puede reemplazar el comportamiento de un método heredado.

Esto se conoce como **sobrescritura de métodos** u **overriding**.

## Python

```python
class Persona:

    def presentarse(self):
        print("Soy una persona")


class Estudiante(Persona):

    def presentarse(self):
        print("Soy un estudiante")
```

Uso:

```python
persona = Persona()
estudiante = Estudiante()

persona.presentarse()
estudiante.presentarse()
```

Resultado:

```text
Soy una persona
Soy un estudiante
```

---

# 25. Sobrescritura en TypeScript

```typescript
class Persona {

    presentarse(): void {
        console.log("Soy una persona");
    }
}


class Estudiante extends Persona {

    override presentarse(): void {
        console.log("Soy un estudiante");
    }
}
```

Uso:

```typescript
const persona = new Persona();
const estudiante = new Estudiante();

persona.presentarse();
estudiante.presentarse();
```

Resultado:

```text
Soy una persona
Soy un estudiante
```

---

# 26. Herencia y `protected`

La herencia se relaciona directamente con el modificador `protected`.

Un atributo protegido puede ser utilizado por:

```text
Clase padre
     +
Clases hijas
```

pero no debería utilizarse directamente desde fuera.

---

# 27. `protected` en TypeScript

```typescript
class Persona {

    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}


class Estudiante extends Persona {

    mostrarNombre(): void {
        console.log(this.nombre);
    }
}
```

Esto funciona:

```typescript
const ana = new Estudiante("Ana");

ana.mostrarNombre();
```

Pero desde fuera de la clase no podemos hacer:

```typescript
console.log(ana.nombre);
```

porque `nombre` está declarado como `protected`.

---

# 28. Convención de atributos protegidos en Python

Python utiliza generalmente `_` como convención:

```python
class Persona:

    def __init__(self, nombre):
        self._nombre = nombre


class Estudiante(Persona):

    def mostrar_nombre(self):
        print(self._nombre)
```

Uso:

```python
ana = Estudiante("Ana")

ana.mostrar_nombre()
```

El `_` comunica que el atributo debería utilizarse internamente o desde clases relacionadas.

---

# 29. Encapsulamiento + Herencia

Podemos combinar ambos conceptos.

```text
                  Persona
             ----------------
             - datos internos
             ----------------
             + métodos
                  |
                  |
              herencia
                  |
                  v
              Estudiante
```

La clase padre puede proteger determinados atributos y ofrecer métodos para trabajar con ellos.

Las clases hijas reutilizan esos comportamientos y pueden incorporar nuevos.

---

# 30. Ejemplo completo en Python

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.__edad = edad

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, valor):

        if valor >= 0:
            self.__edad = valor
        else:
            print("Edad inválida")

    def presentarse(self):
        print(f"Soy {self.nombre}")


class Estudiante(Persona):

    def __init__(self, nombre, edad, carrera):

        super().__init__(nombre, edad)

        self.carrera = carrera

    def estudiar(self):
        print(f"{self.nombre} está estudiando")
```

Uso:

```python
ana = Estudiante(
    "Ana",
    20,
    "Ingeniería Informática"
)

ana.presentarse()

print(ana.edad)

ana.edad = 21

ana.estudiar()
```

Aquí encontramos:

```text
Clase
Objeto
Atributos
Métodos
Encapsulamiento
Getter
Setter
Herencia
super()
```

---

# 31. Ejemplo completo en TypeScript

```typescript
class Persona {

    public nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(valor: number) {

        if (valor >= 0) {
            this._edad = valor;
        } else {
            console.log("Edad inválida");
        }

    }

    presentarse(): void {
        console.log(`Soy ${this.nombre}`);
    }
}


class Estudiante extends Persona {

    carrera: string;

    constructor(
        nombre: string,
        edad: number,
        carrera: string
    ) {

        super(nombre, edad);

        this.carrera = carrera;
    }

    estudiar(): void {
        console.log(`${this.nombre} está estudiando`);
    }
}
```

Uso:

```typescript
const ana = new Estudiante(
    "Ana",
    20,
    "Ingeniería Informática"
);

ana.presentarse();

console.log(ana.edad);

ana.edad = 21;

ana.estudiar();
```

---

# 32. Resumen

## Encapsulamiento

```text
Protege y controla el estado interno de un objeto.
```

## Getter

```text
Permite consultar un atributo controladamente.
```

## Setter

```text
Permite modificar un atributo controladamente.
Puede incorporar validaciones.
```

## Herencia

```text
Permite que una clase especializada reutilice
atributos y métodos de una clase más general.
```

## `super()`

```text
Permite acceder al comportamiento de la clase padre.
```

---

# 33. Comparación final

| Concepto | Python | TypeScript |
|---|---|---|
| Clase | `class Persona:` | `class Persona {}` |
| Constructor | `__init__()` | `constructor()` |
| Instancia actual | `self` | `this` |
| Privado | `__atributo` | `private atributo` |
| Protegido | `_atributo` por convención | `protected atributo` |
| Getter | `@property` | `get` |
| Setter | `@x.setter` | `set` |
| Herencia | `class B(A)` | `class B extends A` |
| Constructor padre | `super().__init__()` | `super()` |
| Sobrescritura | redefinir método | `override` |

---

# 34. Idea clave

No debemos pensar la POO solamente como clases con atributos.

La idea es diseñar objetos que:

```text
1. Mantengan un estado.
2. Protejan ese estado.
3. Definan operaciones válidas.
4. Reutilicen comportamiento cuando exista una relación "es-un".
```

Por ejemplo:

```text
                Persona
               /       \
              /         \
      Estudiante        Docente

       ES UNA            ES UNA
       Persona           Persona
```

Mientras que el encapsulamiento responde a:

```text
¿Cómo protegemos el estado de cada objeto?
```

la herencia responde a:

```text
¿Cómo reutilizamos y especializamos el comportamiento
de clases relacionadas?
```