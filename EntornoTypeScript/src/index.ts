let nombre:string="Pepo";
let edad:number=20;
let peso:number=65.80;
console.log(`Hola ${nombre}, mi edad es ${edad} y peso ${peso}`)

//datos compuestos
let lista=["nombre",2,3,4];
console.log(lista[0]);
let notas: Array<number> = [5.5, 6.2, 4.8];

//tupla 
let usuario: [string, number, boolean];
usuario = ["Ana", 20, true];
console.log(usuario[0]);
console.log(usuario[1]);

let coordenada: [number, number] = [10, 20];
//conjuntos
let lenguajes = new Set<string>();
lenguajes.add("Python");
lenguajes.add("TypeScript");
lenguajes.add("Python");
console.log(lenguajes);

interface Estudiante {
    nombre: string;
    edad: number;
    carrera: string;
}

const estudiante: Estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Informática"
};