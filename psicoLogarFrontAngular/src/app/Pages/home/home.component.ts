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

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'senha': ['', Validators.required]
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

  submit() {
    const credenciais = this.form.value;
    console.log(credenciais);
    this.authService.login(credenciais).subscribe(
      data => this.router.navigateByUrl('/listaPacientes'),
      erro => { alert("Erro ao logar!") }
    );
  }
}
