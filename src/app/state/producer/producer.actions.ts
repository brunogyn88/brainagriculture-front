import { createAction, props } from '@ngrx/store';
import { Producer } from 'src/app/models/producer.model';

export const createProducer = createAction(
  '[Producer] Add Producer',
  props<{ producer: Producer }>()
);

export const loadProducers = createAction('[Produtor] Carregar Produtores');

export const loadProducersSuccess = createAction(
  '[Producer] Carregar Produtores com Sucesso',
  props<{ producers: Producer[] }>()
);

export const loadProducersFailure = createAction(
  '[Producer] Falha ao Carregar Produtores',
  props<{ error: any }>()
);

export const createProducerSuccess = createAction(
  '[Producer] Criar Produtor com Sucesso',
  props<{ producer: Producer }>()
);

export const createProducerFailure = createAction(
  '[Producer] Falha ao Criar Produtor',
  props<{ error: any }>()
);

export const editProducer = createAction(
  '[Producer] Edit Producer',
  props<{ producer: Producer }>()
);

export const editProducerSuccess = createAction(
  '[Producer] Edit Producer Success',
  props<{ producer: Producer }>()
);

export const editProducerFailure = createAction(
  '[Producer] Edit Producer Failure',
  props<{ error: any }>()
);

export const deleteProducer = createAction(
  '[Producer] Delete Producer',
  props<{ producerId: string | undefined }>()
);

export const deleteProducerSuccess = createAction(
  '[Producer] Delete Producer Success',
  props<{ producerId: string | undefined }>()
);

export const deleteProducerFailure = createAction(
  '[Producer] Delete Producer Failure',
  props<{ error: any }>()
);
