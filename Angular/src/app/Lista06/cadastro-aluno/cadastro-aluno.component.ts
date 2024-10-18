import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent {
  aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };

  onSubmit() {
    console.log('Aluno cadastrado:', this.aluno);
  }
}
