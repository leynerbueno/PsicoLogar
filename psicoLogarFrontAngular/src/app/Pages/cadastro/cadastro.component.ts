import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/service/auth.service';
import { PacienteService } from 'src/app/Core/service/paciente.service';
import { PsicologoService } from './../../Core/service/psicologo.service';
import { UsuarioService } from './../../Core/service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  formCredencials: FormGroup;
  imageBase64;



  constructor(private usuarioService: UsuarioService, private authService: AuthService, private pacienteService: PacienteService, private psicologoService: PsicologoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      genero: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      endereco: ['', Validators.required],
      crp:['',Validators.required]
    });
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
    usuario.tipoUsuario = "Psicologo";
    usuario.foto = this.imageBase64;

    this.usuarioService.create(usuario).subscribe(
      data => this.router.navigateByUrl(''),
      erro => {
        alert("Erro ao criar Usuario!")
      }
    );
  }
}
