import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/service/auth.service';
import { DiarioService } from 'src/app/Core/service/diarioService.service';
import { PacienteService } from 'src/app/Core/service/paciente.service';

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
  form: FormGroup;
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
  //FIM - estados da pagina

  dateNow = new Date();
  diaHoje = this.dateNow.getDate();
  mesHoje = this.dateNow.getMonth() + 1;
  anoHoje = this.dateNow.getFullYear();
  hoje = `${this.anoHoje}-${this.mesHoje}-${this.diaHoje}`
  exibindoHoje = true;
  idDiaExibido = this.hoje;
  constructor(private route: ActivatedRoute,
    private diarioService: DiarioService,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated);
    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.usuario = this.currentUser.crp ? 'Psicologo' : 'Paciente';
      }
    );

    this.form = this.formBuilder.group({
      emocao1: ['', Validators.required],
      emocao2: ['', Validators.required],
      emocao3: ['', Validators.required],
      emocao4: ['', Validators.required],
      emocao5: ['', Validators.required],
      diarioPaciente: ['', Validators.required],
      comentarioPsicologo: ['', Validators.required],
      detalhes: ['', Validators.required],
    });


    //paga o id passado na url
    this.id = this.route.snapshot.params['id'];
    //pesquisa o paciente selecionado
    this.pacienteService.getOne(this.id).subscribe(data => {
      //esta variavel recebe a lista de diários do paciente.
      this.diarios = data.diario;
      //o console vai exibir o objeto de diarios do paciente.
      this.renderHistoricoDiarios();
    });

  }

  // mockRetornoBanco = {
  //   // Usuario: 'Paciente',
  //   Usuario: 'Psicologo',
  //   mockDiarios: [
  //     {
  //       day: 12,
  //       month: 'Jan',
  //       emocao1: 12,
  //       emocao2: 12,
  //       emocao3: 12,
  //       emocao4: 12,
  //       emocao5: 12,
  //       sobrePaciente: '12Jan',
  //       comentarioPsicologo: '12Jan',
  //       sentimentosPaciente: '12Jan',
  //     },
  //     {
  //       day: 13,
  //       month: 'Jan',
  //       emocao1: 13,
  //       emocao2: 13,
  //       emocao3: 13,
  //       emocao4: 13,
  //       emocao5: 13,
  //       sobrePaciente: '13Jan',
  //       comentarioPsicologo: '13Jan',
  //       sentimentosPaciente: '13Jan',
  //     },
  //     {
  //       day: 15,
  //       month: 'Jan',
  //       emocao1: 15,
  //       emocao2: 15,
  //       emocao3: 15,
  //       emocao4: 15,
  //       emocao5: 15,
  //       sobrePaciente: '15Jan',
  //       comentarioPsicologo: '15Jan',
  //       sentimentosPaciente: '15Jan',
  //     },
  //     {
  //       day: 18,
  //       month: 'Jan',
  //       emocao1: 15,
  //       emocao2: 15,
  //       emocao3: 15,
  //       emocao4: 15,
  //       emocao5: 15,
  //       sobrePaciente: '15Jan',
  //       comentarioPsicologo: '15Jan',
  //       sentimentosPaciente: '15Jan',
  //     },
  //     {
  //       day: 21,
  //       month: 'Jan',
  //       emocao1: 15,
  //       emocao2: 15,
  //       emocao3: 15,
  //       emocao4: 15,
  //       emocao5: 15,
  //       sobrePaciente: '15Jan',
  //       comentarioPsicologo: '15Jan',
  //       sentimentosPaciente: '15Jan',
  //     },
  //     {
  //       day: 27,
  //       month: 'Jan',
  //       emocao1: 15,
  //       emocao2: 15,
  //       emocao3: 15,
  //       emocao4: 15,
  //       emocao5: 15,
  //       sobrePaciente: '27Jan',
  //       comentarioPsicologo: '27Jan',
  //       sentimentosPaciente: '27Jan',
  //     },
  //     {
  //       day: 10,
  //       month: 'Fev',
  //       emocao1: 10,
  //       emocao2: 10,
  //       emocao3: 10,
  //       emocao4: 10,
  //       emocao5: 10,
  //       sobrePaciente: '10Fev',
  //       comentarioPsicologo: '10Fev',
  //       sentimentosPaciente: '10Fev',
  //     },
  //     {
  //       day: 16,
  //       month: 'Fev',
  //       emocao1: 16,
  //       emocao2: 16,
  //       emocao3: 16,
  //       emocao4: 16,
  //       emocao5: 16,
  //       sobrePaciente: '16Fev',
  //       comentarioPsicologo: '16Fev',
  //       sentimentosPaciente: '16Fev',
  //     },
  //     {
  //       day: 18,
  //       month: 'Fev',
  //       emocao1: 18,
  //       emocao2: 18,
  //       emocao3: 18,
  //       emocao4: 18,
  //       emocao5: 18,
  //       sobrePaciente: '18Fev',
  //       comentarioPsicologo: '18Fev',
  //       sentimentosPaciente: '18Fev',
  //     },
  //     {
  //       day: 22,
  //       month: 'Fev',
  //       emocao1: 22,
  //       emocao2: 22,
  //       emocao3: 22,
  //       emocao4: 22,
  //       emocao5: 22,
  //       sobrePaciente: '22Fev',
  //       comentarioPsicologo: '22Fev',
  //       sentimentosPaciente: '22Fev',
  //     },
  //     {
  //       day: 26,
  //       month: 'Fev',
  //       emocao1: 26,
  //       emocao2: 26,
  //       emocao3: 26,
  //       emocao4: 26,
  //       emocao5: 26,
  //       sobrePaciente: '26Fev',
  //       comentarioPsicologo: '26Fev',
  //       sentimentosPaciente: '26Fev',
  //     },
  //     {
  //       day: 29,
  //       month: 'Fev',
  //       emocao1: 29,
  //       emocao2: 29,
  //       emocao3: 29,
  //       emocao4: 29,
  //       emocao5: 29,
  //       sobrePaciente: '29Fev',
  //       comentarioPsicologo: '29Fev',
  //       sentimentosPaciente: '29Fev',
  //     },
  //     {
  //       day: 2,
  //       month: 'Mar',
  //       emocao1: 2,
  //       emocao2: 2,
  //       emocao3: 2,
  //       emocao4: 2,
  //       emocao5: 2,
  //       sobrePaciente: '2Mar',
  //       comentarioPsicologo: '2Mar',
  //       sentimentosPaciente: '2Mar',
  //     },
  //     {
  //       day: 6,
  //       month: 'Mar',
  //       emocao1: 6,
  //       emocao2: 6,
  //       emocao3: 6,
  //       emocao4: 6,
  //       emocao5: 6,
  //       sobrePaciente: '6Mar',
  //       comentarioPsicologo: '6Mar',
  //       sentimentosPaciente: '6Mar',
  //     },
  //     {
  //       day: 8,
  //       month: 'Mar',
  //       emocao1: 8,
  //       emocao2: 8,
  //       emocao3: 8,
  //       emocao4: 8,
  //       emocao5: 8,
  //       sobrePaciente: '8Mar',
  //       comentarioPsicologo: '8Mar',
  //       sentimentosPaciente: '8Mar',
  //     },
  //     {
  //       day: 9,
  //       month: 'Mar',
  //       emocao1: 9,
  //       emocao2: 9,
  //       emocao3: 9,
  //       emocao4: 9,
  //       emocao5: 9,
  //       sobrePaciente: '9Mar',
  //       comentarioPsicologo: '9Mar',
  //       sentimentosPaciente: '9Mar',
  //     },
  //     {
  //       day: 11,
  //       month: 'Mar',
  //       emocao1: 11,
  //       emocao2: 11,
  //       emocao3: 11,
  //       emocao4: 11,
  //       emocao5: 11,
  //       sobrePaciente: '11Mar',
  //       comentarioPsicologo: '11Mar',
  //       sentimentosPaciente: '11Mar',
  //     },
  //     {
  //       day: 8,
  //       month: 'Nov',
  //       emocao1: 8,
  //       emocao2: 8,
  //       emocao3: 8,
  //       emocao4: 8,
  //       emocao5: 8,
  //       sobrePaciente: '8Nov',
  //       comentarioPsicologo: '8Nov',
  //       sentimentosPaciente: '8Nov',
  //     },
  //   ]
  // }

  

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
      alert('Lamento, só é possível alterar o diário de hoje :(');
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
      alert('Lamento, só é possível alterar o diário de hoje :(');
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

    this.preencheEmocoes(diarioSelecionado);
    this.preencheCamposTexto(diarioSelecionado);
  }
  //FIM - preenchimento automatico do diario conforme retorno do back

  //INICIO - altera dia historico

  alteraDiaHistorico(elemento) {
    let diariId = elemento.path[1].id;

    let diarioSelecionado = document.getElementById(diariId);
    diarioSelecionado.className = 'dia-selecionado-item';
    let diarioEmExibicao = document.getElementById(this.idDiaExibido);
    diarioEmExibicao.className = 'day-item';

    this.idDiaExibido = diariId;
    this.exibindoHoje = diariId == this.hoje;
    this.preencheDiario(diariId)
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


  encontrarIdDoDiario() {
    this.diarios.map((diario) => {
      if ((diario.dataDoDiario) == this.hoje) {
        console.log(diario);
        console.log(diario.id);
        this.idDiario = diario.id;
      }
    });
  }
  salvarDiario() {
    this.encontrarIdDoDiario();
    const diarioCadastrado = this.form.value;
    diarioCadastrado.emocaoGeral = (diarioCadastrado.emocao1 + diarioCadastrado.emocao2 + diarioCadastrado.emocao3 + diarioCadastrado.emocao4 + diarioCadastrado.emocao5);
    diarioCadastrado.dataDoDiario = this.hoje;
    diarioCadastrado.pacienteId = this.currentUser.id;


    if (this.idDiario != null || this.usuario === 'Psicologo') {
      this.diarioService.update(this.idDiario, diarioCadastrado).subscribe(
        data => alert("Atualização Deu Certo!"),
        erro => alert("Atualização Deu Errado!")
      );
    } else {
      this.diarioService.create(diarioCadastrado).subscribe(
        data => alert("Cadastro Deu Certo!"),
        erro => alert("Cadastro Deu Errado!")
      );
    }
  }

  // const sobrePacienteElement = document.getElementById('sobre-paciente-texto');
  // const sobrePaciente = (<HTMLInputElement>(sobrePacienteElement)).value;
  // const comentarioPsicologoElement = document.getElementById('notas-texto');
  // const comentarioPsicologo = (<HTMLInputElement>(comentarioPsicologoElement)).value;
  // const sentimentosPacienteElement = document.getElementById('psicologo-comentarios-texto');
  // const sentimentosPaciente = (<HTMLInputElement>(sentimentosPacienteElement)).value;


  // alert(`Emoção 1 = ${this.emocao1}
  // \Emoção 2 = ${this.emocao2}
  // \Emoção 3 = ${this.emocao3}
  // \Emoção 4 = ${this.emocao4}
  // \Emoção 5 = ${this.emocao5}
  // \Sobre o Paciente: ${sobrePaciente}
  // \Comentários do Psicólogo: ${comentarioPsicologo}
  // \Sentimentos do Paciente: ${sentimentosPaciente}`);

  // TrocaUsuario(){
  //   this.usuario = this.usuario == 'Paciente' ? 'Psicologo' : 'Paciente';
  //   this.hoje = '8Nov';
  //   this.exibindoHoje = true;
  //   this.idDiaExibido = '8Nov';
  //   this.renderHistoricoDiarios();
  // }

}
