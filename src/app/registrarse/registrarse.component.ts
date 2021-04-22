import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-registrarse',
    templateUrl: './registrarse.component.html',
    styleUrls: ['./registrarse.component.css']
  })
  
  export class RegistrarseComponent{
    res1: Array<any> = [];
    constructor(
      private router: Router, public json: JsonService
    ) {
    }
    goToRegister(formregister: NgForm) {
      if (formregister.valid) {
        this.json.postJsonRegister(formregister.value).subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }
      else{
        alert('Es necesario llenar todos los espacios');
      }
    }

  }