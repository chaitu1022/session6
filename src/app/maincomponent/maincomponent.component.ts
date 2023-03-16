import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css'],
  providers: [EmployeeDetailsService]
})
export class MaincomponentComponent {

  constructor(private empDetails: EmployeeDetailsService, private demoService: DemoService) {
    console.log(this.empDetails.getEmployee());
    console.log("main constructor");
  }

  ngOnInit() {
    console.log("main ngOninit");
    this.demoService.getEventTrigger().subscribe(data => { console.log(data) });
  }
}
