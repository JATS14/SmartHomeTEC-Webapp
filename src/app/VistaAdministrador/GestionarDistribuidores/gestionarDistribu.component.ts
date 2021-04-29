import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarDistribu',
    templateUrl: './gestionarDistribu.component.html',
    styleUrls: ['./gestionarDistribu.component.css']
  })

  export class GestionarDistribuidores{
    res1: Array<any> = [];
    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJsonDistribuidores().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }


  }