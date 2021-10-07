import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/vehiculos/pais';
import { PaisService } from 'src/app/vehiculos/pais.service';

@Component({
  selector: 'app-form-pais',
  templateUrl: './form-pais.component.html',
  styleUrls: ['./form-pais.component.css']
})
export class FormPaisComponent implements OnInit {

  //declaramos un objeto de tipo pais para poder mapear para poder guardar los y posteriormente guardarlos en la base de datos 
  pais: Pais = new Pais();

  titulo: string = 'Registros de Pais';

  //declaramos dos variables una para conectar al servidor y otra para volver a la pagina principal
  constructor(private paisService: PaisService, private router: Router ) { }

  ngOnInit(): void {
  }

  //para que guarda tenemos que crear el metodo de guardar
  create(): void{
    console.log(this.pais);
    
    //aqui decimos vete al metodo service creamos el usualrio,subcrivimos al metodho subcribe para que nos puede devolver la vista
    this.paisService.create(this.pais).subscribe(
      //funcion anonima (landa)  y que nos lleva a la pagina principal
      res => this.router.navigate(['/vehiculos'])
    );

  }

}
