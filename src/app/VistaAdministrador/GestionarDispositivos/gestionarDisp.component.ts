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

    res5: Array<any> = [];

    dispositivoEditando: Array<any> = [];
    
    frameEditarAbrir : boolean = false;

    
    constructor(
        private router: Router, public json: JsonService) {

        this.json.getJson().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }

    enviarAEditar(editar: any){
      this.dispositivoEditando = [editar];
      this.frameEditarAbrir = true;
    }

    editarDispositivoClose(estado : boolean){
      this.frameEditarAbrir = estado;
    }

    goToEditar(EditarDispositivoEditado: NgForm){
    if (EditarDispositivoEditado.valid) {
    this.json.postJsonDispositivosEditar(EditarDispositivoEditado.value).subscribe((resy: any) => {
      console.log(resy);
      this.res5 = resy;
      if(resy.status == "exito"){
        this.frameEditarAbrir = false;
        window.location.reload();
        alert('Se edito el Dispositivo con éxito');
      }
  });
    }
    else{
      alert('Error en el ingreso de datos');
    }
  }
  Eliminar_Dispositivo(object: any): void{
    this.json.postJsonDispositivosEliminar(object).subscribe((resX: any) => {
      console.log(resX);
      this.res2 = resX;
      if(resX.status == "exito"){
        window.location.reload();
      }
  });
  
  }

  goTo(AgrgarDispositivo: NgForm) {
    if (AgrgarDispositivo.valid) {
      this.json.postJsonDispositivosAgregar(AgrgarDispositivo.value).subscribe((res: any) => {
        console.log(res);
        this.res3 = res;
        
        if(res.status == "agregado"){
          window.location.reload();
        }
      });
      
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