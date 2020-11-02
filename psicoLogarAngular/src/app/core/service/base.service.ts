import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected baseUrl = 'http://localhost:8080';

  constructor(protected api: HttpClient) {
  }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getAll(): Observable<any> {
    return this.api.get(this.baseUrl);
  }
}
