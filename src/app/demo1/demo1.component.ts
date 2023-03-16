import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
import { Demo2Service } from '../demo2.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

  name: string = '';
  employeeDetails: any[] =[];

  constructor(private demo2: Demo2Service) {

  }

  ngOnInit() {

  }

}
