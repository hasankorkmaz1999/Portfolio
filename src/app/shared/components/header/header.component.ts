import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false; // Menü ist standardmäßig geschlossen
  currentLanguage = 'EN'; // Standardmäßig ist die Sprache auf EN gesetzt

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Menü umschalten
  }

  closeMenu() {
    this.isMenuOpen = false; // Menü schließen, wenn auf Overlay geklickt wird
  }

  switchLanguage(language: string) {
    this.currentLanguage = language; // Sprache umschalten
    console.log(`Sprache umgeschaltet auf: ${language}`);
  }
}
