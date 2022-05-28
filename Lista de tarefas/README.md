
<h1>--- Criando uma lista de tarefas  📄 ---</h1>

Esse foi o passo a passo seguido para criar essa lista de tarefas. Esse exercício foi proposto na última aula do módulo Lógica de programação do curso JavaScript e TypeScript do básico ao avançado 2022.

Decide criar um README.md em todos os exercícios do curso para mapear os passos de cada solução e também colocar as minhas palavras em tudo aquilo que eu entendi com o desafio.

A única observação que eu quero fazer é a que este resumo se refere na sua totalidade ao JavaScript.

Vamos lá! 😊

Como tudo começa pelo html, começamos criando uma section com uma class chamada container. Depois criamos um título para o layout. Dentro de uma tag main criamos um input do texto com uma class chamada input-tarefa. Logo após o input, criamos um button com a class btn-button.

Agora fora da nossa tag main, criamos uma tag ul com uma class chamada tarefa. Será nessa ul que nós iremos inserir os itens da nossa lista. Ou seja, as tarefas que serão criadas.

Esse foi o nosso html. Nada de complexo aqui...

Agora vamos entrar no JavaScript...

A primeira coisa que nós fizemos no js foi criar variáveis pagando as class de cada um dos nossos elementos html. Então nós criamos uma variável para pegar o conteúdo vindo no input. Criamos uma variável para capturar o evento de click do button. E criamos uma variável para armazenar os elementos que serão criado dentro da nossa ul.

O próximo passo foi fazer um addEventListiner no button btnTarefas. Dentro desse evento nós estamos verificando se o nosso input está vazio ou não. Estamos verificando se o valor difere de algum conteúdo. Se não houver nenhum valor recebido pela variável inputTarefa, esse evento não terá nenhum return.

Dentro desse mesmo evento, em caso de haver algum conteúdo passado pelo input para a let inputTarefa, nós estamos mandando esses dados para a function criaTarefa() passando o inputTarefa.value

<h3>Agora vamos ver a function que cria as tarefas.</h3>

A function criaTarefa() está recebendo o parâmetro (que é o conteudo do inputTarefa.vale) direto do evento de click btnTarefa.

Agora dentro da function criaTarefa() nós criamos um let chamada li que vai receber o conteúdo de uma outra function chamada criaLi(). 

A function criaLi() só terá uma tarefa a fazer. Ela será usada para cria os elementos de lista que serão incluídos dentro dos ul's recebendo esse return. Essa function é chamada a partir da function criaTarefa(). 

A let li recebe o parâmetro passado pela function criaLi. Logo em seguinda colocamos esse conteúdo em li com o innerHTML e fazemos esses li's aparecer no front usando o appendChild(li) em tarefa



