//Using async/await

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
 
 const exectutionOfAsync = async() => {
     try{
         await asyncFunction('A',1000)
         await asyncFunction('B',1000)
         await asyncFunction('C',4000)
         console.log('all calles are done')
     }catch(error){
         console.warn(error)
     }
 }
 
 exectutionOfAsync()