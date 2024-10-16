import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent] 
})
export class LegalNoticeComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
