import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { jwtInterceptor } from './_interceptors/jwt.interceptor';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './_interceptors/loading.interceptor';

 // required animations providers
     // Toastr providers


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule), 
    importProvidersFrom(BrowserAnimationsModule), 
    importProvidersFrom(BsDropdownModule),
    importProvidersFrom(TabsModule.forRoot()),
    
    //EXTERNAL
    provideAnimations(), 
    provideToastr({
    positionClass: 'toast-bottom-right'
  }),
    importProvidersFrom(NgxSpinnerModule),
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true},
    provideHttpClient(withInterceptors([loadingInterceptor]))
]
};
