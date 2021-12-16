import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService, Usuario } from './../../../services/registro.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  ListarUsuarios: Usuario[] = [];
  
  //formulario: FormGroup;

  constructor(private RegistroService: RegistroService, private router: Router) { 
    
  }

  ngOnInit(): void {
    let datos = localStorage.getItem('sitiomovil');
    console.log(localStorage.getItem('sitiomovil'))
    if(datos != undefined){
      window.location.href="";
      return;
    } 
    let datos2 = localStorage.getItem('modoAdministrador');
    
    if(datos == undefined && datos2 == undefined){
      window.location.href="";
      return;
    }
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.RegistroService.getUsuarios().subscribe(
      res=>{
        console.log(res)
        this.ListarUsuarios=<any>res
      },
      err => console.log(err)
    );
  }

  eliminar(rut:any){
    this.RegistroService.deleteUsuario(rut).subscribe(
      res=>{
        console.log('Usuario eliminado');
        this.listarUsuarios();
    },
    err=> console.log(err)
    );
  }

  modificar(rut:any){
    this.router.navigate([/editar/+rut])
  }

}
