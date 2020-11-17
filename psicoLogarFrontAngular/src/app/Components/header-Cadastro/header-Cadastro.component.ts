import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-Cadastro',
  templateUrl: './header-Cadastro.component.html',
  styleUrls: ['./header-Cadastro.component.css']
})
export class HeaderCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

openMenu = false;
openNotificacao = false;


handleMenu = () => {
  this.openMenu = !this.openMenu;
  }

  handleNotification(){
    this.openNotificacao = !this.openNotificacao;
  }

}
