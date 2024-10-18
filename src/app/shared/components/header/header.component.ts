import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../../../mainpage/about-me/about-me.component';


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule, CommonModule,TranslateModule,AboutMeComponent ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {} 




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
