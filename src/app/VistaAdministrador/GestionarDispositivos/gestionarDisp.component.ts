import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarDisp',
    templateUrl: './gestionarDisp.component.html',
    styleUrls: ['./gestionarDisp.component.css']
  })

  export class GestionarDispositivos{
    res1: Array<any> = [];
    res2: Array<any> = [];
    objetoGet:any;

    
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
  }