import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends BaseService {
  baseUrl = this.baseUrl + "/usuarios";
}
