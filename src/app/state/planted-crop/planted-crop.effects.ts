import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as PlantedCropActions from './planted-crop.actions';
import { PlantedCropService } from 'src/app/services/planted-crop.service';

@Injectable()
export class PlantedCropEffects {
  constructor(
    private actions$: Actions,
    private plantedCropService: PlantedCropService // Substitua pelo serviço real
  ) {}

  loadPlantedCrops$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlantedCropActions.loadPlantedCrops),
      tap(() => console.log('loadPlantedCrops effect activated')),
      mergeMap(() =>
        this.plantedCropService.getPlantedCrops().pipe(
          map((crops) => PlantedCropActions.loadPlantedCropsSuccess({ crops })),
          catchError((error) =>
            of(PlantedCropActions.loadPlantedCropsFailure({ error }))
          )
        )
      )
    )
  );
}
