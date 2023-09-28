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
  on(ProducerActions.createProducer, (state, { producer }) => {
    return { ...state, producers: [...state.producers, producer] };
  }),
  on(ProducerActions.loadProducersSuccess, (state, { producers }) => {
    return { ...state, producers };
  }),
  on(ProducerActions.deleteProducer, (state, { producerId }) => {
    const updatedProducers = state.producers.filter(
      (producer) => producer.id !== producerId
    );
    return { ...state, producers: updatedProducers };
  }),
  on(ProducerActions.editProducer, (state, { producer }) => {
    const updatedProducers = state.producers.map((existingProducer) =>
      existingProducer.id === producer.id ? producer : existingProducer
    );
    return { ...state, producers: updatedProducers };
  })
);
