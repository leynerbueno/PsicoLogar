import { AuthService } from './../../Core/service/auth.service';
import { PsicologoService } from './../../Core/service/psicologo.service';
import { PacienteService } from './../../Core/service/paciente.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./CSS/modal.css', './CSS/styles.css', './CSS/itemLista.css']
})
export class ListaPacientesComponent implements OnInit {

  constructor(private authService: AuthService,
    private pacienteService: PacienteService,
    private psicologoService: PsicologoService) { }

  ngOnInit() {
    this.listarPacientes(this.mockListaPacientes, null);
  }

  mockPacientesParaAdicionar = [
    {
      nome: "Olivia G. Bastos",
      matricula: 666666,
      ultimaEmocao: -1,
      foto: "../../assets/olivia.png",
      diaConsulta: "sexta-feira"
    },
    {
      nome: "Jéssica T. Alves",
      matricula: 777777,
      ultimaEmocao: 0,
      foto: "../../assets/jessica.png",
      diaConsulta: "terça-feira"
    }
  ]

  mockListaPacientes = [
    {
      nome: "Amanda C. Dias",
      matricula: 111111,
      ultimaEmocao: -1,
      foto: "../../assets/amanda.jfif",
      diaConsulta: "terça-feira"
    },
    {
      nome: "Joana C. Silva",
      matricula: 222222,
      ultimaEmocao: -1,
      foto: "../../assets/joana.png",
      diaConsulta: "segunda-feira"
    },
    {
      nome: "Cibele J. Gonçalves",
      matricula: 333333,
      ultimaEmocao: 0,
      foto: "../../assets/cibele.png",
      diaConsulta: "quinta-feira"
    },
    {
      nome: "Mateus A. Santos",
      matricula: 444444,
      ultimaEmocao: 1,
      foto: "../../assets/mateus.png",
      diaConsulta: "quarta-feira"
    },
    {
      nome: "Fábio H. Fonseca",
      matricula: 555555,
      ultimaEmocao: 1,
      foto: "../../assets/fabio.png",
      diaConsulta: "sábado"
    }
  ];

  listarPacientes(ListaPacientes, diaMarcadoPeloPsicologo) {
    let listaPacientes = document.getElementById("lista_pacientes");

    ListaPacientes.forEach(paciente => {

      let ultimaEmocao = paciente.ultimaEmocao;
      let nome = paciente.nome;
      let matricula = paciente.matricula;
      let foto = paciente.foto;
      let diaConsulta = diaMarcadoPeloPsicologo || paciente.diaConsulta;

      let itemListaString = this.itemListaConstructor(matricula, ultimaEmocao, nome, foto, diaConsulta);

      let itemLista = document.createElement('div');
      itemLista.className = 'item_lista_container';
      itemLista.innerHTML = itemListaString;
      itemLista.addEventListener('click', this.exibeDadosPaciente.bind(this));

      listaPacientes.appendChild(itemLista);
    })
  }

  exibeDadosPaciente(elemento) {
    var matricula = elemento.srcElement.id;
    alert("fazer requisição para o paciente " + matricula);
  }

  itemListaConstructor(matricula, ultimaEmocao, nome, foto, diaConsulta) {
    var itemLista =
      `<div class="item_lista_overlay" id="${matricula}"></div>
        <div class="indicador_emocao ${this.definirEmocao(ultimaEmocao)}"></div> \
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

  listarDiasDaSemana(diaConsulta) {

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
            ${diasDaSemana[d][0] === diaConsulta ? "indicador_dia_consulta" : "indicador_dia_comum"}"
          ></div>
          ${diasDaSemana[d][1]}
        </div>`

      semana += diaSemana;
    }

    return semana;
  }

  cadastrarNovoPaciente() {
    var matriculaAdicionada = (<HTMLInputElement>document.getElementById("matricula_cadastro")).value;
    var diaConsulta = (<HTMLInputElement>document.getElementById("dia_consulta_cadastro")).value;
    var feedbackCadastro = document.getElementById("feedback_cadastro");

    //var paciente = this.mockPacientesParaAdicionar.filter(p => p.matricula === parseInt(matriculaAdicionada));

    var paciente;
    this.pacienteService.getOne(matriculaAdicionada).subscribe(
      data => {
        paciente = data;
        console.log(diaConsulta);
        paciente.consulta = diaConsulta;
        console.log(paciente);
        this.pacienteService.update(matriculaAdicionada, paciente).subscribe(
          data => {
            feedbackCadastro.innerHTML = "Paciente Cadastrado com Sucesso!"
          },
          erro => feedbackCadastro.innerHTML = "Paciente Não Encontrado..."
        );
      },
      erro => feedbackCadastro.innerHTML = "Paciente Não Encontrado..."
    );

    this.listarPacientes(paciente, diaConsulta);
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

    var matriculaAdicionada = (<HTMLInputElement>document.getElementById("matricula_cadastro")).value = "";
    var diaConsulta = (<HTMLInputElement>document.getElementById("dia_consulta_cadastro")).value = "segunda-feira";
    var feedbackCadastro = (<HTMLInputElement>document.getElementById("feedback_cadastro")).innerHTML = "";

  }


}