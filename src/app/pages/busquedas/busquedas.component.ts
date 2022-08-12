import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaVideosModel } from 'src/app/models/listaVideos.model';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['imagen', 'nombre', 'ver'];
  dataSource = new MatTableDataSource();
  id_lista = '';
  cantidad: any;
  numeroVista = 0;
  idVista: any;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('pagination') set pagination(pager: MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
      this.dataSource.paginator._intl = new MatPaginatorIntl()
      this.dataSource.paginator._intl.itemsPerPageLabel = "Items por pagina";
      this.dataSource.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
          return `0 à ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
      };



    }
  }
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private videoSvc: CanalService) { }

  ngOnInit() {
    this.listaVideos();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listaVideos() {

    this.videoSvc.getListaVideos().subscribe((res: any) => {
      this.dataSource.data = res;

    })
  }

  sumarVisita(nombre: string) {

    this.numeroVista++;

    this.videoSvc.getVistaNombre(nombre).subscribe((res: any) => {
      this.idVista = res[0].id;
      this.cantidad = res[0].cantidad;

      let total = Number(this.cantidad) + this.numeroVista;



      this.videoSvc.sumarVistas(this.idVista, total).subscribe();

    })

  }

}
