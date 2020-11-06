import { UsuarioService } from '../../Core/service/usuario.service';

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

    //codigo para mudar a img
    url = "../../../../assets/user.png";
    getImage(evente) {
      if (evente.target.files) {
        let reader = new FileReader();
        reader.readAsDataURL(evente.target.files[0]);
        reader.onload = (evente: any) => {
          this.url = evente.target.result;
        }
      }
    }
}
