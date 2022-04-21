let cont = [
    {tag: 'h1', texto: 'texto para h1'},
    {tag: 'h3', texto: 'texto para h3'},
    {tag: 'h6', texto: 'texto para h6'},
];

let box = document.querySelector('.container');
let newBox = document.createElement('div');

for (let i = 0; i < cont.length; i++) {

   let {tag, texto} = cont[i];

   let criaNovoElemento = document.createElement(tag);

   criaNovoElemento.innerText = texto;

   newBox.appendChild(criaNovoElemento);
    
}

box.appendChild(newBox);


////// Exercício For in

const arquivo = [
    {tag: 'h1', texto: 'Texto para a primeira tag'},
    {tag: 'h6', texto: 'Texto para a segunda tag'},
];

const container = document.querySelector('.container');

const criaDiv = document.createElement('div');

for (let index in arquivo) {
    
    const {tag, texto} = arquivo[index];

    const criaTag = document.createElement(tag);

    criaTag.innerText = texto;

    criaDiv.appendChild(criaTag);
}

container.appendChild(criaDiv)



