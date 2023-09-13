import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReembolsosComponent } from './reembolsos/reembolsos.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { AddTiendaComponent } from './add-tienda/add-tienda.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginAppComponent },
  { path: 'usuarios', component: UsuariosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'tiendas', component: TiendasComponent,  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'reembolsos', component: ReembolsosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'add-usuario', component: AddUsuarioComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'add-tienda', component: AddTiendaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'register', component: RegisterComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
