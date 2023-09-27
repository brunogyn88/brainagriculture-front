import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ProducerActions from './producer.actions';
import { ProducerService } from 'src/app/services/producer.service';
import { createProducer } from 'src/app/state/producer/producer.actions';
import { Producer } from 'src/app/models/producer.model';

@Injectable()
export class ProducerEffects {
  constructor(
    private actions$: Actions,
    private producerService: ProducerService
  ) {}

  loadProducers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProducerActions.loadProducers),
      switchMap(() =>
        this.producerService.getProducers().pipe(
          map((producers: Producer[]) =>
            ProducerActions.loadProducersSuccess({ producers })
          ),
          catchError((error) =>
            of(ProducerActions.loadProducersFailure({ error }))
          )
        )
      )
    )
  );

  createProducer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProducer),
      switchMap((action) =>
        this.producerService.createProducer(action.producer).pipe(
          map((producer) =>
            ProducerActions.createProducerSuccess({ producer })
          ),
          catchError((error) =>
            of(ProducerActions.createProducerFailure({ error }))
          )
        )
      )
    )
  );

  loadPlantedCrops$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProducerActions.loadPlantedCrops),
      switchMap(() =>
        this.producerService.getPlantedCrops().pipe(
          map((crops) => ProducerActions.loadPlantedCropsSuccess({ crops })),
          catchError((error) =>
            of(ProducerActions.loadPlantedCropsFailure({ error }))
          )
        )
      )
    )
  );
}
