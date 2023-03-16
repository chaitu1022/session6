import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEntryComponent } from './payroll-entry.component';

describe('PayrollEntryComponent', () => {
  let component: PayrollEntryComponent;
  let fixture: ComponentFixture<PayrollEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
