import { AuthService } from './../../Core/service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './pagHome.css', 'modal.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  currentUser;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  abrirModalLogin() {
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

  goToPagCadastro() {
    this.router.navigate(['/cadastro'])
  }


  loga() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;

        if (this.currentUser.id == null) {
          return
        }else{
          this.currentUser.crp ? 
          this.router.navigateByUrl('/listaPacientes'):
          this.router.navigateByUrl('/diarios/' + this.currentUser.id);
        }
      }
    );
  }

  submit() {
    const credenciais = this.form.value;
    this.authService.login(credenciais).subscribe(
      data => {
        this.loga();
      },
      erro => { alert("Erro ao logar!") }
    );
  }
}
// 