import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menu:boolean=true;
  openMenu() {
    this.menu = !this.menu;
  }

}
