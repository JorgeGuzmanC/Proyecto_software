import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url='/api';
  constructor(private http: HttpClient) { }

  reservarH(datos: datosR){
    return this.http.post(`${this.url}/reserva`, datos);
  }
}

export interface datosR{
  fecha:String;
  rut:string;
  horaE:String;
  horaS: string;
}