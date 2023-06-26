import { Product } from "./products";

interface InventoryItem {
  product: Product[];
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: [{ name: "motor", prices: 10.0 }], quantity: 10 },
  { product: [{ name: "sensor", prices: 12.5 }], quantity: 4 },
  { product: [{ name: "LED", prices: 1.0 }], quantity: 20 },
];

function calcInventoryValue(array: InventoryItem[]): number {
  let totalValue: number = 0;
  let totalItems: number = 0;
  let inventoryValue: numer = 0;
  for (let item of array) {
    totalValue = Product.prices;
    totalItems = item.quantity;

    inventoryValue = totalValue * totalItems;
  }
  return inventoryValue;
}
