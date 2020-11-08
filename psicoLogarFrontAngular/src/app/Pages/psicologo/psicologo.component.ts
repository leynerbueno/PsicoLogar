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

  emocao1 = 0;
  emocao2 = 0;
  emocao3 = 0;
  emocao4 = 0;
  emocao5 = 0;



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
      case 'emocao-input2':
        this.emocao2 = valor;
      case 'emocao-input3':
        this.emocao3 = valor;
      case 'emocao-input4':
        this.emocao4 = valor;
      case 'emocao-input5':
        this.emocao5 = valor;
    }
  }

  alterarEmocao(e){
    let emotionInput = e.path[0].id;
    let emotionInputRange = this.obtemInputRange(emotionInput);

    let emotionInputElement = document.getElementById(emotionInput)
    let emotionInputRangeElement = document.getElementById(emotionInputRange);

    let emotionInputvalue = String((<HTMLInputElement>(emotionInputElement)).value)

    emotionInputRangeElement.style.width = emotionInputvalue + '%';

    this.alteraEstadoEmocao(emotionInput, emotionInputvalue);
  }

  mockDatas = [
    {
      day: 12,
      month: 'Jan',
    },
    {
      day: 13,
      month: 'Jan',
    },
    {
      day: 15,
      month: 'Jan',
    },
    {
      day: 18,
      month: 'Jan',
    },
    {
      day: 21,
      month: 'Jan',
    },
    {
      day: 27,
      month: 'Jan',
    },
    {
      day: 10,
      month: 'Fev',
    },
    {
      day: 16,
      month: 'Fev',
    },
    {
      day: 18,
      month: 'Fev',
    },
    {
      day: 22,
      month: 'Fev',
    },
    {
      day: 26,
      month: 'Fev',
    },
    {
      day: 29,
      month: 'Fev',
    },
    {
      day: 2,
      month: 'Mar',
    },
    {
      day: 6,
      month: 'Mar',
    },
    {
      day: 8,
      month: 'Mar',
    },
    {
      day: 9,
      month: 'Mar',
    },
    {
      day: 11,
      month: 'Mar',
    },
  ]

  geraDayItemContainer(dayitem) {
    const dayItemContainer = document.createElement('div');
    dayItemContainer.className = 'day-item-container';
    dayItemContainer.innerHTML = dayitem;
    
    return dayItemContainer;
  }

  geraDayItem(data) {
    return `<hr id="${data.day}+${data.month}" class="separator-hr">
      <button class="day-item">
        <h3>${data.day}</h3>
        <p>${data.month}</p>
      </button>`
  }

  geraTodayItem() {
    return `<hr id="hoje" class="separator-hr">
      <button class="today-item">
        <h4>Hoje</h4>
      </button>`
  }

  renderHistoricoDiarios() {
    let historico = document.getElementById('historico-diarios');

    this.mockDatas.map((data) => {
      let dayitem = this.geraDayItem(data);
      let dayItemContainer = this.geraDayItemContainer(dayitem);

      historico.appendChild(dayItemContainer);
    })

    let todayitem = this.geraTodayItem();
    let todayItemContainer = this.geraDayItemContainer(todayitem);

    historico.appendChild(todayItemContainer);

  } 

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
