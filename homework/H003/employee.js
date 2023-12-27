class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Employee: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(`Employee: ${this.name}, Department: ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
