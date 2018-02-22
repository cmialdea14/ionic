import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Necesario para mapear los datos devueltos por el servicio REST
import 'rxjs/add/operator/map'

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatosProvider Provider');
  }
  // Este método nos permite hacer una llamada a un servicio REST y obtener los datos devuletos por el servicio
  public getData(){
  	return new Promise(
  		resolve=>{
  			this.http.get("https://jsonplaceholder.typicode.com/users")
  			.map(res=>res)
  			.subscribe(data=> {
  				resolve(data);
  			})
  		}
  	)
  }


  public getTodos(){
  	return new Promise(
  		resolve=>{
  			this.http.get("https://jsonplaceholder.typicode.com/users")
  			.map(res=>res)
  			.subscribe(data=> {
  				resolve(data);
  			})
  		}
  	)
  }

}
