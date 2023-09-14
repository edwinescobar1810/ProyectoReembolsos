import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddTiendaComponent } from '../add-tienda/add-tienda.component';
import { MatDialog } from '@angular/material/dialog';
import { OpenMiperfilComponent } from '../open-miperfil/open-miperfil.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1001, name: 'Titan ', weight: 'Renata Rios' },
  { position: 1003, name: 'Centro Mayor', weight: 'David Rodriguez' },
  { position: 1040, name: 'Diver Plaza', weight: 'Andres Pinzon' },
  { position: 1002, name: 'Hayuelos', weight: 'Adriana Santamaria' },
  { position: 1010, name: 'Andino', weight: 'Alexander Gonzalez' },
  { position: 1025, name: 'Colina', weight: 'Angela Merchan' },
  { position: 1024, name: 'Gran Estación', weight: 'Jerson Rojas' },
  { position: 1042, name: 'Imperial', weight: 'Alexander Gonzalez' },
  { position: 1043, name: 'Mall Plaza', weight: 'Cesar Marin' },
  { position: 1003, name: 'Chia', weight: 'Adriana Santamaria' },
  { position: 11, name: 'Santafe', weight: 'Angela Merchan' },
  { position: 12, name: 'Galerias', weight: 'Jerson Rojas' },
  { position: 13, name: 'Salitre', weight: 'Alexander Gonzalez' },
  { position: 14, name: 'Americas', weight: 'Cesar Marin' },
  { position: 15, name: 'Fontanar', weight: 'Adriana Santamaria' },
  { position: 16, name: 'Jardin Cali', weight: 'Javier Arteaga' },
  { position: 17, name: 'Buenavista', weight: 'Jerson Rojas' },
  { position: 18, name: 'Caracoli', weight: 'Jerson Rojas' },
  { position: 19, name: 'Cucuta', weight: 'David Rodriguez' },
  { position: 20, name: 'Tesoro', weight: 'David Rodriguez' },
  { position: 21, name: 'Viva Envigado', weight: 'David Rodriguez' },
  { position: 22, name: 'Unicentro', weight: 'David Rodriguez' },
  { position: 23, name: 'Ibague la Estación', weight: 'David Rodriguez' },
  { position: 24, name: 'Yopal', weight: 'David Rodriguez' },
];



@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})


export class TiendasComponent {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTiendaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openMiperfil() {
    this.dialog.open(OpenMiperfilComponent);
  }

}



