import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  details: string[] = [];

  constructor(private employeeDetails: EmployeeDetailsService, private demoService: DemoService) {

  }

  ngOnInit() {
    this.details = this.employeeDetails.getEmployee();
  }

  ngOnDestory() {
    console.log("component 3 destroyed");
  }

  setEvent() {
    this.demoService.setValueToEvent("Component3")
  }
}
