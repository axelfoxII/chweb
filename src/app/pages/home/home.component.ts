import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  portada:any={};
  constructor(private canalSvc:CanalService) { }

  ngOnInit(): void {

     this.canalSvc.getPortada().subscribe((res:any)=>{
      this.portada ={
        descripcion:res.descripcion,
        imagen:res.imagen
      }

     })

  }

}
