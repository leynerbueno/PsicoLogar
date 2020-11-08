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

  obtemInputRange(emocao) {
    switch (emocao) {
      case 'emotion-input1':
        return 'emotion-input-range1';
      case 'emotion-input2':
        return 'emotion-input-range2';
      case 'emotion-input3':
        return 'emotion-input-range3';
      case 'emotion-input4':
        return 'emotion-input-range4';
      case 'emotion-input5':
        return 'emotion-input-range5';
    }
  }

  emocao1 = 0;
  emocao2 = 0;
  emocao3 = 0;
  emocao4 = 0;
  emocao5 = 0;

  alteraEstadoEmocao(emocao, valor) {
    switch (emocao) {
      case 'emotion-input1':
        this.emocao1 = valor;
      case 'emotion-input2':
        this.emocao2 = valor;
      case 'emotion-input3':
        this.emocao3 = valor;
      case 'emotion-input4':
        this.emocao4 = valor;
      case 'emotion-input5':
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

  salvarEmocoes() {
    alert(`"Emoção 1 = "${this.emocao1}
    \"Emoção 2 = "${this.emocao2}"
    \"Emoção 3 = "${this.emocao3}"
    \"Emoção 4 = "${this.emocao4}"
    \"Emoção 5 = "${this.emocao5}"`);
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

}
