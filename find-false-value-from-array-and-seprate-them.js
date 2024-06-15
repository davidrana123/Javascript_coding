const findfalsevalue = (arr, func) => {
    let finalResult = [];
    for(let element of arr){
        if(!func(element)){
            finalResult.push(element)
        }
    }

    return finalResult;
}

const func = (element) => {
 return element % 2 === 0;
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log('finalResult',findfalsevalue(arr, func))