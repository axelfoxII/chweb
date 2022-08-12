import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

const IDTOKEN = environment.idToken


@Injectable({
  providedIn: 'root'
})
export class ProtectTokenService {

   email = "alexsalvatvargas@gmail.com";
   pass = "qwaszx2810"
   returnSecureToken = true;

  constructor(private http:HttpClient) {

  }

  accesoToken(){

    const user = {

      email : "alexsalvatvargas@gmail.com",
      password: "qwaszx2810",
      returnSecureToken: true

    }

       this.http.post(`${IDTOKEN}`,user).subscribe((res:UserModel)=>{
        console.log(res);

        localStorage.setItem('protectVist',JSON.stringify(res.idToken));

      })



  }

}
