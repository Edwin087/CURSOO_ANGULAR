export class Empleado {
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;

  constructor(
    nombree: string,
    apellidoo: string,
    cargoo: string,
    salarioo: number
  ) {
    this.nombre = nombree;
    this.apellido = apellidoo;
    this.cargo = cargoo;
    this.salario = salarioo;
  }
  get NOMBRE() {
    return this.nombre;
  }
  set NOMBRE(nom) {
    this.apellido = nom;
  }
}
