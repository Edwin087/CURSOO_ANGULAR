import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css'],
})
export class CaracteristicasEmpleadoCComponent {
  // preparación del componente hijo seguir la documentación guia en https://angular.io/guide/inputs-outputs
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }
}
