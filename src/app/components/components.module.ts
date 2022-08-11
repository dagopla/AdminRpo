import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports:[
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
