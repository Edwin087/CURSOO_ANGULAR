import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpledosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';

  //2 inyectamos el SERVICIO en esté componente principal en el  constructor
  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadoServicio: EmpledosService
  ) {
    //this.empleados = this.empleadoServicio.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadoServicio.empleados;
  }

  empleados: Empleado[] = [];

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
    //3 hacemos uso del SERVICIO
    // this.miServicio.muestraMensaje('Nombre del empleado:' + miempleado.nombre);
    this.empleadoServicio.agrearEmpleadServico(miempleado);
  }
}
