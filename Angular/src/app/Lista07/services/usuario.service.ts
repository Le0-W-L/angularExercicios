import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioLogado: any = null;

  constructor() { }

  // Método para definir o usuário logado
  setUsuario(usuario: any): void {
    this.usuarioLogado = usuario;
  }

  // Método para obter o usuário logado
  getUsuario(): any {
    return this.usuarioLogado;
  }
}
