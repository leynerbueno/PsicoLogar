import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PsicologoService } from './../../Core/service/psicologo.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/Core/service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  formCredencials: FormGroup;
  imageBase64;

  constructor(
    private psicologoService: PsicologoService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      endereco: ['', Validators.required],
      crp: ['', Validators.required]
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
    Swal.showLoading();
    const psicologo = this.form.value;
    psicologo.foto = this.imageBase64;
    
    this.authService.register('/psicologos',psicologo)
      .subscribe(
        data => {
          Swal.fire({
            icon:'success',
            title: 'O cadastro foi um sucesso!',
            text: 'Verifique sua caixa de email e valide sua conta!',
            confirmButtonText: `OK`,
          }).then((result) => {
            this.router.navigateByUrl('/');
          });
        },
        erro => {
          console.log(erro);
          Swal.fire({
            icon: 'error',
            title: erro.error.mensagem,
          });
        }
      );
    // this.psicologoService.create(psicologo).subscribe(
    //   data => {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'O cadastro foi um sucesso!'
    //     });
    //     this.router.navigateByUrl('/');
    //   },
    //   erro => {
    //     console.log(erro);
    //     Swal.fire({
    //       icon: 'error',
    //       title: erro.error.mensagem,
    //     });
    //   }
    // );
  }
}
