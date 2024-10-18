import { Routes, ExtraOptions } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },  // Hauptseite mit allen Abschnitten
  { path: 'legal-notice', component: LegalNoticeComponent },  // Impressum
  { path: 'privacy-policy', component: PrivacyPolicyComponent },  // Datenschutz
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Weiterleitung auf Hauptseite bei ungültiger Route
];

// Extra Optionen, um Scroll-Verhalten zu steuern
export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // Scrollt automatisch zu vorheriger Position
  anchorScrolling: 'enabled',  // Aktiviert das Scrollen zu Ankern/Fragmenten
  scrollOffset: [0, 64]  // Optional: Scrollen kann um einen Pixel-Offset verschoben werden, z.B. wegen einer fixierten Navigation
};
