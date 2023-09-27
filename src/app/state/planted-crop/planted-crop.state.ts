import { PlantedCrop } from 'src/app/models/planted-crop.model';

export interface PlantedCropState {
  crops: PlantedCrop[];
  loading: boolean;
  error: string | null;
}

export const initialPlantedCropState: PlantedCropState = {
  crops: [],
  loading: false,
  error: null,
};
