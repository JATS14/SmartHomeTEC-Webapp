import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService{
  url = 'https://localhost:5001/ListaDispositivos';
  url1 = 'https://localhost:5001/Login';
  header = {headers: {'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type, Authorization'}};
  constructor(private http: HttpClient) { }
  getJson(){
    return this.http.get(this.url);
  }
  postJson( obj: any){
    return this.http.post(this.url1, obj, this.header);
  }
};