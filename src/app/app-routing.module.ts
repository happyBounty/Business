import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
  }
)
export class AppRoutingModule { }
