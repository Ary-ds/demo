import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { Pais } from './pais'; //importamos la clase
import { PaisService } from './pais.service'; //importamos pais service



@Component({
  selector: 'app-vehiculos', // 1 el nombre del componente que vamos pasar al html por defecto 
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  //creamos las variables 
  lista:string = 'Lista de coches';  // 2 variable tipo string la vamos llamar en nuestro html
  
  //9--creamos la variable de la clase pais
 // paises:Pais[];
 
  paises: any;



  //10--declaramos la variable en el constructor 
  constructor(
    //11-- inyectcion de dependencia
    public  paisService: PaisService,
    

  ) { }

  ngOnInit(): void {

  //   //12--aqui llamamos los metodos y siempre hay que subscrivir 
  //  this.paisService.getAllPais().subscribe(
  //     //13--pasamos lo que tiene p a paises
  //     p => this.paises = p
  //   );


    //aqui vamos usar los servicios creamos el metodo 
    this.paisService.getAllPaises().subscribe(resp => {
      this.paises = resp;
      console.log(resp);  //solo para ver en la consola eso no se debe mostrar nunca 
    },
    error => {console.error(error)}
    )

  }


  }


