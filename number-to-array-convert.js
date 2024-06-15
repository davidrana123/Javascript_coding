const number = 12345;


//string
//split

const convertNumberToArr = (num) => {
    let strnum = num.toString()
    console.log('strnum',strnum)
    let splitstr = strnum.split('')

    let backtoint = splitstr.map(val => parseInt(val, 10))

    console.log('backtoint',backtoint)


    // console.log('splitstr',splitstr)
}

console('convertNumberToArr',convertNumberToArr(number))