import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/Heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroes): string {
    return `assets/assets/heroes/${heroe.id}.jpg`
  }

}
