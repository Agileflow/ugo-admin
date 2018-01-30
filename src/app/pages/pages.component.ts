import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ugo-pages',
  template: `
    <ugo-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ugo-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
