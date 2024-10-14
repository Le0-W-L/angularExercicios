import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OffcanvasService } from '../offcanvas.service';  // Importa o serviço

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private offcanvasService: OffcanvasService) {}

  onLogin() {
    // Redireciona para a rota principal
    this.router.navigate(['/principal']).then(() => {
      // Abre o offcanvas após o redirecionamento
      this.offcanvasService.open(null);  // Passa null porque a referência será obtida no componente principal
    });
  }
}
