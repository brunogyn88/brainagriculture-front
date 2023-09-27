// producer-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Producer } from 'src/app/models/producer.model';
import { addProducer } from 'src/app/state/producer/producer.actions';

@Component({
  selector: 'app-producer-form',
  templateUrl: './producer-form.component.html',
  styleUrls: ['./producer-form.component.scss'],
})
export class ProducerFormComponent {
  producerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.producerForm = this.formBuilder.group({
      cpfCnpj: ['', Validators.required],
      name: ['', Validators.required],
      farmName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      totalArea: [0, Validators.required],
      agriculturalArea: [0, Validators.required],
      vegetationArea: [0, Validators.required],
      crops: [[]], // You can use a multi-select component or other form control for selecting multiple crops
    });
  }

  onSubmit() {
    if (this.producerForm.valid) {
      const newProducer: Producer = this.producerForm.value;
      this.store.dispatch(addProducer({ producer: newProducer }));
      this.producerForm.reset();
    }
  }
}
