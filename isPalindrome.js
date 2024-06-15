//palindrome 

const isPalindrome = (str) => {
    // let str = daviddivad;

    if(typeof(str)=== 'string'){
        let lowercase = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log('lowercase',lowercase)
        let spilt = lowercase.split('')
        let reverse = spilt.reverse()
        let join = reverse.join('')
        if(str === join){
            return 'this is a palindrome input'
        }else{
            return 'not a palindrome' + " " +str
        }
    }else{
        let str1 = str.toString()
        let lowercase = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
        let spilt = lowercase.split('')
        let reverse = spilt.reverse()
        let join = reverse.join('')
        if(str === join){
            return 'this is a palindrome input'
        }else{
            return 'not a palindrome'
        }
    }
}

console.log(isPalindrome('ranaanar'))