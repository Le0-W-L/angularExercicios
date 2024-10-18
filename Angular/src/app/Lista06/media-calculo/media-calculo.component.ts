import { Component } from '@angular/core';

@Component({
  selector: 'app-media-calculo',
  templateUrl: './media-calculo.component.html',
  styleUrl: './media-calculo.component.css'
})
export class MediaCalculoComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  resultado: string = '';

  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
