import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagCadastroComponent } from './pag-cadastro/pag-cadastro.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro/usuario', component: PagCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
