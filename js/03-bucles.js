// Bucle While

let renglon = 1;

while(renglon<11){
    document.write("<p>Este es el reglón número " + renglon + "</p>");
    renglon++;
}

// Bucle Do While

let renglondw = 1;
do{
    document.write("<p>Este es el reglón número " + renglondw + "</p>");
    renglondw++;
}while(renglondw<11)

for(let cuentaRegresiva=10 ; cuentaRegresiva>0 ; cuentaRegresiva--){
    document.write(`<p>Cuenta regresiva N: ${cuentaRegresiva}</p>`)
}
