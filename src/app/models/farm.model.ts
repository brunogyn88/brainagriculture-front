export interface Farm {
  id?: number; // Opcional se você planeja usar um identificador único para fazendas
  name: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  crops: string[];
}
