import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='/api';

  constructor(private http: HttpClient) { }

  validarLogin(rut:string, contra:string){
    return this.http.get(`${this.url}/login/${rut}/${contra}`);
  }

  escanearE(datos: datosE){
    return this.http.post(`${this.url}/entrada`, datos);
  }
  
  getDE(rut:string){
    return this.http.get(this.url+'/entrada/'+rut);
  }

  escanearS(id:number,datos:datosS){
    return this.http.put(this.url+'/salida/'+id, datos);
  }

  
}

export interface datosE{
  fecha:String;
  rut:string;
  horaE:String;
  cupo: number;
}

export interface datosS{
  horaS: string;
  cupo: number;
}
