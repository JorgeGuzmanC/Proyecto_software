import { Component, OnInit } from '@angular/core';
import { VerService } from './../../../services/ver.service';
import { AforoService } from './../../../services/aforo.service';



@Component({
  selector: 'app-ver-aforo',
  templateUrl: './ver-aforo.component.html',
  styleUrls: ['./ver-aforo.component.scss']
})
export class VerAforoComponent implements OnInit {
  maxAforo:number = 0;
  fecha: string = '';
  ListaAforo: any[] = [];
  cupo:string = '';
  num: number = 0;
  ListaReserva: any[]=[]; 

  constructor(private verService: VerService, private aforoService: AforoService) { }

  ngOnInit(): void {
    let datos = localStorage.getItem('sitiomovil');
    let datos2 = localStorage.getItem('modoAdministrador');
    
    if(datos == undefined && datos2 == undefined){
      window.location.href="";
      return;
    }
    var fechaA = new Date();
    this.fecha = fechaA.getDate() + '-' + (fechaA.getMonth()+1) + '-' + fechaA.getFullYear();
    this.aforoUsuarios();
    this.obtenerMax();
    this.capacidadActual();
    this.losReservados();
    setTimeout(() => this.num = this.maxAforo-this.ListaAforo.length, 2000);
    setTimeout(() => this.cupo = this.num.toString(), 2000);
  }

  aforoUsuarios(){
    this.verService.verAforo(this.fecha).subscribe(
      res=>{
        this.ListaAforo=<any>res;
      }, err => console.log(err));
  }

  
  obtenerMax(){
    this.aforoService.maxAforo().subscribe(
      res=>{
      let aux = <any>res;
      this.maxAforo = aux[0].cant;
    })
  }

  
  capacidadActual(){
    this.verService.verAforo(this.fecha).subscribe(
      res=>{
        this.ListaAforo=<any>res;
      }, err => console.log(err));
  }
  
  losReservados(){
    
    this.verService.reservado().subscribe(
      res=>{
        console.log("holi",res)
        this.ListaReserva=<any>res;
      }, err => console.log(err));

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

    console.log(this.ListaReserva)

    for (var i in this.ListaReserva){
      console.log(this.ListaReserva[i])
    }
  }
  
}
