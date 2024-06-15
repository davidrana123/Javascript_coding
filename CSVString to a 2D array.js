const csvString = "Name,Age,City\nJohn,23,New York\nJane,29,San Francisco\nDoe,34,Los Angeles";

const convertCSVTo2d = (csvString) => {
    const splitBySilesh = csvString.split('\n');

    console.log('splitBySilesh',splitBySilesh)

    const splitByComma = splitBySilesh.map(oneByone => oneByone.split(','))
    console.log('splitByComma',splitByComma)

    return splitByComma;
}

console.log('convertCSVTo2d',convertCSVTo2d(csvString))