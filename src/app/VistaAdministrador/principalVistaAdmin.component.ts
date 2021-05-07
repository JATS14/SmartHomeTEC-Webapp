import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-principalVistaAdmin',
    templateUrl: './principalVistaAdmin.component.html',
    styleUrls: ['./principalVistaAdmin.component.css']
  })

  export class PrincipalVistaAdmin{

    objeto1: any;

    res1: Array<any> = [];
    res2: Array<any> = [];

    public chartType: string = 'bar';

    public chartLabels: Array<any> = ["América", 'Europa', 'Asia', 'Áfica', 'Oceanía'];

    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonDashBoard().subscribe((resi: any) => {
          console.log(resi);
          this.objeto1 = resi;});

        this.json.getJsonDispUsuario().subscribe((resj: any) => {
          console.log(resj);
          this.res1 = resj;});

        this.json.getJsonDispSinUsuario().subscribe((resk: any) => {
          console.log(resk);
          this.res2 = resk;});
      }
      

      public chartColors: Array<any> = [
        {
          backgroundColor: 'rgba(0, 250, 220, .2)',
          borderColor: 'rgba(0, 213, 132, .7)',
          borderWidth: 3,
        }
      ];
    
      public chartOptions: any = {
        responsive: true,
        title: {
          display: true,
          text: 'Cantidad de Dispositivos por Región',
          textColor:  'rgba(0, 0, 0, .1)'
      }
      };
      public chartClicked(e: any): void { }
      public chartHovered(e: any): void { }




  }