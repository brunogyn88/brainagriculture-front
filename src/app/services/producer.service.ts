import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producer } from '../models/producer.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutorRuralService {
  private apiUrl = 'http://localhost:3333/ruralproducer';

  constructor(private http: HttpClient) {}

  getProdutores(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.apiUrl);
  }

  criarProdutor(produtor: Producer): Observable<Producer> {
    return this.http.post<Producer>(this.apiUrl, produtor);
  }

  atualizarProdutor(produtor: Producer): Observable<Producer> {
    const url = `${this.apiUrl}/${produtor.id}`;
    return this.http.put<Producer>(url, produtor);
  }

  excluirProdutor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
