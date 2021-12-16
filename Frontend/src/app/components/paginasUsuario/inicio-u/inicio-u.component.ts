import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-u',
  templateUrl: './inicio-u.component.html',
  styleUrls: ['./inicio-u.component.scss']
})
export class InicioUComponent implements OnInit {
  contador:number=0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
