const checkingArray = (arr) => {
    console.log(typeof(arr))
    if(!Array.isArray(arr)){
        throw new Error('This is not a Array')
    }
    if(arr.length === 0){
        throw new Error('Arry is empty')
    }else{
        return arr;
    }
}

let arr = ['1']

try{
    console.log(checkingArray(arr))
}catch(error){
    console.log(error.message)
}