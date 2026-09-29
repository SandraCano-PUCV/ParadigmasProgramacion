# Práctico de Programación Orientada a Objetos en Python

# Práctico: Introducción a la Programación Orientada a Objetos en Python

## Objetivo

Trabajar de forma práctica los conceptos iniciales de Programación Orientada a Objetos en Python:

- clases;
- objetos;
- atributos;
- métodos;
- constructor `__init__`;
- uso de `self`;
- modificación del estado de un objeto.

> En este práctico no se trabaja todavía con herencia, encapsulamiento ni composición.

---

# Ejercicio 1. Una clase simple

Observa la siguiente clase:

```python
class Mascota:

    def __init__(self, nombre, tipo):
        self.nombre = nombre
        self.tipo = tipo

    def mostrar_datos(self):
        print(f"Nombre: {self.nombre}")
        print(f"Tipo: {self.tipo}")


mascota1 = Mascota("Luna", "Perro")
mascota2 = Mascota("Milo", "Gato")

mascota1.mostrar_datos()
mascota2.mostrar_datos()
```

## Actividad

1. Ejecuta el programa.
2. Cambia los datos de `mascota1`.
3. Crea un tercer objeto llamado `mascota3`.
4. Muestra los datos de los tres objetos.

## Preguntas

1. ¿Cuál es el nombre de la clase?
2. ¿Cuántos objetos se crean?
3. ¿Cuáles son los atributos de la clase?
4. ¿Cuál es el método definido?
5. ¿Qué diferencia existe entre `Mascota` y `mascota1`?
6. ¿Qué función cumple `self.nombre`?

---

# Ejercicio 2. Agregar un atributo

Utiliza la clase `Mascota` del ejercicio anterior.

## Actividad

Agrega un nuevo atributo:

```python
edad
```

El constructor debe quedar preparado para recibir:

```text
nombre
tipo
edad
```

Luego modifica:

```python
mostrar_datos()
```

para mostrar también la edad de la mascota.

Crea los siguientes objetos:

```text
Luna - Perro - 4 años
Milo - Gato - 2 años
Kiwi - Ave - 1 año
```

## Preguntas

1. ¿Qué parte del constructor fue necesario modificar?
2. ¿Por qué fue necesario cambiar también la creación de los objetos?
3. ¿Cada objeto posee su propio valor de `edad`?
4. ¿Qué ocurriría si intentas crear una mascota sin entregar la edad?
5. ¿Agregar un atributo modifica la clase, los objetos o ambos?

---

# Ejercicio 3. Agregar un método

Continúa utilizando la clase `Mascota`.

Agrega un nuevo método:

```python
def cumplir_anios(self):
    self.edad = self.edad + 1
```

## Actividad

Ejecuta:

```python
mascota1.mostrar_datos()

mascota1.cumplir_anios()

mascota1.mostrar_datos()
```

Luego:

1. Ejecuta `cumplir_anios()` dos veces más.
2. Comprueba el valor final de `edad`.
3. Ejecuta el método sobre `mascota2`.

## Preguntas

1. ¿Qué atributo modifica `cumplir_anios()`?
2. ¿El cambio realizado sobre `mascota1` modifica también a `mascota2`?
3. ¿Por qué?
4. ¿Cuál es el estado del objeto antes y después de ejecutar el método?
5. ¿Qué diferencia existe entre un atributo y un método?

---

# Ejercicio 4. Modificar directamente un atributo

Considera:

```python
class Estudiante:

    def __init__(self, nombre, carrera):
        self.nombre = nombre
        self.carrera = carrera

    def mostrar_datos(self):
        print(f"{self.nombre} estudia {self.carrera}")


estudiante1 = Estudiante("Daniela", "Informática")
```

## Actividad

Ejecuta:

```python
estudiante1.mostrar_datos()
```

Después modifica directamente el atributo:

```python
estudiante1.carrera = "Ingeniería Civil"
```

y vuelve a ejecutar:

```python
estudiante1.mostrar_datos()
```

## Preguntas

1. ¿Fue necesario crear nuevamente el objeto?
2. ¿Qué valor tenía `carrera` inicialmente?
3. ¿Qué valor tiene después de la modificación?
4. ¿Qué significa decir que un objeto puede cambiar de estado?
5. ¿Cómo accederías solamente al nombre del estudiante?

---

# Ejercicio 5. Modificar un atributo mediante un método

Modifica la clase `Estudiante` agregando:

```python
def cambiar_carrera(self, nueva_carrera):
    self.carrera = nueva_carrera
```

## Actividad

Prueba:

```python
estudiante1.cambiar_carrera("Ingeniería Electrónica")
estudiante1.mostrar_datos()
```

Luego crea:

```python
estudiante2 = Estudiante("Tomás", "Ingeniería Mecánica")
```

Cambia su carrera utilizando el método.

## Preguntas

1. ¿Qué información recibe `cambiar_carrera()`?
2. ¿Qué representa `nueva_carrera`?
3. ¿Por qué el método necesita `self`?
4. ¿Qué diferencia existe entre:

```python
estudiante1.carrera = "Ingeniería Electrónica"
```

y:

```python
estudiante1.cambiar_carrera("Ingeniería Electrónica")
```

5. ¿Cuál de las dos formas permite concentrar mejor la lógica dentro de la clase?

---

# Ejercicio 6. Métodos que reciben valores

Crea la siguiente clase:

```python
class Producto:

    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def mostrar_datos(self):
        print(f"Producto: {self.nombre}")
        print(f"Precio: ${self.precio}")
```

## Actividad A

Agrega un método:

```python
def aumentar_precio(self, cantidad):
    self.precio = self.precio + cantidad
```

Prueba:

```python
producto1 = Producto("Teclado", 20000)

producto1.mostrar_datos()
producto1.aumentar_precio(5000)
producto1.mostrar_datos()
```

## Actividad B

Agrega ahora:

```python
def aplicar_descuento(self, descuento):
```

El parámetro `descuento` representa un porcentaje.

Por ejemplo:

```python
producto1.aplicar_descuento(10)
```

debe disminuir el precio en un `10%`.

## Preguntas

1. ¿Qué valor recibe el parámetro `cantidad`?
2. ¿Qué atributo cambia al ejecutar `aumentar_precio()`?
3. ¿Cuál debería ser el precio después de aumentar $5.000?
4. Si el precio es $25.000, ¿cuánto debería quedar después de un descuento del 10%?
5. ¿Por qué `descuento` no tiene que ser un atributo del objeto?

---

# Ejercicio 7. Un objeto con estado

Analiza la siguiente clase:

```python
class Lampara:

    def __init__(self, color):
        self.color = color
        self.encendida = False

    def encender(self):
        self.encendida = True

    def apagar(self):
        self.encendida = False

    def mostrar_estado(self):
        print(f"Color: {self.color}")
        print(f"Encendida: {self.encendida}")
```

## Actividad

Crea:

```python
lampara1 = Lampara("Azul")
```

Ejecuta en este orden:

```python
lampara1.mostrar_estado()
lampara1.encender()
lampara1.mostrar_estado()
lampara1.apagar()
lampara1.mostrar_estado()
```

Después agrega el atributo:

```python
intensidad
```

con valor inicial:

```python
50
```

Agrega un método:

```python
cambiar_intensidad(nueva_intensidad)
```

## Preguntas

1. ¿Por qué `encendida` puede considerarse parte del estado del objeto?
2. ¿Cuál es su valor inicial?
3. ¿Qué método cambia su valor a `True`?
4. ¿Qué atributos cambian durante la ejecución?
5. ¿Qué atributos permanecen iguales?
6. Si existen dos lámparas, ¿encender una debería encender también la otra? Explica.

---

# Ejercicio 8. Predecir antes de ejecutar

Observa:

```python
class Contador:

    def __init__(self):
        self.valor = 0

    def aumentar(self):
        self.valor = self.valor + 1

    def mostrar(self):
        print(self.valor)


contador1 = Contador()

contador1.aumentar()
contador1.aumentar()
contador1.aumentar()

contador1.mostrar()
```

## Preguntas antes de ejecutar

1. ¿Cuál será el valor mostrado?
2. ¿Cuál es el valor inicial de `valor`?
3. ¿Cuántas veces se ejecuta `aumentar()`?
4. ¿Qué línea modifica el estado del objeto?

Ahora ejecuta el programa y comprueba tus respuestas.

## Modificación

Agrega:

```python
def disminuir(self):
```

que disminuya el valor en `1`.

Después agrega:

```python
def reiniciar(self):
```

que vuelva el contador a `0`.

---

# Ejercicio 9. Robot con batería

Crea una clase:

```python
class Robot:

    def __init__(self, nombre):
        self.nombre = nombre
        self.bateria = 100
```

Agrega:

```python
def mostrar_estado(self):
    print(f"Robot: {self.nombre}")
    print(f"Batería: {self.bateria}%")
```

## Actividad A

Agrega un método:

```python
mover()
```

Cada vez que el robot se mueve debe consumir `10%` de batería.

Ejemplo:

```text
Batería inicial: 100
Después de mover: 90
Después de mover: 80
```

## Actividad B

Modifica `mover()` para mostrar:

```text
El robot se está moviendo
```

## Actividad C

Agrega:

```python
recargar()
```

que deje nuevamente la batería en `100`.

## Preguntas

1. ¿Qué atributo cambia cada vez que se ejecuta `mover()`?
2. ¿Qué atributo no cambia?
3. ¿Qué debería ocurrir después de ejecutar `mover()` tres veces?
4. ¿Qué método recupera el estado inicial de la batería?
5. ¿Qué ocurriría si ejecutas `mover()` once veces?
6. ¿Qué modificación podrías realizar para evitar una batería negativa?

---

# Ejercicio 10. Completar una clase

Completa el siguiente código:

```python
class Videojuego:

    def __init__(self, titulo, puntos):
        # completar

    def mostrar_datos(self):
        # completar

    def sumar_puntos(self, cantidad):
        # completar


juego1 = Videojuego("Python Quest", 0)

juego1.mostrar_datos()
juego1.sumar_puntos(100)
juego1.mostrar_datos()
```

## Actividad

Después de completar el código:

1. Agrega un atributo llamado `nivel`.
2. El nivel inicial debe ser `1`.
3. Crea un método llamado `subir_nivel()`.
4. Cada vez que se ejecute, el nivel debe aumentar en `1`.
5. Modifica `mostrar_datos()` para mostrar título, puntos y nivel.

## Preguntas

1. ¿Qué atributos posee ahora la clase?
2. ¿Cuáles son sus métodos?
3. ¿Qué atributos cambian durante la ejecución?
4. ¿Cuál es el constructor?
5. ¿Qué datos se entregan al momento de crear `juego1`?
6. ¿Por qué `nivel` puede comenzar en `1` aunque no se entregue al constructor?

---

# Ejercicio 11. Corregir el programa

El siguiente código contiene errores:

```python
class Vehiculo:

    def __init__(marca, velocidad):
        self.marca = marca
        self.velocidad = velocidad

    def acelerar():
        velocidad = velocidad + 10


auto1 = Vehiculo("Toyota", 0)

auto1.acelerar()

print(auto1.velocidad)
```

## Actividad

1. Identifica los errores.
2. Corrige el constructor.
3. Corrige el método `acelerar()`.
4. Haz que el programa muestre:

```text
10
```

5. Ejecuta `acelerar()` tres veces y comprueba la velocidad final.

## Preguntas

1. ¿Qué parámetro falta en el constructor?
2. ¿Qué parámetro falta en `acelerar()`?
3. ¿Por qué se debe utilizar `self.velocidad`?
4. ¿Cuál debería ser la velocidad después de tres llamadas a `acelerar()`?

---

# Ejercicio 12. Diseñar una clase desde cero

Diseña una clase llamada:

```python
Celular
```

Debe representar un teléfono celular.

## Requisitos iniciales

Define al menos tres atributos, por ejemplo:

- `marca`
- `modelo`
- `bateria`

Define al menos tres métodos.

Uno de ellos debe:

- mostrar los datos;

otro debe:

- modificar la batería;

y otro debe realizar una acción que tú decidas.

## Segunda etapa

Después de que la clase funcione:

1. Agrega un nuevo atributo.
2. Modifica el constructor.
3. Modifica `mostrar_datos()`.
4. Agrega un nuevo método.
5. Crea dos objetos con valores diferentes.
6. Ejecuta los métodos sobre ambos objetos.

## Preguntas

1. ¿Qué representa la clase `Celular`?
2. ¿Qué representan los dos objetos creados?
3. ¿Qué atributos son iguales entre los objetos?
4. ¿Qué atributos poseen valores diferentes?
5. ¿Qué método cambia el estado del objeto?
6. ¿Qué cambio fue necesario realizar al agregar un nuevo atributo?
7. ¿Fue necesario modificar todos los métodos? Explica.

---

# Ejercicio final. Modificar una clase existente

Parte del siguiente código:

```python
class Personaje:

    def __init__(self, nombre, energia):
        self.nombre = nombre
        self.energia = energia

    def mostrar_estado(self):
        print(f"{self.nombre}: {self.energia} puntos de energía")

    def correr(self):
        self.energia = self.energia - 10
```

## Parte 1

Crea:

```python
personaje1 = Personaje("Alex", 100)
```

Ejecuta `correr()` dos veces y muestra su estado.

### Preguntas

1. ¿Cuál es la energía inicial?
2. ¿Cuál será la energía final?
3. ¿Qué método cambia el estado del objeto?

---

## Parte 2

Agrega un nuevo atributo:

```python
vidas
```

Su valor inicial debe ser:

```python
3
```

Modifica `mostrar_estado()` para mostrar también las vidas.

### Preguntas

1. ¿Fue necesario agregar `vidas` como parámetro?
2. ¿Podría iniciarse directamente en `3` dentro de `__init__`?
3. ¿Qué diferencia habría entre ambas alternativas?

---

## Parte 3

Agrega:

```python
def descansar(self):
```

Cada vez que se ejecute debe aumentar la energía en `20`.

Prueba:

```python
personaje1.correr()
personaje1.descansar()
personaje1.mostrar_estado()
```

### Pregunta

¿Cuál debería ser el valor de energía después de estas operaciones?

---

## Parte 4

Modifica `correr()` para que no permita que la energía sea menor que `0`.

### Preguntas finales

1. ¿Qué es una clase?
2. ¿Qué es un objeto?
3. ¿Qué es un atributo?
4. ¿Qué es un método?
5. ¿Qué función cumple `__init__`?
6. ¿Para qué se utiliza `self`?
7. ¿Cómo puede un método modificar el estado de un objeto?
8. ¿Qué debes revisar cuando agregas un nuevo atributo a una clase?