import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { PsicologoComponent } from './Pages/psicologo/psicologo.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListaPacientesComponent } from './Pages/lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    CadastroComponent,
    PsicologoComponent,
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
