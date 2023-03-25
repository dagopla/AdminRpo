import { Component} from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent  {

  constructor() {
    let i= -1;
    const obs$=new Observable(observable=>{
      const intervalo=setInterval(()=>{
        i++
        observable.next(i)
        if(i==5){
          clearInterval(intervalo);
        }
      },1000)
    });
    obs$.subscribe(valor=>console.log(valor));
    
    
  
  }
  

}
