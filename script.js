// Define a class named `Car` that represents a vehicle.
class Car {
  // The constructor method is called when a new instance of the class is created.
  // It initializes the properties `make`, `model`, and `speed` for the Car object.
  constructor(make, model) {
    this.make = make; // The make (brand) of the car
    this.model = model; // The model of the car
    this.speed = 0; // Initialize the speed of the car to 0
  }

  // Define a method named `accelerate` that increases the car's speed.
  // The `mph` parameter specifies how much to increase the speed by.
  accelerate(mph) {
    this.speed += mph; // Add the specified mph to the current speed
    console.log(`This car is going ${this.speed} mph`); // Log the updated speed
  }

  // Define a method named `brake` that decreases the car's speed.
  // The `mph` parameter specifies how much to decrease the speed by.
  brake(mph) {
    this.speed -= mph; // Subtract the specified mph from the current speed
    console.log(`This car is going ${this.speed} mph`); // Log the updated speed
  }
}

// Create an instance of the `Car` class with the make "Nissan" and model "Pathfinder".
const shitbox = new Car("Nissan", "Pathfinder");

console.log(`This car is going ${shitbox.speed} mph`); // Log the initial speed (which is 0)
shitbox.accelerate(20); // Call the `accelerate` method to increase speed by 20 mph
shitbox.brake(50); // Call the `brake` method to decrease speed by 50 mph

// Define a class named `Employee` that represents an employee.
class Employee {
  // The constructor method initializes the properties `name`, `title`, and `catchPhrase`.
  constructor(name, title, catchPhrase) {
    this.name = name; // The name of the employee
    this.title = title; // The job title of the employee
    this.catchPhrase = catchPhrase; // A catchphrase associated with the employee
  }

  // Define a method named `introduce` that introduces the employee.
  introduce() {
    console.log(
      `Hi, I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`
    ); // Log the introduction message using the employee's properties
  }
}

// Create instances of the `Employee` class for two characters.
const spongebob = new Employee("Spongebob", "Frycook", "I'm ready");
const squidward = new Employee("Squidward", "Cashier", "I hate everyone");

spongebob.introduce(); // Call the `introduce` method to introduce Spongebob
squidward.introduce(); // Call the `introduce` method to introduce Squidward

// Define a class named `Animal` that represents a generic animal.
class Animal {
  // Define a method named `speak` that logs a generic animal noise.
  speak() {
    console.log("Some animal noise");
  }

  // Define a method named `nap` that logs a sleeping sound.
  nap() {
    console.log("zzz");
  }
}

// Define a class named `Dog` that extends (inherits from) the `Animal` class.
class Dog extends Animal {
  // Override the `speak` method to log a barking sound instead of the generic animal noise.
  speak() {
    console.log("Barking");
  }
}

// Define a class named `Cat` that extends (inherits from) the `Animal` class.
class Cat extends Animal {
  // Override the `speak` method to log a meowing sound instead of the generic animal noise.
  speak() {
    console.log("Meow");
  }
}

// Function declarations for `speak`.
function speak() {
  console.log("speak 1"); // This function will be overridden by the next one
}

function speak() {
  console.log("speak override"); // This function overrides the previous one
}

// When calling `speak()`, it will use the last defined function.
speak(); // Logs "speak override"
