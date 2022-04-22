// Escreva uma função que recebe dois números e retorna no maior deles;

// let numUm = 563;
// let numDois = 45;

// function maiorNum(numUm, numDois) {
//     if (numUm > numDois) {
//         return numUm
//     } else {
//         return numDois
//     }
// }

// let max = maiorNum(6623, 56); // dessa forma nós poderiamos reaproveitar essa função em algum lugar...

// console.log(max);


// Refatorando o nosso código...
// Refatorar seria fazer melhorias no nosso código...

//// primeira melhoria...

// function max(x ,y) {
//     if (x > y) {
//         return x;
//     }
//     return y; // Nós já sabemos que o return retorna o valor e sai da função, nós não precisamos usar o else na condição do y
// }

// console.log(max(123, 435));

//// Segunda melhoria 

// function max(x, y) {
//     return x > x ? x : y;  // aqui consiguimos fazer o código ficar ainda menor...
// }

// console.log(max(23, 65));

//// Terceira melhoria...

// Arrow function 

// const max2 = (x, y) => {
//     return x > y ? x : y;
// }
// console.log(max2(23, 24));

//// Quarta mehoria...

let max2 = (x, y) =>  x > y ? x : y; // Quando a Arrow function tem só uma linha de código nós podemos eliminar as chaves e também fica implícito que o que tem nessa linha será retornado
console.log(max2(10, 13));