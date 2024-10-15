import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent] // Stelle sicher, dass der RouterModule hier auch bereitgestellt wird
  // Stelle sicher, dass der RouterModule hier auch bereitgestellt wird
})
export class PrivacyPolicyComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    // Scrollt automatisch nach oben
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']); // Navigiert zur Startseite
  }
}
