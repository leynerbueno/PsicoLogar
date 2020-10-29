import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-cadastro',
  templateUrl: './pag-cadastro.component.html',
  styleUrls: ['./pag-cadastro.component.css','./pag-cadastro.css']
})
export class PagCadastroComponent implements OnInit {

  constructor() { }
  
 
  
  ngOnInit(): void {
    //codigo para mudar a img
    window.addEventListener('load', function () {
      document.getElementById('alterar-foto').addEventListener('change', function () {
          if (this.files && this.files[0]) {
              var img = document.getElementById('img-user');
              img.src = URL.createObjectURL(this.files[0]);
          }
      });
  });
      
}

 //Código para esconder/mostrar campo CRP
openCRP(){
 const btnRadio = document.getElementById('psicologo')
  if(btnRadio){
    document.getElementById('campoCRP').className = 'inputField';
  }
}
closeCRP(){
  const btnRadio = document.getElementById('paciente')
  if(btnRadio){
    document.getElementById('campoCRP').className = 'hidden';
  }
}



 

}
