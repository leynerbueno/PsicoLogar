import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DiarioService extends BaseService {
  baseUrl = this.baseUrl + "/diarios";
}
