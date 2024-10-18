import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Funktion zur Erstellung des TranslateHttpLoaders
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Erstelle die App-Konfiguration
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withEnabledBlockingInitialNavigation(), // Router-Initialisierung mit Blockierung
      withInMemoryScrolling({ // Scroll-Optionen
        scrollPositionRestoration: 'enabled', // Scroll-Position wiederherstellen
        anchorScrolling: 'enabled' // Anker-Link-Scrolling aktivieren
      })
    ),
    provideHttpClient(withFetch()),
    TranslateService,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ]
};
