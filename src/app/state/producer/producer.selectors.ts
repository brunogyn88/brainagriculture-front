import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducer from './producer.state';
import { PlantedCropState } from './producer.reducer';

export const selectProducerState =
  createFeatureSelector<fromProducer.ProducerState>('producer');

export const selectProdutores = createSelector(
  selectProducerState,
  (state: fromProducer.ProducerState) => state.producers
);

export const selectPlantedCropState =
  createFeatureSelector<PlantedCropState>('plantedCrop');

export const selectPlantedCrops = createSelector(
  selectPlantedCropState,
  (state) => state.crops
);
