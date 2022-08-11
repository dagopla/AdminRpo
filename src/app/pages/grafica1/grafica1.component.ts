import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
  public data1: ChartData<'doughnut'> = {
    labels: ['Dowloand','In-Store','Mail-Order '],
    datasets: [
        { data: [100,50,150],
         //aqui se aplican los colores que va a tener la gráfica
         backgroundColor:['#9E120E','#FF5800','#FFB414']
       },
      ]



}
}
