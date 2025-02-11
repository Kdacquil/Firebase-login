import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
 providers: [
   provideZoneChangeDetection({ eventCoalescing: true }), 
   provideRouter(routes),
   provideFirebaseApp(() => initializeApp(environment.firebase))
 ]
};