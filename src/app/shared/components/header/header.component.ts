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
  isMenuOpen = false; 
 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  closeMenu() {
    this.isMenuOpen = false; 
  }

  get currentLanguage() {
    return this.translate.currentLanguage; 
  }
 

  translate = inject(TranslationService);
}
