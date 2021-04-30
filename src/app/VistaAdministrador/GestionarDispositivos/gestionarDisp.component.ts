import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-gestionarDisp',
    templateUrl: './gestionarDisp.component.html',
    styleUrls: ['./gestionarDisp.component.css']
  })

  export class GestionarDispositivos{
    res1: Array<any> = [];
    res2: Array<any> = [];
    objetoGet:any;

    res3: Array<any> = [];
    
    res4: Array<any> = [];

    constructor(
        private router: Router, public json: JsonService) {

        this.json.getJson().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }
  Editar_Dipositivo(): void{
    alert('Se actualizaron los datos con éxito');
  }
  Eliminar_Dispositivo(): void{
    this.json.postJsonDispositivosEliminar(this.objetoGet.nombre).subscribe((resX: any) => {
      console.log(resX);
      this.res2 = resX;
      if(resX.status == "exito"){
        alert('Se Elimino el Dispositivo con éxito');
      }
  });
  }

  goTo(AgrgarDispositivo: NgForm) {
    if (AgrgarDispositivo.valid) {
      this.json.postJsonDispositivosAgregar(AgrgarDispositivo.value).subscribe((res: any) => {
        console.log(res);
        this.res3 = res;
        

        }
      );
      
    }
    else{
      alert('Error en el ingreso de datos');
    }
  }

  goToBuscar(BuscarDispositivo: NgForm) {
    if (BuscarDispositivo.valid) {
      this.json.postJsonDispositivosBuscar(BuscarDispositivo.value).subscribe((res: any) => {
        console.log(res);
        this.res4 = res;
        if (this.res4.length == 0){
          alert('No se encontraron Dispositivos');
        }

        }
      );
      
    }
    else{
      alert('Error en el ingreso de datos');
    }
  }


  }