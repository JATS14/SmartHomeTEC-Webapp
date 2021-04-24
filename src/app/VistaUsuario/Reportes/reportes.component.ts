import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-tienda',
    templateUrl: './reportes.component.html',
    styleUrls: ['./reportes.component.css']
  })

  export class Reportes{

    constructor(
        private router: Router, public json: JsonService
      ) {
      }
      
  }