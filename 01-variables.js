//una variable var es una variable global y se puede reasignar en cualquier momento
var ejemplo = "Hola mundo";

//Las variables declaradas con let están limitadas en alcance al bloque, declaración o expresión en el que se utilizan. Esto significa que una variable declarada con let dentro de un bloque, como un bucle o una declaración if, solo será accesible dentro de ese bloque.

let ejemplo2 = "let Hola mundo";

//const es una variable que no se puede reasignar
const ejemplo3 = "const Hola mundo";
// la diferencia entre let y const es que let se puede reasignar y const no se puede reasignar aparte de que const se debe inicializar con un valor y let no es necesario inicializarlo con un valor


console.log(ejemplo);
console.log(ejemplo2);
console.log(ejemplo3);
