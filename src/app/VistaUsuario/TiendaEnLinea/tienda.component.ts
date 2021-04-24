import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
  })

  export class Tienda{

    constructor(
        private router: Router, public json: JsonService
      ) {
      }
      
  }