import { Component } from '@angular/core';
import { filter, observable, Observable } from 'rxjs';
import { EmployeeFeatureService } from '../employee-feature.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  constructor(private userService: UserServiceService) {

  }

  ngOnInit() {

   this.userService.productPromiseCall().then(x => console.log(x));
   this.userService.productObservableCall().subscribe(x => console.log(x));

   const promiseCall = new Promise(resolve => {
      resolve("Promise working");
    });


   promiseCall.then(x => console.log(x)).catch(err => console.log("err",err));
    
   const observableCall = new Observable(sub => {
      sub.next("observable working");
      sub.next("observable working1");
    });

   observableCall.pipe(filter(x => x === "observable working1")).subscribe(x => console.log(x));

  // const observableCall = new Observable(sub => {
  //   sub.next("test");
  //   sub.next("test1");
  // });

  // observableCall.subscribe((data) => console.log(data), err => console.log(err), () => console.log('completed'));


  }
}
