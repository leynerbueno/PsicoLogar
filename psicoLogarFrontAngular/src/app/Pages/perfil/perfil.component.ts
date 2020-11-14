import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../Core/service/usuario.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/service/auth.service';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  currentUser;
  isAuthenticated: boolean;
  form: FormGroup;
  imageBase64;
  usuario = {};
  constructor(private service: UsuarioService,private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      genero: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      endereco: ['', Validators.required],
      crp: ['', Validators.required]
    });

    this.service.getOne(this.currentUser.id).subscribe(
      dadosUsuario => {
        this.imageBase64 = dadosUsuario.foto;
        this.form.patchValue(dadosUsuario);
      },
      erro => console.log(erro)
    );
  }

  //codigo para mudar a img
  getImage(files: FileList) {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.imageBase64 = reader.result;
    };

    reader.onerror = function (error) {
      console.log('Erro: ', error);
    };
  }

  submit() {
    const usuario = this.form.value;
    usuario.foto = this.imageBase64;
    this.service.update(this.currentUser.id, usuario).subscribe(
      data => this.router.navigate(['perfil']),
      erro => console.log(erro)
    );
  }
}
