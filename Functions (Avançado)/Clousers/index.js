// escopo global
function retornaFuncao() {
    const nome = 'Ezequiel';
    return function() {
        return nome  // O clouser é a habilidade dessa function anônima acessar o seu scopo léxico. Elá está acessando o seu scopo, depois o escopo de retornaFuncao() e o escopo global.
    };
}

const funcao =  retornaFuncao();
console.dir(funcao);