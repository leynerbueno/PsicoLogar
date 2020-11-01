import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagCadastroComponent } from './pag-cadastro/pag-cadastro.component';
import { PagPsicologoComponent } from './pag-psicologo/pag-psicologo.component';
import { HeaderComponent } from './header/header.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    PagCadastroComponent,
    PagPsicologoComponent,
    HeaderComponent,
      ListaPacientesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
