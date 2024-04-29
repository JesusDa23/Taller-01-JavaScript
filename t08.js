// 8.Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.

const numeroR = Math.round(Math.random()*10);

for (i = 0; i < 11; i++){

    usuario = parseInt(prompt ("Adivina un numero entre 1 y 10: "));
    if (usuario == numeroR){
        alert("Felicitaciones! adivinastes");
        break
    }
    else if (usuario > numeroR){
        alert("tu numero debe ser mas pequeñito");
    }
    else if ( usuario < numeroR){
        alert("tu numero debe ser mas grandecito");
    }
    
}
    alert("Fallaste!");