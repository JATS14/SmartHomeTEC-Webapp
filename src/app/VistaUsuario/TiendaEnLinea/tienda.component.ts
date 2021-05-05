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
    res1: Array<any> = [];
    constructor(
        private router: Router, public json: JsonService
      ) {
        this.json.getJson().subscribe((res: any) => {
          console.log(res);
          this.res1 = res;
        });
      }
      
  }