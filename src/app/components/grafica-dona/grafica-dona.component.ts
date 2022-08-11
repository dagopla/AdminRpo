import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent  {
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
        { data: [10,50,150],
         //aqui se aplican los colores que va a tener la gráfica
         backgroundColor:['#9E120E','#FF5800','#FFB414']
       },
      ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
