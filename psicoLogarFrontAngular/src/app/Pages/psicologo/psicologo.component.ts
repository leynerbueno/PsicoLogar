import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./CSS/psicologo.historico.css', './CSS/psicologo.emocoes.css', './CSS/psicologo.component.css']
})
export class PsicologoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderHistoricoDiarios();
  }

  mockRetornoBanco = {
    Usuario: 'Paciente',
    mockDiarios: [
      {
        day: 12,
        month: 'Jan',
        emocao1: 12,
        emocao2: 12,
        emocao3: 12,
        emocao4: 12,
        emocao5: 12,
        sobrePaciente: '12Jan',
        comentarioPsicologo: '12Jan',
        sentimentosPaciente: '12Jan',
      },
      {
        day: 13,
        month: 'Jan',
        emocao1: 13,
        emocao2: 13,
        emocao3: 13,
        emocao4: 13,
        emocao5: 13,
        sobrePaciente: '13Jan',
        comentarioPsicologo: '13Jan',
        sentimentosPaciente: '13Jan',
      },
      {
        day: 15,
        month: 'Jan',
        emocao1: 15,
        emocao2: 15,
        emocao3: 15,
        emocao4: 15,
        emocao5: 15,
        sobrePaciente: '15Jan',
        comentarioPsicologo: '15Jan',
        sentimentosPaciente: '15Jan',
      },
      {
        day: 18,
        month: 'Jan',
        emocao1: 15,
        emocao2: 15,
        emocao3: 15,
        emocao4: 15,
        emocao5: 15,
        sobrePaciente: '15Jan',
        comentarioPsicologo: '15Jan',
        sentimentosPaciente: '15Jan',
      },
      {
        day: 21,
        month: 'Jan',
        emocao1: 15,
        emocao2: 15,
        emocao3: 15,
        emocao4: 15,
        emocao5: 15,
        sobrePaciente: '15Jan',
        comentarioPsicologo: '15Jan',
        sentimentosPaciente: '15Jan',
      },
      {
        day: 27,
        month: 'Jan',
        emocao1: 15,
        emocao2: 15,
        emocao3: 15,
        emocao4: 15,
        emocao5: 15,
        sobrePaciente: '27Jan',
        comentarioPsicologo: '27Jan',
        sentimentosPaciente: '27Jan',
      },
      {
        day: 10,
        month: 'Fev',
        emocao1: 10,
        emocao2: 10,
        emocao3: 10,
        emocao4: 10,
        emocao5: 10,
        sobrePaciente: '10Fev',
        comentarioPsicologo: '10Fev',
        sentimentosPaciente: '10Fev',
      },
      {
        day: 16,
        month: 'Fev',
        emocao1: 16,
        emocao2: 16,
        emocao3: 16,
        emocao4: 16,
        emocao5: 16,
        sobrePaciente: '16Fev',
        comentarioPsicologo: '16Fev',
        sentimentosPaciente: '16Fev',
      },
      {
        day: 18,
        month: 'Fev',
        emocao1: 18,
        emocao2: 18,
        emocao3: 18,
        emocao4: 18,
        emocao5: 18,
        sobrePaciente: '18Fev',
        comentarioPsicologo: '18Fev',
        sentimentosPaciente: '18Fev',
      },
      {
        day: 22,
        month: 'Fev',
        emocao1: 22,
        emocao2: 22,
        emocao3: 22,
        emocao4: 22,
        emocao5: 22,
        sobrePaciente: '22Fev',
        comentarioPsicologo: '22Fev',
        sentimentosPaciente: '22Fev',
      },
      {
        day: 26,
        month: 'Fev',
        emocao1: 26,
        emocao2: 26,
        emocao3: 26,
        emocao4: 26,
        emocao5: 26,
        sobrePaciente: '26Fev',
        comentarioPsicologo: '26Fev',
        sentimentosPaciente: '26Fev',
      },
      {
        day: 29,
        month: 'Fev',
        emocao1: 29,
        emocao2: 29,
        emocao3: 29,
        emocao4: 29,
        emocao5: 29,
        sobrePaciente: '29Fev',
        comentarioPsicologo: '29Fev',
        sentimentosPaciente: '29Fev',
      },
      {
        day: 2,
        month: 'Mar',
        emocao1: 2,
        emocao2: 2,
        emocao3: 2,
        emocao4: 2,
        emocao5: 2,
        sobrePaciente: '2Mar',
        comentarioPsicologo: '2Mar',
        sentimentosPaciente: '2Mar',
      },
      {
        day: 6,
        month: 'Mar',
        emocao1: 6,
        emocao2: 6,
        emocao3: 6,
        emocao4: 6,
        emocao5: 6,
        sobrePaciente: '6Mar',
        comentarioPsicologo: '6Mar',
        sentimentosPaciente: '6Mar',
      },
      {
        day: 8,
        month: 'Mar',
        emocao1: 8,
        emocao2: 8,
        emocao3: 8,
        emocao4: 8,
        emocao5: 8,
        sobrePaciente: '8Mar',
        comentarioPsicologo: '8Mar',
        sentimentosPaciente: '8Mar',
      },
      {
        day: 9,
        month: 'Mar',
        emocao1: 9,
        emocao2: 9,
        emocao3: 9,
        emocao4: 9,
        emocao5: 9,
        sobrePaciente: '9Mar',
        comentarioPsicologo: '9Mar',
        sentimentosPaciente: '9Mar',
      },
      {
        day: 11,
        month: 'Mar',
        emocao1: 11,
        emocao2: 11,
        emocao3: 11,
        emocao4: 11,
        emocao5: 11,
        sobrePaciente: '11Mar',
        comentarioPsicologo: '11Mar',
        sentimentosPaciente: '11Mar',
      },
      {
        day: 8,
        month: 'Nov',
        emocao1: 8,
        emocao2: 8,
        emocao3: 8,
        emocao4: 8,
        emocao5: 8,
        sobrePaciente: '8Nov',
        comentarioPsicologo: '8Nov',
        sentimentosPaciente: '8Nov',
      },
    ]
  }

  //INICIO - estados da pagina
  emocao1 = 0;
  emocao2 = 0;
  emocao3 = 0;
  emocao4 = 0;
  emocao5 = 0;
  camposTexto = {
    sobrePaciente: '',
    comentarioPsicologo: '',
    sentimentosPaciente: '',
  }

  usuario = this.mockRetornoBanco.Usuario;
  hoje = '8Nov'
  exibindoHoje = true;
  idDiaExibido = '8Nov';
  //FIM - estados da pagina

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

  alteraEstadoComentario(campo, comentario){
    switch (campo) {
      case 'sentimentosPaciente':
        this.camposTexto[campo] = comentario;
        break;
      case 'comentarioPsicologo':
        this.camposTexto[campo] = comentario;
        break;
      case 'sobrePaciente':
        this.camposTexto[campo] = comentario;
        break;
    }
  }

  alterarEmocao(e){
    if(this.exibindoHoje && this.usuario === 'Paciente'){
      let emotionInput = e.path[0].id;
      let emotionInputRange = this.obtemInputRange(emotionInput);

      let emotionInputElement = document.getElementById(emotionInput)
      let emotionInputRangeElement = document.getElementById(emotionInputRange);

      let emotionInputvalue = String((<HTMLInputElement>(emotionInputElement)).value);

      emotionInputRangeElement.style.width = emotionInputvalue + '%';

      this.alteraEstadoEmocao(emotionInput, emotionInputvalue);
    } else{
      alert('Lamento, só é possível alterar o diário de hoje :(');
    }
  }
  //FIM - controle emocoes

  //INICIO - controle campos texto

    alterarEstadoTexto(e){
      console.log('entrou na alteracao de texto');
      console.log(e);

      let textInputId = e.path[0].id;
      let textInputElement = document.getElementById(textInputId);

      let textInputvalue = String((<HTMLInputElement>(textInputElement)).value);

      console.log(textInputvalue);
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

  definirValorEmocao(i, diarioSelecionado){
    let emocaoDiario = this.obterValorEmocaoDiarioSelecionado(i, diarioSelecionado);
    let emocaoHojeEstadoAtual = this.obterValorEstadoEmocaoHoje(i);

    let emocaoDefinida = this.exibindoHoje && emocaoHojeEstadoAtual != 0 ? emocaoHojeEstadoAtual : emocaoDiario;
    
    return emocaoDefinida;
  }

  preencheEmocoes(diarioSelecionado){
    let baseEmotionInputId = 'emocao-input';
    let baseEmotionInputRangeId = 'emocao-input-range';

    for (var i = 1; i <= 5; i ++){
      let emotionInputElement = document.getElementById(baseEmotionInputId+i)
      let emotionInputRangeElement = document.getElementById(baseEmotionInputRangeId+i);

      let emocao = this.definirValorEmocao(i, diarioSelecionado);

      (<HTMLInputElement>(emotionInputElement)).value = emocao;
      emotionInputRangeElement.style.width = emocao + '%';

      if(this.exibindoHoje){
        this.alteraEstadoEmocao(baseEmotionInputId+i, emocao);
      }
    }
  }

  definirTexto(diarioSelecionado, campo){
    
    let comentarioDiario = diarioSelecionado[campo];
    let comentarioEstadoAtual = this.camposTexto[campo];

    let comentarioDefinida = this.exibindoHoje && comentarioEstadoAtual != '' ? comentarioEstadoAtual : comentarioDiario;
    
    return comentarioDefinida;
  }

  preencheCamposTexto(diarioSelecionado){
    const comentarioPsicologoElement = document.getElementById('notas-texto');
    let comentarioPaciente = this.definirTexto(diarioSelecionado, 'sentimentosPaciente');
    (<HTMLInputElement>(comentarioPsicologoElement)).value = comentarioPaciente;

    if(this.exibindoHoje){
      this.alteraEstadoComentario('sentimentosPaciente', comentarioPaciente);
    }

    if(this.usuario === 'Psicologo'){
      const sobrePacienteElement = document.getElementById('sobre-paciente-texto');
      let sobrePaciente = this.definirTexto(diarioSelecionado, 'sobrePaciente');
      (<HTMLInputElement>(sobrePacienteElement)).value = sobrePaciente;
      
      const sentimentosPacienteElement = document.getElementById('psicologo-comentarios-texto');
      let comentarioPsicologo = this.definirTexto(diarioSelecionado, 'comentarioPsicologo');
      (<HTMLInputElement>(sentimentosPacienteElement)).value = comentarioPsicologo;

      if(this.exibindoHoje){
        this.alteraEstadoComentario('sobrePaciente', sobrePaciente);
        this.alteraEstadoComentario('comentarioPsicologo', comentarioPsicologo);
      }
    }
  }

  preencheDiario(dataId){
    const dia = dataId.slice(0, -3);
    const mes = dataId.substr(-3)

    const diarioSelecionado = this.mockRetornoBanco.mockDiarios.filter((diario) => {
      return diario.day == dia && diario.month == mes;
    })[0]

    this.preencheEmocoes(diarioSelecionado);
    this.preencheCamposTexto(diarioSelecionado);
  }
  //FIM - preenchimento automatico do diario conforme retorno do back

  //INICIO - altera dia historico

  alteraDiaHistorico(elemento){
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

  geraDayItem(diario, divClickId) {
    return `<hr class="separator-hr">
      <button id="${diario.day + diario.month}" class="day-item">
        <div id="${divClickId}" class="div-click"></div>
        <h3>${diario.day}</h3>
        <p>${diario.month}</p>
      </button>`
  }

  geraTodayItem(id, divClickId) {
    return `<hr class="separator-hr">
      <button id="${id}" style="margin-right: 20px;" class="dia-selecionado-item">
        <div id="${divClickId}" class="div-click"></div>
        <h4>Hoje</h4>
      </button>`
  }

  renderHistoricoDiarios() {
    let historico = document.getElementById('historico-diarios');
    let hojeRenderizado = false;
    let dayItemContainer;
    let divClickId = 0

    this.mockRetornoBanco.mockDiarios.map((diario) => {
      divClickId++;
      if((diario.day.toString()+diario.month) == this.hoje){
        let todayitem = this.geraTodayItem(this.hoje, divClickId);
        dayItemContainer = this.geraDayItemContainer(todayitem);

        hojeRenderizado = true;
        this.preencheDiario(this.hoje);
      }else{
        let dayitem = this.geraDayItem(diario, divClickId);
        dayItemContainer = this.geraDayItemContainer(dayitem);
      }

      historico.appendChild(dayItemContainer);

      let divClick = document.getElementById(divClickId.toString());
      divClick.addEventListener('click', this.alteraDiaHistorico.bind(this));
    })

    if(!hojeRenderizado){
      let todayitem = this.geraTodayItem(this.hoje, divClickId);
      dayItemContainer = this.geraDayItemContainer(todayitem);
  
      historico.appendChild(dayItemContainer);
    }
  }
  //FIM - Gera historico de emocoes

  salvarDiario() {

    const sobrePacienteElement = document.getElementById('sobre-paciente-texto');
    const sobrePaciente = (<HTMLInputElement>(sobrePacienteElement)).value;
    const comentarioPsicologoElement = document.getElementById('notas-texto');
    const comentarioPsicologo = (<HTMLInputElement>(comentarioPsicologoElement)).value;
    const sentimentosPacienteElement = document.getElementById('psicologo-comentarios-texto');
    const sentimentosPaciente = (<HTMLInputElement>(sentimentosPacienteElement)).value;

    alert(`Emoção 1 = ${this.emocao1}
    \Emoção 2 = ${this.emocao2}
    \Emoção 3 = ${this.emocao3}
    \Emoção 4 = ${this.emocao4}
    \Emoção 5 = ${this.emocao5}
    \Sobre o Paciente: ${sobrePaciente}
    \Comentários do Psicólogo: ${comentarioPsicologo}
    \Sentimentos do Paciente: ${sentimentosPaciente}`);
  }

}
