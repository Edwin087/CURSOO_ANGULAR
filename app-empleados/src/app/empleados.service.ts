import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { dataServices } from './data.service';
//para que sea inyectable el servicio creado para que un servicio llame a otro servicio o metamos un servicio dentro de otro
@Injectable()
//creamos estos dados que recopila
export class EmpledosService {
  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: dataServices
  ) {}
  //para mostrar en el navegador creamos el metodo obtenemos de home
  setEmpleados(miseMPleados: Empleado[]) {
    this.empleados = miseMPleados;
  }

  //para obtener la informacion de data.service
  obtenrEmpleados() {
    return this.dataService.cargarEmpleados();
  }
  empleados: Empleado[] = [];

  /*empleados: Empleado[] = [
    new Empleado('Edwin', 'Calle', 'Estudiante', 1200),
    new Empleado('Geovanny', 'martín', 'Estudiante', 1300),
    new Empleado('Maria', 'lopez', 'Estudiante', 1400),
    new Empleado('Rosa', 'Calle', 'Estudiante', 1400),
  ];*/

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
    //utilizo el service de datos y le pasamos como patametro el array empleados
    this.dataService.gurdarEmpleados(this.empleados);
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
    //llamamos al metodo de dataservice para actualizar la bbdd
    this.dataService.actualizarEmpleados(indice, empleado);
  }

  //eliminar
  eliminarEmpleadoo(indice: number) {
    this.empleados.splice(indice, 1);
    this.dataService.eliminaEmpleados(indice);
    //reconstruimos los datos despues de eliminar  desde el arrary
    if (this.empleados != null) {
      this.dataService.gurdarEmpleados(this.empleados);
    }
  }
}
