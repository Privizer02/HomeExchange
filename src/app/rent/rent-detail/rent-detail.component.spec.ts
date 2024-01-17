import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDetailComponent } from './rent-detail.component';

describe('RentDetailComponent', () => {
  let component: RentDetailComponent;
  let fixture: ComponentFixture<RentDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentDetailComponent]
    });
    fixture = TestBed.createComponent(RentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
