import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  roomNumber : number = 0;
  ngOnInit() {
    //console.log(this.router.url);
    //console.log(this.router.url.split('/')[2]);
    //this.roomNumber = this.router.url.split('/')[2]);
    //this.roomNumber = parseInt(this.router.url.split('/')[2]);  
    this.router.params.subscribe(p=>{console.log(p);this.roomNumber = p['id'];})
    //this.roomNumber =this.router.snapshot.params['id']; // to avoid subscribe

  }


}
