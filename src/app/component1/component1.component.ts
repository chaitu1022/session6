import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../demo.service';
import { Demo2Service } from '../demo2.service';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  timer?: Subscription;

  color: string = '';

  constructor(private demoService: DemoService, 
    private employeeDetails: EmployeeDetailsService,
    private demo: Demo2Service) {
    this.color = this.demoService.color;
  }

  ngOnInit() {
    this.demo.getLog("session 5");
    // this.demoService.getProducts()
    // .subscribe((result) => console.log(result), err => console.log(err), () => console.log('completed'));

    this.timer = this.demoService.getTimer().subscribe(data => console.log(data));

    this.demoService.getEventTrigger().subscribe(data => { if(data === "parent") {
      this.AddDetails("demo3")
    } });
  }

  OnInputChange() {
    this.demoService.onColorChange(this.color);
  }

  ngOnDestroy() {
    console.log("component 1 destroyed");
    this.timer?.unsubscribe();
  }

  
  AddDetails(data: string) {
    console.log(data);
    this.employeeDetails.addEmployee(data)
  }

}
