import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
@Injectable()
export class LoginService {
  //para codigo de seguridad
  token: string;
  constructor(private rourer: Router) {}
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
            //para redireccionar al inicio
            this.rourer.navigate(['/']);
          });
      });
  }
  getIdTokend() {
    return this.token;
  }
}
