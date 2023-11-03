const fn = (a, b, c) => {
    resultado = a + b + c;
    console.log(a, b, c);
    console.log(resultado);
}

const arr = [1, 2, 3];

fn(...arr);//spread operator

const arr1 =[5,6];
//forma antigua
//const arr2 = arr.concat(arr1);
//console.log(arr2);

//forma javaScript moderno
const arr2 = [...arr, ...arr1];
console.log(arr2);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);

obj1.a = 10;
console.log(obj3);

const obj4 = {...obj1, ...obj2, ...arr1};
console.log(obj4);