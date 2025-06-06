import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  providers: [RoomsService],
  standalone: false,
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host() private roomsService: RoomsService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    //console.log(this.employee);
    this.employee.empName = 'John Doe';
  }
}
