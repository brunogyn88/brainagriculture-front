import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducer from './producer.state';

export const selectProducerState =
  createFeatureSelector<fromProducer.ProducerState>('producer');

export const selectProducers = createSelector(
  selectProducerState,
  (state: fromProducer.ProducerState) => state.producers
);
