import { Component, OnInit } from '@angular/core';
import { RegistroService, Usuario } from '../../../../services/registro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  usuario: Usuario={
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    cargo:'',
    pass:''
  };
  constructor(private RegistroService: RegistroService, private router: Router, private activeRoute: ActivatedRoute) { }

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


    const rutEntrada = <string>this.activeRoute.snapshot.params['rut'];

    if(rutEntrada){
      this.RegistroService.getUnUsuario(rutEntrada).subscribe(
        res=>{
          var arreglo = Object.values(res);
          this.usuario = arreglo[0];
        },
        err=>console.log(err)
      );
    }
  }

  formulario: FormGroup=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
  });

  private buildForm() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
    });
  }

  modificar(){
    this.RegistroService.editUsuario(this.usuario.rut, this.usuario).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/registro'])
  }

}
