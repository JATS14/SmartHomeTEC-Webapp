import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService{
  url = 'https://localhost:5001/ListaDispositivos';
  url1 = 'https://localhost:5001/Login/verificar';
  url2 = 'https://localhost:5001/Login/registrar';

  /*Dispositivos*/
  url3 = 'https://localhost:5001/Dispositivos/agregarDispositivo';
  url4 = 'https://localhost:5001/Dispositivos/editarDispositivo';
  url5 = 'https://localhost:5001/Dispositivos/eliminarDispositivo';
  url6 = 'https://localhost:5001/Dispositivos/buscarDispositivo';

  /*Tipo*/
  url7 = 'https://localhost:5001/tipo';


  /*header = {headers: {'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type, Authorization'}};*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  
  constructor(private http: HttpClient) { }
  /*dispositivos*/
  getJson(){
    return this.http.get(this.url);
  }

  /*Login - register*/
  postJson( obj: any){
    return this.http.post(this.url1, obj, this.httpOptions);
  }
  postJsonRegister( obj: any){
    return this.http.post(this.url2, obj, this.httpOptions);
  }

  /*dispositivos*/
  postJsonDispositivosAgregar( obj: any){
    return this.http.post(this.url3, obj, this.httpOptions);
  }
  postJsonDispositivosEditar( obj: any){
    return this.http.post(this.url4, obj, this.httpOptions);
  }
  postJsonDispositivosEliminar( obj: any){
    return this.http.post(this.url5, obj, this.httpOptions);
  }
  postJsonDispositivosBuscar( obj: any){
    return this.http.post(this.url6, obj, this.httpOptions);
  }

  /*Tipo*/
  getJsonTipo(){
    return this.http.get(this.url7);
  }
};