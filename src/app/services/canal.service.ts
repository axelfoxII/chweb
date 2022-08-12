import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaVideosModel } from '../models/listaVideos.model';
import { VideoModel } from '../models/video.model';
import { VistasModel } from '../models/vistas.model';

const SERVER = environment.urlServer;

@Injectable({
  providedIn: 'root',
})
export class CanalService {
  listVideos: ListaVideosModel[] = [];

  constructor(private http: HttpClient) { }

  getPortada() {
    return this.http.get(`${SERVER}/portada/-N9ADEqmmJhn1H2ptiav.json`);
  }

  getListaVideos() {
    return this.http.get(`${SERVER}/lista_videos.json`).pipe(map(this.arreglo));
  }

  private arreglo(listasObj: any) {
    const listas: ListaVideosModel[] = [];
    if (listasObj === null) {
      return null;
    }

    for (let registro in listasObj) {
      listasObj[registro].id = registro;
      listas.push(listasObj[registro]);
    }

    return listas;
  }

  getListaVideosLimit() {
    return this.http
      .get(`${SERVER}/lista_videos.json?orderBy="$key"&print=pretty`)
      .pipe(map(this.arreglo2));
  }

  private arreglo2(listasObj: any) {
    const listas: ListaVideosModel[] = [];
    if (listasObj === null) {
      return null;
    }

    for (let registro in listasObj) {
      listasObj[registro].id = registro;
      listas.push(listasObj[registro]);
    }

    return listas;
  }


  getVistas() {
    return this.http.get(`${SERVER}/vistas.json`).pipe(map(this.arregloVistas));
  }

  private arregloVistas(vistasObj: any) {
    const vistas: VistasModel[] = [];
    if (vistasObj === null) {
      return null;
    }

    for (let registro in vistasObj) {
      vistasObj[registro].id = registro;
      vistas.push(vistasObj[registro]);
    }

    return vistas;
  }

  getVistaId(id: any) {

    return this.http.get(`${SERVER}/vistas/${id}.json`);

  }

  getVistaNombre(nombreLista: any) {


    let vistaListaNombre = nombreLista?.replace(/ /g, "");
    return this.http.get(`${SERVER}/vistas.json?orderBy="nombre_lista"&equalTo="${vistaListaNombre}"&print=pretty`).pipe(map(this.arregloNombre));
  }

  private arregloNombre(nombreObj: any) {
    const nombre: VistasModel[] = [];

    for (let registro in nombreObj) {
      nombreObj[registro].id = registro;
      nombre.push(nombreObj[registro]);
    }

    return nombre;
  }



  cursoVideos(id: any) {


    return this.http
      .get(
        `${SERVER}/videos.json?orderBy="lista_videos"&startAt="${id}"&endAt="${id}\uf8ff"&print=pretty`
      )
      .pipe(map(this.arreglo3));
  }

  private arreglo3(videosObj: any) {
    const videos: VideoModel[] = [];
    if (videosObj === null) {
      return null;
    }

    for (let registro in videosObj) {
      videosObj[registro].id = registro;
      videos.push(videosObj[registro]);
    }

    return videos;
  }

  getIdLista(id: any) {
    return this.http.get(`${SERVER}/lista_videos/${id}.json`);

  }




  sumarVistas(id:string, total:number) {

    let suma ={

      cantidad:total

    }

    return this.http.patch(`${SERVER}/vistas/${id}.json`, suma);

  }

}

