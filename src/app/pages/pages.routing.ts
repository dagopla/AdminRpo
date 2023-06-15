import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { canAuthActive } from '../guards/auth.guard';



const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        canActivate:[canAuthActive],
        children:[
          {path:'', component: DashboardComponent , data:{titulo:'Dashboard'}},
          {path: 'progress', component:ProgressComponent , data:{titulo:'progress'}},
          {path: 'grafica1', component:Grafica1Component, data:{titulo:'grafica1'}},
          {path: 'acount-settings', component: AcountSettingsComponent, data:{titulo:'Acount Settings'}},
          {path: 'rxjs', component: RxjsComponent, data:{titulo:'Rxjs'}},
          {path: '', redirectTo:'dashboard', pathMatch:'full'},
        ]
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
