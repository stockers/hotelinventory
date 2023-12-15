import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hinv-booking-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule],
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.css'
})
export class BookingDialogComponent {
  constructor(public dialogRef: MatDialogRef<BookingDialogComponent>) { }

  onOk() {
    this.dialogRef.close(true); // closes dialog returning true
  }
  onCancel() {
    this.dialogRef.close(false);  // closes dialog returning false
  }
}
