import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-principalVistaUsua',
    templateUrl: './principalVistaUsua.component.html',
    styleUrls: ['./principalVistaUsua.component.css']
  })

  export class PrincipalVistaUsua{

    constructor(
        private router: Router, public json: JsonService
      ) {
      }


      
  }