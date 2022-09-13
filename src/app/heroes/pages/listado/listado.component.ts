import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/Heroes.interfaces';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:Heroes[] = [];

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
        .subscribe((heroe) => {
          console.log(heroe);
          this.heroes = heroe;
        })
  }

}
