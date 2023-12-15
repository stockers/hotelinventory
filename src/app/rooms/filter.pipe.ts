import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../Room';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[], price : number): RoomList[] {
    return rooms.filter((room)=>room.price >= price);
  }

}
