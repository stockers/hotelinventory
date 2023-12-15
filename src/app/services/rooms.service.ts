import { Injectable } from '@angular/core';
import { RoomList } from '../Room';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http : HttpClient) { }
  roomList : RoomList [] = [
      { roomNumber : 1,
              roomType : "Delux",
    amenities: 'Air con, free wifi, tv, bathroom, kitchen',
    price: 500,
    photo: 'https://th.bing.com/th?id=OIP.o8NJAa6_NZ1VI7xYZsjaqgHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    checkInTime: new Date("11-Dec-2023"),
    checkOutTime: new Date("12-Dec-2023")
  },
  { 
    roomNumber : 2,
    roomType : "Basic",
    amenities: 'tv, bathroom',
    price: 500,
    photo: 'https://th.bing.com/th?id=OIP.o8NJAa6_NZ1VI7xYZsjaqgHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    checkInTime: new Date("11-Dec-2023"),
    checkOutTime: new Date("12-Dec-2023")
  },
  { roomNumber : 4,
    roomType : "Private",
    amenities: 'tv, bathroom, lounge, kitchen',
    price: 500,
    photo: 'https://th.bing.com/th?id=OIP.o8NJAa6_NZ1VI7xYZsjaqgHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    checkInTime: new Date("11-Dec-2023"),
    checkOutTime: new Date("12-Dec-2023")
  }
    ];

    getRooms()  { //: Observable<RoomList[]>
      //return this.roomList;
      const headers = new HttpHeaders({'token':'34857fjh8u9f48f89j', 'x':'y'})
      return this.http.get<RoomList[]>('/rooms', {headers: headers});
    }

    addRoom(room :RoomList) {
      return this.http.post<RoomList[]>('/rooms',room);
    }

    editRoom(room:RoomList)  {
      return this.http.put<RoomList[]>('/rooms', room);
    }

    patchRoom(id : number,room:RoomList)  {      
      return this.http.patch<RoomList[]>(`/rooms/${id}`, room);
    }

    deleteRoom(id : number)  {      
      return this.http.delete<RoomList[]>(`/rooms/${id}`);
    }

    getPhotos() {
      const request =  new HttpRequest(
        'GET',
        'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=1000',
        { reportProgress: true }
      );   
      return this.http.request(request);
    }

}
