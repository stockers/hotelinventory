import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { RoomList } from '../../Room';
import { RouterModule } from '@angular/router';
import { FilterPipe } from "../filter.pipe";

@Component({
    selector: 'hinv-rooms-list',
    standalone: true,
    templateUrl: './rooms-list.component.html',
    styleUrl: './rooms-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, FilterPipe]
})
export class RoomsListComponent implements OnChanges, OnInit, OnDestroy{
  @Input() roomList: RoomList[] = []; // rooms becomes an attribute of <hinv-rooms-list roomList=...>
  @Input() title: string = "";
  @Input() price: number = 1000;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  bookRoom(room: RoomList) {
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit() {
    console.log('rooms-list.component OnInit() called');
  }
  ngOnDestroy() {
    console.log("rooms component - on destroy!");
  }
}
