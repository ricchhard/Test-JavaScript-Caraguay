# Preguntas test Javascript
## 1.2 Variables y operaciones
### 1.2.1 Responde las siguientes preguntas en la sección de comentarios:

**• ¿Qué es una variable y para qué sirve?**

Una variable es un espacio, donde podemos almacenar y leer datos. 

**• ¿Cuál es la diferencia entre declarar e inicializar una variable?**

Cuando se declara no necesariamente contiene almacenado un dato. 

**• ¿Cuál es la diferencia entre sumar números y concatenar strings?**

Cuando se suma numeros se realiza la operacion aritmetica y cuando se concatena solamente se juntan los strings.

**• ¿Cuál operador me permite sumar o concatenar?**
El ooperador suma 

**1.2.2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

• Nombre  --> String

• Apellido --> String

• Nombre de usuario en ESPE --> String

• Edad --> number

• Correo electrónico --> string

• Mayor de edad --> boolean

• Dinero ahorrado --> number

• Deudas --> number

**1.2.3 Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.**
var nombre;

var apellido;

var usuarioESPE;

var edad;

var correo;

var mayorEdad;

var dineroAhorrado;

var deudas;


**1.2.4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**

**• Nombre completo (nombre y apellido)**
var nombreCompleto = nombre + apellido;

console.log(nombreCompleto);

**• Dinero real (dinero ahorrado menos deudas)**
var dineroReal = dineroAhorrado-deudas;

console.log(dineroReal);

## 1.3 Funciones

### 1.3.1 Responde las siguientes preguntas en la sección de comentarios:

• ¿Qué es una función?
Es un conjunto de instrucciones unidas en un segmento de codigo que pueden o no devolver un resultado

• ¿Cuándo me sirve usar una función en mi código?
Cuando se necesita realizar acciones especificas en ciertas partes del codigo

• ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  El parametro se ingresa a la funcion, como dato entrante, sin emargo el argumento es el dato no ncesariamente declarado.

## 1.4 Condicionales
### 1.4.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un condicional?
Es una estructura de control utilizada en programación para tomar decisiones basadas en una condición.

• ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  - if : Controla una condicion
  - 
  - else-if - controla varias condiciones anidadas 
  - 
  - switch : ejectuta una sola accion segun la condicion 
  - 
• ¿Puedo combinar funciones y condicionales?

sí, es util para ejecutar alguna funcion a partir de una condicion.


## 1.5 Ciclos
### 1.5.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un ciclo?
Es un segmento de codigo repetetivo hasta que se cumpla una funcion.
• ¿Qué tipos de ciclos existen en JavaScript?
  - for:
  - while:
  - do-while
• ¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo que no tiene fin, y puede llegar a colpasar la memorio del dispositovo donde s este ejecutando
• ¿Puedo mezclar ciclos y condicionales?
Si, se pude poner condiciones dentro de un ciclo o viceversa.

## 1.6 Listas
### 1.6.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un array?
Es una estructura de datos que permite almacenar diferentes datos en una sola varibale

• ¿Qué es un objeto?
Es una estructura que agrupa valores y funcionalidades relacionadas en una sola entidad

• ¿Cuándo es mejor usar objetos o arrays?
Depende la situacion en la que se necesite.

• ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sí, un objeto puede tener datos como arrays, y los arrays tambien pueden contener objetos.

