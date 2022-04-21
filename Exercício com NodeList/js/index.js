let paragrafos = document.querySelector('.paragrafos');

let carro = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of carro) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'pink';
}