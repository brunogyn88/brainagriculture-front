import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  displayedColumns: string[] = ['producername', 'city', 'actions'];
  producers$: Observable<Producer[]>;
  dataSource: MatTableDataSource<Producer>;

  constructor(private store: Store) {
    this.producers$ = this.store.pipe(select(selectProducers));
    this.dataSource = new MatTableDataSource();
  }

  async ngOnInit(): Promise<any> {
    this.store.dispatch(loadProducers());
    await this.producers$.subscribe((producers) => {
      this.dataSource.data = producers;
    });
  }

  editarProdutor(producer: Producer): void {
    this.store.dispatch(editProducer({ producer }));
  }

  excluirProdutor(producer: Producer): void {
    this.store.dispatch(deleteProducer({ producerId: producer.id }));
  }
}
