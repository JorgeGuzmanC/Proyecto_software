import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AforoService {
  url='/api';

  constructor(private http: HttpClient) { }

  maxAforo(){
    return this.http.get(`${this.url}/aforo/obtener`)
  }

  //ver si funciona
  modificarAforo(id:number,num:any){
    let cant = num;
    return this.http.put(this.url+'/aforooo/'+id+'/'+cant,num)
  }
}
