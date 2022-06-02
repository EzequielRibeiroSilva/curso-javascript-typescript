function funcao(a, b, c) { // => Esses valores são parâmetros
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
//funcao(10, 20, 30, 40, 50); // => Esses valores são argumentos

// Uma função definida com a palavra function tem uma variável especial que se chama arguments  que sustenta todos os argumentos enviados.

// Os paramentos a, b, e c que foram passados na funcao, tem os valores que foram passado no momento que a funcao foi chamada.

// ----- Função que soma dois números ----- //

function soma(a, b = 2) {
    //b = b || 0
    console.log(a + b);
}
// soma(2); // Aqui nós estamos mandando apenas 2 como argumento para os nossos parâmetros. Nós precisamos definir uma valor para o b.
// A forma antiga seria ver se b = b || 0; Se b tiver algum valor, o argumento terá esse valor, se não será 0.

// A forma mais usada hoje é colocar um valor para o parâmetro b apenas dizendo que b = 2;

// ---- Atribuição via Desestruturação de objetos nos parâmetros ---- //

function obj({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let objeto = {nome: 'Ezequiel', sobrenome: 'Ribeiro', idade: 31}
// obj(objeto);

// ---- Atribuição via Desestruturação de arrey no parâmetros ---- //

function objjj([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let objeto1 = ['Ezequiel', 'Silva', '31 anos'];
objjj(objeto1);