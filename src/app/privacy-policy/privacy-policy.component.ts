import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";
import { TranslateModule } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TranslationService } from '../translation.service' ;


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, TranslateModule] 
 
})
export class PrivacyPolicyComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
   
    window.scrollTo(0, 0);
  }

  translate = inject(TranslationService);

  goBack() {
    this.router.navigate(['/']); 
  }
}
