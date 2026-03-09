import { Component } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {
  
  isDarkTheme: boolean = true;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(value => {
      this.isDarkTheme = value;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
