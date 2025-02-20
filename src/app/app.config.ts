import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslate } from './app.translate';
import LocalePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideClientHydration, withEventReplay,withHttpTransferCacheOptions } from '@angular/platform-browser';
registerLocaleData(LocalePt);


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //toda requisição passa por ele
    provideHttpClient(),
    provideTranslate(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideClientHydration(
      withEventReplay(),
      //guarda no cache requisição post
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    )
    ]
};

/*
  Sem SSR (Client-Side Rendering - CSR)
    O navegador baixa os arquivos estáticos (HTML, CSS, JavaScript).
    O Angular renderiza a aplicação no cliente.
    Navegação ocorre no cliente sem recarregar a página.

  Com SSR (Server-Side Rendering)
    O servidor gera e envia o HTML já renderizado.
    O Angular no cliente "hidrata" a aplicação, tornando-a interativa.
    Navegação subsequente ocorre no cliente, sem necessidade de nova renderização no servidor.

  Benefícios do SSR
  ✅ Melhor SEO (conteúdo já renderizado para motores de busca).
  ✅ Melhor tempo de carregamento inicial.
  ✅ Melhor experiência do usuário com interatividade mais rápida.
*/
