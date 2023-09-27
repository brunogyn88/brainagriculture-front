import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlantedCropState } from './planted-crop.reducer';

export const selectPlantedCropState =
  createFeatureSelector<PlantedCropState>('plantedCrop');

export const selectPlantedCrops = createSelector(
  selectPlantedCropState,
  (state) => state.crops
);

export const selectPlantedCropsLoading = createSelector(
  selectPlantedCropState,
  (state) => state.loading
);

export const selectPlantedCropsError = createSelector(
  selectPlantedCropState,
  (state) => state.error
);
