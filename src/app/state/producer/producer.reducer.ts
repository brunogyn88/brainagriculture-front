import { createReducer, on } from '@ngrx/store';
import * as ProducerActions from './producer.actions';
import { Producer } from 'src/app/models/producer.model';

export interface ProducerState {
  producers: Producer[];
}

export const initialState: ProducerState = {
  producers: [],
};

export const producerReducer = createReducer(
  initialState,
  on(ProducerActions.addProducer, (state, { producer }) => {
    return { ...state, producers: [...state.producers, producer] };
  })
);
