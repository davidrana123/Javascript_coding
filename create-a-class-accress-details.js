class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displyDistals(){
        return {
            name: this.name,
            age: this.age,
            country: this.country
        }
    }
}

const per1 = new Person("david", 24, 'khatima')
const per2 = new Person("shu", 18, "Bhara")


console.log('displyDistals',per1.displyDistals())