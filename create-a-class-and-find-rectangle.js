class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height
    }

    calculateArea(){
        return this.width*this.height;
    }

    calculatePerimeter(){
        return 2 * (this.width + this.height)
    }
}

const cal = new Rectangle(5,3)
const send = new Rectangle(23.34,55)

console.log(send.calculatePerimeter())