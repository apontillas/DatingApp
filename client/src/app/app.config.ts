import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';

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
  })]
};
