import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Variable donde almacenamos el json de los datos
  listaUsuarios

  //Añadimos al constructor la captura de datos desde el Servicio REST, para ello importamos el provider
  constructor(public navCtrl: NavController, datosProvider: DatosProvider) {
  	datosProvider.getData()
  	.then(data=>{
  		this.listaUsuarios = data;
  		console.log(this.listaUsuarios);
  	})
  	.catch(err=>{
  		console.log(err);
  	})
  }

}
