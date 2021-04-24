import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarTipo',
    templateUrl: './gestionarTipo.component.html',
    styleUrls: ['./gestionarTipo.component.css']
  })

  export class GestionarTipo{
    constructor(
        private router: Router, public json: JsonService
      ) {
      }


  }