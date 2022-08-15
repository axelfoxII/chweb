import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import {mergeMapTo} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'axelfoxii-code';

  constructor(private afMessaging:AngularFireMessaging){

    this.getToken();

  }

  ngOnInit(){
    this.requestPermission();
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!'); },
        (error) => { console.error(error); },
      );
  }

  getToken(){

    this.afMessaging.getToken.subscribe(res=>{

      console.log('envio mensajes activado ');

    })

  }

}

