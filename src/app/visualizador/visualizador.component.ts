import { Component, OnInit } from '@angular/core';
import { Request, Response } from 'express';
//import { pool } from '../database';
import { QueryResult } from 'pg';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent implements OnInit {
  users:any;

  constructor(private service: ServicioService) { }

  ngOnInit(){
    
  }

  agregarMensaje(){
    
  this.service.getUsers().subscribe(
      x => {
      //console.log('|VisualizadorComponent.getUsers()!|');
      this.users = x;
      console.log(this.users);

    },

    (error) => {
      console.error(error);
    }
  );

  }
}
