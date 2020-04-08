import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Resume, Experience, Education, Skill } from '../models/resume';


pdfMake.vfs = pdfFonts.pdfMake.vfs;
>>>>>>> origin/master

@Component({
  selector: 'app-elaborador',
  templateUrl: './elaborador.component.html',
  styleUrls: ['./elaborador.component.css']
})
export class ElaboradorComponent implements OnInit {
<<<<<<< HEAD
=======
  resume = new Resume();
  degrees = ['Básico', 'Inicial','Bachillerato', 'Estudios Superiores'];
  enteros = [1, 2 , 3];
>>>>>>> origin/master

  constructor() { 
  }

  ngOnInit() {
  }

 
}
