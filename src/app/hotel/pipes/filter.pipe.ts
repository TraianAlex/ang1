import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Pipe({
    name: 'filter',
    standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(rooms: RoomList[], price: number): RoomList[] {
    return rooms.filter((room) => room.price >= price);
  }
}
