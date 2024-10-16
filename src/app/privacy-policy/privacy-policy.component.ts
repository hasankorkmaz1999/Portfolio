import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent] 
 
})
export class PrivacyPolicyComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
   
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
