export interface Producer {
  id?: string;
  cpfCnpj: string;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  totalAreaHectaresFarm: number;
  arableAreaHectares: number;
  vegetationAreaHectares: number;
  plantedCrops: string[];
}
