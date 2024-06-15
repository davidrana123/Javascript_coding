//Compare two objects

obj1 = {
    name: 'David',
    age: '24',
    role: 'fsd'
}

obj2 = {
    name: 'David',
    age: '24',
    role: '12'
}

//for in loop---------------------------------
// const ObjCheking = (obj1, obj2) => {
//     for(key in obj1){
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//     }
//     return true
// }

// console.log(ObjCheking(obj1, obj2))

//Using JSON.stringify()----------------------------------------

// const ObjCheckingByconvertingObjToStr = (obj1, obj2) => {
//     const SObj1 = JSON.stringify(obj1)
//     const SObj2 = JSON.stringify(obj2)

//     const isEqual = SObj1 === SObj2;
//     return isEqual;
// }

// console.log('ObjCheckingByconvertingObjToStr(obj1, obj2)',ObjCheckingByconvertingObjToStr(obj1, obj2))

//Using a custom function--------------------------

// const customObjChecking = (obj1, obj2) => {
//     const Cobj1 = Object.keys(obj1)
//     console.log('Cobj1',Cobj1)

//     const Cobj2 = Object.keys(obj2)

//     if(Cobj1.length !== Cobj2.length){
//         return false
//     }

//     for(const key of Cobj1){
//         if(obj2[key] !== obj1[key]){
//             return false
//         }
//     }

//     return true
// }

// console.log('customObjChecking',customObjChecking(obj1, obj2))

//----------------------------------------Using Object.keys() and Array.every()

//obje key , key check send obj , check

// const checkingTwoObjSmeOrNot = (obj1, obj2) => {
//     return Object.keys(obj2).every(val => obj1.hasOwnProperty(val) && obj1[val] === obj2[val])
// }

// console.log('checkingTwoObjSmeOrNot(obj1, obj2)',checkingTwoObjSmeOrNot(obj1, obj2))