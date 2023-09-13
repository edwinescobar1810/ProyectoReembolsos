import { Component } from '@angular/core';
import { OpenMiperfilComponent } from '../open-miperfil/open-miperfil.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  typesOfShoes: string[] = ['Dashboard', 'Tiendas', 'Usuarios', 'Reembolsos', 'Solicitudes'];
  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) { }

  openMiperfil() {
    this.dialog.open(OpenMiperfilComponent);
  }


  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}

