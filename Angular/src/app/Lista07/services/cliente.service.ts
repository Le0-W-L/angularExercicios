import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  //OBTER TODOS OS CLIENTES
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  //OBTER CLIENTE POR ID
  getCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //ADICIONAR UM NOVO CLIENTE
  setCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, cliente);
  }

  //ATUALIZAR UM CLIENTE
  atualizaCliente(cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  //EXCLUIT UM CLIENTE
  excluiCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
