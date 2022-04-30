// Funções usadas para controlar Timers...
// Essas funções são aceitas tanto no navegador como no Node...

//ex1

// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {hour12: false});
// }

// console.log(mostraHora()); // Esse console sempre que for executado, retornará a hora.
//Mas nós temos como fazer essa execução se tornar automática.

// Quando nós quermos trabalhar com intervalos de tempo, nós podemos usar a função setInterval..
// setInterval vai configurar algum intervalo de tempo para que alguma função seja executada em determinado momento...


//ex2

// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {hour12: false});
// }

// setInterval(function () {    /// Exemplo de função anônima...
//     console.log(mostraHora());
// }, 1000);

// Repare que embora nossa função esteja realizando exatamente a tarefa que nós estavamos desejando, esse código ficou bastante longo. Vamos diminuí-lo... 
// Nós podemos diminuir o código usando uma função anônima...

//ex3

// Nós também podemos colocar o setInterval dentro de uma variável.


// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {hour12: false});
// }

// const timer = setInterval(function () {    /// Exemplo de função anônima...
//     console.log(mostraHora());
// }, 1000);

// setTimeOut
// O setTimeOut é uma função que é executada apenas uma vez. Ou seja, como o próprio nome já deixa claro, essa função vai ser usada para parar o nosso setInterval

//ex1

// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {hour12: false});
// }

// const timer = setInterval(function () {    /// Exemplo de função anônima...
//     console.log(mostraHora());
// }, 1000);

// setTimeout(function() {
//     clearInterval(timer);
// }, 10000);

//ex2

//Nós também podemos usar o setTimeOut para mostrar uma mensagem no final da contagem.

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

const timer = setInterval(function () {    /// Exemplo de função anônima...
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Acabou o tempo');
}, 5000);


// OBS: Sempre que nós queremos chamar uma função para executa-lá, nós precisamos usar os parênteses