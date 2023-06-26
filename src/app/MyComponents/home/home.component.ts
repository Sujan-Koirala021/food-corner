import { Component , OnInit} from '@angular/core';
import { FoodService } from 'src/app/MyServices/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodList:Food[] = [];
  constructor(private fs:FoodService){}

  ngOnInit():void{
    this.foodList = this.fs.getFoodInfo();
  }

}
