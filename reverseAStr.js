//reverse the str

const reverseastr = (str) => {
    // let arr = []
    // let split = str.split('')
    // for(let i=split.length ; i >= 0; i--){
    //     arr.push(split[i])
    // }

    // let join = arr.join('')
    // console.log("join",join)
    // return join;

    //second method

    return str.split('').reverse().join('');
}


let str = 'abcd';

console.log('reverseastr',reverseastr(str))