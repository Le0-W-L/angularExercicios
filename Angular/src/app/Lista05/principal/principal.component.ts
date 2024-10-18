import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { OffcanvasService } from '../../offcanvas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @ViewChild('offcanvas') offcanvas!: TemplateRef<any>;

  constructor(private offcanvasService: OffcanvasService) {}

  ngOnInit(): void {
    // Abrir o offcanvas automaticamente quando o componente for carregado
    this.offcanvasService.open(this.offcanvas);
  }

  open() {
    this.offcanvasService.open(this.offcanvas);
  }
}
