import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class LoginService {
  //para codigo de seguridad
  token: string;
  //para guardar en una cookie la hacer login
  constructor(private rourer: Router, private cookies: CookieService) {}
  //para autentificar en la bbdd firebase
  login(email: string, password: string) {
    //para hacer login utilizando email y password utilizando promesa
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((tokenn) => {
            this.token = tokenn;
            //para guardar en una cookie
            this.cookies.set('token', this.token);
            //para redireccionar al inicio
            this.rourer.navigate(['/']);
          });
      });
  }
  getIdTokend() {
    //return this.token;
    return this.cookies.get('token');
  }

  //para saber si esta logiado
  estaLogeado() {
    //return this.token;
    return this.cookies.get('token');
  }
  //para que cambie cuando el usuario cierra la secion
  logaut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.cookies.set('token', this.token);
        this.rourer.navigate(['/']);
        //para que actualize la pagina
        window.location.reload();
      });
  }
}
