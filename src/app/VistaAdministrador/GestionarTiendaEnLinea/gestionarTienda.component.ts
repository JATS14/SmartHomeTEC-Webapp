import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarTienda',
    templateUrl: './gestionarTienda.component.html',
    styleUrls: ['./gestionarTienda.component.css']
  })

  export class GestionarTienda{

    fileToUpload: File | null = null;

    constructor(
        private router: Router, public json: JsonService
      ) {
      }
        
    
      handleFileInput(files: FileList | null) {
        if (files){
        this.fileToUpload = files.item(0);
        }
      }

      uploadFileToActivity(){
        if(this.fileToUpload!=null){
        this.json.postJsonSubirExcel(this.fileToUpload).subscribe((resy: any) => {
          console.log(resy);
          if(resy.status == "exito"){
            alert('Se Subio el archivo con exito');
            window.location.reload();
          }
          else{
            alert('Error al subir los archivos');
            window.location.reload();
          }
      });
      }else{
        alert('Es necesario subir un archivo');
      }

    }
  }
