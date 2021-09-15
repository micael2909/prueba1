import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  n_usuario : String = "";
  password : String = "";

  usuario_base : String = "prueba"
  pass_base : String = "1234"

  error_usuario : Boolean = true;
  texto_error : String = "";

  constructor(public navController: NavController, public rutaActiva: ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params => {
      if(this.usuario_base == params.usuario){
        this.pass_base = params.clave_nueva;
      }
    })
  }

  ngOnInit() {
  }

  validarUsuario(user:String){
    if(user.trim() == ""){
      return 0
    } else{
      return 1
    }
  }

  validarUsuario_clave(){
    if (!this.validarUsuario(this.n_usuario)){
      this.texto_error = "Nombre de Usuario no puede estar vacío";
      this.error_usuario = false;
      console.log("nombre de usuario vacio"); /*presentar alerta y movimiento del boton ingresar para añadir efecto*/ 
    }else if(this.n_usuario == this.usuario_base && this.password == this.pass_base) {
      this.navController.navigateRoot('home' ,
      { queryParams: { 'usuario': this.n_usuario } }); 
    }else {
      this.texto_error = "Nombre de Usuario Y/O Contraseña Invalido";
      this.error_usuario = false;
      console.log("nombre de usuario y/o contraseña invalido");
      /*presentar alerta y movimiento del boton ingresar para añadir efecto*/ 
    }
  }

}
