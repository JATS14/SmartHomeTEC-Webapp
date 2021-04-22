import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-principalVistaAdmin',
    templateUrl: './principalVistaAdmin.component.html',
    styleUrls: ['./principalVistaAdmin.component.css']
  })

  export class PrincipalVistaAdmin{

    constructor(
        private router: Router, public json: JsonService
      ) {
      }


      
  }