import { Component, OnInit } from '@angular/core';
import { VerService} from './../../../services/ver.service';
import { Router } from '@angular/router'; 
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.scss']
})
export class TrazabilidadComponent implements OnInit {
//-------- Variables -------
  fecha: string = '';
  ListarUsuarios: any[] = [];
  ListaTrazado: any[] = [];
  //rut: string[] = []
  //fechaT: string[] = []
  //horaE: string[] = []
  //horaS: string[] = []
  //nombre: string[] = []
  //apellido: string[] = []
  //datoF: datosT[] = []

  constructor(private verService: VerService, private router: Router) { 
    this.buildForm();
  }

  formulario: FormGroup=new FormGroup({
    rut: new FormControl('', [Validators.maxLength(10),Validators.minLength(9),Validators.required])
  });

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
    var fechaA = new Date();
    this.fecha = fechaA.getDate() + '-' + (fechaA.getMonth()+1) + '-' + fechaA.getFullYear();
    this.trazabilidadUsuarios();
    /*
    this.router.navigate([/trazabilidad/])
    var fechaA = new Date();
    this.fecha = fechaA.getDate() + '-' + (fechaA.getMonth()+1) + '-' + fechaA.getFullYear();

    this.aforoUsuarios();
    
    setTimeout(() => this.mostrar(), 500);
    setTimeout(() => this.ListaAforo = <any>this.datoF, 500);
    */
  }
//------ Funcion que use los datos en un solo array -------

trazabilidadUsuarios(){
  this.verService.trazabilidad(this.fecha).subscribe(
    res=>{
      this.ListarUsuarios=<any>res;
    }, err => console.log(err));
}

private buildForm() {
  this.formulario = new FormGroup({
    rut: new FormControl('', [Validators.maxLength(10),Validators.minLength(9),Validators.required])
  });
}

/*Funcion que hace la trzabilidad*/
traza(event:Event){
  event.preventDefault();
  var RUT=this.formulario.value.rut;
  const lista = this.ListarUsuarios;
  console.log("Entre con: ",RUT );
  this.ListaTrazado.push("holi")
  var k=0;
  for (var i in lista){
    if (RUT=="00000000-0"){
      this.ListaTrazado=lista
      break;
    }
    if (lista[i].rut == RUT){
      this.ListaTrazado.push(lista[i])
      //Cuando aparece el usuario recorro la lista buscando a los del mismo dia
      //Que ademas estuvieron durante las mismas horas
      for (var j in lista){
        if((RUT != lista[j].rut) && (lista[i].fecha == lista[j].fecha)){
          //Ambos usuarios estuvieron el mismo dia, ahora vere si estuvieron la misma hora
          if((lista[j].horaE < lista[i].horaE) && (lista[i].horaE < lista[j].horaS)){
            console.log(lista[i].fecha,": ",lista[j].nombre," llego antes y se fue despues que llego ",lista[i].nombre)
            this.ListaTrazado.push(lista[j])
          }else if ((lista[i].horaE < lista[j].horaE) && (lista[j].horaE < lista[i].horaS)){
            console.log(lista[i].fecha,": ",lista[j].nombre," llego despues que ",lista[i].nombre," pero antes que se fuera")
            this.ListaTrazado.push(lista[j])
          }
        }
      }
    }
  }
  console.log(this.ListaTrazado)
}

/*
  mostrar(){
    for(var i=0; i<this.nombre.length+1; i++){
      this.datoF[i].nombre = this.nombre[i]
      this.datoF[i].apellido = this.apellido[i]
    }
  }
  
  aforoUsuarios(){
    this.verService.trazabilidad(this.fecha).subscribe(
      res=>{
        this.ListarUsuarios=<any>res;
        
        for(var i=0; i < this.ListarUsuarios.length; i++){
          this.datoF[i]={nombre:'',apellido: '',rut: '',horaE: '', horaS:'',fecha:''}
          this.rut[i] = this.ListarUsuarios[i].rut.toString();
          this.horaE[i] = this.ListarUsuarios[i].horaE.toString();
          this.horaS[i] = this.ListarUsuarios[i].horaS.toString();
          this.fechaT[i] = this.ListarUsuarios[i].fecha.toString();
          this.datoF[i].rut = this.rut[i]
          this.datoF[i].horaE = this.horaE[i]
          this.datoF[i].horaS = this.horaS[i]
          this.datoF[i].fecha = this.fechaT[i]
          this.funcionDatos(i)
          }
    }, err => console.log(err)
    );

  }


  funcionDatos(i: any) {
    this.verService.getUnUsuario(this.rut[i]).subscribe(res=>{
      let check = <any>res
      console.log(check);
      this.apellido[i] = <any>check[0].apellido
      this.nombre[i] = <any>check[0].nombre;
    }
    ,
    err => console.log(err));
  }
  */
  

  

}
