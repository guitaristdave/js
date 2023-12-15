class Book {
  #title;
  #author;
  #pages;

  constructor(title, author, pages) {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
  }

  displayinfo() {
    console.log(
      `Book\nTitle: ${this.#title}\nAuthor: ${this.#author}\nPages: ${
        this.#pages
      }`
    );
  }
}

const book = new Book("Harry Potter", "J.K. Rowling", 500);
book.displayinfo();

class Student {
  #name;
  #age;
  #grade;

  constructor(name, age, grade) {
    this.#name = name;
    this.#age = age;
    this.#grade = grade;
  }

  displayinfo() {
    console.log(
      `Student\nName: ${this.#name}\nAge: ${this.#age}\nGrade: ${this.#grade}`
    );
  }
}

const student = new Student("David", 30, "11th");
student.displayinfo();
