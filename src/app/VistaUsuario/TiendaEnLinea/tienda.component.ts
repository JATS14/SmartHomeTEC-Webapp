import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
  })

  export class Tienda{
    res1: Array<any> = [];

    frameComprar : boolean = false;
    dispositivoComprado: Array<any> = [];
    
    dispCom : any;


    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJson().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }

      enviaraComprar(Comprar: any){
        this.dispositivoComprado = [Comprar];
        this.dispCom = Comprar;
        this.frameComprar = true;
      }
  
      ComprarDispositivoClose(estado : boolean){
        this.frameComprar = estado;
      }
      
      goToComprar(compra: NgForm){
        if (compra.valid) {
          this.json.postJsonComparDispositivo(this.dispCom).subscribe((resy: any) => {
            console.log(resy);});

          this.json.postJsonDatosFactura(compra.value).subscribe((resy: any) => {
            console.log(resy);
            if(resy.status == "exito"){
              this.frameComprar = false;
              window.location.reload();
              alert('Se compro un dispositivo con exito');
            }
        });
            }
        else{
          alert('Es necesario rellenar todos los espacios');
        }
      }

  }