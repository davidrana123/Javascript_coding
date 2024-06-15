//convert an array of objects to a CSV string that contains only the columns specified using JavaScript

const data = [{
    "firstname": "geeks",
    "lastname": "org",
    "age": 12
},
{
    "firstname": "devendra",
    "lastname": "salunke",
    "age": 31
},
{
    "firstname": "virat",
    "lastname": "kohli",
    "age": 34
},
];

//head 
//push
//all data for 
//head values get
//push 
//push join
 

const convertArrayObjToCsv = (data) => {

    let mainCsvStr = []
    const header = Object.keys(data[0])
    console.log('header',header)
    mainCsvStr.push(header.join(','))
    console.log('mainCsvStr',mainCsvStr)

    for(const row of data){
        let values = header.map(head => {
            val = row[head]
            return val
        })

        mainCsvStr.push(values.join(','))
        console.log('mainCsvStr--1',mainCsvStr)
    }

    return mainCsvStr.join('\n')

}

console.log('convertArrayObjToCsv',convertArrayObjToCsv(data))