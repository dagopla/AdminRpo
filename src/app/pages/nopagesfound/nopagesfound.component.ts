import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: ['./nopagesfound.component.scss'
  ]
})
export class NopagesfoundComponent {
  year= new Date().getFullYear();
  constructor() { }



}
