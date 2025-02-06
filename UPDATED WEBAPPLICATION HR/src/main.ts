import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/webpages/home/home.component';
import { LoginandsignupComponent } from './app/webpages/loginandsignup/loginandsignup.component';
import { environment } from './environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/loginandsignup', pathMatch: 'full' },
  { path: 'loginandsignup', component: LoginandsignupComponent },
  { path: 'home', component: HomeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormsModule,                 
      RouterModule.forRoot(routes)  
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
