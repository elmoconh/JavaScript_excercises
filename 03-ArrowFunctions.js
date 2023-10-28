//Funciones que se declaran con la palabra reservada function
function Fn(){
    this.propiedad = "valor";
}

Fn.prototype.metodo = function Hola(){
    console.log("Hola");
}

const r = new Fn();
console.log(r);

const ArrowFn = () => {
    this.prop = "funcion flecha"
    console.log("Hola desde una" + this.prop);
    return "Hola";
}

//nota no se puede usar la palabra resevada new con las funciones de flecha porque no tienen un this propio y no se puede usar el operador new
//const r1 =new ArrowFn();

const r1 = ArrowFn();
console.log(r1);