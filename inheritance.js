class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    printDetails() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    }
    }
    class Student extends Person {
    constructor(firstName, lastName, className, rollNumber) {
    super(firstName, lastName);
    this.className = className;
    if (rollNumber <= 0) {
    throw new Error('Roll number must be greater than zero.');
    }
    this.rollNumber = rollNumber;
    }
    printDetails() {
    super.printDetails(); // Calls the parent class's
    
    console.log(`Class: ${this.className}`);
    console.log(`Roll Number: ${this.rollNumber}`);
    }
    }
    try {
    const student1 = new Student('Karan', 'Shaha', 'A', 70);
    student1.printDetails();
    // This will throw an exception
    const student2 = new Student('Alicia', 'Smith', 'D15B', 9);
    } catch (error) {
    console.error(error.message);
    }
    