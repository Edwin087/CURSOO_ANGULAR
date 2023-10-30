import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginSirve: LoginService) {}
  ngOnInit(): void {}

  //va resibir el formulario por parametro para resibi la información del login
  login(formm: NgForm) {
    const email = formm.value.email;
    const password = formm.value.password;
    this.loginSirve.login(email, password);
  }
}
