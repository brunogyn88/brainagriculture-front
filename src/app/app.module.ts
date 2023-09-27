import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ProducerFormComponent } from './components/producer-form/producer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EffectsModule } from '@ngrx/effects';
import { ProducerEffects } from './state/producer/producer.effects';
import { HttpClientModule } from '@angular/common/http';
import { PlantedCropEffects } from './state/planted-crop/planted-crop.effects';
import { plantedCropReducer } from './state/planted-crop/planted-crop.reducer';
import { ProducerListComponent } from './components/producer-list/producer-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { producerReducer } from './state/producer/producer.reducer';

@NgModule({
  declarations: [AppComponent, ProducerFormComponent, ProducerListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    NgxMaskDirective,
    NgxMaskPipe,
    EffectsModule.forRoot([ProducerEffects, PlantedCropEffects]),
    StoreModule.forRoot({
      plantedCrop: plantedCropReducer,
      producer: producerReducer,
    }),
    HttpClientModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
