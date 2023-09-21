import { Component } from '@angular/core';
import { OpenMiperfilComponent } from '../open-miperfil/open-miperfil.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  beneficiario: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: '18/09/2023', name: 'David Rodriguez', weight: 80170758, symbol: '9009432434', beneficiario: 'DOLLARCITY' },
  { position: '18/09/2023', name: 'David Rodriguez', weight: 80170758, symbol: '9009432434', beneficiario: 'DOLLARCITY' },
  { position: '18/09/2023', name: 'David Rodriguez', weight: 80170758, symbol: '9009432434', beneficiario: 'DOLLARCITY' },
  { position: '18/09/2023', name: 'David Rodriguez', weight: 80170758, symbol: '9009432434', beneficiario: 'DOLLARCITY' },
  { position: '18/09/2023', name: 'David Rodriguez', weight: 80170758, symbol: '9009432434', beneficiario: 'DOLLARCITY' },
];

@Component({
  selector: 'app-reembolsos',
  templateUrl: './reembolsos.component.html',
  styleUrls: ['./reembolsos.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],

})


export class ReembolsosComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'beneficiario'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



}






