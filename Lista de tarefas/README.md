
<h1>- Criando uma lista de tarefas 📄-</h1>

Esse foi o passo a passo seguido para criar essa lista de tarefas. Esse exercício foi proposto na última aula do módulo Lógica de programação do curso JavaScript e TypeScript do básico ao avançado 2022.

Decide criar um README.md em todos os exercícios do curso para mapear os passos de cada solução e também colocar as minhas palavras em tudo aquilo que eu entendi com o desafio.

A única observação que eu quero fazer é a que este resumo se refere na sua totalidade ao JavaScript.

Vamos lá! 😊

<h2>O HTML</h2>

Como tudo começa pelo html, começamos criando uma section com uma class chamada container. Depois criamos um título para o layout. Dentro de uma tag main criamos um input do texto com uma class chamada input-tarefa. Logo após o input, criamos um button com a class btn-button.

Agora fora da nossa tag main, criamos uma tag ul com uma class chamada tarefa. Será nessa ul que nós iremos inserir os itens da nossa lista. Ou seja, as tarefas que serão criadas.

Esse foi o nosso html. Nada de complexo aqui...

Agora vamos entrar no JavaScript...

<h2>Selecionando os Elementos</h2>

A primeira coisa que nós fizemos no js foi criar variáveis pagando as class de cada um dos nossos elementos html. Então nós criamos uma variável para pegar o conteúdo vindo no input. Criamos uma variável para capturar o evento de click do button. E criamos uma variável para armazenar os elementos que serão criado dentro da nossa ul.

O próximo passo foi fazer um addEventListiner no button btnTarefas. Dentro desse evento nós estamos verificando se o nosso input está vazio ou não. Estamos verificando se o valor difere de algum conteúdo. Se não houver nenhum valor recebido pela variável inputTarefa, esse evento não terá nenhum return.

Dentro desse mesmo evento, em caso de haver algum conteúdo passado pelo input para a let inputTarefa, nós estamos mandando esses dados para a function criaTarefa() passando o inputTarefa.value

<h2>function criaTarefa(textoInput)</h2>

A function criaTarefa() está recebendo o parâmetro (que é o conteudo do inputTarefa.vale) direto do evento de click btnTarefa.

Agora dentro da function criaTarefa() nós criamos um let chamada li que vai receber o conteúdo de uma outra function chamada criaLi(). 

A function criaLi() só terá uma tarefa a fazer. Ela será usada para cria os elementos de lista que serão incluídos dentro dos ul's recebendo esse return. Essa function é chamada a partir da function criaTarefa(). 

A let li recebe o parâmetro passado pela function criaLi. Logo em seguinda colocamos esse conteúdo em li com o innerHTML e fazemos esses li's aparecer no front usando o appendChild(li) em tarefa.

<h2>input.addEventListener('keypress')</h2>

Depois que criamos a function que cria as nossas funções, criamos um outro evento de click para a tecla enter do teclado. Aqui nós estamos validando o evento somente se a keyCode da tecla corresponder ao keyCode da tecla enter que no caso é 13. Dentro do if que faz essa validação nós estamos usando a mesma verificação do btnTarefa.addEventListener lá no inicio.

<h2>function limpaInput()</h2>

Nessa function nós estamos limpando o campo do input apenas dizendo que o inputTarefa.value recebeu um valor de string vazia. Além disso nós também inplementamos um curson que fica piscando dentro do input. Para isso nós usamos o método focus() no inputTarefa e então nós chamamos essa essa function dentro da function criaTarefa()

<h2>function criaBotaoApagar(li)</h2>

Essa function foi criada para adicionar os button's que cada tarefa vai receber quando for criada. Esses button's serão usados para excluir as tarefas. 

O que nós fizemos primeiro dentro dessa funtion foi adicionar um espaço entre o li e o botão que está sendo criado. Fizemos isso com o innerHTML mesmo.

Depois criamos uma let chamada botaoApagar e em seguida um createElement pegando o botaoApagar. Então nós colocamos o texto Remover no butto com o innerHTML e também colocamos uma class chamada apagar no botaoApagar usando o setAttibute.

E para finalizar ainda dentor da function criaBotaoApagar() nós estamos fazendo esse button aparecer dentro do li usando o appendChild e passando o botaoApagar como parâmetro.

<h2>Evento que apaga as tarefas da lista</h2>

Agora que nós já temos os buttons em cada li, vamos adicionar a funcionalidade que exclui esses elementos de dentro da lista.

Para isso nós vamos criar um evento pegando o nosso document. Esse evento também é um click. O que nós estamos fazendo é, sempre que o button for clicado, esse click farar o elemento pai do botaoApagar ser excluido da lista.

Primeiro criamos uma let chamada el. esse 'el' se refere aos elementos que serão clicados. Nesse caso o button com a class apagar. Para saber qual o elemento está sendo clicado, nós estamos pegando o e.target ou poderia ser event.target. 

Agora que nós sabemos o elemento que está sendo clicado nós abrimos um bloco de verificação e checamos se o elemento que está sendo clicado tem a class apagar. Se sim, nós eliminamos o pai desse elemento usando o parentElement.remove()

E por fim a última ação que fizemos dentro desse evento foi chamar a function que salva os eventos no banco de dados do navegador. Vamos ver isso mais a frente.

<h2>function salvarTarefas()</h2>

Aqui nós ciramos um let chamada liTarefas que recebe o conteúdo de todos os li's que foram criados na ul tarefa ou que serão criados ainda.

Depois nós criamos um Array chamado listaDeTarefas e inicializamos ele vazio. Esse Array armazenará todos os nossos li's.

Após isso, iteramos sobre a let liTarefas usando um for of com uma let chamada 'tarefa' que não é a mesma do nosso escopo global. Dentro desse for nós criamos uma let tarefaTexto para receber o conteúdo da let tarefa (essa sim é a nossa let tarefa do escopo global) com o innerText.

Dentro desse form nós criamo uma outra let chamada tarefaTexto que recebe o tarefa com um innerTexto (nossa let tarefa global). depois a let tarefaTexto vai receber ela mesma e fazer um replace com uma string vazia em todas as palavras 'Remover' que ela encontrar. Ou seja, ela vai remover os 'Remover'de todos os buttons.

Após isso fizemos um push dentro do Array listaDeTarefas mandando todos os li's que foram criados ou que serão e até mesmo os que serão apagados. Nós usaremos esse Array para resgatar esses dados novamente.

<h3>Aquivo JSON</h3>

Saindo do for dentro da function, nós criamos uma let chamada terefasJSON que recebe um arquivo JSON.stringify(); o método stringify criará uma string seguindo o mesmo formato de um Array, mas ele não será um Array. Será uma string. Nada mais. Embora se pareça exatamente como um Array. E qual o Array nós queremos que o stringify() converta? O listaDeTarefas

Após isso nós pegamos essa string que foi gerada a partir do Array e armazenamos ela no localStorage do nosso navegador. Para isso nós usamos o método setItem() que recebe um identificador entre 'Aspas'. Assim localStorage.setItem('tarefas',. Esse identificador será usado para recuperar esses dados novamente. E de onde esses dados estão vindo? De tarefasJSON

Por fim nós apenas chama-mos a function salvarTarefas() dentro de criarTarefa()

<h2>function adicionarTarefasSalvas()</h2>

Para finalizar nós vamos recuperar os dados que ficaram salvos no Local Storage do nosso navegador. Dentro dessa function nós criamos uma let chamada tarefa no escopo local dessa funtion.

A let tarefas vai receber todas as informações que ficaram salvas. Para isso foi usado o .getItem('') passando o identificador 'tarefa'.

Ainda no escopo local dessa function nós criamos outra let chamada listaDeTarefas que vai receber o nosso arquivo JSON.parse('') recebendo os dados que foram resgatados do local storage em tarefas.

Depois disso criamos um for dentro dessa function e dentro dele iteramos sobre a nossa let global tarefa em listaDeTarefas. Dentro desse for nós estamos chamando a function criatarefa('') passando tarefa (tarefa global).

Para finalizar nós apenas chamamos nossa function fora do escopo. Assim sempre que a pagina for carregada e haver algum tarefa criada salva dentro do nosso local storage, ela será exibida novamente no navegador do usuário.