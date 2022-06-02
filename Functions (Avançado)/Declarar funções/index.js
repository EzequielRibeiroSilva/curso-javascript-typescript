// Como declarar um função?
//  Declaração clássica
function falaOi () {      // Essa é uma declaração literal
    console.log('Oi');    // Aqui nós temos o hoisting
}  

falaOi() // É apenas quando nós declaramos uma função com a palavra reservada 'function' que nós temos o hoisting

// O que é o hoisting?

// A engine do javascript vai elevar as declarações de funções e variáveis declaradas com a palavra 'var',pro topo do nosso código javascript. Isso significa que nós podemos executar essa função antes da função em sí ou também podemos chamar dpois da função.

// //   function falaOi () {   ou //  falaOI()
//     console.log('Oi');         //  function falaOi () {
// }                              //  console.log('Oi');
// falaOi()                       // }

// É isso que o hoisting faz.

// Todas as funções são First-class objects (Objetos de primeira classe).  Isso signfica que nós podemos tratar as funções como dados.
// Por exemplo: Nós podemos declarar uma função:
const nome = 'Ezequiel';
// Ou podemos fazer uma Function expression:
const souUmDado = function() { // Nós também podemos nomear essa funtion mas isso não é tão comum.
    console.log('Sou um dado.');
} 
// Aqui nós estamos falando que uma consta recebe um função como dado. Isso é totalmente normal.
// Agora essa const souUmDado pode pode ser executada como uma função:
//souUmDado(); //  Ou seja, a const passou a ser uma função. Por isso que nós podemos tratar uma função como um dado.

// Agora nós podemos jogar essa como parâmetro de outra função, e fazer essa outra função executar a minha função.

// Ex:

function executaFuncao(funcao) {
    //console.log('Vou executar a sua função agora');
    funcao();
}

executaFuncao(souUmDado);

// O que aconteu foi que nós passamos a const souUmDado como parâmetro para a função executaFuncao quando nós a chamamos. Então a função executaFuncao() está executando o parâmetro funcao ou funcao(). Novamente é por isso que nós falamos que as funções são First-class objects (Objetos de primeira classe) e que nós podemos tratar uma função como dado naturalmente. Podemos passar uma função para outras funções, retornar ela em outras funções.

// ----- //

// Arrow functions

// Arrow functions são um recurso mais moderno. Elas são como uma function expression mais curtas.
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}
funcaoArrow();

// Funções e Objetos

// Dentro de um objeto nós podemos ter uma função. Dentro do atributo desse obejto nós podemos jogar uma função.

const obj = {
    falar: function () {
        console.log('Estou falando');
    }
}
obj.falar(); // Essa é maneira clássica de como jogar uma função como método de um objeto

// Nás versões mais modernas do javascript nos permite criar essa função ou método direto sem a palavra function sem os dois pontos.

const objj = {
    falar () {
        console.log('Estou falando...');
    }
}
objj.falar();

// Essas são algumas das maneiras de se declarar funções no JavaScript...