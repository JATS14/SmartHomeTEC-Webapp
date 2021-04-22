import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  res1: Array<any> = [];
  constructor(
    private router: Router, public json: JsonService
  ) {
  }
  ngOnInit(): void {
  }

  goTo(formLogin: NgForm) {
    if (formLogin.valid) {
      this.json.postJson(formLogin.value).subscribe((res: any) => {
        console.log(res);
        this.res1 = res;
      });
    }
    else{
      alert('Error en el ingreso de datos');
    }
  }
  Registrar(): void{
    this.router.navigate([ '/registrarse'])
  }
}