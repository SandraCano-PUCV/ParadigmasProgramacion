# Programación Orientada a Objetos (POO) en Python

## 1. Introducción

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza un programa mediante **objetos**.  
Cada objeto combina dos aspectos principales:

- **Estado:** los datos que describen al objeto.
- **Comportamiento:** las acciones que el objeto puede realizar.

En Python, normalmente el estado se representa mediante **atributos** y el comportamiento mediante **métodos**.

```text
Objeto
│
├── Estado
│   └── atributos
│
└── Comportamiento
    └── métodos
```

Por ejemplo, si queremos representar un automóvil:

```text
Auto
│
├── Atributos
│   ├── color
│   ├── marca
│   └── velocidad
│
└── Métodos
    ├── arrancar()
    ├── acelerar()
    └── frenar()
```

La POO ayuda a organizar programas complejos en unidades relacionadas con las entidades del problema que se desea resolver.

---

# 2. ¿Qué es una clase?

Una **clase** es una definición o plantilla que especifica qué características y comportamientos tendrán los objetos creados a partir de ella.

En Python se utiliza la palabra reservada:

```python
class
```

Ejemplo:

```python
class Persona:
    pass
```

Aquí hemos definido una clase llamada `Persona`.

Todavía no hemos creado ninguna persona concreta.

Podemos entenderlo así:

```text
Clase
  ↓
Plantilla general
  ↓
define cómo serán los objetos
```

Por ejemplo, una clase `Persona` podría definir:

```text
Persona
│
├── nombre
├── edad
├── hablar()
└── caminar()
```

La clase describe la estructura general, pero no representa todavía una persona específica.

---

# 3. ¿Qué es un objeto?

Un **objeto** es una entidad concreta creada a partir de una clase.

Por ejemplo:

```python
class Persona:
    pass

ana = Persona()
```

Aquí:

```text
Persona
   ↓
Clase

ana
   ↓
Variable que referencia un objeto Persona
```

Podemos crear más de un objeto:

```python
ana = Persona()
pedro = Persona()
maria = Persona()
```

Aunque todos fueron creados a partir de la misma clase, son objetos diferentes.

---

# 4. ¿Qué es una instancia?

Una **instancia** es un objeto concreto creado a partir de una clase.

Por ejemplo:

```python
ana = Persona()
pedro = Persona()
```

Tanto el objeto referenciado por `ana` como el objeto referenciado por `pedro` son **instancias de la clase `Persona`**.

```text
                 Persona
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
        objeto            objeto
        "Ana"             "Pedro"
          │                 │
          └──── instancias ─┘
                de Persona
```

Una forma sencilla de recordarlo es:

> **Clase = definición general. Instancia = objeto concreto creado a partir de esa definición.**

Es importante ser precisos:

```python
ana = Persona()
```

- `Persona()` crea un objeto.
- Ese objeto es una instancia de `Persona`.
- `ana` es una variable que referencia ese objeto.

---

# 5. Atributos: el estado de un objeto

Los **atributos** almacenan información asociada a un objeto.

Por ejemplo:

```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
```

Ahora podemos crear:

```python
ana = Persona("Ana", 20)
pedro = Persona("Pedro", 22)
```

Cada instancia mantiene su propio estado:

```text
ana
├── nombre = "Ana"
└── edad = 20

pedro
├── nombre = "Pedro"
└── edad = 22
```

Podemos consultar los atributos utilizando el operador punto:

```python
print(ana.nombre)
print(ana.edad)
```

Salida:

```text
Ana
20
```

También podemos modificarlos:

```python
ana.edad = 21
print(ana.edad)
```

---

# 6. Métodos: el comportamiento de un objeto

Un **método** es una función definida dentro de una clase.

Los métodos representan acciones que los objetos pueden realizar.

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print("Hola, soy", self.nombre)
```

Crear una instancia:

```python
ana = Persona("Ana", 20)
```

Ejecutar el método:

```python
ana.saludar()
```

Salida:

```text
Hola, soy Ana
```

Conceptualmente:

```text
Objeto ana
│
├── nombre = "Ana"
├── edad = 20
│
└── saludar()
```

---

# 7. ¿Qué es `__init__`?

En Python, `__init__` es un **método especial** que se ejecuta automáticamente después de crear una instancia.

Su función habitual es **inicializar el estado del objeto**.

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
```

Cuando ejecutamos:

```python
ana = Persona("Ana", 20)
```

Python llama automáticamente a:

```python
__init__()
```

y se asignan:

```text
nombre = "Ana"
edad = 20
```

En cursos introductorios suele llamarse informalmente “constructor”, pero técnicamente `__init__` es principalmente un **método de inicialización**.

El proceso puede entenderse así:

```text
Persona("Ana", 20)
        ↓
se crea la instancia
        ↓
se ejecuta __init__
        ↓
se inicializan los atributos
```

---

# 8. ¿Qué significa `self`?

`self` representa la **instancia actual** que está ejecutando un método.

Ejemplo:

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print("Hola, soy", self.nombre)
```

Creamos:

```python
ana = Persona("Ana")
pedro = Persona("Pedro")
```

Cuando hacemos:

```python
ana.saludar()
```

conceptualmente:

```text
self → ana
```

Cuando hacemos:

```python
pedro.saludar()
```

conceptualmente:

```text
self → pedro
```

Por eso:

```python
self.nombre
```

significa:

> acceder al atributo `nombre` de la instancia que está ejecutando el método.

---

# 9. Parámetros del método y atributos del objeto

Es importante distinguir:

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
```

Aquí:

```text
nombre
edad
```

son **parámetros** del método.

Mientras que:

```text
self.nombre
self.edad
```

son **atributos de la instancia**.

Podemos visualizarlo así:

```text
Persona("Ana", 20)

"Uso temporal como parámetros"
nombre = "Ana"
edad = 20
        ↓
__init__
        ↓
self.nombre = "Ana"
self.edad = 20
        ↓
quedan almacenados en el objeto
```

---

# 10. Clase, objeto, instancia, atributo y método

Ejemplo completo:

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola, soy {self.nombre}")


ana = Persona("Ana", 20)
ana.saludar()
```

Podemos identificar:

```text
Persona
   ↓
Clase

ana
   ↓
Variable que referencia una instancia

nombre y edad
   ↓
Atributos

saludar()
   ↓
Método

__init__()
   ↓
Método especial de inicialización

self
   ↓
Referencia a la instancia actual
```

---

# 11. Crear varias instancias

Una de las ventajas de una clase es que permite crear múltiples objetos con la misma estructura.

```python
class Estudiante:

    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota

    def mostrar(self):
        print(self.nombre, self.nota)
```

Crear objetos:

```python
ana = Estudiante("Ana", 5.8)
pedro = Estudiante("Pedro", 6.2)
maria = Estudiante("María", 4.9)
```

Cada objeto posee sus propios datos.

```python
ana.mostrar()
pedro.mostrar()
maria.mostrar()
```

Salida:

```text
Ana 5.8
Pedro 6.2
María 4.9
```

---

# 12. Atributos de instancia y atributos de clase

## 12.1 Atributos de instancia

Son atributos propios de cada objeto.

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre
```

Cada instancia puede tener un valor distinto:

```python
ana = Persona("Ana")
pedro = Persona("Pedro")
```

```text
ana.nombre   → "Ana"
pedro.nombre → "Pedro"
```

## 12.2 Atributos de clase

Un atributo de clase pertenece a la clase y puede ser compartido por sus instancias.

```python
class Persona:

    especie = "Humano"

    def __init__(self, nombre):
        self.nombre = nombre
```

Uso:

```python
ana = Persona("Ana")
pedro = Persona("Pedro")

print(ana.especie)
print(pedro.especie)
```

Resultado:

```text
Humano
Humano
```

Conceptualmente:

```text
Persona
├── especie = "Humano"       ← atributo de clase
│
├── ana
│   └── nombre = "Ana"       ← atributo de instancia
│
└── pedro
    └── nombre = "Pedro"     ← atributo de instancia
```

---

# 13. Métodos especiales y doble guion bajo

Python posee métodos con nombres especiales como:

```python
__init__()
__str__()
__len__()
__eq__()
```

Estos nombres comienzan y terminan con doble guion bajo:

```text
__nombre__
```

Se conocen informalmente como **dunder methods** (*double underscore methods*).

No son métodos que debamos inventar libremente. Python les asigna significados especiales.

## Ejemplo: `__str__`

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return f"Persona: {self.nombre}"
```

Uso:

```python
ana = Persona("Ana")
print(ana)
```

Salida:

```text
Persona: Ana
```

Python utiliza `__str__` para obtener una representación textual del objeto.

---

# 14. Un solo guion bajo y doble guion bajo

En Python también podemos encontrar:

```python
_nombre
__nombre
__nombre__
```

No significan lo mismo.

## `_nombre`

Un solo guion bajo inicial es una **convención** que indica que el atributo está pensado para uso interno.

```python
self._edad
```

Python no impide acceder a él desde fuera.

## `__nombre`

Dos guiones bajos al inicio activan un mecanismo denominado **name mangling**.

```python
self.__edad
```

Python transforma internamente el nombre de forma parecida a:

```text
_Persona__edad
```

Esto ayuda a evitar accesos o colisiones accidentales, pero no constituye privacidad absoluta.

## `__nombre__`

Dos guiones bajos al inicio y al final corresponden normalmente a nombres especiales definidos por Python:

```python
__init__
__str__
__len__
```

---

# 15. Encapsulamiento

El **encapsulamiento** consiste en agrupar datos y operaciones dentro de una unidad y controlar la forma en que se accede al estado interno.

En Python no existe un `private` obligatorio como en otros lenguajes, pero se utilizan convenciones.

Ejemplo:

```python
class Cuenta:

    def __init__(self, saldo):
        self._saldo = saldo

    def depositar(self, monto):
        if monto > 0:
            self._saldo += monto

    def obtener_saldo(self):
        return self._saldo
```

Uso:

```python
cuenta = Cuenta(1000)

cuenta.depositar(500)

print(cuenta.obtener_saldo())
```

Salida:

```text
1500
```

La idea es que el objeto controle las operaciones válidas sobre su estado.

---

# 16. Validar el estado de un objeto

Una clase puede incluir restricciones de dominio.

Por ejemplo, una nota en una escala de 1.0 a 7.0:

```python
class Estudiante:

    def __init__(self, nombre, nota):

        if nota < 1.0 or nota > 7.0:
            raise ValueError("La nota debe estar entre 1.0 y 7.0")

        self.nombre = nombre
        self.nota = nota
```

Uso correcto:

```python
ana = Estudiante("Ana", 5.8)
```

Uso incorrecto:

```python
pedro = Estudiante("Pedro", 10)
```

Generará:

```text
ValueError
```

Esto muestra una idea importante:

> Una clase no solamente almacena datos; también puede proteger las reglas que deben cumplir esos datos.

---

# 17. Herencia

La **herencia** permite crear una nueva clase a partir de otra.

Por ejemplo:

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print("Hola, soy", self.nombre)
```

Podemos crear una subclase:

```python
class Estudiante(Persona):

    def estudiar(self):
        print("Estoy estudiando")
```

Uso:

```python
ana = Estudiante("Ana")

ana.saludar()
ana.estudiar()
```

`Estudiante` hereda el método `saludar()` de `Persona`.

```text
Persona
│
├── nombre
└── saludar()
     ↑
     │ herencia
     │
Estudiante
└── estudiar()
```

---

# 18. `super()`

Cuando una subclase necesita reutilizar el método de inicialización de la clase padre se utiliza `super()`.

```python
class Persona:

    def __init__(self, nombre):
        self.nombre = nombre


class Estudiante(Persona):

    def __init__(self, nombre, carrera):

        super().__init__(nombre)

        self.carrera = carrera
```

Uso:

```python
ana = Estudiante("Ana", "Informática")

print(ana.nombre)
print(ana.carrera)
```

---

# 19. Polimorfismo

El **polimorfismo** permite trabajar con distintos objetos mediante una interfaz o comportamiento común.

Ejemplo:

```python
class Perro:

    def hablar(self):
        print("Guau")


class Gato:

    def hablar(self):
        print("Miau")
```

Podemos hacer:

```python
animales = [
    Perro(),
    Gato()
]

for animal in animales:
    animal.hablar()
```

Salida:

```text
Guau
Miau
```

Ambas clases implementan:

```python
hablar()
```

aunque su comportamiento es diferente.

---

# 20. Duck typing

Python utiliza con frecuencia una idea conocida como **duck typing**.

La idea informal es:

> Si un objeto posee las operaciones que necesito, puedo usarlo.

Por ejemplo:

```python
def hacer_hablar(objeto):
    objeto.hablar()
```

Esta función no pregunta cuál es la clase exacta del objeto.

Solo espera que exista:

```python
hablar()
```

Entonces:

```python
hacer_hablar(Perro())
hacer_hablar(Gato())
```

funciona porque ambos objetos ofrecen el método requerido.

---

# 21. Abstracción

La **abstracción** consiste en mostrar las operaciones importantes de una entidad y ocultar detalles innecesarios de implementación.

Por ejemplo, una pila puede definirse conceptualmente mediante:

```text
Pila
│
├── agregar()
├── sacar()
└── esta_vacia()
```

Quien utiliza la pila no necesita saber cómo almacena internamente sus elementos.

Una implementación sencilla:

```python
class Pila:

    def __init__(self):
        self._datos = []

    def agregar(self, elemento):
        self._datos.append(elemento)

    def sacar(self):
        return self._datos.pop()

    def esta_vacia(self):
        return len(self._datos) == 0
```

Uso:

```python
pila = Pila()

pila.agregar(10)
pila.agregar(20)

print(pila.sacar())
```

---

# 22. Composición

La **composición** ocurre cuando un objeto contiene otros objetos.

Por ejemplo:

```python
class Motor:

    def encender(self):
        print("Motor encendido")


class Auto:

    def __init__(self):
        self.motor = Motor()

    def arrancar(self):
        self.motor.encender()
```

Uso:

```python
auto = Auto()
auto.arrancar()
```

Aquí:

```text
Auto
└── tiene un Motor
```

Esto representa una relación:

```text
"tiene un"
```

mientras que la herencia suele representar una relación:

```text
"es un"
```

Ejemplos:

```text
Estudiante es una Persona
Auto tiene un Motor
```

---

# 23. Métodos de instancia

Los métodos normales reciben `self`.

```python
class Persona:

    def saludar(self):
        print("Hola")
```

Se ejecutan sobre una instancia:

```python
ana.saludar()
```

---

# 24. Métodos de clase

Un método de clase utiliza:

```python
@classmethod
```

y recibe normalmente `cls`.

```python
class Persona:

    cantidad = 0

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.cantidad += 1

    @classmethod
    def obtener_cantidad(cls):
        return cls.cantidad
```

Uso:

```python
Persona("Ana")
Persona("Pedro")

print(Persona.obtener_cantidad())
```

Resultado:

```text
2
```

Aquí:

```text
self → instancia
cls  → clase
```

---

# 25. Métodos estáticos

Un método estático se declara mediante:

```python
@staticmethod
```

No recibe automáticamente ni `self` ni `cls`.

```python
class Calculadora:

    @staticmethod
    def sumar(a, b):
        return a + b
```

Uso:

```python
resultado = Calculadora.sumar(5, 3)

print(resultado)
```

---

# 26. `dataclass`

Cuando una clase se utiliza principalmente para almacenar datos, Python ofrece `dataclass`.

```python
from dataclasses import dataclass


@dataclass
class Estudiante:
    nombre: str
    edad: int
    promedio: float
```

Crear:

```python
ana = Estudiante(
    nombre="Ana",
    edad=20,
    promedio=5.8
)
```

Python genera automáticamente varios métodos útiles, como un `__init__` apropiado y una representación textual.

---

# 27. Ejemplo integrador

```python
class Estudiante:

    institucion = "Universidad"

    def __init__(self, nombre, edad, nota):

        if nota < 1.0 or nota > 7.0:
            raise ValueError("Nota inválida")

        self.nombre = nombre
        self.edad = edad
        self.nota = nota

    def esta_aprobado(self):
        return self.nota >= 4.0

    def mostrar_estado(self):

        if self.esta_aprobado():
            estado = "Aprobado"
        else:
            estado = "Reprobado"

        print(
            self.nombre,
            "-",
            self.nota,
            "-",
            estado
        )


ana = Estudiante("Ana", 20, 5.8)
pedro = Estudiante("Pedro", 21, 3.5)

ana.mostrar_estado()
pedro.mostrar_estado()
```

Salida:

```text
Ana - 5.8 - Aprobado
Pedro - 3.5 - Reprobado
```

En este ejemplo podemos identificar:

```text
Clase
    Estudiante

Atributo de clase
    institucion

Atributos de instancia
    nombre
    edad
    nota

Método especial
    __init__()

Métodos
    esta_aprobado()
    mostrar_estado()

Instancias
    ana
    pedro

Restricción de dominio
    1.0 <= nota <= 7.0
```

---

# 28. Resumen conceptual

```text
                  POO
                   │
                   ▼
                 Clase
                   │
          ┌────────┴────────┐
          ▼                 ▼
       instancia         instancia
          │                 │
          ▼                 ▼
        objeto            objeto
          │
     ┌────┴────┐
     ▼         ▼
   estado   comportamiento
     │         │
 atributos   métodos
```

Conceptos principales:

| Concepto | Significado |
|---|---|
| Clase | Plantilla o definición |
| Objeto | Entidad concreta |
| Instancia | Objeto creado a partir de una clase |
| Atributo | Dato asociado al objeto |
| Método | Función asociada a una clase |
| `self` | Referencia a la instancia actual |
| `__init__` | Método especial de inicialización |
| Encapsulamiento | Control del acceso y modificación del estado |
| Herencia | Crear una clase basada en otra |
| Polimorfismo | Distintos objetos responden a operaciones comunes |
| Abstracción | Mostrar qué hace una entidad ocultando detalles internos |
| Composición | Un objeto contiene otros objetos |

---

# 29. Ejercicios

## Ejercicio 1: Libro

Crear una clase:

```text
Libro
```

con los atributos:

```text
titulo
autor
anio
```

y un método:

```text
mostrar_informacion()
```

Crear dos instancias diferentes.

---

## Ejercicio 2: Cuenta bancaria

Crear una clase:

```text
Cuenta
```

con:

```text
titular
saldo
```

Métodos:

```text
depositar()
retirar()
mostrar_saldo()
```

Restricciones:

- No permitir depósitos negativos.
- No permitir retiros mayores que el saldo disponible.

---

## Ejercicio 3: Estudiante

Crear una clase:

```text
Estudiante
```

con:

```text
nombre
notas
```

Métodos:

```text
agregar_nota()
promedio()
esta_aprobado()
```

Las notas deben estar entre:

```text
1.0 y 7.0
```

---

## Ejercicio 4: Herencia

Crear:

```text
Persona
```

con:

```text
nombre
edad
```

Después crear:

```text
Estudiante(Persona)
```

que además tenga:

```text
carrera
```

Agregar un método:

```text
mostrar_informacion()
```

---

# 30. Preguntas de comprensión

1. ¿Cuál es la diferencia entre una clase y un objeto?
2. ¿Qué significa que un objeto sea una instancia de una clase?
3. ¿Qué diferencia existe entre un atributo y un método?
4. ¿Para qué se utiliza `__init__`?
5. ¿Qué representa `self`?
6. ¿Cuál es la diferencia entre un atributo de clase y uno de instancia?
7. ¿Qué significa `_atributo` en Python?
8. ¿Qué ocurre con `__atributo`?
9. ¿Qué son los métodos especiales como `__init__` o `__str__`?
10. ¿Qué diferencia existe entre herencia y composición?
11. ¿Qué es polimorfismo?
12. ¿Qué significa duck typing?
13. ¿Cómo puede una clase proteger restricciones de dominio?
14. ¿Qué diferencia existe entre un método de instancia, uno de clase y uno estático?

---

# Idea final

> La Programación Orientada a Objetos permite modelar un problema mediante entidades que poseen **estado** y **comportamiento**. En Python, las clases definen esas entidades y cada objeto creado a partir de una clase constituye una instancia independiente con sus propios atributos y acceso a los métodos definidos por la clase.
