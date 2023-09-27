import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ProducerActions from './producer.actions';
import { ProdutorRuralService } from 'src/app/services/producer.service';

@Injectable()
export class ProducerEffects {
  constructor(
    private actions$: Actions,
    private produtorService: ProdutorRuralService
  ) {}

  loadProducers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProducerActions.loadProducers),
      switchMap(() =>
        this.produtorService.getProdutores().pipe(
          map((produtores) =>
            ProducerActions.loadProducersSuccess({ produtores })
          ),
          catchError((error) =>
            of(ProducerActions.loadProducersFailure({ error }))
          )
        )
      )
    )
  );

  // Outros efeitos para criar, atualizar e excluir produtores rurais
}
