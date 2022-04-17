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