import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialsModule } from './module/materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './auth/keycloak-initializer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    ProductDetailComponent,
    GridViewComponent,
    TableViewComponent,
    AddEditComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
    
  ],
  providers: [
    {
    
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
