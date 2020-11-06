import { Router } from '@angular/router';
import { CadastroService } from '../../Core/service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  constructor(private service: CadastroService, private router: Router, private formBuilder: FormBuilder) { }

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
  url = "../../../../assets/user.png";
  getImage(evente) {
    if (evente.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(evente.target.files[0]);
      reader.onload = (evente: any) => {
        this.url = evente.target.result;
      }
    }
  }

  submit() {
    const usuario = this.form.value;
    console.log(usuario);
    this.service.create(usuario).subscribe(
      data => this.router.navigate([""]),
      error => console.log(error)
    );
  }
}
