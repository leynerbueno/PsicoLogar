import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagCadastroComponent } from './pag-cadastro/pag-cadastro.component';
import {PagPsicologoComponent} from './pag-psicologo/pag-psicologo.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro/usuario', component: PagCadastroComponent},
  {path: 'psicologo', component: PagPsicologoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
