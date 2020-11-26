import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
