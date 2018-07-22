function multiply(m, n) {
    // throw Error('Hey, I don\'t know how to this!' );
    return m * n;
}


function squareMe(x) {
    const result = multiply(x, x);
    return result;
}


function main() {
    const y = 100;

    const a = squareMe(y);

    console.log('Sqaure of ' + y + ' is ' + a);
}


main();
main();
main();
main();
main();
