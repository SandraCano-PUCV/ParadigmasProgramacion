# Práctico de Programación Orientada a Objetos en Python

## Ejercicio 1. Clase `Persona`

Crea una clase llamada `Persona` que tenga los siguientes atributos:

- `nombre`
- `edad`
- `ciudad`

La clase debe incluir un método llamado `mostrar_datos()` que muestre en pantalla la información de la persona.

Luego:

1. Crea dos objetos de tipo `Persona`.
2. Muestra los datos de ambos objetos.
3. Modifica la ciudad de uno de ellos.
4. Vuelve a mostrar sus datos.

---

## Ejercicio 2. Clase `Estudiante`

Crea una clase llamada `Estudiante` con los siguientes atributos:

- `nombre`
- `carrera`
- `semestre`
- `promedio`

Implementa los métodos:

- `mostrar_informacion()`
- `actualizar_promedio(nuevo_promedio)`
- `avanzar_semestre()`

Luego crea tres estudiantes y realiza distintas operaciones con ellos.

### Restricción

El promedio debe encontrarse entre `1.0` y `7.0`.

---

## Ejercicio 3. Clase `Producto`

Crea una clase llamada `Producto` con:

- `nombre`
- `precio`
- `stock`

Implementa los siguientes métodos:

- `mostrar_producto()`
- `vender(cantidad)`
- `reponer(cantidad)`

### Reglas

- No se puede vender una cantidad mayor al stock disponible.
- No se puede vender una cantidad negativa.
- No se puede reponer una cantidad negativa.

Crea al menos tres productos y realiza varias ventas y reposiciones.

---

## Ejercicio 4. Cuenta bancaria

Crea una clase llamada `CuentaBancaria`.

Debe tener los atributos:

- `titular`
- `saldo`

Implementa:

- `depositar(monto)`
- `retirar(monto)`
- `consultar_saldo()`

### Reglas

- No se pueden depositar montos negativos.
- No se puede retirar más dinero que el saldo disponible.
- El saldo nunca puede quedar negativo.

Prueba la clase realizando distintos depósitos y retiros.

---

## Ejercicio 5. Robot

Crea una clase llamada `Robot` con:

- `nombre`
- `bateria`
- `posicion`

La posición inicial debe ser `0`.

Implementa:

- `avanzar()`
- `retroceder()`
- `recargar()`
- `mostrar_estado()`

### Reglas

- Avanzar aumenta la posición en 1.
- Retroceder disminuye la posición en 1.
- Cada movimiento consume `10%` de batería.
- El robot no puede moverse si no tiene batería suficiente.
- `recargar()` debe dejar la batería en `100%`.

Realiza una secuencia de movimientos hasta agotar la batería.

---

## Ejercicio 6. Rectángulo

Crea una clase llamada `Rectangulo` con:

- `base`
- `altura`

Implementa los métodos:

- `calcular_area()`
- `calcular_perimetro()`
- `mostrar_resultados()`

Crea tres rectángulos diferentes y muestra el área y el perímetro de cada uno.

### Desafío

Agrega un método que determine si el rectángulo es también un cuadrado.

---

## Ejercicio 7. Libro

Crea una clase llamada `Libro` con:

- `titulo`
- `autor`
- `anio`
- `disponible`

Al crear un libro, el atributo `disponible` debe comenzar en `True`.

Implementa:

- `mostrar_info()`
- `prestar()`
- `devolver()`

### Reglas

- Un libro no puede prestarse si ya está prestado.
- Un libro no puede devolverse si ya está disponible.

Crea tres libros y prueba distintas situaciones de préstamo y devolución.

---

## Ejercicio 8. Biblioteca

Utilizando la clase `Libro` del ejercicio anterior, crea una clase llamada `Biblioteca`.

La biblioteca debe mantener una colección de libros.

Implementa:

- `agregar_libro(libro)`
- `mostrar_libros()`
- `buscar_libro(titulo)`
- `mostrar_disponibles()`

### Desafíos

Agrega métodos para:

- mostrar libros prestados;
- buscar libros por autor;
- contar libros disponibles;
- eliminar un libro por título.

---

## Ejercicio 9. Herencia: empleados

Crea una clase base llamada `Empleado` con:

- `nombre`
- `sueldo_base`

Implementa:

- `mostrar_datos()`
- `calcular_sueldo()`

Luego crea dos clases que hereden de `Empleado`:

### `EmpleadoTiempoCompleto`

Debe incluir:

- `bono`

El sueldo final corresponde a:

```text
sueldo_base + bono
```

### `EmpleadoPorHora`

Debe incluir:

- `horas_trabajadas`
- `valor_hora`

El sueldo final corresponde a:

```text
horas_trabajadas * valor_hora
```

Crea objetos de ambos tipos y muestra sus sueldos.

---

## Ejercicio 10. Sistema de vehículos

Crea una clase base llamada `Vehiculo` con:

- `marca`
- `modelo`
- `velocidad`

Implementa:

- `acelerar()`
- `frenar()`
- `mostrar_estado()`

Luego crea las clases:

- `Automovil`
- `Motocicleta`

Ambas deben heredar de `Vehiculo`.

Agrega al menos un atributo y un método propio a cada clase.

Crea distintos vehículos y prueba sus métodos.

---

## Ejercicio 11. Carrito de compras

Crea las clases:

- `Producto`
- `Carrito`

La clase `Producto` debe tener:

- `nombre`
- `precio`

La clase `Carrito` debe almacenar productos.

Implementa en `Carrito`:

- `agregar_producto(producto)`
- `eliminar_producto(nombre)`
- `mostrar_productos()`
- `calcular_total()`

### Desafío

Modifica el sistema para permitir agregar varias unidades de un mismo producto.

---

## Ejercicio 12. Sistema de cursos

Crea las clases:

- `Estudiante`
- `Curso`

Un estudiante debe tener:

- `nombre`
- `rut`
- `promedio`

Un curso debe tener:

- `nombre`
- una lista de estudiantes

Implementa en `Curso`:

- `agregar_estudiante(estudiante)`
- `mostrar_estudiantes()`
- `calcular_promedio_curso()`
- `buscar_estudiante(rut)`

### Desafío

Agrega un método que muestre solamente los estudiantes cuyo promedio sea mayor o igual a `4.0`.

---

# Ejercicio integrador. Sistema de préstamo de dispositivos

Desarrolla un pequeño sistema para administrar dispositivos tecnológicos de un laboratorio.

Debes crear las clases:

- `Dispositivo`
- `Estudiante`
- `Laboratorio`

## `Dispositivo`

Debe tener:

- `codigo`
- `nombre`
- `tipo`
- `disponible`

Debe implementar:

- `mostrar_info()`
- `prestar()`
- `devolver()`

## `Estudiante`

Debe tener:

- `nombre`
- `rut`
- `carrera`

## `Laboratorio`

Debe almacenar dispositivos y estudiantes.

Implementa:

- `agregar_dispositivo(dispositivo)`
- `agregar_estudiante(estudiante)`
- `buscar_dispositivo(codigo)`
- `prestar_dispositivo(codigo)`
- `devolver_dispositivo(codigo)`
- `mostrar_dispositivos()`
- `mostrar_dispositivos_disponibles()`

## Requisitos adicionales

El programa debe:

1. Crear al menos cinco dispositivos.
2. Crear al menos tres estudiantes.
3. Realizar préstamos y devoluciones.
4. Evitar prestar un dispositivo que ya está prestado.
5. Mostrar el estado final de todos los dispositivos.

## Desafío final

Modifica el sistema para registrar qué estudiante tiene prestado cada dispositivo.
