// Escreva uma função que recebe um número e retorna o seguinte:
// Se o número for divisível por 3 = Fizz
// Se o número for divisível por 5 = Buzz
// Se o número for divisível por 3 e 5 = FizzBuzz
// Se o número NÃo for divisível por 3 e 5 = Retorna o próprio número.

// Solução do professor. Não consegui fazer....

function fizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return numero;
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return numero;
    }
}

console.log('a', fizzBuzz(345));
for (let i = 0; i < 100; i++) {
    console.log(i, fizzBuzz(i));
}


