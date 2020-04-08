import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Solicitudes , Ing} from '../../models/solicitudes';
import {FormBuilder} from '@angular/forms'
import {DatePipe} from '@angular/common'
pdfMake.vfs=pdfFonts.pdfMake.vfs
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitud= new Solicitudes();
  listaProf=['Ing.Lorena Chulde','Ing.Mauricio Tamayo'];
  date:any;
  fecha:any;
  constructor(private formBuilder:FormBuilder,
    public datepipe:DatePipe) { 
    this.solicitud=JSON.parse(sessionStorage.getItem('solicitud')) || new Solicitudes();
  if(!this.solicitud.listaIng||this.solicitud.listaIng.length===0){
   this.solicitud.listaIng=[]
   this.solicitud.listaIng.push(new Ing());
  }

  }
  agregarCatalogo(){
    this.solicitud.listaIng.push(new Ing())
  }
  evento(e){
    const x = e.target.value;
    console.log('Esto es x_:',x);
      }
  ngOnInit(){
    this.obtenerFecha();
    this.fecha=this.formBuilder.group({
       fecha:''
      })
  }
  obtenerFecha(){
    this.date=new Date()
    this.date=this.datepipe.transform(this.date,'yyyy-MM-dd')
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
 getObjectoDocumento(listaIng:Ing[]){
return{
  columns:[
    ...listaIng.map(ed=>{
      console.log('Esto es catologo',ed.catalogo)
      return [ed.catalogo]
    })
  ]
}
 }
 getDefinicionSolicitud(){
   sessionStorage.setItem('solicitud',JSON.stringify(this.solicitud));
   return{
     content: [
      {
       text: 'Solicitud de Proyecto de Titulacion',
       bold:true,
       fontSize:20,
       alignment:'center',
       margin:[0,0,0,20]
      },
      {
      columns:[
        [{
         text:'Instituto Tecnologico Superior "Instituto que pertenece el Usario"',
         style:'titulo'
          }]
      ]
    },
    {
      columns:[
        [{text:'Solcitud N°1 2020-ITSBJ',
        style:'num'
      }]
      ]
    },
      {
        columns:[
          [{
            text:this.solicitud.sumillas+':'+ this.date,
            style:'sumillas'
          }]
        ]
        
      },
      {
        columns:[
          [{
            text:'Destinatario',
            style:'destinatario'
          }]
        ]
      },
      this.getObjectoDocumento(this.solicitud.listaIng),
      {
        columns:[
          [{
            text:' Yo : '+ this.solicitud.presentacionSolicitante + " " +  'Con "C.I." '+ this.solicitud.cedula + " "
             +" "+ this.solicitud.cuerpo+' '+ this.solicitud.titulacion
            , style:'presentacionSolicitante'
          }]
        ]
      },
      /* {
        columns:[
          [{
            text:this.solicitud.cuerpo+''+this.solicitud.titulacion,
            style:'cuerpo'
          }]
        ]
      } */,
      /* {
        columns:[
          [{
            text:this.solicitud.titulacion,
            style:'titulacion'
          }]
        ]
      } */,
       {
        columns:[
          [{
            text:'Atentamente' +  ' "Nombre del Usuario " ',
            style:'despedida'
          }]
        ]
      },
      {
        columns:[
          [{
            text:this.solicitud.presentacionSolicitante,
            style:'nombre'
          }]
        ]
      },
      {
        columns:[
          [{
            text:this.solicitud.cedula,
            style:'cedula'
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
        margin:[0,20,0,10]
       },
       cuerpo:{
        fontSize:14,
        margin:[0,20,0,10]
       },
       despedida:{
        fontSize:14,
        margin:[0,20,0,10],
        alignment:'center'
       },
       fecha:{
        fontSize:14,
        margin:[0,20,0,10]
       },
       titulacion:{
        fontSize:14,
        margin:[0,20,0,10],
        bold: true
       },
       titulo:{
        alignment:'center',
        fontSize:14,
        margin:[0,0,0,20],
        bold:true
       },
       num:{
         alignment:'center',
         fontSize:14,
         margin:[0,0,0,20],
         bold:true
        },
        nombre:{
          alignment:'center',
          fontSize:14,
          margin:[0,0,0,20],
          bold:true
         },
         cedula:{
          alignment:'center',
          fontSize:14,
          margin:[0,0,0,20],
          bold:true
         } 
     }
   }
 }   
}