import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslate } from './app.translate';
import LocalePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocalePt);


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //toda requisição passa por ele
    provideHttpClient(),
    provideTranslate(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
