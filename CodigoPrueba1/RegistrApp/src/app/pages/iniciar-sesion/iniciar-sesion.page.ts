import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  n_usuario : String;
  password : String;

  constructor() { }

  ngOnInit() {
  }

  validarUsuario(){
    if(this.n_usuario == "user" && this.password == "1234") {
      console.log("logueado")
    }else {
      console.log("invalido")
    }
  }


}
