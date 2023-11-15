import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  message: string = 'vous êtes déconnecté.';
  name: string;
  password: string;

  constructor(private auth: AuthService){}

  ngOnInit() {

  }

  setMessage(){

  }

  login() {
    this.message = "tentative de connexion en cours";
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn : boolean) => {
      this.setMessage();
    })
  }
}
// 8.35