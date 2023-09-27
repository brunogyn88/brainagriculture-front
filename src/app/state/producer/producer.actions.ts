import { createAction, props } from '@ngrx/store';
import { PlantedCrop } from 'src/app/models/planted-crop.model';
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

// Ação para criar um produtor rural com sucesso
export const createProducerSuccess = createAction(
  '[Producer] Criar Produtor com Sucesso',
  props<{ producer: Producer }>()
);

// Ação para lidar com falha na criação de um produtor rural
export const createProducerFailure = createAction(
  '[Producer] Falha ao Criar Produtor',
  props<{ error: any }>()
);

export const loadPlantedCrops = createAction(
  '[Planted Crop] Carregar Culturas Plantadas'
);

export const loadPlantedCropsSuccess = createAction(
  '[Planted Crop] Carregar Culturas Plantadas com Sucesso',
  props<{ crops: PlantedCrop[] }>()
);

export const loadPlantedCropsFailure = createAction(
  '[Planted Crop] Falha ao Carregar Culturas Plantadas',
  props<{ error: any }>()
);
