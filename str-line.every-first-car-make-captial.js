const makeFirstLatterCap = (str) => {
    let split = str.split(' ')
    let makeupper = split.map(val => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase())
    let result = makeupper.join(' ')
    return result;
}

console.log('makeFirstLatterCap',makeFirstLatterCap('hello world i am david'))