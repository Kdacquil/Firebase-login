import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginandsignupComponent } from './webpages/loginandsignup/loginandsignup.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginandsignup', pathMatch: 'full' }, 
  { path: 'loginandsignup', component: LoginandsignupComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

