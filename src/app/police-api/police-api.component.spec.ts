import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceApiComponent } from './police-api.component';

describe('PoliceApiComponent', () => {
  let component: PoliceApiComponent;
  let fixture: ComponentFixture<PoliceApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceApiComponent]
    });
    fixture = TestBed.createComponent(PoliceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
