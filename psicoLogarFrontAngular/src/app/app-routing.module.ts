import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { PsicologoComponent } from './Pages/psicologo/psicologo.component';
import { ListaPacientesComponent } from './Pages/lista-pacientes/lista-pacientes.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path: 'psicologo', component: PsicologoComponent},
  {path: 'listaPacientes', component: ListaPacientesComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
