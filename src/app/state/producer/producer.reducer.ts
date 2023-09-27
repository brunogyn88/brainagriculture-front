import { createReducer, on } from '@ngrx/store';
import * as ProducerActions from './producer.actions';
import { Producer } from 'src/app/models/producer.model';
import { PlantedCrop } from 'src/app/models/planted-crop.model';

export interface ProducerState {
  producers: Producer[];
}

export const initialState: ProducerState = {
  producers: [],
};

export const producerReducer = createReducer(
  initialState,
  on(ProducerActions.createProducer, (state, { producer }) => {
    return { ...state, producers: [...state.producers, producer] };
  })
);

export interface PlantedCropState {
  crops: PlantedCrop[];
  loading: boolean;
  error: any;
}
