import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-open-miperfil',
  templateUrl: './open-miperfil.component.html',
  styleUrls: ['./open-miperfil.component.css']
})
export class OpenMiperfilComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(OpenMiperfilComponent);
  }
}