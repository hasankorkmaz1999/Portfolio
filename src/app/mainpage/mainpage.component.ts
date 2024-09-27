import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})
export class MainpageComponent {}