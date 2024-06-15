const ArrayVal = [1,2,3,4,5,6]
const spvalu = [2,3]


//using filter, includes method

// const removeSpValue = (arr,sp) => {
//    const result = arr.filter(item => !sp.includes(arr[item]))
//    console.log('result',result)
//    return result;
// }

// removeSpValue(ArrayVal, spvalu)


//using for loop and includes method

const removeSpValue = (arr,sp) => {
   let result = []

   for(let i=0 ; i<arr.length; i++){
    if(!sp.includes(arr[i])){
        result.push(arr[i])
    }
   }

   console.log('result',result)
}

removeSpValue(ArrayVal,spvalu)