import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpledosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent {
  //inyectamos en servicio router para hacer enrutamiento
  //activamos el servicio rout
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadoServicio: EmpledosService,
    private rout: ActivatedRoute
  ) {}
  empleados: Empleado[] = [];

  //pasar valores de un componente a otro a través de la URL
  accioon: number;

  ngOnInit(): void {
    //almacenamos el valor que le emos pasado atraves de la URL
    this.accioon = parseInt(this.rout.snapshot.queryParams['accion']);
    this.empleados = this.empleadoServicio.empleados;
    //con esta instruccion rescatamos el id  lo que viene en la url, el indice del empleado para actualizar
    this.indice = this.rout.snapshot.params['id'];
    //creamos un objeto de tipo empleado para actualizar
    let empleado: Empleado = this.empleadoServicio.encontrarEmpleado(
      this.indice
    );
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    //enrutar de este componente  lleve al home, lo utilizamos con el metodo  navigate() que permite ir a donde deceo utilizando las rutas
    this.router.navigate(['']);
  }
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice: number;

  /*actualizaEmpleado() {
    let miempleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    // this.miServicio.muestraMensaje('Nombre del empleado:' + miempleado.nombre);
    this.empleadoServicio.actualizarEmpleado(this.indice, miempleado);
    //le hacemos un redirecionamiento de la información agregada al home
    this.router.navigate(['']);
  }*/

  //para eliminar empleado
  /*eliminaEmpleado() {
    //llamar al servicio
    this.empleadoServicio.eliminarEmpleadoo(this.indice);
    //le hacemos un redirecionamiento de la información eliminda al home
    this.router.navigate(['']);
  }*/

  //pasar valores de un componente a otro a través de la URL
  actualizaEmpleado() {
    if (this.accioon == 1) {
      let miempleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      this.empleadoServicio.actualizarEmpleado(this.indice, miempleado);
      //le hacemos un redirecionamiento de la información agregada al home
      this.router.navigate(['']);
    } else {
      this.empleadoServicio.eliminarEmpleadoo(this.indice);

      this.router.navigate(['']);
    }
  }
}
