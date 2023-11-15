// nombre, tipo, peso, altura, evolucion, ataques, pokedex, fuerza
class Pokemon{
    #tipo; //propiedad privada
    // el primer metodo que se ejecuta automaticamente al crear un objeto
    constructor(nombre, tipo, peso, altura, evolucion, ataques, numPokedex, fuerza){
        this.nombre = nombre;
        this.#tipo = tipo;
        this.peso = peso;
        this.altura = altura;
        this.evolucion = evolucion;
        this.ataques = ataques;
        this.numPokedex = numPokedex;
        this.fuerza = fuerza;
    }
    // propiedades computadas get y set
    get tipo(){
        return this.#tipo;
    }

    set tipo(newTipo){
        this.#tipo = newTipo;
    }
    // metodos
};

// Instaciar un objeto
const charmander = new Pokemon('Charmander', 'fuego', 15 , 1.20, ['Charmeleon', 'Charizard'], ['blaze', 'ascuas', 'lanzallamas'], 4 , 4);
console.log(charmander);