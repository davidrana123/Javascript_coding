obj1={
    name: 'david',
    lname: 'rana',
    role: 'fsd'
}

const gettingVal = (key, obj) => {


    if(obj === undefined){
        throw new TypeError('Cannot read property of undefined object.')
    }

    if(key in obj){
        return obj[key]
    }else{
        return 'Key not found in the object.';
    }
}

try{
    console.log(gettingVal('lname', obj1))
}catch(error){
    console.log(error.message)
}