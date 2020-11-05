import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { PsicologoComponent } from './Pages/psicologo/psicologo.component';
import { ListaPacientesComponent } from './Pages/lista-pacientes/lista-pacientes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro/usuario', component: CadastroComponent},
  {path: 'psicologo', component: PsicologoComponent},
  {path: 'listaPacientes', component: ListaPacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
