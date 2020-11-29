import { HttpClient } from '@angular/common/http';
import { tokenReference } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  protected baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient, private jwtService: JwtService) { }

  public populate() {
    // Se o JWT for detectado, tente obter e armazenar as informações do usuário
    if (this.jwtService.getToken()) {
      this.httpClient.get(this.baseUrl + '/login')
        .subscribe(
          data => this.setAuth(data),
          err => this.purgeAuth()
        );
    } else {
      // Remova qualquer possível remanescente de estados de autenticação anteriores
      this.purgeAuth();
    }
  }

  private setAuth(usuario) {

    // Defina os dados atuais do usuário em observáveis
    this.currentUserSubject.next(usuario);
    // Defina isAuthenticated como true
    this.isAuthenticatedSubject.next(true);
  }

  public purgeAuth() {
    // Remover JWT do localstorage
    this.jwtService.destroyToken();
    // Defina o usuário atual como um objeto vazio
    this.currentUserSubject.next({});
    // Defina o status de autenticação como falso
    this.isAuthenticatedSubject.next(false);
  }

  public login(credentials): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/login', credentials)
      .pipe(map(
        // O pipe intercepta o resultado e permite a visualização
        //Concatena operadores e devolve um único retorno
        token => {
          // Salvar JWT enviado do servidor no localstorage
          this.jwtService.saveToken(token['token']);
          this.populate();
          return token;
        }
      ));
  }

  public getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  public register(baseUrlUsuario, usuario): Observable<any> {
    return this.httpClient.post(this.baseUrl + baseUrlUsuario + '/registro', usuario);
  }

}
