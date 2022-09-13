import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'heroe',
    loadChildren: () => import ('./heroes/heroes.module').then(x => x.HeroesModule)
  },
  {
    path: '404',component: ErrorPageComponent
  },
  {
    path: '**',redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
