import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { DiarioComponent } from './Pages/diario/diario.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListaPacientesComponent } from './Pages/lista-pacientes/lista-pacientes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    DiarioComponent,
    HeaderComponent,
    ListaPacientesComponent,
    PerfilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
