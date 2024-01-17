import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.component.html',
  styleUrls: ['./buy-details.component.scss']
})
export class BuyDetailsComponent {
  orderBought = false;
  
  id:number = 0;

	constructor(private router:ActivatedRoute,private route:Router) {

  }

    ngOnInit() {
      this.router.params.subscribe((params:Params) => {
        this.id= params['id']
      })
    }

    form = new FormGroup({
      name: new FormControl("",Validators.required),
      lastName: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
      phone: new FormControl("",Validators.required)
    })

    onClick() {
      this.orderBought = true;
    }
}
