let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let tarefa = document.querySelector('.tarefa');

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; // Se não houver nenhum valor, não retorna nada....
    criaTarefa(inputTarefa.value); // Mando esse texto para a function criaTarefa();
});

function criaTarefa(textoInput) { //Recebendo o texto do inputTarefa vindo do click;
    let li = criaLi()
    li.innerHTML = textoInput;
    tarefa.appendChild(li);
    limpaInput()
    criaBotaoApagar(li)  
    salvarTarefas() 
}

function criaLi(textoInput) {
    let li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return; // Se não houver nenhum valor, não retorna nada....
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // O focus é um evento html que deixa o cursor piscando dentro do input. Nesse caso nós estamos mandando o js fazer um focus nesse input.
}

function criaBotaoApagar(li) {
    li.innerHTML += ' '; // Estamos colocando um espaço entre o texto do li e do botaoApagar.
    let botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Remover';
    botaoApagar.setAttribute('class', 'apagar'); // Estamos colocando uma class no botaoApagar para poder selecioná-lo.
    li.appendChild(botaoApagar);
}

//Funcão que apaga as tarefas
document.addEventListener('click', function(e) {
    let el = e.target; // Essa função é para capturar o elemento que nós estamos clicando.
    if (el.classList.contains('apagar')) { 
        el.parentElement.remove(); // Quando o botão apagar com a class apagar for clicado, vamos remover o pai do elemento que recebeu o botao apagar
        salvarTarefas() // Estamos chamando essa função para toda vez que nós remover-mos uma tarefa ela também seja removida do local Storage do navegador
    }
});

// Agora nós vamos criar uma funcão que vai deixar todas as tarefas salvas em um banco de dados...

function salvarTarefas() {
    let liTarefas = tarefa.querySelectorAll('li');
    let listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        //console.log(tarefa.innerText);
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover', '').trim(); // Estamos apagando o texto do botão apagar que ficou vindo com o Li. Usamos o método replace(); para fazer isso.
        // Usamos os método trim(); para remover um espaço que estava aparecendo nos textos dentro do array. ['Ezequiel ', 'Ruth '];
        listaDeTarefas.push(tarefaTexto);
        // console.log(tarefaTexto);
    }
    let tarefasJSON = JSON.stringify(listaDeTarefas); // JSON.stringify converte o nosso Array em uma string. Ele continuar com a aparência de um Array mas sendo uma string. Nós podemos convertê-lo a um Array novamente.
    //Agora nós podemos salvar esses dados em algum lugar e depois podemos manipular os dados novamente.
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    let tarefas = localStorage.getItem('tarefas');
    let listaDeTarefas = JSON.parse(tarefas);
    
    for ( let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionarTarefasSalvas()