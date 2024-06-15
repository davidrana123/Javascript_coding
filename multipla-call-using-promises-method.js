//Using Promises

const asyncFunction = (name, duraction) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
 
         if(duraction > 3000){
             reject('time out')
             // return new Error('time out')
         }else{
             console.log('Response' + name + 'your duraction is' + duraction)
             resolve(name)
         }
     }, duraction)
    })
 }
 
 const exectutionOfAsync = () => {
     asyncFunction('A', 2000)
     .then(() => asyncFunction('B', 1000))
     .then(() => asyncFunction('c',4000))
     .then(() => {
         console.log('excuted all the async fun')
     }).catch((error) => {
         console.log(error)
     })
 }
 
 exectutionOfAsync()