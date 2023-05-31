//1.3.2Convierte el siguiente código en una función, pero, cambiando cuando
//sea necesario las variables constantes por parámetros y argumentos
//en una función:

const name = "Diego Medardo";
const lastname = "Saavedra García";
const completeName = name + lastname;
const nickname = "statick";
function mostrar nombre(name,lastname,completeName,nickname){
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

//1.4.2 Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion== "Free") {
console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion== "Basic" ) {
console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}else if(tipoDeSuscripcion== "Expert"){
console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}else if (tipoDeSuscripcion== "ExpertPlus"){
console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}else {
console.log("No pertenece a ningun caso");
}

//1.4.3  Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion== "Free") {
console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion== "Basic" ) {
console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}
if(tipoDeSuscripcion== "Expert"){
console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}
if (tipoDeSuscripcion== "ExpertPlus"){
console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}
if(tipoDeSuscripcion != "Free" && tipoDeSuscripcion != "Basic" &&  tipoDeSuscripcion== "Expert" && tipoDeSuscripcion== "ExpertPlus" ) {
console.log("No pertenece a ningun caso");
}

//1.5.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let j = 10;
while (j >= 2) {
  console.log("El valor de j es: " + j);
  i--;
}

//1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un m
do {
    res = prompt("Cuanto es 2 +2 ?");
} while ((res != 4));
console.log("Respuesta correcta");

//1.6.2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirElemento(array) {
    if (array.length > 0) {
      console.log("El primer elemento del array es: " + array[0]);
    } else {
      console.log("El array está vacío.");
    }
  }
  
  imprimirElemento([1,2,3,4]);

//1.6.3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

  function imprimirElemento(array) {
    let lg = array.length;
    for (let i=0;i<lg;i++){
        console.log("Los elementos son: " + array[i]);
      } 
    }

    imprimirElemento([1,2,3,4]);


//1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

    var perro = {
        nombre: "Koki",
        edad: 30,
        color: "Blanco"
      };

    function imprimirElementos(objeto) {
        for (let clave in objeto) {
          console.log(clave + ": " + objeto[clave]);
        }
      }

    imprimirElementos(perro);
