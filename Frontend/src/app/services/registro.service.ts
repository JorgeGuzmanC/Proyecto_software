import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url='/api';

  constructor(private http: HttpClient) { }

  //get usuarios
  getUsuarios(){
    return this.http.get(this.url);
  }

  //get 1 usuario
  getUnUsuario(rut:string){
    return this.http.get(this.url+'/'+rut);
  }

  //agregar usuario
  addUsuario(usuario:Usuario){
    return this.http.post(this.url, usuario);
  }

  //eliminar usuario
  deleteUsuario(rut:string){
    return this.http.delete(this.url+'/'+rut);
  }

  //modificar
  editUsuario(rut:any, usuario:Usuario){
    return this.http.put(this.url+'/'+rut, usuario);
  }
}

export interface Usuario{
  rut?:string;
  nombre?:string;
  apellido?:string;
  email?:string;
  telefono?:string;
  cargo?:string;
  pass?:string;
}

export const NULL:Usuario={
  rut:"",
  nombre:"",
  apellido:"",
  email:"",
  telefono:"",
  cargo:"",
  pass:""
}