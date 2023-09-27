import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producer } from '../models/producer.model';
import { PlantedCrop } from '../models/planted-crop.model';

@Injectable({
  providedIn: 'root',
})
export class ProducerService {
  private apiUrl = 'http://localhost:3333/ruralproducer';

  constructor(private http: HttpClient) {}

  getProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.apiUrl);
  }

  createProducer(produtor: Producer): Observable<Producer> {
    return this.http.post<Producer>(this.apiUrl, produtor);
  }

  updateProducer(produtor: Producer): Observable<Producer> {
    const url = `${this.apiUrl}/${produtor.id}`;
    return this.http.put<Producer>(url, produtor);
  }

  deleteProducer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getPlantedCrops(): Observable<PlantedCrop[]> {
    return this.http.get<PlantedCrop[]>(`${this.apiUrl}/plantedcrop`);
  }
}
