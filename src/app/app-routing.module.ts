import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  {path : 'home',
  component : HomeComponent
  },
  {path : '',
  component : HomeComponent
  },
  {
    path:'search/:searchItem',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
