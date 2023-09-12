import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home/home.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReembolsosComponent } from './reembolsos/reembolsos.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
<<<<<<< HEAD
import {MatSelectModule} from '@angular/material/select';
import { OpenDeleteComponent } from './open-delete/open-delete.component';
=======
import { MatSelectModule } from '@angular/material/select';
import { AddTiendaComponent } from './add-tienda/add-tienda.component';
>>>>>>> 8c121496851768f3081c3b905481c6c520dd911a


@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    HomeComponent,
    TiendasComponent,
    UsuariosComponent,
    ReembolsosComponent,
    AddUsuarioComponent,
<<<<<<< HEAD
    OpenDeleteComponent
=======
    AddTiendaComponent
>>>>>>> 8c121496851768f3081c3b905481c6c520dd911a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    NgIf,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    MatGridListModule,
    NgFor,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}

