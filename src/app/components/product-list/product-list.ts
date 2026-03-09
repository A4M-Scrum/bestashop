import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product.model';

import { ProductCard } from '../product-card/product-card';
import { SearchProduct } from '../search-product/search-product';
import { ProductFilter } from '../product-filter/product-filter';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ProductCard,
    SearchProduct,
    ProductFilter,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {

  products$!: Observable<Product[]>;
  private searchTerm = '';
  private onlyOnSale = false;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  // búsqueda de coincidencias en el nombre del producto y en su descripción
  onSearch(term: string) {

    this.searchTerm = term.toLowerCase();

    this.products$ = this.productService.getProducts().pipe(
      map(products =>
        products.filter(product =>
          product.name.toLowerCase().includes(this.searchTerm) ||
          product.description.toLowerCase().includes(this.searchTerm)
        )
      )
    );
  }

  // filtros de nombre y precio
  onSort(sortType: string) {

    this.products$ = this.products$.pipe(
      map(products => {

        const sorted = [...products];

        switch (sortType) {

          case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;

          case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;

          case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;

          case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        }

        return sorted;
      }) // map.fin
    ); // this.products$
  } // onSort.fin

  // filtro para el listado de productos en oferta
  onSaleFilter(onlySale: boolean) {

    this.onlyOnSale = onlySale;

    this.products$ = this.productService.getProducts().pipe(
      map(products => {

        if (this.onlyOnSale) {
          return products.filter(p => p.onSale);
        }

        return products;

      })
    );
  } // onSaleFilter.fin
}