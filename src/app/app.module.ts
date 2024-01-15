import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './core/nav/nav.component';
import { ContactComponent } from './core/contact/contact.component';
import { BuyComponent } from './core/buy/buy.component';
import { SellComponent } from './core/sell/sell.component';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    BuyComponent,
    SellComponent,
    RentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
