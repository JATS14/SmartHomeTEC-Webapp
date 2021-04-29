import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarTipo',
    templateUrl: './gestionarTipo.component.html',
    styleUrls: ['./gestionarTipo.component.css']
  })

  export class GestionarTipo{
    res1: Array<any> = [];
    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonTipo().subscribe((res: any) => {
        console.log(res);
        this.res1 = res;
      });
      }
      Editar_Tipo(): void{
        alert('Se actualizaron los datos con éxito');
      }
      Eliminar_Tipo(): void{
        alert('Se Elimino con éxito');
      }

  }