import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { inject } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  const snackBar : MatSnackBar = inject(MatSnackBar);
  const dialog : MatDialog = inject(MatDialog);
  
  if(component.bookingForm.pristine)
    return true;
  
  //snackBar.open('You have unsaved changes!', 'DISCARD');
  let dialogRef = dialog.open(BookingDialogComponent, {height:'400px', width: '600px', panelClass: 'custom-modalbox'});
  return dialogRef.afterClosed();
  
};
