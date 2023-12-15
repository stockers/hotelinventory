import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAddComponent } from './rooms-add.component';

import { RoomsService } from '../../services/rooms.service';
import { Observable } from 'rxjs';
import { RoomList } from '../../Room';
import { NgForm } from '@angular/forms';


// Create a mock class that extends the service class
// should be in a separate and reusable class I expect
class MockRoomsService /*extends RoomsService*/ {
  // Override the method or property that you want to mock
   getRooms() : Observable<RoomList[]> {   
    return new Observable<RoomList[]>(stream=>{
      stream.next(
        [
          {
            roomNumber: 3,
            roomType: "roomType",
            amenities: "a lovely bathroom",
            price: 666,
            photo: "no valid url",
            checkInTime : new Date("2023-12-15"),
            checkOutTime: new Date("2023-12-16")
          }
        ]
      ); stream.complete;
    });
  }

  addRoom(room: RoomList) : Observable<RoomList[]>{   
    return new Observable<RoomList[]>(stream=>{
      stream.next(
        [
          {
            roomNumber: 3,
            roomType: "roomType",
            amenities: "a lovely bathroom",
            price: 666,
            photo: "no valid url",
            checkInTime : new Date("2023-12-15"),
            checkOutTime: new Date("2023-12-16")
          },
          room // include the newly added room in the list
        ]
      ); stream.complete;
    });
  }
}

describe('RoomsAddComponent', () => {
  let component: RoomsAddComponent;
  let fixture: ComponentFixture<RoomsAddComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsAddComponent],      
      providers:[ {provide: RoomsService, useClass: MockRoomsService}] // Mock the RoomsService class
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add room', () => {
    //test with some form data
    const testForm = <NgForm> {
      value: {
        roomNumber: 0, roomType: "", amenities: "", photo: "", price: 0, checkInTime: new Date(), checkOutTime: new Date()
      }
    };
    let resetCalled : Boolean = false;
    testForm.reset = () => { resetCalled = true;}; // mock the reset method

    component.addRoom(testForm);
    expect(component.successMessage).toBe('room added');
    expect(resetCalled).toBe(true);
    

  });
});
