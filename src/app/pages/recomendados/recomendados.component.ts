import { Component, OnInit } from '@angular/core';
import { ListaVideosModel } from 'src/app/models/listaVideos.model';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.css']
})
export class RecomendadosComponent implements OnInit {
 activeSlide= '';
 listas:ListaVideosModel[]=[];
 listaVideos:any=[];
 numeroVista=0;
 idVista='';
 cantidad:any;
  constructor(private videoSvc:CanalService) { }

  ngOnInit(){

    this.videosMasVistos();

  }

  videosMasVistos(){

    this.videoSvc.getListaVideosLimit().subscribe((res:any)=>{

      let i;

      for(i in res){

        this.listas.push({

          id: res[i].id,
          nombre:res[i].nombre,
          url_miniatura:res[i].url_miniatura,


        })



      }

      this.listas.sort(function(a:any,b:any){
        return (b.vistas - a.vistas)
      })

      this.listaVideos = this.listas;


    })



  }

  sumarVisita(nombre:string){

    this.numeroVista++;

    this.videoSvc.getVistaNombre(nombre).subscribe((res:any)=>{
      this.idVista= res[0].id;
      this.cantidad = res[0].cantidad;

      let total = Number(this.cantidad)+this.numeroVista;



      this.videoSvc.sumarVistas(this.idVista, total).subscribe();

    })




  }

}
