import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable()
export class dataServices {
  //inyectamos el HttpClientModule y LoginService
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //conectar con la base de datos para que nos debuelva la informacion que hay almacenada en ella
  cargarEmpleados() {
    const token = this.loginService.getIdTokend();
    // de esta forma conseguimos obtner la informacion de la BBDD
    return this.httpClient.get(
      'https://misclientes-fd615-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  //creamos el metodo que nos permite guardar empleados
  gurdarEmpleados(empleadoos: Empleado[]) {
    //utilizamos la variable httpClient y con post(se duplica) lo podemos remplazar por put(es para remplazar la información que hay en la base de datos) es para enviar la infomación y entre comillas espesificas la url que nos da firebase y le agregamos al final /datos.json y el nombre del array empleadoos.....httpClient neceesita un observable para realizar las transaxiones se hace con .subscribe()
    this.httpClient
      .put(
        'https://misclientes-fd615-default-rtdb.firebaseio.com/datos.json',
        empleadoos
      )
      .subscribe(
        (response) => console.log('Se an guardado los empleados' + response),
        (error) => console.log('error:' + error)
      );
  }
  //para actualizar en la BBDD
  actualizarEmpleados(indice: number, empledo: Empleado) {
    //concatenamos la url con el indice que se va a modificar
    let url =
      'https://misclientes-fd615-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.put(url, empledo).subscribe(
      (response) => console.log('Se a modificado el empleado' + response),
      (error) => console.log('error:' + error)
    );
  }
  //para eliminar de la bbdd
  eliminaEmpleados(indice: number) {
    //concatenamos la url con el indice que se va a modificar
    let url =
      'https://misclientes-fd615-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Se a eliminado el empleado' + response),
      (error) => console.log('error:' + error)
    );
  }
}
