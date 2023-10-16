import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  entradas: any[];

  constructor() {
    this.entradas = [
      { titulo: 'Python cada dia mas presente' },
      { titulo: 'Java cada dia mas presente' },
      { titulo: 'JavaScript cada dia mas presente' },
      { titulo: 'kotlin cada dia mas presente' },
      { titulo: 'Donde quedo pascal' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'Usuario registrado con exito';
  }
}
