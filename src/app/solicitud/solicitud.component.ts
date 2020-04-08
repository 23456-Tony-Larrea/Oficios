import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Solicitudes } from '../models/solicitudes';


pdfMake.vfs=pdfFonts.pdfMake.vfs
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitud= new Solicitudes();
  constructor() { 
    this.solicitud=JSON.parse(sessionStorage.getItem('solicitud')) || new Solicitudes();
  }
  ngOnInit():void{
  }
  agregarMensaje(){
    console.log('quiero comprobar')
  }
  generarPdf(accion='open'){
    const defenicionSolicitud=this.getDefinicionSolicitud();
    switch(accion){
  case 'open' :pdfMake.createPdf(defenicionSolicitud).open(); break;
  case 'print':pdfMake.createPdf(defenicionSolicitud).print(); break;
  case 'download':pdfMake.createPdf(defenicionSolicitud).download(); break;
 default:pdfMake.createPdf(defenicionSolicitud).open();break 
    }

    }
 resetearForm(){
   this.solicitud= new Solicitudes();
 }
 getDefinicionSolicitud(){
   sessionStorage.setItem('solicitud',JSON.stringify(this.solicitud));
   return{
     content: [
      {
       text: 'Solicitud',
       bold:true,
       fontSize:20,
       alignment:'center',
       margin:[0,0,0,20]
      },
      {
        columns:[
          [{
            text:'Lugar :' + this.solicitud.sumillas,
            style:'sumillas'
          }]
        ]
        
      },
      {
        columns:[
          [{
            text:'Destinatario :' +  this.solicitud.destinatario,
            style:'destinatario'
          }]
        ]
      },
      {
        columns:[
          [{
            text:'Solicitante :'+this.solicitud.presentacionSolicitante,
            style:'presentacionSolicitante'
          }]
        ]
      },
      {
        columns:[
          [{
            text:this.solicitud.cuerpo,
            style:'cuerpo'
          }]
        ]
      },
      {
        columns:[
          [{
            text:this.solicitud.despedida,
            style:'despedida'
          }]
        ]
      },
      {
        columns:[
          [{
            text:this.solicitud.fecha,
            style:'fecha'
          }]
        ]
      },
      {
        columns:[
          [{
            text:'Firma',
            style:'firma'
          }]
        ]
      }
     ],
     styles:{
       sumillas:{
         fontSize:14,
         bold:true,
         margin:[0,20,0,10],
         /*decoration:'underline'*/
       },
       destinatario:{
         fontSize:14,
         margin:[0,20,0,10],
         bold:true
       },
       presentacionSolicitante:{
        fontSize:14,
        margin:[0,20,0,10],
        bold: true
       },
       cuerpo:{
        fontSize:14,
        margin:[0,20,0,10]
       },
       despedida:{
        fontSize:14,
        margin:[0,20,0,10]
       },
       fecha:{
        fontSize:14,
        margin:[0,20,0,10]
       }
     }
   }
 }   
}
