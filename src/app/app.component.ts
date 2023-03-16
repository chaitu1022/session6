import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { EmployeeDetailsService } from './employee-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeDetailsService]
})
export class AppComponent {
  title = 'session5';

  constructor(private demoService: DemoService) {
    
  }
}
