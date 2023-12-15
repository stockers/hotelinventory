import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from '../validators/custom-validator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'hinv-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  bookingForm!: FormGroup;
  resetBookingForm!: unknown;
  panelOpenState : Boolean = false;
  updateCounter : number = 0;
  constructor(private fb: FormBuilder, private bookingService: BookingService, private activatedRoute : ActivatedRoute ) {}

  guests! : FormArray;

  addGuest() {
    console.log("add guest");
    this.guests.push(this.fb.group({ guestName: [''], age: new FormControl(''),}));    

  }
  addBooking() {
    console.log(this.bookingForm.getRawValue()); // use getRawValue to get also the values of any disabled controls in the form
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe(data=>console.log(data));
    //this.bookingForm.reset(this.resetBookingForm);

  }

  addPassport() {
    this.bookingForm.addControl('passport', 
    new FormControl(
      {value:'00000000', disabled: false} , {validators: [Validators.required, Validators.minLength(8)]}
    ));
  }
  removePassport(){
    this.bookingForm.removeControl('passport');
  }
  removeGuest(i: number){
    this.guests.removeAt(i);
  }
  ngOnInit(){    
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookingForm = this.fb.group({
      roomId : new FormControl({value:id,disabled:true}),
      guestEmail :  ['',[Validators.required, Validators.minLength(5)]],
      checkInDate :  '',
      checkOutDate :  '',
      bookingStatus :  ['',{updateOn:'blur', validators:[Validators.required]}],
      bookingAmount :  '',
      bookingDate :  '',
      mobileNumber :  '',
      guestName :  ['', [CustomValidator.validateName, CustomValidator.validateSpecialChar("*")]],
      address: this.fb.group({
        guestAddress :  ['', [Validators.required]],
        guestTown :  '',
        guestCounty :  '',
        guestPostcode :  ''
      }),
      guests: this.fb.array([this.fb.group({ guestName: ['', Validators.required], age: new FormControl(''),})]),
      tnc: ['', [Validators.requiredTrue]]
    }, {updateOn: 'blur', validators: [CustomValidator.validateDates]});
    this.guests = this.bookingForm.get('guests') as FormArray;

    // two subscribe
    //this.bookingForm.valueChanges.subscribe(data=>{console.log("valueChange");this.bookingService.bookRoom(data).subscribe(data=>console.log("post response"))}); // not great
    // one subscribe
    this.bookingForm.valueChanges.pipe(exhaustMap(data=>{console.log("valueChange:"+ this.updateCounter);this.updateCounter++;return this.bookingService.bookRoom(data)})).subscribe(data=>console.log(data)); 
// mergMap - will pass on requests as they complete through the pipeline, even if out of sequence
// switchMap - will cancel any existing requests if it receives new data in pipeline (i.e. only latest data to be passed on in pipeline)
// exhaustMap - will wait for existing requests to complete before passing on data in pipeline in sequence
       
/*     this.bookingForm.patchValue({
      roomId : '7',
      guestEmail : 'jj@thing.com'}); */

    this.resetBookingForm = {
      roomId : '',
      guestEmail : '',
      checkInDate :  '',
      checkOutDate :  '',
      bookingStatus :  '',
      bookingAmount :  '',
      bookingDate :  '',
      mobileNumber :  '',
      guestName :  '',
      address: {
        guestAddress :  '',
        guestTown :  '',
        guestCounty :  '',
        guestPostcode :  ''
      },
      guests: [], //this.fb.array([this.fb.group({ guestName: [''], age: new FormControl(''),})]),
      tnc: ''
    }

    
  }


}


