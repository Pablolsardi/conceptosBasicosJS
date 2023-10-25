let edad = parseInt(prompt('Ingrese su edad'));

if(edad>=18 && edad<=70){
    document.write("Debe votar");
}else{
    if((edad>=16 && edad<18)||(edad>70)){
        document.write("Puede votar pero no es obligatorio");
    }else{
        document.write("jijii no podés votar gil de mierdaaaa!!!")
    }
}