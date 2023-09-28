import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerListComponent } from './producer-list.component';

describe('ProducerListComponent', () => {
  let component: ProducerListComponent;
  let fixture: ComponentFixture<ProducerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerListComponent],
      imports: [],
    });
    fixture = TestBed.createComponent(ProducerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
