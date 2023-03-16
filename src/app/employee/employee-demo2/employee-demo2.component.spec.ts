import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemo2Component } from './employee-demo2.component';

describe('EmployeeDemo2Component', () => {
  let component: EmployeeDemo2Component;
  let fixture: ComponentFixture<EmployeeDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
