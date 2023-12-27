function getPrototypeChain(obj) {
  const result = [];
  while (obj !== null) {
    result.push(obj);
    obj = Object.getPrototypeOf(obj);
  }
  return result;
}

function Person(name, age) {
  this.name = name;
  this.age = age;

  Person.prototype.introduce = function () {
    console.log(`Меня зовут ${this.name} и мне ${this.age} лет`);
  };
}

const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;

  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };

  BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
      console.log("Недостаточно средств на счете.");
    } else {
      this.balance -= amount;
    }
  };

  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };
}

const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(){};
}