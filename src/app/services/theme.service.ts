import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(true);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor() {
    this.updateBodyClass(this.isDarkThemeSubject.value);
  }

  toggleTheme() {
    const current = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!current);
    this.updateBodyClass(!current);
  }

  private updateBodyClass(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}