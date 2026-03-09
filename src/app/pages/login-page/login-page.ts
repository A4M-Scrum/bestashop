import { Component } from '@angular/core';

import { Login } from '../../components/login/login';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-login-page',
  imports: [
    Header,
    Login,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
