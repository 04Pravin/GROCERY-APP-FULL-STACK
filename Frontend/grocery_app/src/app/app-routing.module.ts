import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  // {path:'', component:DashboardComponent},
  {path:'detail/:id', component:ProductDetailComponent},
  {path:'grid', component:GridViewComponent},
  {path:'add', component:AddEditComponent},
  {path:'edit/:id', component:AddEditComponent},
  
  { path: '', component:DashboardComponent , canActivate: [AuthGuard], pathMatch:'full'},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
