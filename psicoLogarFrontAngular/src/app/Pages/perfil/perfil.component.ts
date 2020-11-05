import { UsuarioService } from './../core/service/usuario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario = [];
  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.getOne(1).subscribe(
      dadosUsuario => this.usuario.push(dadosUsuario),
      erro => console.log(erro)
    );
  }
}
