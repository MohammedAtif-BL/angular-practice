import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor (private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees =>{
      console.log(employees);
    })
  }

  handleSubmit(){
    const data = {
      name:"Sample",
      note:"asdf",
      salary:90003534,
      gender:"Male",
      doj:"2024-01-01",
      department:["Cricket","ABC"],
    }
    this.employeeService.addEmployee(data).subscribe(response =>{
      console.log(response);
      
    })
  }

}
