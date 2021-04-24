import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
    selector: 'app-gestionarDisp',
    templateUrl: './gestionarDisp.component.html',
    styleUrls: ['./gestionarDisp.component.css']
  })

  export class GestionarDispositivos{
    constructor(
        private router: Router, public json: JsonService
      ) {
      }


  }