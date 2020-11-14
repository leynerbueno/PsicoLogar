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
  usuario;
  credenciais;

  constructor(private usuarioService: UsuarioService, private authService: AuthService, private pacienteService: PacienteService, private psicologoService: PsicologoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      genero: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      endereco: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      crp: ['', Validators.required]
    });
  }

  //Código para esconder/mostrar campo CRP
  openCRP() {
    const btnRadio = document.getElementById('psicologo')
    if (btnRadio) {
      document.getElementById('campoCRP').className = 'inputField';
    }
  }
  closeCRP() {
    const btnRadio = document.getElementById('paciente')
    if (btnRadio) {
      document.getElementById('campoCRP').className = 'hidden';
    }
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
    this.usuario = this.form.value;
    this.usuario.foto = this.imageBase64;
    this.usuarioService.create(this.usuario).subscribe(
      data => this.router.navigateByUrl(''),
      erro => { alert("Erro ao criar Usuario!") }
    );
    console.log(this.usuario);
    const credenciais = {
      email: this.usuario.email,
      senha: this.usuario.senha
    }
    console.log(credenciais);
    this.authService.login(this.credenciais).subscribe(
      data => {
        if (this.usuario.tipoUsuario === 'Psicologo') {
          this.psicologoService.create(this.usuario).subscribe(
            data => this.router.navigateByUrl('/listaPacientes'),
            erro => { alert("Erro ao cadastrar o Psicologo!") }
          );
        } else {
          this.pacienteService.create(this.usuario).subscribe(
            data => this.router.navigateByUrl('psicologo'),
            erro => { alert("Erro ao cadastrar o Paciente!") }
          );
        }
      },
      erro => alert("Erro ao logar!")
    );
  }
}
