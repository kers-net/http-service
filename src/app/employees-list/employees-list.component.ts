import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.interface';
import { HttpService } from '../Services/http-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  greeting: string;
  employees : Employee[];
  empId: number;
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.greeting = this.httpService.sayHi();
    this.httpService.getAllEmployees().subscribe(
      (result) => this.employees = result,
      (error) => console.log('Error', error),
      () => console.log("Completed")
    );

  }

  showDetails(e)
  {
    this.empId = e;
  }

}
