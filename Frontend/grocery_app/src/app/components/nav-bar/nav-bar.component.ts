import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username!:string | undefined;
  userProfile: KeycloakProfile={};
  constructor(private _productService:ProductService, private _router:Router, private _authService:AuthService, private _location:Location) { }

  async ngOnInit(): Promise<void> {
    if(await this._authService.isLogedIn()){
      this.userProfile = await this._authService.loadUserProfile();
      this.username = this.userProfile.username;
    }
    
  }

  grid(){
    this._router.navigate(['/grid']);
  }

  home(){
    this._router.navigate(['']);
  }

  logOut(){
    this._authService.logout();
  }

  back(){
    this._location.back();
  }
}
