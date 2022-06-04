const nome = 'Ezequiel Ribeiro';

function falaNome() {  // O escopo léxico é quando a função conhece o lugar que ela foi declarada
    console.log(nome); // Ela conhece tudo que foi declarado dentro dela e o que foi declarado nos vizinhos dela
} // Se eu busco uma variável dentro da função e ela não está lá, o js vai buscar no pai dessa função. Se ele não achar no pai da função, ele vai buscar no pai do pai da função até ele encontrar a variável. Ele vai subindo, subindo até chegar no escopo global. Se ele não achar no escopo global ele vai informar o erro que a variável não está definida.

function usaFalaNome() {
    falaNome();
}
usaFalaNome();