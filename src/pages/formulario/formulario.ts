import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';


/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  //Definimos la variable seleccion y le damos un valor por defecto.
  //Esta variable es bidireccional, ya que en el html el ngModel es [(ngModel)]
  seleccion:string = "grupo2";

  listaTodos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public datosProvider: DatosProvider) {
  	this.loadTodos();
  }

  loadTodos(){
	this.datosProvider.getTodos()
  	.then(data=>{
  		this.listaTodos = this.listaTodos.concat(data);
  		console.log(this.listaTodos);
  	})
  	.catch(err=>{
  		console.log(err);
  	})
  }

  doInfinite($event){
  	setTimeout(()=>{
  		this.loadTodos();
  		$event.complete();
  	}, 500)
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
