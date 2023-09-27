import { createAction, props } from '@ngrx/store';
import { PlantedCrop } from 'src/app/models/planted-crop.model';

export const loadPlantedCrops = createAction(
  '[Planted Crop] Load Planted Crops'
);

export const loadPlantedCropsSuccess = createAction(
  '[Planted Crop] Load Planted Crops Success',
  props<{ crops: PlantedCrop[] }>()
);

export const loadPlantedCropsFailure = createAction(
  '[Planted Crop] Load Planted Crops Failure',
  props<{ error: string }>()
);
