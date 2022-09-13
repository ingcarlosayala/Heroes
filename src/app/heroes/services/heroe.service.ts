import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../interfaces/Heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  api:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(this.api)
  }

  getHeroe(id:string){
    return this.http.get<Heroes>(`${this.api}/${id}`)
  }

  getSugerencia(termino: string){
    return this.http.get<Heroes[]>(`${this.api}?q=${termino}&_limit=5`)
  }
}
