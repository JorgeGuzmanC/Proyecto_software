import { Component, OnInit } from '@angular/core';
import { LoginService, datosS } from './../../../services/login.service';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escanear-s',
  templateUrl: './escanear-s.component.html',
  styleUrls: ['./escanear-s.component.scss']
})
export class EscanearSComponent implements OnInit {
  aux: boolean = true;
  id: number;
  Data: datosS = {horaS: '',cupo:0};
  constructor(private servicio: LoginService, private router: Router) { 
    this.id = 0;
  }

  ngOnInit(): void {
    this.sacarID();
    setTimeout(()=>{this.salida()},1000);
  }

  salida(){
    //this.sacarID();
    console.log(this.id)


    var fecha = new Date();
    
    var hora;
    var minutos;
    var horaT;
    if(fecha.getMinutes() < 10){
      minutos = ':0' + fecha.getMinutes();
    }else{
      minutos = ':' + fecha.getMinutes();
    }
    if(fecha.getHours() < 10){
      hora = '0' + fecha.getHours();
    }else{
      hora = fecha.getHours();
    }
    horaT = hora + minutos;

    this.Data = {horaS: horaT,cupo: 0}
    this.servicio.escanearS(this.id,this.Data).subscribe();
    if(this.aux === true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Egreso exitoso!',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/'])

    }
    
  }

  sacarID(){
    let rutU = this.verRut();
    this.servicio.getDE(rutU).subscribe(
      res=>{
        let check = <any>res; 
        var largo = (Object.values(res).length)-1;
        console.log(check[largo].cupo)
        if(check[largo].cupo === 1){
          this.id = check[largo].id;
          this.aux = true;
        }else{
          
          this.aux = false;
          Swal.fire('No has ingresado a la oficina')
          
          
          this.router.navigate(['/'])
          
        }
      },
      err => console.log(err)
    );
  }

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

    if(datos == undefined && datos2 == undefined){
      Swal.fire('Inicia sesión para realizar esta acción')
      this.router.navigate(['/iniciarSesion'])
    }

    return rutU.id;
  }

}
