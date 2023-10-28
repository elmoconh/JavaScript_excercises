//Funciones que se declaran con la palabra reservada function
function Fn(){
    this.propiedad = "valor";
}

Fn.prototype.metodo = function Hola(){
    console.log("Hola");
}

const r = new Fn();
console.log(r.Hola);