import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/MyServices/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodList:Food[] = [];
  constructor(private fs:FoodService, private router:ActivatedRoute){}

  ngOnInit():void{
    this.router.params.subscribe(params =>
      {
        if (params['searchItem'])
        this.foodList = this.fs.getFoodInfo().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        else
        this.foodList = this.fs.getFoodInfo();
      })
  }

}
