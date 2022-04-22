let num = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num.length; i++) {

    if (num[i] === 3) {
        console.log('Pulei o número 2');
        continue
    }
    console.log(num[i]);
    if (num[i] === 5) {
        break
    }
}

// continue continua para a próxima interação
// Break sai do laço