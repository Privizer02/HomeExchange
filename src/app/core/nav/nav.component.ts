import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  mobileMedia:any=window.matchMedia("(max-width:800px")

	constructor() {
    if(this.mobileMedia.matches) {
      this.menu = !this.menu;
      console.log("work")
    }
	}
  

  menu:boolean=true;
  openMenu() {
    
    this.menu = !this.menu;
  }

  

}
