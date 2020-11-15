import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'
import { TimeSet } from '../classes/timeSet';

@Component({
  selector: 'app-time-set',
  templateUrl: './time-set.component.html',
  styleUrls: ['./time-set.component.scss']
})
export class TimeSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TimeSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.timeSet = data.timeSet;
      if (!data.timeSet) {
        this.timeSet.setName = "";
      }
  }

  timeSet: TimeSet;

  ngOnInit() {}

  onSubmit() {
    var valid = this.timeSet.setName &&
      (this.timeSet.start || this.timeSet.start == 0) &&
      (this.timeSet.step || this.timeSet.step == 0) &&
      (this.timeSet.last || this.timeSet.last == 0) &&
      (this.timeSet.timescale || this.timeSet.timescale == 0);
    if (valid) {
      this.timeSet.recordType = "time";
      this.timeSet.intervalType = "rule";
      this.dialogRef.close(this.timeSet);
    } else {
      console.log(this.timeSet);
      this.openSnackBar("Fill out all of the required fields! *", "error-snackbar");
    }
  } 

  onCancel() {
    this.dialogRef.close();
  }

  openSnackBar(msg, bg) {
    this.snackBar.openFromComponent(SnackBarComponent, 
      {
        duration: 2000,
        panelClass: [bg],
        data: msg
      });
  }

}
