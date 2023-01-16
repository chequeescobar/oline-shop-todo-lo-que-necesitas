
function saludar(){
    console.log("HOLA, BIENVENIDO")
}
saludar();

function calculo1 (a, b, c){
    let resultado = a * b + c;
    console.log (resultado);
}
calculo1(2, 5, 2);

function calculo2 (a, b){
    let resultado = b> a
    console.log (resultado)
}
calculo2(15, 25)


let mayor = true;

const login = function (a,b){
    return 15<8;
}
login(mayor) == true ? console.log(`acertado`) : console.log(`error`);


const alumno = {
    nombre: "Ezequiel",
    apellido: "Escobar",
    edad: 28,
    gustos:["correr","ciclismo","montañismo", "ver series","salir con amigos"],
    licenciatura: "Administración de comercio y negocios internacionales",
    semestre: 9,
    
}
const {edad} =alumno 
console.log(edad);

const {gustos} =alumno
console.log(gustos);

const {nombre} =alumno
console.log(nombre);


const productos = ["hola", 28, "menú", true, alumno ={nombre: "carlos", status: "inscrito"}, arrayDentro = ["estoy dentro", "soy el segundo array"] ];
console.log (productos);

console.log("Elemento menú",  productos [2])
console.log("objeto dentro de array", productos [4].status)
console.log("array dentro de array",  productos [5] [1])










