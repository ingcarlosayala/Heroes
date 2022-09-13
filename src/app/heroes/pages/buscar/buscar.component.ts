import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/Heroes.interfaces';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  termino:string = '';
  heroeSeleccionado!:Heroes | undefined;
  heroes:Heroes[] = [];

  constructor(private heroeService:HeroeService) { }

  ngOnInit(): void {
    
  }

  buscando(){

    this.heroeService.getSugerencia(this.termino.trim().toLocaleLowerCase())
        .subscribe(heroe => this.heroes = heroe);

  }

  seleccion(event:MatAutocompleteSelectedEvent){

    if (!event.option.value) {
      console.log("No hay valor");
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe:Heroes = event.option.value;
    this.termino = heroe.superhero;
    console.log(heroe);

    this.heroeService.getHeroe(heroe.id)
        .subscribe(heroe => {
          this.heroeSeleccionado = heroe;
        })
  }


}
