import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaVideosModel } from 'src/app/models/listaVideos.model';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  idYoutube = '';
  idVideos: any;
  videos: any;
  ordenVideos:any;
  titulo: any = {};
  tituloVideo:string = '';

    constructor(private activatedRoute: ActivatedRoute, private videoSvc: CanalService) {

    this.activatedRoute.params.subscribe(params => {

      this.idVideos = params['id']

    })

  }

  ngOnInit(): void {

    this.videoSvc.cursoVideos(this.idVideos).subscribe((res:any) => {
      this.videos = res;

       this.videos.sort(function(a:any,b:any){
        return (a.orden - b.orden)
      })

      this.videos;
      this.idYoutube = this.videos[0].id_video;

      this.tituloVideo = this.videos[0].titulo;

    })

    this.videoSvc.getIdLista(this.idVideos).subscribe((resp: ListaVideosModel) => {

      this.titulo = {
        nombre: resp.nombre
      }

    })



  }

  cambio(id_video: any, titulo:string) {

    this.idYoutube = id_video;
    this.tituloVideo = titulo;





  }



}
