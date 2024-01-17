import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './core/buy/buy.component';
import { SellComponent } from './core/sell/sell.component';
import { ContactComponent } from './core/contact/contact.component';
import { RentDetailComponent } from './rent/rent-detail/rent-detail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'rent',component:RentComponent},
  {path:'rent/:id',component:RentDetailComponent},
  {path:'buy',component:BuyComponent},
  {path:'sell',component:SellComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'prefix'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
