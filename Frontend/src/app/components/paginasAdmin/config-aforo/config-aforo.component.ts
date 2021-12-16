import { Component, OnInit } from '@angular/core';
import { AforoService } from './../../../services/aforo.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config-aforo',
  templateUrl: './config-aforo.component.html',
  styleUrls: ['./config-aforo.component.scss']
})
export class ConfigAforoComponent implements OnInit {
  submitted = false;
  maxAforo:number = 0;
  maxAnt:number = 0;
  aforo: any={
    id:1,
    cant:0
  };
  
  formulario: FormGroup;
  constructor(public fb: FormBuilder,private aforoService: AforoService, private router: Router) { 
    this.formulario = fb.group({
      nuevoMax: ['', Validators.required],
    });
  }

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
    
    this.cantMaxActualAforo();
    
  }

  cantMaxActualAforo(){
    this.aforoService.maxAforo().subscribe(
      res=>{
        let num = <any>res;
        this.maxAforo = num[0].cant;
        this.maxAnt = this.maxAforo;
      },
      err => console.log(err)
    )
  }

  modificar(){
    this.submitted = true;

    if(this.formulario.invalid || this.maxAnt === this.maxAforo){
      if(this.maxAnt === this.maxAforo){
        Swal.fire('No has modificado el valor')
        return
      }else{
        
        Swal.fire('Ingresa un valor valido mayor o igual a 10')
        
        return
      }
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Aforo maximo modificado con éxito',
      showConfirmButton: false,
      timer: 2000
    })

    this.aforo = this.maxAforo
    console.log('ALOO: '+this.aforo)
    this.aforoService.modificarAforo(1,this.aforo).subscribe(res=>{
      console.log(res);
    },
    err=>console.log(err)
  );

  this.router.navigate(['/registro'])

  }

  

}
