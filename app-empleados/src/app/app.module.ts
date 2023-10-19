import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadohijoCComponent } from './empleadohijo-c/empleadohijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpledosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadohijoCComponent,
    CaracteristicasEmpleadoCComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ServicioEmpleadosService, EmpledosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
