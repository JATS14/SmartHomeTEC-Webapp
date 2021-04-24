import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarTienda',
    templateUrl: './gestionarTienda.component.html',
    styleUrls: ['./gestionarTienda.component.css']
  })

  export class GestionarTienda{
    constructor(
        private router: Router, public json: JsonService
      ) {
      }


  }