import { PlantedCrop } from 'src/app/models/planted-crop.model';
import { Producer } from 'src/app/models/producer.model';

export interface ProducerState {
  producers: Producer[];
  // Outros campos de estado, como dados do dashboard
}
