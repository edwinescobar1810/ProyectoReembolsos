import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReembolsosComponent } from './reembolsos/reembolsos.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'reembolsos', component: ReembolsosComponent },
  { path: 'add-usuario', component: AddUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
