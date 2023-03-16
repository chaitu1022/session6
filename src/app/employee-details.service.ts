import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeDetailsService {

  private employeeDetails: string[] = [];

  constructor() { 
    console.log("Employee details instance created");
  }


  addEmployee(emp: string) {
    this.employeeDetails.push(emp);
    console.log(this.employeeDetails);
  }


  getEmployee(): string[] {
    return this.employeeDetails;
  }

}
