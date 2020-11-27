import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser;
  usuario;
  isAuthenticated: boolean;
  openMenu = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.usuario = this.currentUser.crp ? 'Psicologo' : 'Paciente';
      }
    );
  }
  
  handleMenu = () => {
    this.openMenu = !this.openMenu;
  }
  
  irParaDiarios(){
   this.router.navigate(['/diarios/' + this.currentUser.id ]);
  }
  
  logout = () => {
    this.authService.purgeAuth();
    this.router.navigate(['/']);
  }
}
