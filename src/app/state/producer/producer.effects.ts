import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
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

  editProducer$ = this.actions$.pipe(
    ofType(ProducerActions.editProducer),
    mergeMap((action) =>
      this.producerService.updateProducer(action.producer).pipe(
        map((updatedProducer) =>
          ProducerActions.editProducerSuccess({ producer: updatedProducer })
        ),
        catchError((error) =>
          of(ProducerActions.editProducerFailure({ error }))
        )
      )
    )
  );

  deleteProducer$ = this.actions$.pipe(
    ofType(ProducerActions.deleteProducer),
    mergeMap((action) =>
      this.producerService.deleteProducer(action.producerId).pipe(
        map(() =>
          ProducerActions.deleteProducerSuccess({
            producerId: action.producerId,
          })
        ),
        catchError((error) =>
          of(ProducerActions.deleteProducerFailure({ error }))
        )
      )
    )
  );
}
