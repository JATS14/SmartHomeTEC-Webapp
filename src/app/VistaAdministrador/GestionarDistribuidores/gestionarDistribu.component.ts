import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarDistribu',
    templateUrl: './gestionarDistribu.component.html',
    styleUrls: ['./gestionarDistribu.component.css']
  })

  export class GestionarDistribuidores{
    constructor(
        private router: Router, public json: JsonService
      ) {
      }


  }