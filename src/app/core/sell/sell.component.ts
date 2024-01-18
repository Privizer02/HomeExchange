import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
  sentRequest = false;

  rentOrSell = false;

  ngOnInit() {
        
  }

  formSell:FormGroup = new FormGroup({
    rentSell: new FormControl("",Validators.required),
    firstName: new FormControl("",Validators.required),
    lastName : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    phone : new FormControl("",Validators.required),
    location : new FormControl("",Validators.required),
    bedrooms : new FormControl("",Validators.required),
    bathrooms : new FormControl("",Validators.required),
    garage : new FormControl("",Validators.required),
    sqft : new FormControl("",Validators.required),
    price : new FormControl("",Validators.required),
  })

  onClick() {
    this.sentRequest =true;
  }

  rentSell() {
    if(this.formSell.value.rentSell == 'rent') {
      this.rentOrSell = true;
      
    }
    else if(this.formSell.value.rentSell == 'sell') {
      this.rentOrSell=false;
    }
  }
}
