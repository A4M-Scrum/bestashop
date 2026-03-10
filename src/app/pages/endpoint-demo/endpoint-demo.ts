import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-endpoint-demo',
  imports: [
    Header,
    Footer
  ],
  templateUrl: './endpoint-demo.html',
  styleUrl: './endpoint-demo.css',
})
export class EndpointDemo {

}
