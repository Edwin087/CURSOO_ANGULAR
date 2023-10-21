import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpledosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent {
  //inyectamos en servicio router para hacer enrutamiento
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadoServicio: EmpledosService
  ) {}
  empleados: Empleado[] = [];
  ngOnInit(): void {
    this.empleados = this.empleadoServicio.empleados;
  }

  volverHome() {
    //enrutar de este componente  lleve al home, lo utilizamos con el metodo  navigate() que permite ir a donde deceo utilizando las rutas
    this.router.navigate(['']);
  }
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

    // this.miServicio.muestraMensaje('Nombre del empleado:' + miempleado.nombre);
    this.empleadoServicio.agrearEmpleadServico(miempleado);
    //le hacemos un redirecionamiento de la información agregada al home
    this.router.navigate(['']);
  }
}
