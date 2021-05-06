import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarTipo',
    templateUrl: './gestionarTipo.component.html',
    styleUrls: ['./gestionarTipo.component.css']
  })

  export class GestionarTipo{
    res1: Array<any> = [];
    res2: Array<any> = [];
    res3: Array<any> = [];
    res4: Array<any> = [];

    TipoEditando: Array<any> = [];
    
    frameEditarTipo : boolean = false;

    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonTipo().subscribe((res: any) => {
        console.log(res);
        this.res1 = res;
      });
      }

      enviarAEditar(editar: any){
        this.TipoEditando = [editar];
        this.frameEditarTipo = true;
      }

      editarTipoClose(estado : boolean){
        this.frameEditarTipo = estado;
      }

      goToEditar(EditarTipoEditado: NgForm){
        if (EditarTipoEditado.valid) {
          this.json.postJsonTipoEditar(EditarTipoEditado.value).subscribe((resy: any) => {
            console.log(resy);
            if(resy.status == "exito"){
              this.frameEditarTipo = false;
              window.location.reload();
              alert('Se edito el Tipo con éxito');
            }
        });

        }
        else{
          alert('Error en el ingreso de datos');
        }
      }
  

      Eliminar_Tipo(object: any): void{
        this.json.postJsonTiposEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res4 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }

      goTo(AgrgarTipo: NgForm) {
        if (AgrgarTipo.valid) {
          this.json.postJsonTipoAgregar(AgrgarTipo.value).subscribe((res: any) => {
            console.log(res);
            this.res2 = res;
            
            if(res.status == "agregado"){
              window.location.reload();
            }
          });
          
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goToBuscar(BuscarTipo: NgForm) {
        if (BuscarTipo.valid) {
          this.json.postJsonTipoBuscar(BuscarTipo.value).subscribe((res: any) => {
            console.log(res);
            this.res3 = res;
            if (this.res3.length == 0){
              alert('No se encontraron Tipos');
            }
    
            }
          );
          
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }
  }