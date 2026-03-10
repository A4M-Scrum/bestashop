import { Component } from '@angular/core';

import { Register } from '../../components/register/register';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-register-page',
  imports: [
    Header,
    Register,
    Footer,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

}
