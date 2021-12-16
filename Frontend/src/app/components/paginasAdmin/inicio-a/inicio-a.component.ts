
import { Component, OnInit } from '@angular/core';
import { Usuario,NULL } from './../../../services/registro.service';
import { VerService, datosT} from './../../../services/ver.service';

@Component({
  selector: 'app-inicio-a',
  templateUrl: './inicio-a.component.html',
  styleUrls: ['./inicio-a.component.scss']
})
export class InicioAComponent implements OnInit {
  persona:Usuario=NULL
  id:string="";

  constructor(private verService: VerService) { }

  ngOnInit(): void {
    //----- Consigo los datos de la sesion iniciada -----
    let sesion = localStorage.getItem("sitiomovil");

  //--- Confirmo que hay una sesion iniciada para obtener el id del usuario ---
    if(sesion){
      console.log(sesion);
      var id=sesion.split(',')[1];
      this.id=id.split('"')[3];
      console.log(this.id)

  //--- Con el id consigo los datos del usuario ---
      this.verService.getUnUsuario(this.id).subscribe(res=>{
        console.log(res);
        console.log(res);
        
        
        
        //console.log(dato[0].toString)
        //this.persona.nombre=dato.nombre;
        //console.log("Nombre: ",this.persona.nombre);
      }
      ,
      err => console.log(err));

    }else{
      window.location.href="/inicioSesion"
    }
  }

}
