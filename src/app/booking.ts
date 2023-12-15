export class BookingDTO {
    bookingId : string = "";
    roomId : string = "";
    guestEmail : string = "";
    checkInDate : Date = new Date();
    checkOutDate : Date = new Date();
    bookingStatus : string = "";
    bookingAmount : number = 0;
    bookingDate : Date = new Date();
    mobileNumber : string = "";
    guestName : string = "";
    guestAddress : string = "";
    guestTown : string = "";
    guestCounty : string = "";
    guestPostcode : string = "";
}