import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TranslationService } from '../translation.service' ;

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent ,TranslateModule] 
})
export class LegalNoticeComponent {

  constructor(private router: Router) { }

  translate = inject(TranslationService);

  ngAfterViewInit() {
    
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
