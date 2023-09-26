// Arrays
// 1
let arrayVacio = [];
// 2
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
// 3
let arrayNumerosPares = [0,2,4,6,8];
// 4
let arrayBidimensional = [[0,1,2],["a","b","c"]];
// Funciones
// 5
function suma(n1,n2) {
    let resultado = n1 + n2;
    return resultado;
}
// 6
function potenciacion(n1,n2) {
    return Math.pow(n1,n2);

}
// 7
function separarPalabras(String) {
    let separar = String.split(" ");
    return separar; 

}
console.log(separarPalabras("Hola mundo"));
// 8

function repetirString(palabra, n1) {
    let resultado = palabra.repeat(n1);
    return resultado;
  }
  console.log(repetir("hola",3));

// 9
  function esPrimo(n) 
  {
      if (n<=1) return false;
      for (var i = 2; i <= n-1; i++)
          if (n % i == 0) return false;
      return true;
  }
  
  console.log(esPrimo(2));
  console.log(esPrimo(13));
//   Mezclar Arrays y Funciones
// 10
  let numeros1Desordenados = [7, 1, 8];
  function ordenarNumeros(numeros) {
    return numeros.sort();
  }
  
  console.log(ordenarNumeros(numeros1Desordenados));
// 11

let obtenerPares = [4234,3,445,67,88];
let pares = obtenerPares.filter(function(numero){numero % 2 == 0})

console.log(pares);
// 12
let arrayPalabras = [0, 1, 2];
function pintarArray(numeros) {
  return "[" + numeros.toString() + "]";
}

console.log(pintarArray(arrayPalabras));
// 13

let arrayMapi = []

// 14

function duplicados() {
    const numeros = [1, 2, 2, 3, 4, 4, 5];
    const unicos = [];
  
    for (var i = 0; i < numeros.length; i++) {
      const elemento = numeros[i];
  
      if (!unicos.includes(numeros[i])) {
        unicos.push(elemento);
      }
    }
    return unicos;
  }
  
  console.log(duplicados()); 

// Arrays 2
// 15
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

// 16
let holaMundo = ["Hola","Mundo"];

// 17
let loGuardoTodo = ["hola","que",23,42.33,"tal"];

// 18
let arrayDearrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]];

// Funciones 2
// 19
function multiplicacion(n1,n2) {
    let resultado = n1*n2;
    return resultado;

}

// 20
function division(n1,n2) {
    let resultado = n1 % n2;
    return resultado;

}

// 21

function esPAr(n) {

    if (n % 2 == 0) return true
    else false;
}

// 22

let arrayFunciones = []

// Mezclando Arrays y Funciones 22
// 23
let numerosDesordenados = [7, 1, 8];
function ordenarNumeros(numeros) {
  numeros.sort();
  return numeros.reverse();
}

console.log(ordenarNumeros(numerosDesordenados));
// 24
let obtenerImpares = [4234,3,445,67,88];
let impares = obtenerImpares.filter(function(numero){numero % 2 !== 0 })

console.log(impares);
// 25
let numeros = [1, 2, 3], suma = 0;
numeros.forEach (function(numero){
    suma += numero;
});
console.log(suma);

// 26

let total = 24;

let producto = [2,3,4];

function productoria(){
  for (let f=0;f<producto.length;f++){
    if(producto[f]!=0){
      total = (producto[f]*total);
    }
  }return total;
}
console.log(productoria());