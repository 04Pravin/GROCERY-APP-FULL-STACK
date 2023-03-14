import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected readonly keycloak: KeycloakService
  ) { }
  loadUserProfile(): Promise<KeycloakProfile>{
    return this.keycloak.loadUserProfile();
  }

  isLogedIn(){
    return this.keycloak.isLoggedIn();
  }

  getUser():string[]{
    return this.keycloak.getUserRoles();
  }

  logout():void{
    this.keycloak.logout(window.location.origin);
  }

}
