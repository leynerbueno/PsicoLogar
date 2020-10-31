import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-cadastro',
  templateUrl: './pag-cadastro.component.html',
  styleUrls: ['./pag-cadastro.component.css']
})
export class PagCadastroComponent implements OnInit {

  constructor() { }
  
 
  
  ngOnInit(): void {  
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

//codigo para mudar a img
url="../../assets/user.png";
getImage(evente){
  if(evente.target.files){
    let reader = new FileReader();
    reader.readAsDataURL(evente.target.files[0]);
    reader.onload=(evente:any)=>{
      this.url=evente.target.result;
    }
  }
 }

}
