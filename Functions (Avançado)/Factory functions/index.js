function criaPessoa(nome, sobrenome, a, b) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura: a,
        peso: b,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}
const p1 = criaPessoa('Ezequiel', 'Ribeiro', 1.8, 90);
console.log(p1.imc());
