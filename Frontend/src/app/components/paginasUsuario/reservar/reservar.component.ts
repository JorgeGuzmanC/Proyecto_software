import { Component, OnInit } from '@angular/core';
import { ReservaService, datosR} from '../../../services/reserva.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  fecha: string = '';
  datos: datosR = {
    rut:'',
    fecha:'',
    horaE:'',
    horaS:''
  }
  constructor(private reservaService: ReservaService, private router: Router) { }

  formulario: FormGroup=new FormGroup({
    horaE: new FormControl('', [Validators.required]),
    horaS: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    let datos = localStorage.getItem('sitiomovil');
    let datos2 = localStorage.getItem('modoAdministrador');
    if(datos == undefined && datos2 == undefined){
      window.location.href="";
      return;
    }

    var fechaA = new Date();
    fechaA.setDate(fechaA.getDate() +1)
    this.fecha = fechaA.getDate() + '-' + (fechaA.getMonth()+1) + '-' + fechaA.getFullYear();
  }

  private buildForm() {
    this.formulario = new FormGroup({
      horaE: new FormControl('', [Validators.required]),
      horaS: new FormControl('', [Validators.required])
    });
  }

  reservar(){
    this.datos.fecha = this.fecha;
    let rutU = this.verRut();
    this.datos.rut = rutU;
    this.reservaService.reservarH(this.datos).subscribe();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Reserva realizada exitosamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/']);
  }

  verRut(){
    let rutU;
    let datos = localStorage.getItem('sitiomovil');
    if(datos != undefined){
      rutU = JSON.parse(datos);
      
    }else{
      Swal.fire('Inicia sesión para realizar esta acción')
      this.router.navigate(['/iniciarSesion'])
    }

    return rutU.id;
  }

}
