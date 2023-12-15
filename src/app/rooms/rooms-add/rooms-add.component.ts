import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomList } from '../../Room';
import { CommonModule, JsonPipe } from '@angular/common';
import { RoomsService } from '../../services/rooms.service';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-add',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {

  constructor(private roomsService: RoomsService){}
  room :RoomList = {
    roomNumber: 0, roomType: "", amenities: "", photo: "", price: 0, checkInTime: new Date(), checkOutTime: new Date()
  };

  successMessage: string = "";

  addRoom(roomForm:NgForm)
  {
    this.roomsService.addRoom(this.room).subscribe(data=>{
      this.successMessage="room added"; 
      console.log(data);
      roomForm.reset();

    })
  }
}
 