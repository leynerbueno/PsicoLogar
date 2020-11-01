import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagCadastroComponent } from './pag-cadastro/pag-cadastro.component';
import { PagPsicologoComponent } from './pag-psicologo/pag-psicologo.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro/usuario', component: PagCadastroComponent},
  {path: 'psicologo', component: PagPsicologoComponent},
  {path: 'listaPacientes', component: ListaPacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
