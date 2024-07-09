import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsPartComponent } from './chefs-part.component';

describe('ChefsPartComponent', () => {
  let component: ChefsPartComponent;
  let fixture: ComponentFixture<ChefsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
