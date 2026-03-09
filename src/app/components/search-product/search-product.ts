import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-product',
  imports: [],
  templateUrl: './search-product.html',
  styleUrl: './search-product.css',
})
export class SearchProduct {
  @Output() searchChange = new EventEmitter<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
