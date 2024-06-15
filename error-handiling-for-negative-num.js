const checkingNumber = (f,s,t) => {

    if(s === 0){
        throw new Error('second paremeter should not Zero')
    }

    if(t < 0){
        throw new Error('Number Should not less then Zero')
    }
    return f;
}

try{
    console.log(checkingNumber(1,2,-1))
}catch(error){
    console.log(error.message)
}