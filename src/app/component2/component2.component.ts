import { Component, OnDestroy } from '@angular/core';
import { DemoService } from '../demo.service';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnDestroy {

  color: string = '';
  
  constructor(private demoService: DemoService, 
    private employeeDetails: EmployeeDetailsService) {
    this.color = this.demoService.color;
  }

  OnInputChange() {
    this.demoService.onColorChange(this.color);
  }

  ngOnDestroy() {
    console.log("Component 2 destoryed");
  }

  AddDetails(data: string) {
    console.log(data);
    this.employeeDetails.addEmployee(data);
  }
}
