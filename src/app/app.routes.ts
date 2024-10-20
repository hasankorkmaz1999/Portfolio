import { Routes, ExtraOptions } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },  
  { path: 'legal-notice', component: LegalNoticeComponent },  
  { path: 'privacy-policy', component: PrivacyPolicyComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];


export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', 
  anchorScrolling: 'enabled',  
  scrollOffset: [0, 64]  
};
