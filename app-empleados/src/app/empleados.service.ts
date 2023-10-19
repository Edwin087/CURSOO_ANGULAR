import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
//para que sea inyectable el servicio creado para que un servicio llame a otro servicio o metamos un servicio dentro de otro
@Injectable()
//creamos estos dados que recopila
export class EmpledosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Edwin', 'Calle', 'Estudiante', 1200),
    new Empleado('Geovanny', 'martín', 'Estudiante', 1300),
    new Empleado('Maria', 'lopez', 'Estudiante', 1400),
    new Empleado('Rosa', 'Calle', 'Estudiante', 1400),
  ];

  //agregamos este metodo que va agregar un nuevo empleado
  agrearEmpleadServico(empledo: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va agregar' +
        '\n' +
        empledo.nombre +
        'Salario: ' +
        empledo.salario
    );
    this.empleados.push(empledo);
  }
}
