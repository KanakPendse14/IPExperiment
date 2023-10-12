class Person {
    
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
  
    introduce() {
      return `Hello, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
  
  
    greet = () => {
      return `Hi, I'm ${this.firstName}!`;
    }
  
 
    static getClassName() {
      return "Person";
    }

  }
  
 
  const johnDoe = new Person("John", "Doe", 30);
  
  console.log(johnDoe.firstName);
  console.log(johnDoe.lastName);  
  console.log(johnDoe.age);       
  
  console.log(johnDoe.introduce());
  console.log(johnDoe.greet());

  console.log(Person.getClassName());

  