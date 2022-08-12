import { Component, Input, OnInit } from '@angular/core';
import { VistasModel } from 'src/app/models/vistas.model';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  @Input('nombre') nombre:any;
  cantidad:any;
  idVista='';
  constructor(private videoSvc:CanalService) { }

  ngOnInit(): void {

    this.videoSvc.getVistaNombre(this.nombre).subscribe((res:any)=>{
      this.idVista= res[0].id;
      this.cantidad = res[0].cantidad;

    })

  }







}
