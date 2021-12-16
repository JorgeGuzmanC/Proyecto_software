import { Component, OnInit } from '@angular/core';
import { LoginService, datosE } from './../../../services/login.service';
import { Router } from '@angular/router'; 
import { VerService } from './../../../services/ver.service';
import { AforoService } from './../../../services/aforo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.component.html',
  styleUrls: ['./escanear.component.scss']
})
export class EscanearComponent implements OnInit {
  fecha: string = '';
  ListaAforo: any[] = [];
  maxAforo: number = 0;
  exceso: boolean = true;
  Data: datosE = {fecha: '', rut:'', horaE: '',cupo:0};
  
  constructor(private servicio: LoginService, private router: Router, private verService: VerService, private aforoService: AforoService) { }

  ngOnInit(): void {
    var fechaA = new Date();
    this.fecha = fechaA.getDate() + '-' + (fechaA.getMonth()+1) + '-' + fechaA.getFullYear();
    this.obtenerMax();
    this.excedeElmaximo();
    console.log(this.exceso)
    
    setTimeout(()=>{this.entrar()},2000);
  }

 
  entrar(){
    console.log(this.exceso)
    if(this.exceso === false){
      
      let rutU = this.verRut();
      this.servicio.getDE(rutU).subscribe(
        res=>{
          let check = <any>res; 
          var largo = (Object.values(res).length)-1;
          console.log(check)
          if(largo >= 0){
            console.log(check[largo].cupo)
            if(check[largo].cupo === 1){
              
              Swal.fire({
                title: 'Ups...',
                text: "Ya te encuentras en la oficina!",
                icon: 'warning',
                
                confirmButtonColor: '#3085d6',
                
                confirmButtonText: 'Entendido'
             
              })
              this.router.navigate(['/'])
              return;
            } else{
              this.primera();
            }
          } else{
            this.primera();
          }
        },
        err => console.log(err)
      );
    }else{
      Swal.fire({
        title: 'No puedes entrar!',
        text: "Aforo máximo alcanzado",
        icon: 'warning',
        
        
     
      })
      this.router.navigate(['/']);
    }
  }

  primera(){
    let rutU = this.verRut();
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
    console.log(horaT);
    
    var fechaD = fecha.getDate() + '-' + (fecha.getMonth()+1) + '-' + fecha.getFullYear();
    console.log(fechaD);

    this.Data = {fecha: fechaD, rut: rutU, horaE: horaT,cupo:1}
    console.log(this.Data)
    
    this.servicio.escanearE(this.Data).subscribe();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ingreso exitoso!',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);

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

  obtenerMax(){
    this.aforoService.maxAforo().subscribe(
      res=>{
      let aux = <any>res;
      
      this.maxAforo = aux[0].cant;
      console.log(this.maxAforo);
    })
  }

  
  excedeElmaximo(){
    this.verService.verAforo(this.fecha).subscribe(
      res=>{
        this.ListaAforo=<any>res;
        
        console.log(this.ListaAforo.length);
        if(this.ListaAforo.length <= this.maxAforo){
         
          this.exceso = false;
          
        }else{
          this.exceso = true;
        }
      }, err => console.log(err));
  }
  

  
}


