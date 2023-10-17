import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadohijo-c',
  templateUrl: './empleadohijo-c.component.html',
  styleUrls: ['./empleadohijo-c.component.css'],
})
export class EmpleadohijoCComponent {
  // especificamos lo que el hijo va a recibir desde el padre con @Imnput y le vamos a pasar en el componente html
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  // crramos un array del hijo va a pasar al padre
  arrayCaracteristas = [''];
  agragarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristas.push(nuevaCaracteristica);
  }
}
