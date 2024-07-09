import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPartComponent } from './reservation-part.component';

describe('ReservationPartComponent', () => {
  let component: ReservationPartComponent;
  let fixture: ComponentFixture<ReservationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
