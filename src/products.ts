interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Milk", price: 3.5 },
  { name: "Eggs", price: 2.5 },
  { name: "Bread", price: 2.0 },
];

function calcAverageProductPrice(array: Product[]): number {
  let average: number = 0;
  let counter: number = 0;
  for (let product of array) {
    average += product.price;
    counter++;
  }
  return average / counter;
}

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);
