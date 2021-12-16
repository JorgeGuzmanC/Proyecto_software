import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validar():Boolean{
    
    let datos = localStorage.getItem('sitiomovil');
    
    if(datos != undefined){
      return false;
    } 
    let datos2 = localStorage.getItem('modoAdministrador');
    if(datos == undefined && datos2 == undefined){
      return false;
    }
    
    return true;
  }

}
