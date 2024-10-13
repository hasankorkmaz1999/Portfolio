import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule, CommonModule,TranslateModule, ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false; // Menü ist standardmäßig geschlossen
 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Menü umschalten
  }

  closeMenu() {
    this.isMenuOpen = false; // Menü schließen, wenn auf Overlay geklickt wird
  }

  get currentLanguage() {
    return this.translate.currentLanguage; // Greift auf die aktuelle Sprache aus dem Service zu
  }
 

  translate = inject(TranslationService);
}
