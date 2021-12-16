import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerService {
  url='/api';

  constructor(private http: HttpClient) {}

  verAforo(fecha:string){
    return this.http.get(`${this.url}/ver/${fecha}`)
  }

  getUnUsuario(rut:string){
    return this.http.get(this.url+'/'+rut);
  }

  trazabilidad(fecha:string){
    return this.http.get(`${this.url}/trazabilidad/${fecha}`)
  }

  reservado(){
    return this.http.get(`${this.url}/reservado`)
  }

}



export interface datosF{
  rut:string;
  horaE:String;
  nombre:string;
  apellido:string;
}

export interface datosT{
  rut:string;
  fecha: string;
  horaE:String;
  horaS:String;
  nombre:string;
  apellido:string;
}
/*
export const NULL:datosT={
  rut:"",
  fecha:"",
  horaE:"",
  horaS:"",
  nombre:"",
  apellido:""
}
*/