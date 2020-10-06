import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.interface';
import { HttpService } from '../Services/http-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges {

@Input() employeeId: number;
  employee : Employee;

  constructor(private _http:HttpService, private route: ActivatedRoute) {
    this.employeeId = Number( this.route.snapshot.paramMap.get("id"));

    this._http.getEmployee(this.employeeId).subscribe(
      (res) => this.employee = res,
    );

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.employeeId && this.employeeId > 0){
      this._http.getEmployee(this.employeeId).subscribe(
        (res) => this.employee = res,
      );
    }
  }

  ngOnInit(): void {}

}
