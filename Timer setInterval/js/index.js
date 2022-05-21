
let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function (event) { // sintaxe para capturar um evento e executar uma função
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
});

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
});
