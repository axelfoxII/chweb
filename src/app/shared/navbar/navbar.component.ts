import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  fecha:number = Date.now();
  hora:any;
  constructor() {}

  ngOnInit(){
    this.mostrarHora();
  }

  mostrarHora(){

    /* this.hora = new Date().toLocaleString("es-US"); */
    this.hora = new Date();

    console.log(this.hora);

         setInterval(() => {

        this.hora = new Date();

      }, 1000);

  }


}
