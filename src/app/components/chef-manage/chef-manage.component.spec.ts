import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefManageComponent } from './chef-manage.component';

describe('ChefManageComponent', () => {
  let component: ChefManageComponent;
  let fixture: ComponentFixture<ChefManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
