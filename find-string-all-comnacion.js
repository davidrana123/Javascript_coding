const generateCombinations = (str) => {
    const result = [];
    let length = str.length;
    for(i = 1 ; i< length; i++){
        for(j=0 ; j < length - i; j++){
            let com = str.substr(j,i)
            result.push(com)
        }
    }

    return result;
};

// Example usage:
const str = 'abc';
const combinations = generateCombinations(str);
console.log(combinations);