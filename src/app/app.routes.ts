import { Routes } from '@angular/router';
import { AboutMeComponent } from './mainpage/about-me/about-me.component';
import { SkillSetComponent } from './mainpage/skill-set/skill-set.component';
import { ProjectsComponent } from './mainpage/projects/projects.component';
import { ContactComponent } from './mainpage/contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },  // Startseite
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillSetComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },  // Legal Notice Seite
    { path: '**', redirectTo: '/', pathMatch: 'full' }
  ];
  
