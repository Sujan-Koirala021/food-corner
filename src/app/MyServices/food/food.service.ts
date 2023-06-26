import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // Funtion to return list of images name
  getFoodImages():string[]{
    console.log("Hi");
    return [
      '/assets/FoodImages/food-1.jpg',
      '/assets/FoodImages/food-2.jpg',
      '/assets/FoodImages/food-3.jpg',
      '/assets/FoodImages/food-4.jpg',
      '/assets/FoodImages/food-5.jpg',
      '/assets/FoodImages/food-6.jpg',
      '/assets/FoodImages/food-7.jpg',
      '/assets/FoodImages/food-8.jpg',
    ]
  }
}
