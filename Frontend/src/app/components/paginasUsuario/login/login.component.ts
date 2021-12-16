import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router'; 
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rut: string = '';
  pass: string = '';

  constructor(private servicio: LoginService, private router: Router) { }

  formulario: FormGroup=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.maxLength(10)])
  });

  ngOnInit(): void {
    let sesion= localStorage.getItem("sitiomovil");

    if (sesion){
      window.location.href="/inicioAdmin"
    }
  }

  private buildForm() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.maxLength(10)])
    });
  }

  iniciar(){
    this.servicio.validarLogin(this.rut,this.pass).subscribe(
      res=>{

        var arreglo = Object.values(res);
        if(arreglo.length != 0){
          if(arreglo[0].cargo === "Administrador"){
            localStorage.setItem('modoAdministrador', JSON.stringify({"usuario":arreglo[0].nombre, "id":arreglo[0].rut}));
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Inicio de sesión correcto'
            })
            
            this.router.navigate(['/'])
            return;
          }
        }
        if(arreglo.length === 0){
          
          Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Datos de inicio de sesión incorrectos, intente nuevamente',
            
          })
        }else{
          
          localStorage.setItem('sitiomovil', JSON.stringify({"usuario":arreglo[0].nombre, "id":arreglo[0].rut}))
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Inicio de sesión correcto'
          })
          this.router.navigate(['/'])
        }
      }
    )
  }

}
