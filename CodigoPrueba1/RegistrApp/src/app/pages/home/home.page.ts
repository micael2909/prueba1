import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  nombre_usuario : String = "";

  constructor(public rutaActiva: ActivatedRoute) {
    this.rutaActiva.queryParams.subscribe(params =>{
      this.nombre_usuario = params.usuario
    })
   }

  ngOnInit() {
  }

}
