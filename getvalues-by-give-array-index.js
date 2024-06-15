//get the element accound to index 



// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const specifiedIndexes = [0, 1, 2, 3];

const findValbygivenIndex = (inputArray,specifiedIndexes) => {
    let  result = [];
    for(let i=0; i<specifiedIndexes.length; i++){
        let currentVal = specifiedIndexes[i]
        if(currentVal >= 0 && currentVal < inputArray.length){
            result.push(inputArray[currentVal])
        }
    }

    return result;
}


console.log('findValbygivenIndex',findValbygivenIndex(inputArray, specifiedIndexes))