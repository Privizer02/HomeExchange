import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  mobileMedia: any = window.matchMedia('(max-width:800px');

  constructor() {
    if (this.mobileMedia.matches) {
      this.menu = false;
    }
  }

  menu: boolean = true;
  openMenu() {
    if (this.mobileMedia.matches) {
      this.menu = !this.menu;
    } else {
      return;
    }
  }
}
