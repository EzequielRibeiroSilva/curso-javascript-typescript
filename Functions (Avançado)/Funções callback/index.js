// Funções callback
// Quando estamos trabalhando na web, as vezes precisamos se conectar com a base dados, buscar recursos da base dados, exibir uma informação na tela, buscar recurso de uma API, carregar um arquivo JSON por exemplo. Na internet nós precisamos fazer coisas que nós não temos como controlar quanto tempo ela vai durar. Nós não temos o controle de quanto tempo o js vai demorar parar ir na nossa base de dados e pegar os dados.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// função para gerar um número aleatório. Nesse exemplo um número de 1000 a 3000.

// Como nós podemos fazer para que essas funções sejam executadas seguindo essa mesma ordem?
// Nós podemos receber um parâmetro que é uma função de callback.
// Por exemplo, se eu precisar executar alguma coisa depois de f1, nós executamos a função callback

function f1(callback) {
    setTimeout(function() { // Esse setTimeout seria como se nós estivéssemos simulando uma ação que demorasse para acontecer na web. Por exemplo; fazer um login, baixar um arquivo...

        console.log('f1');
        if (callback) callback();
    }, rand());
    
};

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
};

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
};

f1(function(){ // f1 será o primeiro a ser executado...
    f3(function(){ // f3 nunca será executado antes do f1 ou depois do f2
        f2(function(){ // f2 nunca será executado antes do f1 ou antes do f3
            console.log('Olá Mundo'); // e o console nunca será executado antes de todos.
        });
    });
}); //  O que nós fizemos aqui é conhecido como callback hell...


// Uma outra alternativa para esse código seria..
// Esse código é literalmente identico ao código anterior. Nós só não estamos usando as funções anônimas dentro dos parâmetros para evitar que uma fique dentro da outra e assim por diante.

f1(f1Callback); 

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo');
}

