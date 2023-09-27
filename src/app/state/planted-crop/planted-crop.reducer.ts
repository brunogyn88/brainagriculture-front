import { createReducer, on } from '@ngrx/store';
import { PlantedCrop } from 'src/app/models/planted-crop.model';
import * as PlantedCropActions from './planted-crop.actions';

export interface PlantedCropState {
  crops: PlantedCrop[];
  loading: boolean;
  error: string | null;
}

export const initialState: PlantedCropState = {
  crops: [],
  loading: false,
  error: null,
};

export const plantedCropReducer = createReducer(
  initialState,
  on(PlantedCropActions.loadPlantedCrops, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PlantedCropActions.loadPlantedCropsSuccess, (state, { crops }) => ({
    ...state,
    crops,
    loading: false,
    error: null,
  })),
  on(PlantedCropActions.loadPlantedCropsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
