// 9. Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.

let form;
listaAleotria = []
listaImpares = []

for ( i = 0; i < 10; i++){
    form = Math.round(Math.random()*10)
    listaAleotria.push(form);
    
    if( listaAleotria[i] %2 != 0 ){
        listaImpares.push(listaAleotria[i])
    }
}

console.log(listaImpares)


