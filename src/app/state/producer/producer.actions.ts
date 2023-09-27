import { createAction, props } from '@ngrx/store';
import { Producer } from 'src/app/models/producer.model';

export const addProducer = createAction(
  '[Producer] Add Producer',
  props<{ producer: Producer }>()
);

export const loadProducers = createAction('[Produtor] Carregar Produtores');

export const loadProducersSuccess = createAction(
  '[Produtor] Carregar Produtores com Sucesso',
  props<{ produtores: Producer[] }>()
);

export const loadProducersFailure = createAction(
  '[Produtor] Falha ao Carregar Produtores',
  props<{ error: any }>()
);
