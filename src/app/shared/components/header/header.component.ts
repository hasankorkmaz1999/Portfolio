import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule],
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
