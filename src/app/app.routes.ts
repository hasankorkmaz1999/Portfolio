import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutMeComponent } from './mainpage/about-me/about-me.component';
import { SkillSetComponent } from './mainpage/skill-set/skill-set.component';
import { ProjectsComponent } from './mainpage/projects/projects.component';
import { ContactComponent } from './mainpage/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillSetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
];
