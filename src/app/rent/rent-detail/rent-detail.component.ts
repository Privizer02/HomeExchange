import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.scss']
})
export class RentDetailComponent {
  id:number = 0;

	constructor(private router:ActivatedRoute,private route:Router) {

  }

  orderBooked = false;

  

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
      this.orderBooked = true
    }

}


