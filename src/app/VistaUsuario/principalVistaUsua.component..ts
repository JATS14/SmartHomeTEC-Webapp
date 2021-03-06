import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-principalVistaUsua',
    templateUrl: './principalVistaUsua.component.html',
    styleUrls: ['./principalVistaUsua.component.css']
  })

  export class PrincipalVistaUsua{

    res1: Array<any> = [];

    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonUsuarioActual().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }

      goToEditarPerfil(EditarPerfil: NgForm){
        if (EditarPerfil.valid) {
          this.json.postJsonEditarPerfil(EditarPerfil.value).subscribe((resy: any) => {
            console.log(resy);
            if(resy.status == "exito"){
              window.location.reload();
            }
          });
        }else{
          alert("Es necesario llenar todos los espacios");
        }


      }
      
  }