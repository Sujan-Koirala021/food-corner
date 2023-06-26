import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // Funtion to return list of images name
  getFoodInfo(){
    
  const foodList: Food[] = [
    {
      id: 1,
      name: "Momo",
      description: "Delicious dumplings filled with meat or vegetables.",
      price: 5.99,
      rating: 4.5,
      imgUrl: "/assets/FoodImages/img1.jpg",
      favourite: false,
      cookTime: "30 minutes",
      origin: ["Nepal", "Tibet"],
    },
    {
      id: 2,
      name: "Chowmein",
      description: "Stir-fried noodles with vegetables and choice of protein.",
      price: 8.99,
      rating: 4.2,
      imgUrl: "/assets/FoodImages/img3.jpg",
      favourite: true,
      cookTime: "20 minutes",
      origin: ["China"],
    },
    {
      id: 3,
      name: "Samosa",
      description: "Crispy pastry filled with spiced potatoes and peas.",
      price: 2.49,
      rating: 4.0,
      imgUrl: "/assets/FoodImages/img2.jpg",
      favourite: true,
      cookTime: "40 minutes",
      origin: ["India", "Middle East"],
    },
    {
      id: 4,
      name: "Meatballs",
      description: "Tender meatballs served with sauce or in a sandwich.",
      price: 6.99,
      rating: 4.3,
      imgUrl: "/assets/FoodImages/img7.jpg",
      favourite: false,
      cookTime: "25 minutes",
      origin: ["Sweden", "Italy"],
    },
    {
      id: 5,
      name: "Burger",
      description: "Juicy beef patty or veggie patty served in a bun.",
      price: 9.99,
      rating: 4.7,
      imgUrl: "/assets/FoodImages/img8.jpg",
      favourite: true,
      cookTime: "15 minutes",
      origin: ["United States"],
    },
    {
      id: 6,
      name: "Panipuri",
      description: "Crunchy hollow puris filled with tangy water and chutney.",
      price: 3.99,
      rating: 4.6,
      imgUrl: "/assets/FoodImages/img4.jpg",
      favourite: true,
      cookTime: "20 minutes",
      origin: ["India"],
    },
    {
      id: 7,
      name: "Chicken Biryani",
      description: "Flavorful rice dish cooked with aromatic spices and chicken.",
      price: 12.99,
      rating: 4.8,
      imgUrl: "/assets/FoodImages/img5.jpg",
      favourite: false,
      cookTime: "45 minutes",
      origin: ["India", "Middle East"],
    },
    {
      id: 8,
      name: "Macaroni",
      description: "Pasta dish with cheesy sauce and various toppings.",
      price: 7.99,
      rating: 4.1,
      imgUrl: "/assets/FoodImages/img6.jpg",
      favourite: true,
      cookTime: "20 minutes",
      origin: ["Italy"],
    },
  ];
  return foodList;
  }
}
