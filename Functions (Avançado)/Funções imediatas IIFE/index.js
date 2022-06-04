
// IIFE => Immediately invoked function expression
// Funções imediatas ou funções auto-invocável 

//  Quando nós estamos trabalhando no browser por exemplo, as vezes queremos que as nossas funções ou variáveis fujam do escopo global para não gerar nenhuma confusão.

//Como fugir desse escopo global? simples....

function qualquerCoisa() {
    //console.log('Qualqer Coisa'); // O conteúdo fugiu do escopo global
}
qualquerCoisa(); // Mas a chamada da função está tocando o escopo global...

// Usando o IIFE nós vamos criar uma função que não terá nome e ela será auto-invocada...

// (function() { // Para criar uma funçao que é invocada automáticamente, você pode envolver ela entre parênteses.
//     const nome =  'Ezequiel';
//     //console.log(nome);
// })(); // <= Esses dois parênteses no final é o que está fazendo a função ser chamada automáticamente e nada do que está dentro da função toca o escopo global.
// const nome = 'Qualquer nome';
// //console.log(nome);

// Ex:...

(function(idade) { // nós podemos receber parâmetros 

    const sobrenome = 'Ribeiro';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Ezequiel'));
    }

    falaNome()
    console.log(idade);

})(30); // Nós podemos passar argumentos 