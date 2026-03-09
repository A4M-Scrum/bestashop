import { Component } from '@angular/core';

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [
    Footer,
    Header,
    ProductList,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
