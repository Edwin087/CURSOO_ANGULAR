import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  //inicializamos firebase
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB08DEwFAJMYyA_SSyMiZCiW6KBjeBXySM',
      authDomain: 'misclientes-fd615.firebaseapp.com',
    });
  }
}
