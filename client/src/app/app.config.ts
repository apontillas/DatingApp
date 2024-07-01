import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { jwtInterceptor } from './_interceptors/jwt.interceptor';

 // required animations providers
     // Toastr providers


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule), 
    importProvidersFrom(BrowserAnimationsModule), 
    importProvidersFrom(BsDropdownModule),
    
    //EXTERNAL
    provideAnimations(), 
    provideToastr({
    positionClass: 'toast-bottom-right'
  }),
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true},
]
};
