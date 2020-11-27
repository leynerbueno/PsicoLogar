import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/service/auth.service';
import { DiarioService } from 'src/app/Core/service/diarioService.service';
import { PacienteService } from 'src/app/Core/service/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./CSS/diario.historico.css', './CSS/diario.emocoes.css', './CSS/diario.component.css']
})
export class DiarioComponent implements OnInit {
  //INICIO - estados da pagina
  id;
  currentUser;
  isAuthenticated: boolean;
  diarios;
  usuario = '';
  emocaoMedia;
  idDiario;
  emocao1 = 0;
  emocao2 = 0;
  emocao3 = 0;
  emocao4 = 0;
  emocao5 = 0;
  camposTexto = {
    detalhes: '',
    comentarioPsicologo: '',
    diarioPaciente: '',
  }
  dateNow = new Date();
  diaHoje = this.dateNow.getDate();
  mesHoje = this.dateNow.getMonth() + 1;
  anoHoje = this.dateNow.getFullYear();
  hoje = `${this.anoHoje}-${this.mesHoje}-${this.diaHoje}`
  exibindoHoje = true;
  idDiaExibido = this.hoje;
  idDiarioExibido;
  //FIM - estados da pagina

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private diarioService: DiarioService,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  loadDiario() {
    this.id = this.route.snapshot.params['id'];

    this.pacienteService.getOne(this.id).subscribe(data => {
      this.diarios = data.diario;
      this.renderHistoricoDiarios();
    });
  }


  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.usuario = this.currentUser.crp ? 'Psicologo' : 'Paciente';
      }
    );

    this.loadDiario()
  }

  //INICIO - controle emocoes
  obtemInputRange(emocao) {
    switch (emocao) {
      case 'emocao-input1':
        return 'emocao-input-range1';
      case 'emocao-input2':
        return 'emocao-input-range2';
      case 'emocao-input3':
        return 'emocao-input-range3';
      case 'emocao-input4':
        return 'emocao-input-range4';
      case 'emocao-input5':
        return 'emocao-input-range5';
    }
  }

  alteraEstadoEmocao(emocao, valor) {
    switch (emocao) {
      case 'emocao-input1':
        this.emocao1 = valor;
        break;
      case 'emocao-input2':
        this.emocao2 = valor;
        break;
      case 'emocao-input3':
        this.emocao3 = valor;
        break;
      case 'emocao-input4':
        this.emocao4 = valor;
        break;
      case 'emocao-input5':
        this.emocao5 = valor;
        break;
    }
  }

  alteraEstadoComentario(campo, comentario) {
    switch (campo) {
      case 'diarioPaciente':
        this.camposTexto[campo] = comentario;
        break;
      case 'comentarioPsicologo':
        this.camposTexto[campo] = comentario;
        break;
      case 'detalhes':
        this.camposTexto[campo] = comentario;
        break;
    }
  }

  alterarEmocao(e) {
    if (this.exibindoHoje && this.usuario === 'Paciente') {
      let emotionInput = e.path[0].id;
      let emotionInputRange = this.obtemInputRange(emotionInput);

      let emotionInputElement = document.getElementById(emotionInput)
      let emotionInputRangeElement = document.getElementById(emotionInputRange);

      let emotionInputvalue = String((<HTMLInputElement>(emotionInputElement)).value);

      emotionInputRangeElement.style.width = emotionInputvalue + '%';

      this.alteraEstadoEmocao(emotionInput, emotionInputvalue);
    }
    if (!this.exibindoHoje && this.usuario === 'Paciente') {
      Swal.fire({
        icon: 'error',
        title: 'Lamento, só é possível alterar o diário de hoje!'
      });
    }
  }
  //FIM - controle emocoes

  //INICIO - controle campos texto

  alterarTexto(e) {
    let textInputId = e.path[0].id;
    let textInputElement = document.getElementById(textInputId);

    let textInputvalue = String((<HTMLInputElement>(textInputElement)).value);

    this.alteraEstadoComentario('diarioPaciente', textInputvalue)
  }

  alertaTextoNaoEditavel() {
    if (!this.exibindoHoje && this.usuario === 'Paciente') {
      Swal.fire({
        icon: 'error',
        title: 'Lamento, só é possível alterar o diário de hoje!'
      });
    }
  }

  //INICIO - controle campos texto

  //INICIO - preenchimento automatico do diario conforme retorno do back
  obterValorEmocaoDiarioSelecionado(emocao, diario) {
    switch (emocao) {
      case 1:
        return diario.emocao1;
      case 2:
        return diario.emocao2;
      case 3:
        return diario.emocao3;
      case 4:
        return diario.emocao4;
      case 5:
        return diario.emocao5;
    }
  }

  obterValorEstadoEmocaoHoje(emocao) {
    switch (emocao) {
      case 1:
        return this.emocao1;
      case 2:
        return this.emocao2;
      case 3:
        return this.emocao3;
      case 4:
        return this.emocao4;
      case 5:
        return this.emocao5;
    }
  }

  obterMesAbreviado(numeroMes) {
    const meses = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return meses[parseInt(numeroMes, 10)];
  }

  definirValorEmocao(i, diarioSelecionado) {
    let emocaoDiario = diarioSelecionado ? this.obterValorEmocaoDiarioSelecionado(i, diarioSelecionado) : 0;
    let emocaoHojeEstadoAtual = this.obterValorEstadoEmocaoHoje(i);

    let emocaoDefinida = this.exibindoHoje && emocaoHojeEstadoAtual != 0 ? emocaoHojeEstadoAtual : emocaoDiario;

    return emocaoDefinida;
  }

  preencheEmocoes(diarioSelecionado) {
    let baseEmotionInputId = 'emocao-input';
    let baseEmotionInputRangeId = 'emocao-input-range';

    for (var i = 1; i <= 5; i++) {
      let emotionInputElement = document.getElementById(baseEmotionInputId + i)
      let emotionInputRangeElement = document.getElementById(baseEmotionInputRangeId + i);

      let emocao = this.definirValorEmocao(i, diarioSelecionado);

      (<HTMLInputElement>(emotionInputElement)).value = emocao;
      emotionInputRangeElement.style.width = emocao + '%';

      if (this.exibindoHoje) {
        this.alteraEstadoEmocao(baseEmotionInputId + i, emocao);
      }
    }
  }

  definirTexto(diarioSelecionado, campo) {
    let comentarioDiario = diarioSelecionado ? diarioSelecionado[campo] : '';
    let comentarioEstadoAtual = this.camposTexto[campo];

    let comentarioDefinida = this.exibindoHoje && comentarioEstadoAtual != '' ? comentarioEstadoAtual : comentarioDiario;

    return comentarioDefinida;
  }

  preencheCamposTexto(diarioSelecionado) {
    const comentarioPsicologoElement = document.getElementById('notas-texto');
    let comentarioPaciente = this.definirTexto(diarioSelecionado, 'diarioPaciente');
    (<HTMLInputElement>(comentarioPsicologoElement)).value = comentarioPaciente;

    if (this.exibindoHoje && this.usuario === 'Paciente') {
      this.alteraEstadoComentario('diarioPaciente', comentarioPaciente);
      comentarioPsicologoElement.removeAttribute('readonly');
    }

    if (!this.exibindoHoje) {
      comentarioPsicologoElement.setAttribute('readonly', 'readonly');
    }

    if (this.usuario === 'Psicologo') {
      const sobrePacienteElement = document.getElementById('sobre-paciente-texto');
      let sobrePaciente = this.definirTexto(diarioSelecionado, 'detalhes');
      (<HTMLInputElement>(sobrePacienteElement)).value = sobrePaciente;

      const sentimentosPacienteElement = document.getElementById('psicologo-comentarios-texto');
      let comentarioPsicologo = this.definirTexto(diarioSelecionado, 'comentarioPsicologo');
      (<HTMLInputElement>(sentimentosPacienteElement)).value = comentarioPsicologo;

      if (this.exibindoHoje) {
        this.alteraEstadoComentario('detalhes', sobrePaciente);
        this.alteraEstadoComentario('comentarioPsicologo', comentarioPsicologo);
      }
    }
  }

  preencheDiario(dataId) {
    const diarioSelecionado = this.diarios.filter((diario) => {
      return diario.dataDoDiario === dataId;
    })[0]

    this.idDiarioExibido = diarioSelecionado.id;
    this.preencheEmocoes(diarioSelecionado);
    this.preencheCamposTexto(diarioSelecionado);
  }
  //FIM - preenchimento automatico do diario conforme retorno do back

  //INICIO - altera dia historico

  alteraDiaHistorico(elemento) {
    let diarioId = elemento.path[1].id;

    let diarioSelecionado = document.getElementById(diarioId);
    diarioSelecionado.className = 'dia-selecionado-item';
    let diarioEmExibicao = document.getElementById(this.idDiaExibido);
    diarioEmExibicao.className = 'day-item';

    this.idDiaExibido = diarioId;
    this.exibindoHoje = diarioId == this.hoje;
    this.preencheDiario(diarioId)
  }

  //FIM - altera dia historico

  //INICIO - Gera historico de emocoes
  geraDayItemContainer(dayitem) {
    const dayItemContainer = document.createElement('div');
    dayItemContainer.className = 'day-item-container';
    dayItemContainer.innerHTML = dayitem;

    return dayItemContainer;
  }

  calculaEmocaoPredominante(diario) {
    if (this.usuario === 'Psicologo' && diario != null) {
      // let emocaoMedia = (diario.emocao1 + diario.emocao2 + diario.emocao3 + diario.emocao4 + diario.emocao5) / 5;
      this.emocaoMedia = (diario.emocao1 + diario.emocao2 + diario.emocao3 + diario.emocao4 + diario.emocao5);

      if (this.emocaoMedia <= 165) { return "emocao-ruim" };
      if (this.emocaoMedia >= 330) { return "emocao-boa" };

      return "emocao-neutra";
    }
  }

  geraDayItem(diario, divClickId) {
    return `<hr class="separator-hr">
      <button id="${diario.dataDoDiario}" class="day-item">
        <div id="${divClickId}" class="div-click"></div>
        <div class="${this.usuario === 'Psicologo' ? 'emocao-predominante' : ''} ${this.calculaEmocaoPredominante(diario)}"></div>
        <h3>${diario.dataDoDiario.slice(-2)}</h3>
        <p>${this.obterMesAbreviado(diario.dataDoDiario.substr(5, 2))}</p>
      </button>`
  }

  geraTodayItem(id, divClickId, diario) {
    return `<hr class="separator-hr">
      <button id="${id}" style="margin-right: 20px;" class="dia-selecionado-item">
        <div id="${divClickId}" class="div-click"></div>
        <div class="${this.usuario === 'Psicologo' ? 'emocao-predominante' : ''} ${this.calculaEmocaoPredominante(diario)}"></div>
        <h4>Hoje</h4>
      </button>`
  }

  renderHistoricoDiarios() {
    let historico = document.getElementById('historico-diarios');
    historico.innerHTML = '';

    let hojeRenderizado = false;
    let dayItemContainer;
    let divClickId = 0

    this.diarios.map((diario) => {
      divClickId++;
      if ((diario.dataDoDiario) == this.hoje) {
        let todayitem = this.geraTodayItem(this.hoje, divClickId, diario);
        dayItemContainer = this.geraDayItemContainer(todayitem);

        hojeRenderizado = true;
        this.preencheDiario(this.hoje);
      } else {
        let dayitem = this.geraDayItem(diario, divClickId);
        dayItemContainer = this.geraDayItemContainer(dayitem);
      }

      historico.appendChild(dayItemContainer);

      let divClick = document.getElementById(divClickId.toString());
      divClick.addEventListener('click', this.alteraDiaHistorico.bind(this));
    })

    if (!hojeRenderizado) {
      divClickId++;
      let todayitem = this.geraTodayItem(this.hoje, divClickId, null);
      dayItemContainer = this.geraDayItemContainer(todayitem);

      historico.appendChild(dayItemContainer);

      let divClick = document.getElementById(divClickId.toString());
      divClick.addEventListener('click', this.alteraDiaHistorico.bind(this));
    }
  }
  //FIM - Gera historico de emocoes


  encontrarIdDoDiarioHoje() {
    this.diarios.map((diario) => {
      if ((diario.dataDoDiario) == this.hoje) {
        this.idDiario = diario.id;
      }
    });
  }

  salvarDiario() {

    const sobrePacienteElement = document.getElementById('sobre-paciente-texto');
    const sobrePaciente = (<HTMLInputElement>(sobrePacienteElement)).value;

    const sentimentosPacienteElement = document.getElementById('notas-texto');
    const sentimentosPaciente = (<HTMLInputElement>(sentimentosPacienteElement)).value;

    const comentarioPsicologoElement = document.getElementById('psicologo-comentarios-texto');
    const comentarioPsicologo = (<HTMLInputElement>(comentarioPsicologoElement)).value;

    const emotionInputElement1 = document.getElementById('emocao-input1');
    const emocao1 = (<HTMLInputElement>(emotionInputElement1)).value
    const emotionInputElement2 = document.getElementById('emocao-input2');
    const emocao2 = (<HTMLInputElement>(emotionInputElement2)).value
    const emotionInputElement3 = document.getElementById('emocao-input3');
    const emocao3 = (<HTMLInputElement>(emotionInputElement3)).value
    const emotionInputElement4 = document.getElementById('emocao-input4');
    const emocao4 = (<HTMLInputElement>(emotionInputElement4)).value
    const emotionInputElement5 = document.getElementById('emocao-input5');
    const emocao5 = (<HTMLInputElement>(emotionInputElement5)).value

    this.encontrarIdDoDiarioHoje();
    const emocaoGeral = (
      Number(this.emocao1) +
      Number(this.emocao2) +
      Number(this.emocao3) +
      Number(this.emocao4) +
      Number(this.emocao5));

    const diarioCadastrado = {
      emocao1: Number(emocao1),
      emocao2: Number(emocao2),
      emocao3: Number(emocao3),
      emocao4: Number(emocao4),
      emocao5: Number(emocao5),
      emocaoGeral: emocaoGeral,
      diarioPaciente: sentimentosPaciente,
      comentarioPsicologo: comentarioPsicologo,
      detalhes: sobrePaciente,
      dataDoDiario: this.idDiaExibido,
      pacienteId: this.id
    };

    // return;

    const idDiarioUpdate = this.usuario === 'Psicologo' ? this.idDiarioExibido : this.idDiario;

    if (this.idDiario != null || this.usuario === 'Psicologo') {
      this.diarioService.update(idDiarioUpdate, diarioCadastrado).subscribe(
        data => {
          Swal.fire({
            icon: 'success',
          });
          window.location.reload();
        },
        erro => {
          Swal.fire({
            icon: 'error',
            title: erro.error.mensagem,
          });
        }
      );
    } else {
      this.diarioService.create(diarioCadastrado).subscribe(
        data => {
          Swal.fire({
            icon: 'success',
          });
          window.location.reload();
        },
        erro => {
          Swal.fire({
            icon: 'error',
            title: erro.error.mensagem,
          });
        }
      );
    }
  }
}
