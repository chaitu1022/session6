import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDemo1Component } from './employee-demo1/employee-demo1.component';
import { EmployeeDemo2Component } from './employee-demo2/employee-demo2.component';
import { Route, RouterModule } from '@angular/router';
import { EmployeeFeatureService } from '../employee-feature.service';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'employee-demo1'},
  {path: 'employee-demo1', component: EmployeeDemo1Component}
];

@NgModule({
  declarations: [
    EmployeeDemo1Component,
    EmployeeDemo2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [EmployeeFeatureService]
})
export class EmployeeModule { }
