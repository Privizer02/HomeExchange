import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './core/nav/nav.component';
import { ContactComponent } from './core/contact/contact.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './core/sell/sell.component';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RentDetailComponent } from './rent/rent-detail/rent-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyDetailsComponent } from './buy/buy-details/buy-details.component';

@NgModule({
  declarations: [
    SellComponent,
    AppComponent,
    NavComponent,
    ContactComponent,
    BuyComponent,
    RentComponent,
    HomeComponent,
    FooterComponent,
    RentDetailComponent,
    BuyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
