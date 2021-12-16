import { Component, OnInit } from '@angular/core';
import { RegistroService, Usuario } from '../../../../services/registro.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  usuario: Usuario={
    rut:'',
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    cargo:'',
    pass:'',
  }
  constructor(private RegistroService: RegistroService, private router: Router) { 
    this.buildForm();
  }

  formulario: FormGroup=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    rut: new FormControl('', [Validators.maxLength(10),Validators.minLength(9),Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {

    let datos = localStorage.getItem('sitiomovil');
    
    if(datos != undefined){
      window.location.href="";
      return;
    } 
    let datos2 = localStorage.getItem('modoAdministrador');
    
    if(datos == undefined && datos2 == undefined){
      window.location.href="";
      return;
    }
  }

  private buildForm() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      rut: new FormControl('', [Validators.maxLength(10)]),
      telefono: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
    });
  }

  agregar(){
    this.usuario.pass = this.usuario.rut?.substr(0,5);
    this.RegistroService.addUsuario(this.usuario).subscribe();
    this.router.navigate(['/registro']);
  }

}
