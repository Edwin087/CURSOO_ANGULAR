import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  //para hace inline los estilos y ya no apunta la externo
  // styles:["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Edwin';
  apellido = 'Calle';
  edad = 28;
  empresa = 'Sistems';

  // cambiaEmpresa(eventos: Event) {
  //   this.empresa = (<HTMLInputElement>eventos.target).value;
  // }

  /*getEdad(){
  return this.edad;
}*/

  // llamaEmpresa(value:String){

  // }
  //propiedad
  habilitacionCuadro = false;

  usoRegistrado = false;

  textoRegistro = 'No hay nadien registrado';

  getRegistro() {
    this.usoRegistrado = false;
  }

  //en le parametro le pasa el nombre y tipo Event
  setUsuarioRegistrado(evento: Event) {
    // alert('usuario registrado');
    //this.textoRegistro = 'El usuario se registro';

    if ((<HTMLInputElement>evento.target).value == 'si') {
      this.textoRegistro = 'El usuario se registro';
    } else {
      this.textoRegistro = 'Usuario no registrado';
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
