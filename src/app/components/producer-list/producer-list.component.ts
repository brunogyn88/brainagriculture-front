import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Producer } from 'src/app/models/producer.model';
import {
  deleteProducer,
  editProducer,
  loadProducers,
} from 'src/app/state/producer/producer.actions';
import { selectProducers } from 'src/app/state/producer/producer.selectors';

@Component({
  selector: 'app-producer-list',
  templateUrl: './producer-list.component.html',
  styleUrls: ['./producer-list.component.scss'],
})
export class ProducerListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'actions'];
  producers$ = this.store.pipe(select(selectProducers));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducers());
    console.log(this.producers$);
  }

  editarProdutor(producer: Producer): void {
    this.store.dispatch(editProducer({ producer }));
  }

  excluirProdutor(producer: Producer): void {
    this.store.dispatch(deleteProducer({ producerId: producer.id }));
  }
}
