import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected baseUrl = 'http://localhost:8080';

  constructor(protected httpClient: HttpClient) {
  }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  create(Entity): Observable<any> {
    return this.httpClient.post(this.baseUrl, Entity, this.httpOptions);
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getOne(id): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + id);
  }
  
  update(id, Entity): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/" + id, Entity);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }
}