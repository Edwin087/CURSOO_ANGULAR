import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css'],
})
export class CaracteristicasEmpleadoCComponent {
  // preparación del componente hijo seguir la documentación guia en https://angular.io/guide/inputs-outputs
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  // en este componente tambien le inyectamos el servicio 2
  //constructor(private miServicioo: ServicioEmpleadosService) {}

  agregaCaracteristicas(value: string) {
    //hacemos uso del SERVICIO 3 antes de agregar caracteristicas para este ejemplo
    //this.miServicioo.muestraMensaje(value);
    //this.caracteristicasEmpleado.emit(value);
  }
}
