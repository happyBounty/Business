import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'
import { DashboardComponent } from '../dashboard/dashboard.component'
const routes = [
  {
    path: '', 
    children: [
      {
        path: 'home', component: HomeComponent,
        loadChildren: () => import('../home/home-module.module').then(mod => mod.HomeModuleModule)
      },
      { path: 'about', component: AboutComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
