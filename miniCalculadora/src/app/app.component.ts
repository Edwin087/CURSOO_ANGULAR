import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicacion(): void {
    this.resultado = this.numero1 * this.numero2;
  }
  divicion(): void {
    this.resultado = this.numero1 / this.numero2;
  }
  divicion2(): void {
    this.resultado = this.numero1 / this.numero2;
  }

  // por cambios
}
