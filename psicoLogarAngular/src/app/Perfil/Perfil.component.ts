import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
}
