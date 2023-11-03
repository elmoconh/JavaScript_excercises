const Rectangulo = class {
    constructor(alto, largo) {
        this.alto = alto;
        this.largo = largo;
    }
    getArea() {
        return this.alto * this.largo;
    }
}


class Chancho{
    propiedad = "mi propiedad";
    #privada
    constructor(estado, genero, privada = false){
        this.estado = estado;
        this.genero = genero;
        this.#privada = privada;
    }

    hablar(){
        console.log(`soy un chancho ${this.genero} y estoy ${this.estado} aunque ${this.#privada ? "hambriento" : "satisfecho"}`);
    }
//método estático
    static comer(){
        console.log("ñom ñom ñom");
    }
}

const chanchito = new Chancho("feliz", "macho");
chanchito.hablar();

const chanchito2 = new Chancho("feliz", "macho", true);
chanchito2.hablar();

Chancho.comer();