import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  //*.10 crear metodo que atiende al evento
  ir_pagina3(){
  //*.11 invocado el nombre que apagere en pagina3.module.ts
   //this.navCtrl.push("Pagina3Page");



    //*.13 2ºMANERA otra forma de referenciarla por el name de @IonicPage en pagina3.ts

    this.navCtrl.push("mi-pagina3"); // <----
  }

  //*.15 ver en consola la ejecucion del ciclo de vida de una pagina
  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    //*.16 entrar en la pagina si el numero es mayor de 3
    let numero= Math.round(Math.random()*10);
    console.log(numero);
    if (numero >=3){

         return true;
  
    }else{
          return false;
    }

  }
 //*.17 dejamos salir despues de 2 segundos
  ionViewCanLeave(){
    console.log("ionViewCanLeave");
    let promesa = new Promise((resolv,reject) =>{

      setTimeout(() => {resolv (true);
        
      }, 2000); // <--- significa 2 segundos
    });
    return promesa;

    //*.18 isntaxi alternativa seria ---> return new promesa; 



  }
}
