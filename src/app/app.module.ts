import { HttpClientModule } from '@angular/common/http'; //14 importamos 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormPaisComponent } from './vehículos/form-pais/form-pais.component'; 

//importamos unas clases de angular para crear la configuracion de ruta
import { RouterModule, Router, Routes } from '@angular/router';

//aqui importamos una clase que nos permita trabajar con formulario 
import { FormsModule } from '@angular/forms';

//{Router}


//creamos la contiguracion de rutas 
//creamos la constante y la pasomos la lista de todas las rutas que va a tener nuestra aplicacion 
const routes: Routes = [

     //mapeamos las rutas 
     { path:'', redirectTo:'/vehiculos', pathMatch:'full'},
     { path:'vehiculos', component:VehiculosComponent},
     { path:'vehiculos/form', component: FormPaisComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    FormPaisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   
    RouterModule.forRoot(routes) //para que se mapean las routas y la pasamos la constante routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
