// producer-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { Producer } from 'src/app/models/producer.model';
import { loadPlantedCrops } from 'src/app/state/planted-crop/planted-crop.actions';
import { selectPlantedCrops } from 'src/app/state/planted-crop/planted-crop.selectors';
import { createProducer } from 'src/app/state/producer/producer.actions';

@Component({
  selector: 'app-producer-form',
  templateUrl: './producer-form.component.html',
  styleUrls: ['./producer-form.component.scss'],
})
export class ProducerFormComponent {
  producerForm: FormGroup;
  plantedCrops$ = this.store.pipe(select(selectPlantedCrops));

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.producerForm = this.formBuilder.group({
      cpfCnpj: ['', Validators.required],
      producerName: ['', Validators.required],
      farmName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      totalAreaHectaresFarm: [0, Validators.required],
      arableAreaHectares: [0, Validators.required],
      vegetationAreaHectares: [0, Validators.required],
      plantedCrops: [[]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPlantedCrops());
  }

  onSubmit() {
    if (this.producerForm.valid) {
      const newProducer: Producer = this.producerForm.value;
      this.store.dispatch(createProducer({ producer: newProducer }));
      this.producerForm.reset();
    }
  }
}
