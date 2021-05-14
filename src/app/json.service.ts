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

  /*distribuidores*/
  url8 = 'https://localhost:5001/Distribuidores';

  /*GestionarTipo*/
  url9 = 'https://localhost:5001/GestionarTipo/agregarTipo';
  url10 = 'https://localhost:5001/GestionarTipo/editarTipo';
  url11 = 'https://localhost:5001/GestionarTipo/eliminarTipo';
  url12 = 'https://localhost:5001/GestionarTipo/buscarTipo';

   /*UsuarioActual*/
   url13 = 'https://localhost:5001/GetUsuarioActual';
   url14 = 'https://localhost:5001/PostUsuarioActual/agregarUsuarioActual';

   /*Perfil*/
   url15 = 'https://localhost:5001/Usuario/EditarPerfil';


  /*DashBoard*/
   url16 = 'https://localhost:5001/DashBoard/DatosDeGraficas';
   url17 = 'https://localhost:5001/DashBoard/ListaDispositivosUsuario';
   url18 = 'https://localhost:5001/DashBoard/ListaDispositivosSinUsuario';
   url21 = 'https://localhost:5001/DashBoard/ReportesUsuario';

   /*Factura*/
   url19 = 'https://localhost:5001/Usuario/ComparDispositivo';
   url20 = 'https://localhost:5001/Usuario/DatosDactura';

   /* Subir Excel */
   url22 = 'https://localhost:5001/excelDispositivos/subirExcelDispositivos';

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

  /*distribuidores*/
  getJsonDistribuidores(){
    return this.http.get(this.url8);
  }

   /*GestionarTipo*/
   postJsonTipoAgregar( obj: any){
    return this.http.post(this.url9, obj, this.httpOptions);
  }
  postJsonTipoEditar( obj: any){
    return this.http.post(this.url10, obj, this.httpOptions);
  }
  postJsonTiposEliminar( obj: any){
    return this.http.post(this.url11, obj, this.httpOptions);
  }
  postJsonTipoBuscar( obj: any){
    return this.http.post(this.url12, obj, this.httpOptions);
  }

  /*UsuarioActual*/
  getJsonUsuarioActual(){
    return this.http.get(this.url13);
  }

  postJsonUsuarioActual( obj: any){
    return this.http.post(this.url14, obj, this.httpOptions);
  }

  /*Perfil*/
  postJsonEditarPerfil( obj: any){
  return this.http.post(this.url15, obj, this.httpOptions);
  }

  /*DashBoard*/
  getJsonDashBoard(){
    return this.http.get(this.url16);
  }

  getJsonDispUsuario(){
    return this.http.get(this.url17);
  }

  getJsonDispSinUsuario(){
    return this.http.get(this.url18);
  }

  getJsonReportesUsuario(){
    return this.http.get(this.url21);
  }

  /*Factura*/
  postJsonComparDispositivo( obj: any){
    return this.http.post(this.url19, obj, this.httpOptions);
  }

  postJsonDatosFactura( obj: any){
    return this.http.post(this.url20, obj, this.httpOptions);
  }

  /* Subir Excel */
  postJsonSubirExcel(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('File', fileToUpload);
    return this.http.post(this.url22,formData,{
      reportProgress: true,
    });
    
  }

};
