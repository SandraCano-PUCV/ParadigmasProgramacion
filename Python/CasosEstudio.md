# Caso de Estudio: Tienda

## 1. Objetivo

Construir paso a paso un pequeño sistema de tienda utilizando los principales conceptos de **Programación Orientada a Objetos (POO)** en Python.

En esta práctica se aplicarán:

- clases y objetos;
- atributos y métodos;
- constructores;
- encapsulamiento;
- getters y setters con decoradores;
- herencia;
- composición;
- agregación;
- asociación;
- polimorfismo.

---

# 2. Problema a resolver

Una tienda necesita administrar productos y clientes.

El sistema debe permitir:

- registrar productos;
- consultar sus datos;
- modificar el precio de forma controlada;
- distinguir diferentes tipos de productos;
- mantener un inventario;
- asociar un cliente con un carrito;
- agregar productos al carrito;
- calcular subtotales y total de compra.

---

# 3. Clases principales

```text
Producto
ProductoFisico
ProductoDigital
Tienda
ItemInventario
Cliente
Carrito
ItemCarrito
```

Cada clase representa una responsabilidad distinta dentro del sistema.

---

# 4. Clase Producto y encapsulamiento

```python
class Producto:
    def __init__(self, codigo, nombre, precio):
        self.codigo = codigo
        self.nombre = nombre
        self.__precio = precio

    @property   
    def precio(self):
        return self.__precio

    @precio.setter
    def precio(self, nuevo_precio):
        if nuevo_precio <= 0:
            raise ValueError("El precio debe ser mayor que cero")

        self.__precio = nuevo_precio

    def mostrar_info(self):
        print(
            f"{self.codigo} | "
            f"{self.nombre} | "
            f"${self.precio}"
        )
```

El atributo:

```python
self.__precio
```

está encapsulado. En lugar de modificarlo directamente utilizamos un **getter** y un **setter**.

## Getter

```python
@property
def precio(self):
    return self.__precio
```

Permite:

```python
print(producto.precio)
```

## Setter

```python
@precio.setter
def precio(self, nuevo_precio):
    if nuevo_precio <= 0:
        raise ValueError("El precio debe ser mayor que cero")

    self.__precio = nuevo_precio
```

Permite:

```python
producto.precio = 25000
```

La clase controla si el nuevo valor es válido.

---

# 5. Decoradores en Python

Un decorador utiliza el símbolo `@` y permite modificar o extender el comportamiento de una función o método.

En este ejemplo:

```python
@property
```

convierte un método en una propiedad de lectura.

Mientras que:

```python
@precio.setter
```

define el comportamiento al modificar la propiedad.

```text
producto.precio
      |
      v
  @property
      |
      v
retorna __precio
```

```text
producto.precio = 25000
           |
           v
   @precio.setter
           |
           v
 valida y modifica
```

---

# 6. Herencia

La tienda vende distintos tipos de productos:

```text
            Producto
            /      \
           /        \
ProductoFisico    ProductoDigital
```

La relación es:

```text
ProductoFisico ES UN Producto
ProductoDigital ES UN Producto
```

Por lo tanto, corresponde utilizar **herencia**.

## Producto físico

```python
class ProductoFisico(Producto):

    def __init__(
        self,
        codigo,
        nombre,
        precio,
        peso,
        costo_despacho
    ):
        super().__init__(codigo, nombre, precio)

        self.peso = peso
        self.costo_despacho = costo_despacho

    def calcular_precio_final(self):
        return self.precio + self.costo_despacho
```

## Producto digital

```python
class ProductoDigital(Producto):

    def __init__(
        self,
        codigo,
        nombre,
        precio,
        formato
    ):
        super().__init__(codigo, nombre, precio)

        self.formato = formato

    def calcular_precio_final(self):
        return self.precio
```

`super()` permite utilizar el constructor de la clase padre.

---

# 7. Polimorfismo

Ambas subclases implementan el mismo método:

```python
calcular_precio_final()
```

pero el resultado depende del tipo concreto del objeto.

```python
productos = [
    ProductoFisico(
        "P001",
        "Teclado",
        30000,
        0.8,
        3000
    ),
    ProductoDigital(
        "P002",
        "Curso Python",
        15000,
        "PDF + Video"
    )
]

for producto in productos:
    print(producto.calcular_precio_final())
```

La misma llamada produce comportamientos diferentes. Eso corresponde a **polimorfismo**.

---

# 8. Tienda y productos: agregación

Una tienda **tiene productos**, pero esos productos pueden existir independientemente de la tienda.

```python
class Tienda:

    def __init__(self, nombre):
        self.nombre = nombre
        self.productos = []

    def agregar_producto(self, producto):
        self.productos.append(producto)

    def mostrar_productos(self):
        for producto in self.productos:
            producto.mostrar_info()
```

Uso:

```python
producto1 = ProductoFisico(
    "P001",
    "Teclado",
    30000,
    0.8,
    3000
)

tienda = Tienda("TecnoStore")
tienda.agregar_producto(producto1)
```

El producto fue creado fuera de la tienda y luego fue agregado.

Por eso la relación puede modelarse como:

```text
Tienda ◇──────── Producto
```

El rombo blanco representa **agregación**.

---

# 9. Composición: Tienda e ItemInventario

Si la tienda crea objetos internos que representan las unidades de su inventario, podemos modelar una relación más fuerte.

```python
class ItemInventario:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def mostrar_info(self):
        print(
            f"{self.producto.nombre} "
            f"- Stock: {self.cantidad}"
        )
```

La tienda crea los `ItemInventario`:

```python
class Tienda:

    def __init__(self, nombre):
        self.nombre = nombre
        self.inventario = []

    def agregar_producto(self, producto, cantidad):
        item = ItemInventario(
            producto,
            cantidad
        )

        self.inventario.append(item)

    def mostrar_inventario(self):
        for item in self.inventario:
            item.mostrar_info()
```

Conceptualmente:

```text
Tienda ◆──────── ItemInventario
```

El rombo negro representa **composición**.

---

# 10. Cliente y Carrito

Un cliente puede crear y poseer su carrito.

```python
class Carrito:

    def __init__(self):
        self.items = []

    def agregar_producto(
        self,
        producto,
        cantidad=1
    ):
        item = ItemCarrito(
            producto,
            cantidad
        )

        self.items.append(item)

    def calcular_total(self):
        total = 0

        for item in self.items:
            total += item.calcular_subtotal()

        return total
```

---

# 11. ItemCarrito

```python
class ItemCarrito:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def calcular_subtotal(self):
        return (
            self.producto.calcular_precio_final()
            * self.cantidad
        )
```

---

# 12. Clase Cliente

```python
class Cliente:

    def __init__(self, rut, nombre):
        self.rut = rut
        self.nombre = nombre
        self.carrito = Carrito()

    def mostrar_info(self):
        print(
            f"{self.rut} - {self.nombre}"
        )
```

Aquí:

```text
Cliente TIENE un Carrito
```

y el carrito se crea como parte del cliente.

```text
Cliente ◆──────── Carrito
```

---

# 13. Relaciones del sistema

```text
                    Producto
                   /        \
                  /          \
       ProductoFisico      ProductoDigital
              ↑
           HERENCIA


Tienda ◇──────── Producto
      agregación


Tienda ◆──────── ItemInventario
      composición


Cliente ◆─────── Carrito
      composición


Carrito ◆─────── ItemCarrito
      composición


ItemCarrito ──── Producto
      asociación
```

---

# 14. Herencia, composición, agregación y asociación

## Herencia

Pregunta:

```text
¿ES UN?
```

Ejemplo:

```text
ProductoDigital ES UN Producto
```

Entonces:

```text
HERENCIA
```

## Composición

Pregunta:

```text
¿TIENE una parte fuertemente dependiente?
```

Ejemplo:

```text
Cliente TIENE un Carrito
```

Entonces:

```text
COMPOSICIÓN
```

## Agregación

Pregunta:

```text
¿TIENE objetos que también pueden existir independientemente?
```

Ejemplo:

```text
Tienda TIENE Productos
```

Entonces:

```text
AGREGACIÓN
```

## Asociación

Pregunta:

```text
¿SE RELACIONA CON otro objeto?
```

Ejemplo:

```text
ItemCarrito se relaciona con Producto
```

Entonces:

```text
ASOCIACIÓN
```

---

# 15. Código integrado completo

```python
class Producto:

    def __init__(self, codigo, nombre, precio):
        self.codigo = codigo
        self.nombre = nombre
        self.__precio = precio

    @property
    def precio(self):
        return self.__precio

    @precio.setter
    def precio(self, nuevo_precio):
        if nuevo_precio <= 0:
            raise ValueError(
                "El precio debe ser mayor que cero"
            )

        self.__precio = nuevo_precio

    def mostrar_info(self):
        print(
            f"{self.codigo} | "
            f"{self.nombre} | "
            f"${self.precio}"
        )


class ProductoFisico(Producto):

    def __init__(
        self,
        codigo,
        nombre,
        precio,
        peso,
        costo_despacho
    ):
        super().__init__(
            codigo,
            nombre,
            precio
        )

        self.peso = peso
        self.costo_despacho = costo_despacho

    def calcular_precio_final(self):
        return self.precio + self.costo_despacho


class ProductoDigital(Producto):

    def __init__(
        self,
        codigo,
        nombre,
        precio,
        formato
    ):
        super().__init__(
            codigo,
            nombre,
            precio
        )

        self.formato = formato

    def calcular_precio_final(self):
        return self.precio


class ItemInventario:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def mostrar_info(self):
        print(
            f"{self.producto.nombre} "
            f"- Stock: {self.cantidad}"
        )


class Tienda:

    def __init__(self, nombre):
        self.nombre = nombre
        self.inventario = []

    def agregar_producto(
        self,
        producto,
        cantidad
    ):
        item = ItemInventario(
            producto,
            cantidad
        )

        self.inventario.append(item)

    def mostrar_inventario(self):
        print(f"\nInventario de {self.nombre}")

        for item in self.inventario:
            item.mostrar_info()


class ItemCarrito:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def calcular_subtotal(self):
        return (
            self.producto.calcular_precio_final()
            * self.cantidad
        )


class Carrito:

    def __init__(self):
        self.items = []

    def agregar_producto(
        self,
        producto,
        cantidad=1
    ):
        item = ItemCarrito(
            producto,
            cantidad
        )

        self.items.append(item)

    def calcular_total(self):
        total = 0

        for item in self.items:
            total += item.calcular_subtotal()

        return total

    def mostrar_carrito(self):
        print("\n--- CARRITO ---")

        for item in self.items:
            print(
                f"{item.producto.nombre} "
                f"x {item.cantidad} "
                f"= ${item.calcular_subtotal()}"
            )

        print(
            f"TOTAL: ${self.calcular_total()}"
        )


class Cliente:

    def __init__(self, rut, nombre):
        self.rut = rut
        self.nombre = nombre
        self.carrito = Carrito()

    def mostrar_info(self):
        print(
            f"{self.rut} - {self.nombre}"
        )


# Crear productos

teclado = ProductoFisico(
    "P001",
    "Teclado mecánico",
    30000,
    0.8,
    3000
)

curso = ProductoDigital(
    "P002",
    "Curso Python",
    15000,
    "PDF + Video"
)


# Crear tienda

tienda = Tienda("TecnoStore")

tienda.agregar_producto(
    teclado,
    10
)

tienda.agregar_producto(
    curso,
    100
)

tienda.mostrar_inventario()


# Crear cliente

cliente = Cliente(
    "12.345.678-9",
    "Ana"
)

cliente.carrito.agregar_producto(
    teclado,
    2
)

cliente.carrito.agregar_producto(
    curso,
    1
)

cliente.carrito.mostrar_carrito()
```

---

# 16. ¿Dónde se aplica cada principio?

| Principio | Aplicación |
|---|---|
| Encapsulamiento | `__precio` y `@property` |
| Getter | `@property` |
| Setter | `@precio.setter` |
| Herencia | `ProductoFisico(Producto)` |
| Herencia | `ProductoDigital(Producto)` |
| Polimorfismo | `calcular_precio_final()` |
| Agregación | `Tienda` y `Producto` |
| Composición | `Tienda` e `ItemInventario` |
| Composición | `Cliente` y `Carrito` |
| Composición | `Carrito` e `ItemCarrito` |
| Asociación | `ItemCarrito` y `Producto` |

---

# 17. Regla conceptual

```text
¿ES UN?
   ↓
HERENCIA
```

```text
¿TIENE objetos independientes?
   ↓
AGREGACIÓN
```

```text
¿TIENE una parte fuertemente dependiente?
   ↓
COMPOSICIÓN
```

```text
¿SE RELACIONA CON?
   ↓
ASOCIACIÓN
```

```text
¿DEBO PROTEGER O CONTROLAR EL ESTADO?
   ↓
ENCAPSULAMIENTO
```

---

# 18. Reflexión final

La Programación Orientada a Objetos no consiste solamente en crear clases.

Su objetivo es modelar un problema distribuyendo responsabilidades entre objetos que colaboran entre sí.

En este sistema:

- `Producto` concentra los datos y comportamientos comunes;
- `ProductoFisico` y `ProductoDigital` especializan el producto mediante herencia;
- `Producto` protege su precio mediante encapsulamiento;
- `Tienda` administra su inventario;
- `Cliente` posee un carrito;
- `Carrito` contiene elementos de compra;
- distintos productos calculan su precio final mediante polimorfismo.

Esta organización permite construir sistemas más modulares, reutilizables, mantenibles y extensibles.


# Caso Estudio: Datos Estudiantes
# Caso de estudio POO aplicado a datos académicos y dimensiones MSLQ
## Python — lectura de datos, encapsulamiento, composición, herencia y polimorfismo

## 1. Contexto de la actividad

En esta práctica utilizaremos un conjunto de datos académico sintético para aprender **Programación Orientada a Objetos (POO)**.

El caso utiliza variables académicas y dimensiones inspiradas en el **Motivated Strategies for Learning Questionnaire (MSLQ)**.

> **Importante:** el dataset es completamente sintético y fue creado exclusivamente con fines docentes. Las dimensiones MSLQ incluidas representan puntajes resumidos simulados en escala 1–7. No corresponden a respuestas reales ni deben utilizarse para realizar inferencias psicométricas o decisiones sobre estudiantes.

La actividad **no requiere conocimientos de estadística ni Machine Learning**.

Nuestro objetivo será aprender a organizar y manipular datos mediante objetos.

---

# 2. Archivos de la práctica

Se proporcionan:

```text
dataset_academico_mslq_2000.csv
dataset_academico_mslq_2000.xlsx
caso_poo_mslq.py
```

El dataset contiene:

```text
2.000 estudiantes sintéticos
```

y 28 variables.

---

# 3. Variables académicas

Cada estudiante posee variables como:

| Variable | Significado |
|---|---|
| `programa` | Programa académico |
| `semestre` | Semestre cursado |
| `seccion` | Sección |
| `creditos_inscritos` | Créditos inscritos |
| `horas_estudio_semana` | Horas de estudio por semana |
| `asistencia_pct` | Porcentaje de asistencia |
| `entregas_pct` | Porcentaje de actividades entregadas |
| `accesos_plataforma_semana` | Accesos semanales a plataforma |
| `participaciones_foro` | Participaciones en foros |
| `nota_previa` | Nota previa sintética |
| `nota_final` | Nota final sintética |
| `resultado_curso` | Aprobado o Reprobado |

Estas variables se utilizarán solamente como información de los objetos.

---

# 4. Dimensiones MSLQ incluidas

Todas las dimensiones se representan en una escala sintética:

```text
1.0 a 7.0
```

Se incluyen:

### Motivación

```text
orientacion_intrinseca
orientacion_extrinseca
valor_tarea
control_aprendizaje
autoeficacia
ansiedad_pruebas
```

### Estrategias de aprendizaje

```text
ensayo
elaboracion
organizacion
pensamiento_critico
autorregulacion_metacognitiva
tiempo_ambiente_estudio
regulacion_esfuerzo
aprendizaje_pares
busqueda_ayuda
```

No necesitamos estudiar todavía cómo se calculan estas dimensiones.

Para esta práctica simplemente las trataremos como **atributos numéricos del perfil de un estudiante**.

---

# 5. Pregunta de diseño

Podríamos crear una sola clase con 28 atributos.

Sin embargo, queremos practicar diseño orientado a objetos.

Podemos separar:

```text
Estudiante
    datos académicos

PerfilMSLQ
    dimensiones relacionadas con
    motivación y estrategias
```

Por tanto:

```text
Estudiante
     |
     | TIENE UN
     v
PerfilMSLQ
```

Esta relación nos permite introducir **composición**.

---

# 6. Clase PerfilMSLQ

```python
class PerfilMSLQ:

    def __init__(
        self,
        dimensiones
    ):
        self.__dimensiones = {}

        for nombre, valor in (
            dimensiones.items()
        ):
            self.actualizar_dimension(
                nombre,
                valor
            )
```

La clase guarda las dimensiones en:

```python
self.__dimensiones
```

El doble guion bajo permite trabajar el concepto de **encapsulamiento**.

---

# 7. Validar las dimensiones

Las dimensiones deben estar entre:

```text
1.0 y 7.0
```

Creamos:

```python
def actualizar_dimension(
    self,
    nombre,
    valor
):
    valor = float(valor)

    if valor < 1.0 or valor > 7.0:
        raise ValueError(
            "El valor debe estar "
            "entre 1.0 y 7.0"
        )

    self.__dimensiones[nombre] = valor
```

La clase controla qué valores acepta.

Eso es **encapsulamiento**:

> El objeto protege y controla su propio estado.

---

# 8. Consultar una dimensión

```python
def obtener_dimension(
    self,
    nombre
):

    return self.__dimensiones[
        nombre
    ]
```

Uso:

```python
valor = (
    estudiante
    .perfil_mslq
    .obtener_dimension(
        "autoeficacia"
    )
)
```

---

# 9. Clase Estudiante

```python
class Estudiante:

    def __init__(
        self,
        id_estudiante,
        programa,
        semestre,
        seccion,
        horas_estudio,
        asistencia,
        entregas,
        nota_final,
        resultado,
        perfil_mslq
    ):

        self.id_estudiante = (
            id_estudiante
        )

        self.programa = programa
        self.semestre = semestre
        self.seccion = seccion

        self.horas_estudio = (
            horas_estudio
        )

        self.asistencia = asistencia
        self.entregas = entregas
        self.nota_final = nota_final
        self.resultado = resultado

        self.perfil_mslq = (
            perfil_mslq
        )
```

Aquí aparece:

```text
Estudiante TIENE UN PerfilMSLQ
```

---

# 10. Composición

Un objeto `Estudiante` contiene otro objeto:

```python
self.perfil_mslq
```

Ejemplo:

```python
perfil = PerfilMSLQ(
    dimensiones
)

estudiante = Estudiante(
    ...,
    perfil_mslq=perfil
)
```

Conceptualmente:

```text
Estudiante
    ◆
    |
    v
PerfilMSLQ
```

El estudiante utiliza un objeto específico para representar su perfil MSLQ.

---

# 11. Encapsular la asistencia

También podemos proteger:

```text
asistencia
```

porque no debería aceptar valores como:

```text
-10
150
```

Utilizamos:

```python
self.__asistencia
```

---

# 12. Getter

```python
@property
def asistencia(self):
    return self.__asistencia
```

Uso:

```python
print(
    estudiante.asistencia
)
```

---

# 13. Setter

```python
@asistencia.setter
def asistencia(
    self,
    valor
):

    if valor < 0 or valor > 100:
        raise ValueError(
            "La asistencia debe "
            "estar entre 0 y 100"
        )

    self.__asistencia = valor
```

Ahora el objeto controla su estado.

---

# 14. DatasetAcademico

Necesitamos una clase encargada de administrar muchos estudiantes.

```python
class DatasetAcademico:

    def __init__(self):
        self.estudiantes = []
```

El dataset contiene:

```text
2.000 objetos Estudiante
```

---

# 15. Leer el CSV

Utilizaremos el módulo estándar:

```python
import csv
```

y:

```python
csv.DictReader()
```

Cada fila del archivo se transforma en objetos.

```text
Fila CSV
   |
   +----> PerfilMSLQ
   |
   +----> Estudiante
```

---

# 16. Construir el PerfilMSLQ desde una fila

Primero definimos los nombres de las dimensiones:

```python
DIMENSIONES_MSLQ = [
    "orientacion_intrinseca",
    "orientacion_extrinseca",
    "valor_tarea",
    "control_aprendizaje",
    "autoeficacia",
    "ansiedad_pruebas",
    "ensayo",
    "elaboracion",
    "organizacion",
    "pensamiento_critico",
    "autorregulacion_metacognitiva",
    "tiempo_ambiente_estudio",
    "regulacion_esfuerzo",
    "aprendizaje_pares",
    "busqueda_ayuda",
]
```

Después:

```python
dimensiones = {}

for nombre in DIMENSIONES_MSLQ:

    dimensiones[nombre] = (
        float(fila[nombre])
    )
```

Y construimos:

```python
perfil = PerfilMSLQ(
    dimensiones
)
```

---

# 17. Construir el estudiante

```python
estudiante = Estudiante(
    id_estudiante=(
        fila["id_estudiante"]
    ),
    programa=fila["programa"],
    semestre=fila["semestre"],
    seccion=fila["seccion"],
    horas_estudio=(
        fila[
            "horas_estudio_semana"
        ]
    ),
    asistencia=(
        fila["asistencia_pct"]
    ),
    entregas=(
        fila["entregas_pct"]
    ),
    nota_final=(
        fila["nota_final"]
    ),
    resultado=(
        fila["resultado_curso"]
    ),
    perfil_mslq=perfil
)
```

Finalmente:

```python
self.estudiantes.append(
    estudiante
)
```

---

# 18. Queremos consultar el dataset

Ahora queremos poder realizar consultas como:

```text
Estudiantes con asistencia >= 85 %

Estudiantes de Ingeniería Informática

Estudiantes con autoeficacia >= 5.5

Estudiantes con ansiedad ante pruebas <= 2.5

Estudiantes con autorregulación metacognitiva >= 5.5
```

No estamos haciendo estadística.

Simplemente estamos:

```text
seleccionando objetos
según una condición
```

---

# 19. Abstracción: clase Filtro

Todos los filtros tendrán una operación:

```python
aplicar()
```

Creamos:

```python
from abc import (
    ABC,
    abstractmethod
)


class Filtro(ABC):

    @abstractmethod
    def aplicar(
        self,
        estudiantes
    ):
        pass
```

`Filtro` establece qué operación debe existir.

No define todavía cómo filtrar.

Eso es **abstracción**.

---

# 20. Herencia: FiltroAsistencia

```python
class FiltroAsistencia(
    Filtro
):

    def __init__(
        self,
        minimo
    ):
        self.minimo = minimo

    def aplicar(
        self,
        estudiantes
    ):

        resultado = []

        for estudiante in estudiantes:

            if (
                estudiante.asistencia
                >= self.minimo
            ):
                resultado.append(
                    estudiante
                )

        return resultado
```

La relación es:

```text
FiltroAsistencia
      ES UN
     Filtro
```

Por tanto corresponde usar **herencia**.

---

# 21. Herencia: FiltroPrograma

```python
class FiltroPrograma(
    Filtro
):

    def __init__(
        self,
        programa
    ):
        self.programa = programa

    def aplicar(
        self,
        estudiantes
    ):

        resultado = []

        for estudiante in estudiantes:

            if (
                estudiante.programa
                == self.programa
            ):
                resultado.append(
                    estudiante
                )

        return resultado
```

---

# 22. Un filtro reutilizable para MSLQ

En lugar de crear:

```text
FiltroAutoeficacia
FiltroAnsiedad
FiltroValorTarea
FiltroMetacognicion
...
```

podemos construir una clase reutilizable:

```python
class FiltroDimensionMSLQ(
    Filtro
):
```

Esta clase recibirá:

```text
nombre de la dimensión
valor mínimo
valor máximo
```

---

# 23. FiltroDimensionMSLQ

```python
class FiltroDimensionMSLQ(
    Filtro
):

    def __init__(
        self,
        dimension,
        minimo=None,
        maximo=None
    ):
        self.dimension = dimension
        self.minimo = minimo
        self.maximo = maximo
```

---

# 24. Implementar aplicar()

```python
def aplicar(
    self,
    estudiantes
):

    resultado = []

    for estudiante in estudiantes:

        valor = (
            estudiante
            .perfil_mslq
            .obtener_dimension(
                self.dimension
            )
        )

        cumple_minimo = (
            self.minimo is None
            or valor >= self.minimo
        )

        cumple_maximo = (
            self.maximo is None
            or valor <= self.maximo
        )

        if (
            cumple_minimo
            and cumple_maximo
        ):
            resultado.append(
                estudiante
            )

    return resultado
```

---

# 25. Uso del filtro MSLQ

Buscar estudiantes con:

```text
autoeficacia >= 5.5
```

```python
filtro = FiltroDimensionMSLQ(
    "autoeficacia",
    minimo=5.5
)
```

Buscar estudiantes con:

```text
ansiedad_pruebas <= 2.5
```

```python
filtro = FiltroDimensionMSLQ(
    "ansiedad_pruebas",
    maximo=2.5
)
```

---

# 26. Polimorfismo

Tenemos objetos diferentes:

```python
FiltroAsistencia(85)

FiltroPrograma(
    "Ingeniería Informática"
)

FiltroDimensionMSLQ(
    "autoeficacia",
    minimo=5.5
)
```

Todos son distintos.

Pero todos responden a:

```python
aplicar()
```

---

# 27. AnalizadorDatos

```python
class AnalizadorDatos:

    def __init__(
        self,
        dataset
    ):
        self.dataset = dataset

    def aplicar_filtro(
        self,
        filtro
    ):

        return filtro.aplicar(
            self.dataset.estudiantes
        )
```

Observe:

```python
filtro.aplicar(...)
```

`AnalizadorDatos` no pregunta qué clase específica recibió.

Eso es **polimorfismo**.

---

# 28. Ejemplo de polimorfismo

```python
filtros = [

    FiltroAsistencia(85),

    FiltroPrograma(
        "Ingeniería Informática"
    ),

    FiltroDimensionMSLQ(
        "autoeficacia",
        minimo=5.5
    ),

    FiltroDimensionMSLQ(
        "ansiedad_pruebas",
        maximo=2.5
    )
]
```

Después:

```python
for filtro in filtros:

    resultado = (
        analizador.aplicar_filtro(
            filtro
        )
    )
```

Siempre usamos:

```python
aplicar_filtro()
```

y:

```python
aplicar()
```

aunque el comportamiento cambia.

---

# 29. Modelo conceptual final

```text
                         Filtro
                           △
                           |
          ------------------------------------
          |                 |                |
          |                 |                |
FiltroAsistencia    FiltroPrograma   FiltroDimensionMSLQ


DatasetAcademico
       |
       | contiene
       v
   Estudiante
       ◆
       |
       | tiene un
       v
  PerfilMSLQ


AnalizadorDatos
       ◇
       |
       | utiliza
       v
DatasetAcademico
```

---

# 30. ¿Dónde aparece cada principio de POO?

| Principio | Ejemplo |
|---|---|
| Clase | `Estudiante`, `PerfilMSLQ`, `Filtro` |
| Objeto | cada estudiante leído desde CSV |
| Encapsulamiento | `__asistencia`, `__dimensiones` |
| Getter | `@property asistencia` |
| Setter | `@asistencia.setter` |
| Decorador | `@property`, `@abstractmethod` |
| Composición | `Estudiante` tiene `PerfilMSLQ` |
| Abstracción | clase `Filtro` |
| Herencia | `FiltroAsistencia(Filtro)` |
| Herencia | `FiltroDimensionMSLQ(Filtro)` |
| Sobrescritura | cada filtro implementa `aplicar()` |
| Polimorfismo | todos los filtros se usan mediante `aplicar()` |
| Agregación | `AnalizadorDatos` recibe `DatasetAcademico` |

---

# 31. Regla conceptual

## ¿ES UN?

```text
FiltroAsistencia
ES UN
Filtro
```

Entonces:

```text
HERENCIA
```

---

## ¿TIENE UN?

```text
Estudiante
TIENE UN
PerfilMSLQ
```

Entonces:

```text
COMPOSICIÓN
```

---

## ¿DEBO PROTEGER EL ESTADO?

```text
asistencia
dimensiones MSLQ
```

Entonces:

```text
ENCAPSULAMIENTO
```

---

## ¿DISTINTOS OBJETOS RESPONDEN AL MISMO MÉTODO?

```python
filtro.aplicar()
```

Entonces:

```text
POLIMORFISMO
```

---

# 32. Actividad 1 — Filtro por resultado

Crear:

```python
FiltroResultado
```

que permita seleccionar:

```text
Aprobado
```

o:

```text
Reprobado
```

Debe heredar de:

```python
Filtro
```

---

# 33. Actividad 2 — Filtro por semestre

Crear:

```python
FiltroSemestre
```

Ejemplo:

```python
FiltroSemestre(1)
```

Debe retornar solamente estudiantes de primer semestre.

---

# 34. Actividad 3 — Filtro MSLQ por valor de tarea

Utilizar la clase ya creada:

```python
FiltroDimensionMSLQ
```

para encontrar estudiantes con:

```text
valor_tarea >= 6.0
```

No es necesario crear otra clase.

---

# 35. Actividad 4 — Filtro de esfuerzo

Buscar estudiantes con:

```text
regulacion_esfuerzo >= 5.5
```

utilizando:

```python
FiltroDimensionMSLQ
```

---

# 36. Actividad 5 — Combinar filtros

Queremos estudiantes que cumplan:

```text
asistencia >= 80
```

y después:

```text
autorregulacion_metacognitiva >= 5.0
```

Una solución:

```python
resultado1 = (
    FiltroAsistencia(80)
    .aplicar(
        dataset.estudiantes
    )
)

resultado2 = (
    FiltroDimensionMSLQ(
        "autorregulacion_metacognitiva",
        minimo=5.0
    )
    .aplicar(
        resultado1
    )
)
```

Aquí un filtro recibe el resultado del filtro anterior.

---

# 37. Actividad 6 — Encapsular otra variable

Modificar:

```python
nota_final
```

para usar:

```python
self.__nota_final
```

Crear:

```python
@property
```

y:

```python
@nota_final.setter
```

Validar:

```text
1.0 <= nota_final <= 7.0
```

---

# 38. Actividad 7 — Crear una nueva dimensión

Suponga que necesitamos incorporar:

```text
persistencia_academica
```

Analice:

1. ¿En qué clase debería almacenarse?
2. ¿Qué debería validarse?
3. ¿Es necesario modificar `Estudiante`?
4. ¿Podríamos reutilizar `FiltroDimensionMSLQ`?

---

# 39. Preguntas de reflexión

1. ¿Por qué separamos `Estudiante` y `PerfilMSLQ`?
2. ¿Qué responsabilidad tiene `DatasetAcademico`?
3. ¿Qué información está encapsulada?
4. ¿Qué función cumple `@property`?
5. ¿Qué función cumple el setter?
6. ¿Por qué `Filtro` es abstracta?
7. ¿Por qué los filtros heredan de `Filtro`?
8. ¿Qué método se sobrescribe?
9. ¿Dónde aparece polimorfismo?
10. ¿Qué diferencia existe entre herencia y composición?
11. ¿Por qué `Estudiante` no hereda de `PerfilMSLQ`?
12. ¿Por qué `FiltroDimensionMSLQ` es más reutilizable que crear 15 clases diferentes?
13. ¿Qué ocurriría si incorporamos una nueva clase de filtro?
14. ¿Necesitamos modificar `AnalizadorDatos`?
15. ¿Qué ventajas aporta este diseño frente a trabajar solamente con listas?

---

# 40. Desafío integrador

Construir un menú:

```text
1. Mostrar estudiantes
2. Filtrar por programa
3. Filtrar por asistencia
4. Filtrar por semestre
5. Filtrar por dimensión MSLQ
6. Filtrar por resultado
7. Salir
```

El usuario deberá poder seleccionar una dimensión como:

```text
autoeficacia
valor_tarea
ansiedad_pruebas
autorregulacion_metacognitiva
regulacion_esfuerzo
```

y proporcionar un valor mínimo o máximo.

El programa debe utilizar los objetos ya construidos.

---

# 41. Qué estamos aprendiendo realmente

Aunque el archivo contiene variables académicas y dimensiones MSLQ, en esta práctica **no estamos intentando explicar por qué un estudiante obtiene una nota ni predecir resultados**.

Estamos aprendiendo a:

```text
leer datos
    ↓
crear objetos
    ↓
validar atributos
    ↓
organizar responsabilidades
    ↓
crear jerarquías de clases
    ↓
usar polimorfismo
    ↓
consultar información
```

El dataset proporciona un contexto realista para practicar POO.

---

# 42. Cierre

Este caso muestra que la Programación Orientada a Objetos puede utilizarse para organizar aplicaciones relacionadas con datos.

La idea central es:

> **Los datos no son solamente filas de un archivo: pueden convertirse en objetos con estado, comportamiento y relaciones con otros objetos.**

A partir de un mismo dataset hemos podido aplicar:

```text
ENCAPSULAMIENTO
COMPOSICIÓN
ABSTRACCIÓN
HERENCIA
SOBRESCRITURA
POLIMORFISMO
AGREGACIÓN
```
