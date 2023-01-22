
//variables

//globales

//var saludo = "Bienvenido";
//if(saludo){
  //var saludo = "HOLA CUSTOMER";
  //console.log(saludo);
//}

//limitadas
//let nombre = "Ezequiel";
//if(nombre){
  //let nombre = "Isabella";
  //console.log(nombre);
//}
//console.log(nombre);

//inmutables
const apellido = "Urrutia";
console.log(apellido);


//let nombreUsuario = prompt("hola! ¿Cómo te llamas?");
//const edadUsuario = prompt("Por seguridad de usuario, ¿Qué edad tienes?");

//const edadUser1 = 22
//const edadUser2 = 30
//const resultado = edadUser1 + edadUser2;

 //alert ("edad de los dos juntos" + resultado)



//const edadUser1 = parseInt(prompt("cuantos años tienes"));
//const edadUser2 = parseInt(prompt("cuantos años tiene el user2"));

//alert(edadUser1 + edadUser2)



//concatenación

//const datosUsuario = alert ("Hola"  + nombreUsuario  +  ", tienes"  +  edadUsuario +  "años de edad." );

// interpolación

//const saludoTraspolacion  = alert(`HOLA ${nombreUsuario}, tienes ${edadUsuario} años de edad!`)



//condicional//
//const edadUsuario = parseInt(prompt("¿cuantos años tienes?"));
//if (edadUsuario >= 18) {
   // alert ("pueder entrar y consumir alcohol de forma moderada");
//} else {
    //alert ("acceso no permitido,aun por tu edad no puedes entrar, gracias");
//}



// mostrarme en consola y en pantalla los 20 nimbre de las personas que asistieron al evento, cn el número de boleto

//let personas  = 1; 
//for(personas; personas <=20; personas = personas + 1){
  //  let nombrePersona = prompt("cómo te llamas?");
 //   console.log ("la persona asitente se llama: ," + nombrePersona + "tendra el boleto número" + personas);
  //  alert (`La persona se llama: ${nombrePersona} y va a tener el número de boleto de asistencia al evento ${personas}`);
//}


let edad= prompt("ingrese su edad: ");
if (edad <18){
  alert("invalido su acceso al sistema");
}else if (edad >=18){
  alert("su acceso al sistema es valido");
}




const servicioDespensa = [
  {id: 1, img:"imagenes2/aceite.jpg", nombre: "aceite nutrioli 1L", precio: 34},
  {id: 2, img:"imagenes2/aceite2.jpg", nombre: "aceite oléico 1L", precio: 42},
  {id: 3, img:"imagenes2/arroz1.jpg", nombre: "bolsa arroz SOS azul 1kg", precio: 28},
  {id: 4, img:"imagenes2/arroz2.jpg", nombre: "bolsa arroz SOS rojo ikg", precio: 26},
  {id: 5, img:"imagenes2/arroz3.jpg", nombre: "bolsa arroz SOS amarillo 1kg", precio: 34},
  {id: 6, img:"imagenes2/azucar1.jpg", nombre: "bolsa de azucar morena 2kg", precio: 40},
  {id: 7, img:"imagenes2/azucar2.jpg", nombre: "bolsa de azucar blanca 2kg", precio: 48},
  {id: 8, img:"imagenes2/azucar3.jpg", nombre: "bolsa de azucar refinada 2kg", precio: 60},
  {id: 9, img:"imagenes2/huevos1.jpg", nombre: "2 kg de huevo tehuacan", precio: 42},
  {id: 10, img:"imagenes2/sal1.jpg", nombre: "bolsa de sal 1kg", precio: 13},
 ];

 //console.log(servicioDespensa)

 const carritoCompras = [];
 //console.log("el carrito de compras actualemente tiene : ", carritoCompras);

 //carritoCompras.push(servicioDespensa [1]);
 //console.log("el carrito de compras actualemente tiene : ", carritoCompras);

 for (let i = 0; i < servicioDespensa.length; i++){
  console.log ("los productos de este array: ", servicioDespensa)
 }


let venta = "Entrada al cine";

switch(venta){
  case "<=8 años":
    console.log("el cliente recibe un 5% en su entrada");
    break;
  case ">18 años":
    console.log("el cliente recibe un 5% en su consumo");
    break;
  case ">=60 años":
    console.log("el cliente recibe un 10% en su entrada");
    break;
  default:
    console.log("el ciente por su edad no recibe promoción");
    break;
}


