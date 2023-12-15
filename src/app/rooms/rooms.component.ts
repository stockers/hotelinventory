import { Component, OnInit, DoCheck, ViewChild, ViewChildren, AfterViewInit, AfterViewChecked, QueryList} from '@angular/core';
import { Room } from './../Room';
import { RoomList } from './../Room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
//import { HeaderComponent } from './../header/header.component';
import { RoomsService } from '../services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule,RoomsListComponent,RouterOutlet,RouterLink,ReactiveFormsModule], //HeaderComponent
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
//  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
//  @ViewChildren(HeaderComponent) headerChildComponents!: QueryList<HeaderComponent>;
  constructor(private roomsService: RoomsService) { /* only for injecting services, no blocking code */}
  priceFilter = new FormControl();
  
  stream = new Observable(observer=>{
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  //	observer.error('error'); // raises an exception
  });

  roomList : RoomList [] = [];
  //roomsService : RoomsService = new RoomsService();
  
  ngDoCheck() { // any cahnges anywhere in the application - so costly! Don't use both OnCHanges and OnDoCheck
    console.log('on do check is called');
  };
  ngAfterViewInit() {
    //this.headerComponent.title ="Rooms View is set!";
    //console.log(this.headerComponent);
    //console.log('header child components...');
    //console.log(this.headerChildComponents);
    //let counter: number = 0;
    //this.headerChildComponents.forEach(item => {
    //  item.title = "set the title " + counter++;
    //});
    //this.headerChildComponents.last.title = "last title!";
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngOnInit() { /* can get data from back end APIs in here */
//    console.log(this.headerComponent);
//    console.log('got service injected');
    this.stream.subscribe( { 
        next: (value) => console.log(value),
        complete: () => console.log('complete'),
        error: (err) => console.log(err) 
      });


    //this.roomList = this.roomsService.getRooms();   
    let x = this.roomsService.getRooms();
    x.subscribe(data=>{ 
      this.roomList = data
    });
  }

  rooms: Room ={
      totalRooms:20, availableRooms:3,bookedRooms:5
  };
   
  title : string = "Room List";
  hotelName : string = 'Hilton Hotel';
  numberOfRooms : number = 50;
  hideRooms : boolean = true;
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Updated Room List";

  }
  up() {
    this.rooms.availableRooms++ ;
  }
  down() {
    this.rooms.availableRooms --;
  }

  selectRoom(room: RoomList)
  {
    console.log(room);
    this.selectedRoom = room;
  }

  selectedRoom! : RoomList;

  patchRoom() {
    alert('patch!');
    const room : RoomList = {
      roomNumber:4,
      roomType:"flappy",
      amenities:"dammit",
      price: 777,
      photo: "https://th.bing.com/th/id/OIP.rq_Pcvh5RvRMQNnl2xEhvgAAAA?w=138&h=180&c=7&r=0&o=5&pid=1.7",
      checkInTime: new Date("11-12-2023"),
      checkOutTime: new Date("12-12-2023"),
    }
    this.roomsService.patchRoom(room.roomNumber, room).subscribe(data=> {alert('patched!'); this.roomList = data});
  }

  editRoom() {
    alert('edit!');
    const room : RoomList = {
      roomNumber:4,
      roomType:"Hyper Deluxe",
      amenities:"Big fat smelly fannies!",
      price: 666,
      photo: "https://th.bing.com/th/id/OIP.rq_Pcvh5RvRMQNnl2xEhvgAAAA?w=138&h=180&c=7&r=0&o=5&pid=1.7",
      checkInTime: new Date("11-12-2023"),
      checkOutTime: new Date("12-12-2023"),
    }
    this.roomsService.editRoom(room).subscribe(data=> {alert('edited!');this.roomList = data});    
  }

  addRoom() {
    const room : RoomList = {
      roomNumber:4,
      roomType:"Deluxe",
      amenities:"Air Conditioner, Free Wifi, Kitchen",
      price: 600,
      photo: "https://www.bing.com/th?id=OIP.R2wr6lqRKjMULIM5FRcymgHaK5&w=120&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      checkInTime: new Date("11-12-2023"),
      checkOutTime: new Date("12-12-2023"),
    }
    //this.roomList.push(room); // add record to existing list instance
    //this.roomList = [...this.roomList, room]; // create new list instance with added record
    this.roomsService.addRoom(room).subscribe(data=> this.roomList = data);
    }

    deleteRoom() {
      let roomNumber = 4;
      this.roomsService.deleteRoom(roomNumber).subscribe({ 
          next: (data) => this.roomList = data,
          error: (err) => alert(err.statusText)
        }
      );

    }

    public totalBytes : number = 0;
    getPhotos()
    {
      let totalBytes = 0;
      this.roomsService.getPhotos().subscribe((event)=>{
        switch(event.type) {
          case HttpEventType.Sent: {
            console.log('Request has been sent');
            break;
          }
          case HttpEventType.ResponseHeader: {
            console.log('Request success');
            break;
          }
          case HttpEventType.DownloadProgress: {
            this.totalBytes += event.loaded;
            break;
          }
          case HttpEventType.Response: {
            console.log('Request complete');
            console.log(event.body);
          }

        }
      });
    }



}
