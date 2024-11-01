import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Lista05/login/login.component';
import { PrincipalComponent } from './Lista05/principal/principal.component';
import { MediaCalculoComponent } from './Lista06/media-calculo/media-calculo.component';
import { CalculadoraComponent } from './Lista06/calculadora/calculadora.component';
import { CadastroAlunoComponent } from './Lista06/cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './Lista06/apolice-seguro/apolice-seguro.component';
import { HttpClientModule } from '@angular/common/http';
import { RodapeComponent } from './Lista07/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MediaCalculoComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
