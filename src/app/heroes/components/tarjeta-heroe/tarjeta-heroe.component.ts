import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/Heroes.interfaces';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent implements OnInit {

  @Input() heroe!:Heroes;

  constructor() { }

  ngOnInit(): void {
  }

}
