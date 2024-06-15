const isInt = (num) => {
    console.log('typeof(num)',typeof(num))
    if(typeof(num) !== 'number'){
        throw new Error('not a number')
    }else{
        return 'number'
    }
}

try{
    // console.log('isInt', isInt(10))
    console.log('isInt', isInt('12'))
}catch(error){
    console.log(error.message)
}
