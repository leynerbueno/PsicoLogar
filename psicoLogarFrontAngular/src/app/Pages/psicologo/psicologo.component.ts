import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.adicionarMouseMove();
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
}
