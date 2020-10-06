import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
   @Input() employee: Employee;
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked()
  {
    this.showDetails.emit(this.employee.id);
  }

}
