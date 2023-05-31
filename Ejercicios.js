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

//1.5.2 
