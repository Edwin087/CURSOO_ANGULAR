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
        '\n' +
        'Salario: ' +
        empledo.salario
    );
    this.empleados.push(empledo);
  }
  //creamos el metodo para actualizar
  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }
  //sobreescribimos para actualizar
  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  //eliminar
  eliminarEmpleadoo(indice: number) {
    this.empleados.splice(indice, 1);
  }
}
