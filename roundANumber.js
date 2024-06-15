const roundtheNumber = (num, digit) => {
    let factorial = Math.pow(10, digit)
    return Math.round(num * factorial)/factorial;
}

let num = 123.39765432
let digit = 4

console.log('round the number', roundtheNumber(num, digit))


const fixedApproch = (num, digit) => {
    return num.toFixed(digit)
}

console.log('fixedApproch the number', fixedApproch(num, digit))