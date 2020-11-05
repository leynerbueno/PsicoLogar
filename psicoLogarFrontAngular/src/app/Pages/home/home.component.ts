import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./pagHome.css','modal.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirModalLogin(){
    const modal = document.getElementById("modal_login");
    const overlay = document.getElementById("modal_login_overlay");
    modal.style.display = "flex";
    overlay.style.display = "block";
  }

  fecharModalLogin() {
    const modal = document.getElementById("modal_login");
    const overlay = document.getElementById("modal_login_overlay");
      modal.style.display = "none";
      overlay.style.display = "none";
  }

  goToPagCadastro(){
    this.router.navigate(['/cadastro'])
  }
}
