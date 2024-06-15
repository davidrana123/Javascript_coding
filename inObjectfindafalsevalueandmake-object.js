//i have a arry 1-10 num false is which is not devided by 2 result is true so the false valuse will create a objst 


const makingFalseresultObj = (object, funC) => {
    const falseProperties = {};
    for(let key in object){
        if(!funC(object[key])){
            falseProperties[key] = object[key]
        }
    }
    return falseProperties;
}

const isOdd = (val) => {
    return val % 2 === 0;
}


const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    e: 6,
  };

  console.log('makingFalseresultObj(obj, isOdd)',makingFalseresultObj(obj, isOdd))