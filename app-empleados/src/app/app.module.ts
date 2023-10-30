import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadohijoCComponent } from './empleadohijo-c/empleadohijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpledosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponetComponent } from './quienes-componet/quienes-componet.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { dataServices } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

//1 array de objetos para Routing o enrutamiento
const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponetComponent },
  { path: 'contacto', component: ContactoComponentComponent },
  //especificamos con el id para que reciba ese parametro al l pasar a actualiza
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: 'login', component: LoginComponent },
  // páginas de error personalizadas para web que no existen en nuestra aplicación y tiene que estar al ultimo, con esto ** decimos que culaquier cosa diferente de la parte superior ir a la ruta error
  { path: '**', component: ErrorPersonalizadoComponent },
];

@NgModule({
  //Registro de componentes
  declarations: [
    AppComponent,
    EmpleadohijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponetComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    LoginComponent,
  ],
  // 2 para utilizar las rutas en  RouterModule.forRoot()
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    //importamos HttpClientModule para enviar desde la paguina los datos a la base de datos
    HttpClientModule,
  ],
  //registro de services
  providers: [
    ServicioEmpleadosService,
    EmpledosService,
    dataServices,
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
