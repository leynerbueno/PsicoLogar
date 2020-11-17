import { PsicologoService } from './psicologo.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { PacienteService } from './paciente.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {
  baseUrl = this.baseUrl + "/usuarios";
}
