import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'
  ]
})
export class ProgressComponent  {
  progreso1:number= 13;
  progreso2:number=15;

  get getProgreso1(){
    return `${this.progreso1}%`
  }
  get getProgreso2(){
    return `${this.progreso2}%`
  }
  cambioValorHijo(event:number){
    
  }
}
