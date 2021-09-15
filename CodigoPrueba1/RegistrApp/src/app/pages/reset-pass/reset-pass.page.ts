import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  nom_usuario : String;
  nueva_clave : String;
  confirm_clave : String;

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  compararClaves(){
    if(this.nueva_clave != this.confirm_clave){
      return 0
    }else{
      return 1
    }
  }

  resetearClave(){
    if(!this.compararClaves){
      console.log("claves malas")
    }
    this.navController.navigateRoot('iniciar-sesion',
    {queryParams: { 'usuario' : this.nom_usuario, 'clave_nueva' : this.nueva_clave }})
  }

}
