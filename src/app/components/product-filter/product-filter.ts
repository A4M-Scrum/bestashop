import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  @Output() sortChange = new EventEmitter<string>();
  @Output() saleFilterChange = new EventEmitter<boolean>();

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(value);
  }

  onSaleFilterChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.saleFilterChange.emit(checked);
  }
}
