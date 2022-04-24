// Escreva um função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number);
//retorne True se a imagem estiver no modo paisagem;

// Minha solução em 23/04/22

// const img = [1080, 1920];

// function ePaisagem() {
//     if (img[0] === 1800 && img[1] === 945) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(ePaisagem(img));

// Soluções do professor

// 1

// function ePaisagem(largura, altura) {
//     return largura > altura ? true : false;
// }

// console.log(ePaisagem(1080, 1920));

// 2

// function ePaisagem(largura, altura) {
//     return largura >= altura;
// }
// console.log(ePaisagem(1920, 1080));

// Solução com Arraw Functions...

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 7080));