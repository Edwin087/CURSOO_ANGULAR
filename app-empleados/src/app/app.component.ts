import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] = [
    new Empleado('Edwin', 'Calle', 'Estudiante', 1200),
    new Empleado('Geovanny', 'martín', 'Estudiante', 1300),
    new Empleado('Maria', 'lopez', 'Estudiante', 1400),
    new Empleado('Rosa', 'Calle', 'Estudiante', 1400),
  ];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miempleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(miempleado);
  }
}
