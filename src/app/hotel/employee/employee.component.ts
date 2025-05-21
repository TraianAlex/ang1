import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [RoomsService],
  standalone: false,
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(@Self() private roomsService: RoomsService) {
    console.log('another rooms service instance initialized');
  }

  ngOnInit(): void {}
}
