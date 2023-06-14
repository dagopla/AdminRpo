import { Component} from '@angular/core';
import { interval, map, observable, Observable, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent  {

  constructor() {

    // this.retornaObservable().pipe(retry(2)).subscribe(
    //   valor=>console.log('Subs:',valor),
    //   error=>console.warn('Error:',error),
    //   ()=>console.info('Obs terminado')
    // );

    this.retornaInterval().subscribe(console.log)
    ;
  }

  retornaInterval():Observable<number>{
    return interval(1000)
    .pipe(take(4),
    map(valor=>valor+1));
    
  }
    

    
  retornaObservable():Observable<number>{
      let i= -1;
    const obs$=new Observable<number>(observable=>{
      const intervalo=setInterval(()=>{
        i++
        observable.next(i);
        if(i===4){
          clearInterval(intervalo);
          observable.complete();
        
        }
        if(i===2){
          //clearInterval(intervalo);
          observable.error('i llego al valor de 2');
        } 

      },1000)
    });
    return obs$;
  }
  
  clickButton(e:any){
    console.log(e);
    
    this.crearCirculo((e.clientX),(e.clientY));

  }
  crearCirculo(x:number,y:number){
    console.log('circulo');
    
    const circulo=document.createElement('div');
    
    circulo!.style.left = x + "px";
    circulo!.style.top = y + "px";
    circulo!.id = "circulo";
    
    document.body.appendChild(circulo);
  }


}
