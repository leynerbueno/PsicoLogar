import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/service/auth.service';
import { PsicologoService } from 'src/app/Core/service/psicologo.service';
import { PacienteService } from 'src/app/Core/service/paciente.service';

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
  constructor(
    private psicologoService: PsicologoService,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.getOne(userData);
      }
    );
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      endereco: ['', Validators.required],
      crp: ['', Validators.required],
      dataDaConsulta: ['', Validators.required]
    });
  }
//metodo para saber se pscologo ou paciente esta logando 
  getOne(currentUser) {
    if (currentUser.id == null) {
      return;
    }
    if (currentUser.crp != null) {
      this.psicologoService.getOne(currentUser.id).subscribe(
        dadosPsicologo => {
         document.getElementById('campoCRP').className = 'inputField';
          this.imageBase64 = dadosPsicologo.foto;
          this.form.patchValue(dadosPsicologo);
        }, erro => console.log(erro)
      );
    } else {
      this.pacienteService.getOne(currentUser.id).subscribe(
        dadosPaciente => {
         document.getElementById('campoCRP').className = 'hidden';
          this.imageBase64 = dadosPaciente.foto;
          this.form.patchValue(dadosPaciente);
        });
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
    const dados = this.form.value;
    dados.foto = this.imageBase64;
    console.log(dados);

    if (dados.crp != "") {
      this.psicologoService.update(this.currentUser.id, dados).subscribe(
        data => {
          alert("Deu certo!")
          this.router.navigate(['listaPacientes'])
        },
        erro => {
          alert("Deu errado!")
          console.log(erro)
        }
      );
    } 
    else {
      this.pacienteService.update(this.currentUser.id, dados).subscribe(
        data => {
          this.router.navigate(['diario'])
      },
        erro => console.log(erro)
      );
    }
  }
}
