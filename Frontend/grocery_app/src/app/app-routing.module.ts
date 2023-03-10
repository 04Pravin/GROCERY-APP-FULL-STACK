import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, pathMatch:'full'},
  {path:'detail/:id', component:ProductDetailComponent},
  {path:'grid', component:GridViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
