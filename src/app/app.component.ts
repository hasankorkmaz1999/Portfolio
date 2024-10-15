import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutMeComponent } from "./mainpage/about-me/about-me.component";
import { SkillSetComponent } from "./mainpage/skill-set/skill-set.component";
import { ProjectsComponent } from "./mainpage/projects/projects.component";
import { ContactComponent } from "./mainpage/contact/contact.component";
import { AbovethefoldComponent } from './mainpage/abovethefold/abovethefold.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
      HeaderComponent,
       FooterComponent,
        MainpageComponent,
         AboutMeComponent,
         RouterModule,
     SkillSetComponent,
      ProjectsComponent,
       ContactComponent,
        AbovethefoldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
