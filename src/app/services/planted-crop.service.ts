// planted-crop.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantedCrop } from 'src/app/models/planted-crop.model';

@Injectable({
  providedIn: 'root',
})
export class PlantedCropService {
  private apiUrl = 'http://localhost:3333/ruralproducer';

  constructor(private http: HttpClient) {}

  getPlantedCrops(): Observable<PlantedCrop[]> {
    return this.http.get<PlantedCrop[]>(`${this.apiUrl}/plantedcrop`);
  }
}
