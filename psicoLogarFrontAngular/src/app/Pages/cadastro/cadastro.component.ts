import { UsuarioService } from './../../Core/service/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  imageBase64;

  constructor(private service: UsuarioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      genero: ['', Validators.required],
      telefone: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      endereco: ['', Validators.required],
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
    const usuario = this.form.value;
    usuario.foto = this.imageBase64;
    this.service.create(usuario).subscribe(
      data => this.router.navigate([""]),
      error => console.log(error)
    );
  }

}
