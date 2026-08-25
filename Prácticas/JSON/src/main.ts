// Tipos de funciones

function saludo(nombre:string){
    return `Hola, {nombre}`;
}

function mensaje(nombre:string,mensaje="hola"){
   return `${mensaje},${nombre}`;
}






interface Estudiante{
  id: number;
  nombre: string;
  calificaciones: number[];
}

interface ResultadoAcademico {
  nombre: string;
  promedio: number;
  aprobado: boolean;
}

const estudiante: Estudiante = {
  id: 1,
  nombre: "Ana Torres",
  calificaciones: [5.5, 6.0, 6.5]
};

let resultado:ResultadoAcademico;

function calcularPromedio(estudiante: Estudiante): number {
   let suma:number=0;
    for(const item of estudiante.calificaciones){
       suma+=item
    }
    return suma/estudiante.calificaciones.length; 
}

let promedio=calcularPromedio(estudiante)
 resultado={
        nombre:estudiante.nombre,
        promedio:promedio,
        aprobado:promedio>=4.0
    }