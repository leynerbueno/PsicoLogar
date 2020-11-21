import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/service/auth.service';

@Component({
  selector: 'app-header-Logado',
  templateUrl: './header-Logado.component.html',
  styleUrls: ['./header-Logado.component.css']
})
export class HeaderLogadoComponent implements OnInit {
  currentUser;
  isAuthenticated: boolean;
  openMenu = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  handleMenu = () => {
    this.openMenu = !this.openMenu;
  }
  
  logout() {
    this.authService.purgeAuth();
    this.router.navigate(['/']);
  }
}
