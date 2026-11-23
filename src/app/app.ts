import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 protected readonly title = signal('ElectroShop');
  //part2
storeName: string = "ElectroShop";
storeDescription: string = "Your favorite electronics store";
storeAddress: string = "Amman, Jordan";
totalProducts: number = 12;
isStoreOpen: boolean = true;
currency: string = "USD";
//part3
productNames: string[] = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Smart Watch",
  "Keyboard"
];
productPrices: number[] = [
  750,
  450,
  80,
  120,
  45
];
featuredProduct = {
  name: "Laptop",
  price: 750,
  description: "High-performance laptop"
};
//part 4
getStoreStatus():string {
  if(this.isStoreOpen){
    return "We are open";
  }else{
    return "We are not open ";
  }
}
//part 5
discountPercentage: number = 10;

getFinalPrice(price: number, discount: number): number {
  if (discount > 0) {
    return price - (price * discount / 100);
  } else {
    return price;
  }
}
//part 6
getTotalProducts(prices: number[]): number {
  return prices.length;
}

getHighestPrice(prices: number[]): number {
  let highest = prices[0];

  for (let price of prices) {
    if (price > highest) {
      highest = price;
    }
  }

  return highest;
}

getLowestPrice(prices: number[]): number {
  let lowest = prices[0];

  for (let price of prices) {
    if (price < lowest) {
      lowest = price;
    }
  }

  return lowest;
}

getTotalValue(prices: number[]): number {
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;
}
}
