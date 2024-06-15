// Example usage
const nestedObject = {
    name: "Alice",
    details: {
        age: 30,
        address: {
            city: "New York",
            postalCode: "10001"
        }
    },
    siblings: [
        {
            name: "Bob",
            details: {
                age: 25,
                address: {
                    city: "Los Angeles",
                    postalCode: "90001"
                }
            }
        },
        {
            name: "Charlie",
            details: {
                age: 20,
                address: {
                    city: "Chicago",
                    postalCode: "60601"
                }
            }
        }
    ]
};


//empty arry 
//recureshion fun
//condition
const findValueByKey = (obj, targetKey) => {

    let results = [];

    function search(obj){
        if(typeof obj  === 'object' && obj !== null){
            for(let key in obj){
                if(key === targetKey){
                    results.push(obj[key])
                }
                search(obj[key])
            }
        }
    } 

    search(obj)
    return results;
}

const targetKey = "city";
const values = findValueByKey(nestedObject, targetKey);
console.log(values); // Output: ["New York", "Los Angeles", "Chicago"]