# Entornos virtuales en Python

## Objetivo

Aprender a crear y utilizar un **entorno virtual en Python** para aislar las dependencias de un proyecto y evitar conflictos entre diferentes proyectos.

---

## ¿Qué es un entorno virtual?

Un entorno virtual es un espacio aislado en el que un proyecto Python puede tener sus propias librerías y dependencias.

Por ejemplo:

```text
Python global
│
├── Proyecto A
│   └── .venv
│       └── Librerías del Proyecto A
│
└── Proyecto B
    └── .venv
        └── Librerías del Proyecto B
```

Esto permite que cada proyecto utilice diferentes librerías o incluso diferentes versiones de una misma biblioteca.

---

## ¿Por qué utilizar entornos virtuales?

Los entornos virtuales permiten:

- Evitar conflictos entre versiones de librerías.
- Mantener limpio el Python instalado globalmente.
- Mantener las dependencias de cada proyecto separadas.
- Facilitar la reproducción del proyecto en otro computador.
- Registrar las dependencias utilizando `requirements.txt`.
- Aplicar buenas prácticas de desarrollo de software.

---

# 1. Crear una carpeta para el proyecto

Desde la terminal:

```bash
mkdir mi_proyecto
cd mi_proyecto
```

La estructura inicial será:

```text
mi_proyecto/
```

---

# 2. Crear el entorno virtual

Ejecutar:

```bash
python -m venv .venv
```

### ¿Qué significa este comando?

```text
python
   ↓
Ejecuta el intérprete de Python
-m
   ↓
Indica que se ejecutará un módulo

venv
   ↓
Módulo de Python para crear entornos virtuales

.venv
   ↓
Nombre de la carpeta del entorno virtual
```

Después de ejecutarlo tendremos:

```text
mi_proyecto/
└── .venv/
```

---

# 3. Activar el entorno virtual

## Linux / macOS

```bash
source .venv/bin/activate
```

## Windows

```bash
.venv\Scripts\activate
```

Cuando el entorno está activado normalmente aparecerá:

```text
(.venv)
```

Por ejemplo:

```text
(.venv) usuario@computador:~/mi_proyecto
```

Esto indica que los comandos `python` y `pip` están utilizando el entorno virtual del proyecto.

---

# 4. Comprobar Python

Podemos verificar la versión de Python:

```bash
python --version
```

También podemos comprobar la ubicación del intérprete.

### Linux / macOS

```bash
which python
```

### Windows

```bash
where python
```

La ruta debería apuntar al directorio `.venv`.

---

# 5. Revisar las librerías instaladas

Ejecutar:

```bash
pip list
```

Este comando muestra las librerías instaladas dentro del entorno virtual.

---

# 6. Instalar una librería

Como ejemplo instalaremos `requests`:

```bash
pip install requests
```

Después comprobar nuevamente:

```bash
pip list
```

Ahora debería aparecer `requests` entre las bibliotecas instaladas.

---

# 7. Crear un programa Python

Crear un archivo:

```text
script.py
```

Con el siguiente contenido:

```python
import requests

print("Entorno virtual funcionando correctamente")
print("Versión de requests:", requests.__version__)
```

Ejecutar:

```bash
python script.py
```

---

# 8. Crear `requirements.txt`

Para guardar las dependencias utilizadas por el proyecto:

```bash
pip freeze > requirements.txt
```

Ahora la estructura será:

```text
mi_proyecto/
│
├── .venv/
├── script.py
├── requirements.txt
└── README.md
```

Podemos revisar el contenido de:

```text
requirements.txt
```

Este archivo contendrá las librerías y sus versiones.

Por ejemplo:

```text
requests==X.X.X
```

---

# 9. ¿Para qué sirve `requirements.txt`?

Permite que otra persona pueda instalar las mismas dependencias utilizadas por el proyecto.

Por ejemplo, después de recibir el proyecto puede crear un nuevo entorno:

```bash
python -m venv .venv
```

Activarlo:

```bash
source .venv/bin/activate
```

e instalar todas las dependencias:

```bash
pip install -r requirements.txt
```

De esta manera se puede reconstruir el entorno del proyecto.

---

# 10. Desactivar el entorno virtual

Cuando terminemos de trabajar podemos ejecutar:

```bash
deactivate
```

El indicador:

```text
(.venv)
```

desaparecerá de la terminal.

---

# Actividad

Realice los siguientes pasos:

1. Cree una carpeta llamada `practica_python`.
2. Ingrese a la carpeta desde la terminal.
3. Cree un entorno virtual llamado `.venv`.
4. Active el entorno virtual.
5. Ejecute `pip list`.
6. Instale la biblioteca `requests`.
7. Ejecute nuevamente `pip list`.
8. Cree el archivo `script.py`.
9. Ejecute el programa.
10. Genere el archivo `requirements.txt`.
11. Revise su contenido.
12. Desactive el entorno virtual.

---

# Preguntas

Responda brevemente:

### 1. ¿Qué es un entorno virtual?

### 2. ¿Por qué no es recomendable instalar todas las librerías directamente en el Python global?

### 3. ¿Qué función cumple `pip`?

### 4. ¿Qué contiene el archivo `requirements.txt`?

### 5. ¿Qué diferencia existe entre `.venv` y `requirements.txt`?

---

# Idea principal

```text
Proyecto Python
│
├── script.py
│
├── .venv/
│      ↓
│   Entorno aislado
│   + librerías
│
├── requirements.txt
│      ↓
│   Registro de dependencias
│
└── README.md
       ↓
    Documentación
```

> Un entorno virtual permite **aislar las dependencias de un proyecto Python**, evitando conflictos con otros proyectos y facilitando su reproducción en otros computadores.