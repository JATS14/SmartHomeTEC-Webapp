import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-tienda',
    templateUrl: './reportes.component.html',
    styleUrls: ['./reportes.component.css']
  })

  export class Reportes{

    reporteDatos: any;

    HoraInicio: any;
    HoraFinal: any;
    RestoHoras: any;

    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonReportesUsuario().subscribe((resi: any) => {
          console.log(resi);
          this.reporteDatos = resi;

          this.HoraInicio = ((resi.inicioHoraMasUso*100)/24);
          this.HoraFinal = ((resi.finalHoraMasUso*100)/24);
          this.RestoHoras = 100 - this.HoraFinal;
        });
      }


      
  }