import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id:string="";
  controlU:Boolean = false;
  controlA:boolean = false;
  constructor(private router: Router, private servicio: LoginService) { }

  ngOnInit(): void {
  }
  //CREAR FUNCION PARA VER SI YA ESTAS EN LA OFICINA

  /*
  validarUsuario():Boolean{
    let datos = localStorage.getItem('sitiomovil');
    if(datos){
      var id= datos.split(',')[0];
      this.id=id.split('"')[1];
      console.log(this.id)
      if(datos && this.id === 'usuario'){
        return true;
      }
    }
    return false
  }
  */
  //funcion para validar si se inicio sesion
  validar():Boolean{
    let datos1 = localStorage.getItem('sitiomovil');
    let datos2 = localStorage.getItem('modoAdministrador');
    if(datos1 != undefined || datos2 != undefined){
      return true;
    }
    return false;
  }

  validarUsuario():Boolean{
    let datos = localStorage.getItem('sitiomovil');
    if(datos != undefined ){
      return true;
    }
    return false;
  }


  validarAdmin():Boolean{
    let datos = localStorage.getItem('modoAdministrador');
  
    if(datos != undefined){
      return true;
    }
    return false;
  }

  

  //validar ingreso o egreso usuario
  /*
  validarU1(){
    let rut = this.verRut();
    let aux = false;
    this.servicio.getDE(rut).subscribe(
      res=>{
        let check = <any>res; 
        var largo = (Object.values(res).length)-1;
        if(largo >= 0){
          if(check[largo].cupo === 1){
            this.controlU = true;
            console.log('sipaso')
          }else{
            this.controlU = false;
          }
        } 
      },
      err => console.log(err)
    );
    
  }
  */
 
  
  /*
  //validar ingreso o egreso administrador
  validarIEOA(){
    let rut = this.verRut();
    this.servicio.getDE(rut).subscribe(
      res=>{
        let check = <any>res; 
        var largo = (Object.values(res).length)-1;
        if(largo >= 0){
          console.log(check[largo].cupo)
          if(check[largo].cupo === 1){
            return true;
          } else{
            return false;
          }
        } else{
          return false;
        }
      },
      err => console.log(err)
    );
  }
  */
  /*
  verRut(){
    let rutU;
    let datos = localStorage.getItem('sitiomovil');
    let datos2 = localStorage.getItem('modoAdministrador');
    if(datos2 != undefined){
      rutU = JSON.parse(datos2);
    }
    if(datos != undefined){
      rutU = JSON.parse(datos);
    }
    return rutU.id;
  }
  */

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
