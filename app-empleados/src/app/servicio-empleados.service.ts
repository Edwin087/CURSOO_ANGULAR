import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {
  constructor() {}

  //1 creamos el servicio con este metodo
  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }
}
