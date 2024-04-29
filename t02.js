// 2. Escribe un programa que genere la tabla de multiplicar de un número dado.

let num1 = parseInt(prompt("Ingrese un numero: "));

function tablaDeMultiplicar () {
    for(i = 1; i < 11; i++ ) {
        console.log( num1 + " multiplicado por " + i + " " + "su resultado es: " + (num1 * i))
    }
}

tablaDeMultiplicar(num1)