import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent]  // RouterModule importieren
})
export class LegalNoticeComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    // Scrollt automatisch nach oben
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']); // Navigiert zur Startseite
  }
}
