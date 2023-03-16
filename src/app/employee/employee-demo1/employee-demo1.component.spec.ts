import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemo1Component } from './employee-demo1.component';

describe('EmployeeDemo1Component', () => {
  let component: EmployeeDemo1Component;
  let fixture: ComponentFixture<EmployeeDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
