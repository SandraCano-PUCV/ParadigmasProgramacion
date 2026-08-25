"use strict";
const estudiante = {
    id: 1,
    nombre: "Ana Torres",
    calificaciones: [5.5, 6.0, 6.5]
};
function calcularPromedio(estudiante) {
    let suma = 0;
    for (const item of estudiante.calificaciones) {
        suma += item;
    }
    return suma / estudiante.calificaciones.length;
}
console.log(calcularPromedio(estudiante));
