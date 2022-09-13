import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroes } from '../../interfaces/Heroes.interfaces';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!:Heroes;

  constructor(private activeRouter:ActivatedRoute,
              private heroeService:HeroeService,
              private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params
        .pipe(
          switchMap(({id}) => this.heroeService.getHeroe(id))
        )
        .subscribe(heroe => {
          console.log(heroe);
          this.heroe = heroe;
        })
  }

  regresar(){
    this.router.navigate(['/heroe/listado'])
  }

}
