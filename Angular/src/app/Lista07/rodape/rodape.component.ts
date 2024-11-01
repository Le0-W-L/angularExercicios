import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css',
})
export class RodapeComponent implements OnInit {
  usuario: any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
  }
}