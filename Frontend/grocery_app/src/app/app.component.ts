import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'grocery_app';

  constructor(private _authService: AuthService){}
  async ngOnInit(): Promise<void> {
    if(await this._authService.isLogedIn()){
      const user = await this._authService.loadUserProfile();
      console.log(user);
    }
  }


}
