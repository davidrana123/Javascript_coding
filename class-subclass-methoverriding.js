// Define the Shape class
class Shape {
    // Constructor to initialize width and height (generic dimensions)
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area (generic formula, typically overridden)
    areaCalculate() {
        return this.width * this.height; // Just a placeholder, to be overridden
    }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
    // Constructor to initialize the radius
    constructor(radius) {
        // Call parent constructor with radius for both width and height for simplicity
        super(radius, radius);
    }

    // Override the areaCalculate method for Circle
    areaCalculate() {
        return Math.PI * this.width * this.width; // Area of circle: πr²
    }
}

// Define the Triangle class that extends Shape
class Triangle extends Shape {
    // Constructor to initialize base and height
    constructor(base, height) {
        super(base, height);
    }

    // Override the areaCalculate method for Triangle
    areaCalculate() {
        return 0.5 * this.width * this.height; // Area of triangle: 0.5 * base * height
    }
}

// Create instances and calculate areas
const shape1 = new Shape(10, 20); // Generic shape (using the base class method)
const circle1 = new Circle(10); // Circle with radius 10
const triangle1 = new Triangle(10, 20); // Triangle with base 10 and height 20

// Output the area calculations
console.log('Shape1 Area:', shape1.areaCalculate()); // This is just a placeholder calculation
console.log('Circle1 Area:', circle1.areaCalculate()); // Calculated using the Circle's method
console.log('Triangle1 Area:', triangle1.areaCalculate()); // Calculated using the Triangle's method

// Expected Output:
// Shape1 Area: 200 (as a generic example, not used for real shapes)
// Circle1 Area: 314.1592653589793 (π * 10^2)
// Triangle1 Area: 100 (0.5 * 10 * 20)
