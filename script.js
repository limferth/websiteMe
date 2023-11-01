// // java script es un lenguaje que funciona dentro de la web.
// console.log ('hola mundo')
// console.error('mi error costumizado')
// // tipos de datos 
// //  "string" = cadena de caracteres
// // Number = para guardar parametros en forma de numero.
// // BUELEANOS 
// true
// false
// // array 
// ['joel', 'ryan', 'martha']
// [1, 2, 3, 4] 
// [true,  false, true]
// // Objeto 
// 'ryan'
// 70.4
// 14
// {
//     "username": 'brian',
//     "score": 70.4,
//     "hours": 14,
//     "professional": true,
// }
// {
//     "username": 'fernando',
//     "score": 0.4,
//     "hours": 4,
//     "professional": false,
// }
console.log('this is a string')
console.error('la aplicacion a fallado')
console.log({"username": 'ryan', "score": 70.4});
// VARIABLES son nombres que le que almacenamos ciertos datosara su reutilizacion.
var usernames = 'jonhss';
let lastname = 'smith';
console.log(usernames, lastname);
const nombreunico = 'limferth';
const apellidounico = 'alanplata';
console.log(nombreunico, apellidounico);
// OPERADORES ARITMETICOS
/*

*/ 
let numberOne = 60;
let numberTwo = 100;
let result = numberOne + numberTwo
console.log(result);
// CONCATENACIONES
let nombres = 'fernando';
let apellidos = 'alanoca';
let completeName = nombres + ' '+ apellidos;

console.log(completeName);
// COMPARACIONES
/* 
== estrictamente igual
!= diferente a
*/ 
let incoUno = 100
let incogDos = 200
let results = incoUno > incogDos
console.log(results);

if (results === true) {
    console.log('login correcto');
} else {
    console.log('contrasena malisima');
}
let score = 70;
if (score > 30) {
    console.log('you need to practice more');
} else if (score > 15) {
    console.log('estas mejorando');
}
else {
    console.log('you need to follow tjis toturial');
}
// condicional SWITCH
let typeCard = 'Debid Card';
switch(typeCard) {
    case 'Debid Card':
        console.log('this is a debid card');
        break;
    case'credit Card':
        console.log('this is a credit card');
        break;
    default: 
        console.log('no card')
}
// BUCLES O ITERADORES son procesos o tareas repetitivas hasta encontrar un objetivo o llegar a un objetivo
// contar = contar +1; es un operador de decremento o incremento
let contar = 0; 
while(contar <= 4) {
    console.log(contar);
    contar++;
}
// para acceder a un conjunto de datos
let suti = ['limber', 'fer', 'john', 'joderth']
console.log(suti.length);
// FOR 
let sutis = ['ando', 'endo', 'joder'];
for(let i = sutis.length -1; i >= 0; i--) {
    console.log(sutis[i])
}
// FUNCIONES lo que hacen es definir una tarea para luego llamarlosS
function greeting(lastname) {
    console.log('soy una funcion de ' + lastname);
}
greeting('Alanoca');
greeting('fernandez');

function add(n1, n2) {
    console.log(n1 + n2)
}
add(3, 2);
add(100, 500);