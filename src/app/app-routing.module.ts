import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmployeesListComponent  } from './employees-list/employees-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {StartupComponent} from './startup/startup.component';

const routes: Routes = [
  { path: 'startup', component: StartupComponent },
  { path: 'list', component: EmployeesListComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'startup' },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
