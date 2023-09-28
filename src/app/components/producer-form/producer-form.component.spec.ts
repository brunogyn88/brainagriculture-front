import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { ProducerFormComponent } from './producer-form.component';
import { Producer } from 'src/app/models/producer.model';
import { loadPlantedCrops } from 'src/app/state/planted-crop/planted-crop.actions';
import { createProducer } from 'src/app/state/producer/producer.actions';
import { selectPlantedCrops } from 'src/app/state/planted-crop/planted-crop.selectors';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EffectsModule } from '@ngrx/effects';
import { ProducerEffects } from 'src/app/state/producer/producer.effects';
import { PlantedCropEffects } from 'src/app/state/planted-crop/planted-crop.effects';
import { plantedCropReducer } from 'src/app/state/planted-crop/planted-crop.reducer';
import { producerReducer } from 'src/app/state/producer/producer.reducer';

describe('ProducerFormComponent', () => {
  let component: ProducerFormComponent;
  let fixture: ComponentFixture<ProducerFormComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerFormComponent, NgxMaskDirective],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([ProducerEffects, PlantedCropEffects]),
        StoreModule.forRoot({
          plantedCrop: plantedCropReducer,
          producer: producerReducer,
        }),
        NgxMaskDirective,
        NgxMaskPipe,
      ],
      providers: [provideMockStore({}), FormBuilder],
    });

    fixture = TestBed.createComponent(ProducerFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');

    // Mock the selector to return a sample list of planted crops
    store.overrideSelector(selectPlantedCrops, [
      { id: '1', cropname: 'Crop 1' },
      { id: '2', cropname: 'Crop 2' },
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load planted crops on init', () => {
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadPlantedCrops());
  });

  it('should submit the form with valid data', fakeAsync(() => {
    const producer: Producer = {
      cpfCnpj: '12345678901',
      producerName: 'John Doe',
      farmName: 'Farm 1',
      city: 'City',
      state: 'State',
      totalAreaHectaresFarm: 100,
      arableAreaHectares: 80,
      vegetationAreaHectares: 20,
      plantedCrops: ['1', '2'],
    };

    component.producerForm.setValue(producer);

    component.onSubmit();

    tick();

    expect(dispatchSpy).toHaveBeenCalledWith(createProducer({ producer }));
    expect(component.producerForm.valid).toBeTrue();
  }));
});
