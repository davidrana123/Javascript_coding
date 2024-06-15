const inputArray = [1, 2, 3];

const getAllCompnection = (array) => {
    let combnation = [[]];

    for(let i = 0; i<array.length; i++){
        firstval = array[i]
        let combo = combnation.map( val => {
           return [...val, firstval]
        } )

        combnation = [...combnation, ...combo]
    }

    return combnation;
}


console.log('getAllCompnection',getAllCompnection(inputArray))