import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUsuarioComponent } from '../add-usuario/add-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { OpenDeleteComponent } from '../open-delete/open-delete.component';
import { OpenMiperfilComponent } from '../open-miperfil/open-miperfil.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;

}

const FRUITS: string[] = [
  'Centro comercial Unicentro',
  'Centro Comercial Santa Fe',
  'Centro Comercial Titan',
  'Centro Comercial Andino',
  'Centro Comercial Galería',
  'Centro Comercial Salitre',
  'Centro Comercial Plaza de las Américas',
  'Centro Comercial Centro Mayor',
  'Centro Comercial Hayuelos',
  'Centro Comercial Colina',
  'Centro comercial Gran estación (Kiosko)',
  'Centro Comercial Diver Plaza',
  'Centro Comercial Mall Plaza',
  'Centro Comercial Plaza Imperial',
  'Centro Comercial Plaza Claro',
  'Centro Comercial Centro Chía',
  'Centro Comercial Fontanar (Kiosco)',
  'Centro Comercial Viva Envigado',
  'Centro Comercial Tesoro',
  'Centro Comercial Caracolí',


];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const EMAIL: string[] = [
  'Maia@grupoboticario.com',
  'Asher@grupoboticario.com',
  'Olivia@grupoboticario.com',
  'Atticus@grupoboticario.com',
  'Amelia@grupoboticario.com',
  'Jack@grupoboticario.com',
  'Charlotte@grupoboticario.com',
  'Theodore@grupoboticario.com',
  'Isla@grupoboticario.com',
  'Oliver@grupoboticario.com',
  'Isabella@grupoboticario.com',
  'Jasper@grupoboticario.com',
  'Cora@grupoboticario.com',
  'Levi@grupoboticario.com',
  'Violet@grupoboticario.com',
  'Arthur@grupoboticario.com',
  'Mia@grupoboticario.com',
  'Thomas@grupoboticario.com',
  'Elizabeth@grupoboticario.com',
];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit',];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 10245760587));
    this.dataSource = new MatTableDataSource(users);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDelete() {
    const dialogRef = this.dialog.open(OpenDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openMiperfil() {
    this.dialog.open(OpenMiperfilComponent);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 10))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 10))] +
    ' ';

  return {
    id: id.toString(),
    name: name,
    progress: name + '@grupoboticario.com',
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };


}


