class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
  }

  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let result = 0;
    for (const product of this.products) {
        result += product.price;
    }
    return result;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600