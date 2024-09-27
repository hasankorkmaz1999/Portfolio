import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage = 'EN'; // Standardmäßig Englisch

  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    console.log(`Language switched to: ${lang}`);
    // Füge hier deine Sprachumschaltung-Logik hinzu (z.B. Nutzung eines Translation-Services)
  }
}
