import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [RoomsService]
})
export class EmployeeComponent  implements OnInit {
  employeeName: string = "John";

  constructor(@Self() private roomsService: RoomsService){}

  ngOnInit() : void {

  }
}
