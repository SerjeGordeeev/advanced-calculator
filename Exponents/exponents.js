let multiplyExponents = function (args) {
    let base = 1;
    let exponent = 0;
    let sum = 1;
    for (let i = 0; i < args.length; i++) {
        sum = sum * (base ** exponent * (args[i].base ** args[i].exponent))
    }
    return sum
}

let divideExponents = function (args) {
    let total = args[0].base ** args[0].exponent;
    for (let i = 1; i < args.length; i++) {
        total /= (args[i].base ** args[i].exponent)
    }
    return total
}

let negativeExponents = function (a, n) {
    return Math.pow(a, -n);
}

let fractionalExponents = function (a, p, q) {
    return `${a ** (p / q)}`
}

let powerOfPower = function (a, m, p) {
    return ((a ** m) ** p)
}

let x10 = function (num, exp) {
    return num * Math.pow(10, exp)
}


module.exports = { multiplyExponents, divideExponents, negativeExponents, fractionalExponents, powerOfPower, x10 }
// console.log(powerOfPower(5, 2, 3))
// console.log(divideExponents([{ base: 2, exponent: 7 }, { base: 4, exponent: 2 }, { base: 2, exponent: 4 }, { base: 2, exponent: 1 }]))
// console.log(divideExponents([{ base: 2, exponent: 7 }, { base: 4, exponent: 2 }, { base: 2, exponent: 4 }, { base: 2, exponent: 1 }]))
// console.log(divideExponents([{ base: 6, exponent: 5 }, { base: 2, exponent: 5 }]))
