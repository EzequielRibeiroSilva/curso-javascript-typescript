function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x ou y precisam ser números');
    }
    return x * y
}

try {
    console.log(soma(8, 2));
    console.log(soma('M', 23))
} catch (error) {
    console.log(error);
}

