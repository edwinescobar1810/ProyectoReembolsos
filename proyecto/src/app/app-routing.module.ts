import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
