const alphabeticalOrder = (str) => {
    let split = str.split('')
    let sort = split.sort().join('')
    return sort
}

const str = 'dwncqoiwdjweorcnwecbvcuxqaznvhfhrpunmvdrysohdhbf';

console.log(alphabeticalOrder(str))