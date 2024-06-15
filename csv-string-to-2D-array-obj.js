//Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.


const csvString = "Name,Age,City\nJohn,23,New York\nJane,29,San Francisco\nDoe,34,Los Angeles";

//split it in the row
//create a ary
//we will seprate title row first row

//for loop
//empy obj


const convertCSVTo2d = (csvString) => {

    let finalResult = [];
    let splitStr =  csvString.split('\n')
    let keys = splitStr[0].split(',')

    for(let i=1 ; i< splitStr.length; i++){
        let obj = {};
        let values = splitStr[i].split(',')

        keys.forEach((key, index) => {
          obj[key] =   values[index]
        })

        finalResult.push(obj)
    }

    return finalResult;
   
}

console.log('convertCSVTo2d',convertCSVTo2d(csvString))