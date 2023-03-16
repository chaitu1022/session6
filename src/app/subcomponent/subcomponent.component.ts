import { Component, Input } from '@angular/core';
import { DemoService } from '../demo.service';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent {

  @Input() someInfo: string = "";

  constructor(private employeeDetails: EmployeeDetailsService, 
     private demoService: DemoService) {
    console.log("Child Construcor");
    console.log("logging happen in constructor --- ", this.someInfo);
    console.log(this.employeeDetails.getEmployee())
  }

  ngOnInit() {
    this.demoService.getEventTrigger().subscribe(data => { console.log(data) });
    console.log("Child ngOninit");
    console.log("logging happen in initalization ----", this.someInfo);
  }

}
