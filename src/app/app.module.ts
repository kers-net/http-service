import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpService } from './Services/http-service.service';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeItemComponent } from './presentational/employee-item/employee-item.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StartupComponent } from './startup/startup.component';
import { NotfoundComponent } from './notfound/notfound.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeItemComponent,
    EmployeeDetailsComponent,
    StartupComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
