import { HttpClient } from '@angular/common/http'; // 5- importar httpclient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from './pais'; //8- importamos la clase



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //4- creamos la variable para poder conectar a api-rest
  //private ulr: string = 'http://localhost:8080/pais';

   //guardamos el api del servidor 
   private API_SERVER = "http://localhost:8080/pais";
  
  //6- aqui utilizamos algunas clases externas como parametros 
  constructor(private http:HttpClient) { }


  //7- creamos la funcion o metodo que va retornar la lista (obtner desde de la base de datos)
  // getAllPais() :Observable<Pais[]>{
  //   return this.http.get<Pais[]>(this.ulr);
  // }


    //creamos un metodo para traer todos los paises
    public getAllPaises(): Observable<any>{
      return this.http.get(this.API_SERVER);
    }


  //metodo que mos permite crear  metodo post
  create(pais: Pais): Observable<Pais>{
    return this.http.post<Pais>(this.API_SERVER, pais);
  }

  //obtener un pais 
  // getPais(id:number) :Observable<Pais>{
  //   return this.http.get<Pais>(this.ulr +'/'+ id);
  // }

  //creamos el actualizar 
//  update(pais: Pais): Observable<Pais>{
//     return this.http.put<Pais>(this.ulr, pais);
//   }

//eliminar 
//  deletePais(id:number) :Observable<Pais>{
//     return this.http.delete<Pais>(this.ulr +'/'+ id);
//   }

}
