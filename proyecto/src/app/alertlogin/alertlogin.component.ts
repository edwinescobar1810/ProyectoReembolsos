import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-alertlogin',
  templateUrl: './alertlogin.component.html',
  styleUrls: ['./alertlogin.component.css']
})
export class AlertloginComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AlertloginComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
