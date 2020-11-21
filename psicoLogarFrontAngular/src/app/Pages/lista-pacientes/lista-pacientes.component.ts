import { AuthService } from './../../Core/service/auth.service';
import { PsicologoService } from './../../Core/service/psicologo.service';
import { PacienteService } from './../../Core/service/paciente.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./CSS/modal.css', './CSS/styles.css', './CSS/itemLista.css']
})
export class ListaPacientesComponent implements OnInit {
  currentUser;
  isAuthenticated: boolean;

  form: FormGroup;
  formCredencials: FormGroup;

  constructor(
    private authService: AuthService,
    private pacienteService: PacienteService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.listarPacientes(this.currentUser.paciente, null, userData);
      }
    );
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      endereco: ['', Validators.required],
      dataDaConsulta: ['', Validators.required]
    });
    
  }


  listarPacientes(pacientes, diaMarcadoPeloPsicologo, currentUser) {
    if (currentUser.id == null) {
      return;
    }
    console.log(this.currentUser);
    let listaPacientes = document.getElementById("lista_pacientes");

    pacientes.forEach(paciente => {
      let nome = paciente.nome;
      let id = paciente.id;
      let foto;
      if(paciente.foto ==null) {
        foto =  null; 
      } else {
        foto = paciente.foto;
      }

      let diaDaConsulta = diaMarcadoPeloPsicologo || paciente.diaDaConsulta;

      let itemListaString = this.itemListaConstructor(id, nome, foto, diaDaConsulta);

      let itemLista = document.createElement('div');
      itemLista.className = 'item_lista_container';
      itemLista.innerHTML = itemListaString;
      itemLista.addEventListener('click', this.exibeDadosPaciente.bind(this));

      listaPacientes.appendChild(itemLista);
    })
  }

  exibeDadosPaciente(elemento) {
    var id = elemento.srcElement.id;
    this.router.navigateByUrl('/diario')
  }

  itemListaConstructor(id, nome, foto, diaConsulta) {
    var itemLista =
      `<div class="item_lista_overlay" id="${id}"></div>
        <img src="${foto}" class="foto_paciente_lista"> \
        <p class="nome_paciente_lista">${nome}</p> \
        <div class="agenda_semanal_paciente">
            ${this.listarDiasDaSemana(diaConsulta)}
        </div>`

    return itemLista;
  };

  definirEmocao(ultimaEmocao) {
    switch (ultimaEmocao) {
      case -1:
        return 'emocao_ruim';
      case 0:
        return 'emocao_neutra';
      case 1:
        return 'emocao_boa';
      default:
        return null;
    };
  };

  listarDiasDaSemana(diaDaConsulta) {

    const diasDaSemana = [
      ["segunda-feira", "Seg"],
      ["terça-feira", "Ter"],
      ["quarta-feira", "Qua"],
      ["quinta-feira", "Qui"],
      ["sexta-feira", "Sex"],
      ["sábado", "Sáb"]
    ]

    let semana = "";

    for (var d = 0; d <= 5; d++) {
      let diaSemana =
        `<div class="dia_semana_consulta">
          <div 
          class="dia_semana 
            ${diasDaSemana[d][0] === diaDaConsulta ? "indicador_dia_consulta" : "indicador_dia_comum"}"
          ></div>
          ${diasDaSemana[d][1]}
        </div>`

      semana += diaSemana;
    }

    return semana;
  }

  cadastrarNovoPaciente() {
    var feedbackCadastro = document.getElementById("feedback_cadastro");

    const paciente = this.form.value;
    paciente.psicologoId = this.currentUser.id;
    paciente.tipoUsuario = false;
    this.pacienteService.create(paciente).subscribe(
      data => {
        feedbackCadastro.innerHTML = "Paciente Cadastrado com Sucesso!";
        this.fecharModalCadastro();
      },
      erro => {
        feedbackCadastro.innerHTML = "Erro ao Cadastrar o Paciente...";
      }
    );
  }

  abrirModalCadastro() {
    var modalCadastro = document.getElementById("modal_cadastro");
    var overlayModal = document.getElementById("modal_cadastro_overlay");

    modalCadastro.style.display = "flex";
    overlayModal.style.display = "block";
  }

  fecharModalCadastro() {
    var modalCadastro = document.getElementById("modal_cadastro");
    var overlayModal = document.getElementById("modal_cadastro_overlay");

    modalCadastro.style.display = "none";
    overlayModal.style.display = "none";

    this.limparModalCadastro();
  }

  limparModalCadastro() {
    (<HTMLInputElement>document.getElementById("matricula_cadastro")).value = "";
    (<HTMLInputElement>document.getElementById("dia_consulta_cadastro")).value = "segunda-feira";
    (<HTMLInputElement>document.getElementById("feedback_cadastro")).innerHTML = "";
  }

}