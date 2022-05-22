
let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

// O primeiro passo para a solução desse problema, será criar uma funcão que irá capturar uma data para pegar os segundos.

function criaHoraDosSegundos(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { // Isso é um objeto com algumas opções.
        hour12: false,
        timeZone: 'UTC' // Essa opção configura a data de 01/01/1970 00:00:00
    });
}

// O segundo passo será o de inicializar o nosso relógio. Para isso nós precisamos de uma variável que receba e armazene esses segundo. Por isso criamos a let segundos como uma variável global. 
// A função iniciaRelogio será executada a cada 1 segundo e irá somar o valor de 1 a let segundos.
// Dentro da função nós também estamos atualizando o html da nossa let relogio que passada pela nossa função criaHoraDosSegundos

function iniciaRelogio() {
    timer = setInterval(function () { // Lembrando que o setInterval sempre recebe uma funcão anônima.
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos); // formata os segundos em hora, minutos e segundos
    }, 1000)
}

iniciar.addEventListener('click', function (event) { // sintaxe para capturar um evento e executar uma função
    relogio.classList.remove('pausado');
    clearInterval(timer); // Estamos garantindo que não sejam criados dois timers ao mesmo tempo
    iniciaRelogio()
});

// O próximo passo será o de fazer o relógio ser pausado. No início do exercício, a let timer estava protegida pelo escopo da função iniciaRelogio(). Agora ela é uma variável global podendo ser manipulada de qualquer lugar.

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado'); // Aqui nós estamos colocando o css pelo javascript
    clearInterval(timer); // Agora quando nós clicamos em Pausar, nós estamos parando o nosso setInterval()
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer); // O mesmo se aplica aqui para o Zerar. Quando nós clicamos aqui nós estamos mandando o setInterval() parar.
    relogio.innerHTML = '00:00:00'; // Aqui nós estamos formatando novamente o html do relógio
    segundos = 0; // Aqui nós estamos retornando a let segundo para zero.
    relogio.classList.remove('pausado'); // Aqui nós estamos tirando o css
});


///////////////////////

// Agora vamos ver uma meneira de resolver esse problema com um código mais otimizado.
// Nós usamos vários addEventListener. Isso poderá se converter em um problema para a máquina de um usuário.
// O melhor a se fazer seria implementar apenas um addEventListener usando a propriedade .target

document.addEventListener('click', function(e) {
    let botão = e.target;
    if (botão.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
    clearInterval(timer); // Estamos garantindo que não sejam criados dois timers ao mesmo tempo
    console.log('Você clicou em iniciar');
    iniciaRelogio()
    }
    if (botão.classList.contains('pausar')) {
        relogio.classList.add('pausado'); // Aqui nós estamos colocando o css pelo javascript
    clearInterval(timer); // Agora quando nós clicamos em Pausar, nós estamos parando o nosso setInterval()
    console.log('Você clicou em pausar');
    }
    if (botão.classList.contains('zerar')) {
        clearInterval(timer); // O mesmo se aplica aqui para o Zerar. Quando nós clicamos aqui nós estamos mandando o setInterval() parar.
    relogio.innerHTML = '00:00:00'; // Aqui nós estamos formatando novamente o html do relógio
    segundos = 0; // Aqui nós estamos retornando a let segundo para zero.
    relogio.classList.remove('pausado'); // Aqui nós estamos tirando o css
    console.log('Você clicou em zerar');
    }
});