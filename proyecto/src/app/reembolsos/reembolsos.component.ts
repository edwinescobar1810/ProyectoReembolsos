import { Component } from '@angular/core';
import { OpenMiperfilComponent } from '../open-miperfil/open-miperfil.component';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-reembolsos',
  templateUrl: './reembolsos.component.html',
  styleUrls: ['./reembolsos.component.css'],
})
export class ReembolsosComponent {

  constructor(public dialog: MatDialog) { }

  openMiperfil() {
    this.dialog.open(OpenMiperfilComponent);
  }
}
