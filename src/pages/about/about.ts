import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lista:Array<any> = [
  	{id:1,nombre:"Carlos",dni:"001",fechaIncorporacion:"19/02/2018"},
  	{id:2,nombre:"Pepe",dni:"002",fechaIncorporacion:"21/02/2018"},
  	{id:3,nombre:"Javier",dni:"003",fechaIncorporacion:"01/02/2018"},
  	{id:4,nombre:"Antonio",dni:"004",fechaIncorporacion:"05/02/2018"}
  ]


  constructor(public navCtrl: NavController) {
  	console.log("Hola");
  }

}
