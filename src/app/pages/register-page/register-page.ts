import { Component } from '@angular/core';

import { Register } from '../../components/register/register';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-register-page',
  imports: [
    Header,
    Register
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

}
