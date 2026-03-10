import { Component } from '@angular/core';

import { Login } from '../../components/login/login';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-login-page',
  imports: [
    Header,
    Login,
    Footer
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
