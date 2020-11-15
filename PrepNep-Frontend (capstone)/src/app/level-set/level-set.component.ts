import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'
import { LevelSet } from '../classes/levelSet';


@Component({
  selector: 'app-level-set',
  templateUrl: './level-set.component.html',
  styleUrls: ['./level-set.component.scss']
})
export class LevelSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LevelSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.levelSet = data.levelSet;
      if (data.levelSet.pressures) {
        this.levelSet.pressures = data.nonRefArr;
        this.numPressures = this.levelSet.pressures.length;
      } else {
        this.levelSet.pressures = [];
      }
  }

  Arr = Array;
  numPressures: number = 1;
  levelSet: LevelSet;
  pressuresValid: boolean;

  ngOnInit() {}

  addPressure() {
    this.numPressures++;
    this.levelSet.pressures.push();
  }

  deletePressure(index) {
    this.numPressures--;
    this.levelSet.pressures.splice(index, 1);

  }

  onSubmit() {
    // Typescript converts 0 values to false on truth checks, hence the addition of  "|| x == 0" checks
    var valid = (this.levelSet.setName &&
      (this.levelSet.start || this.levelSet.start == 0) && 
      (this.levelSet.step || this.levelSet.step == 0) && 
      (this.levelSet.last || this.levelSet.last == 0));
    if (this.levelSet.recordType == 'pressure') {
      valid = valid && ((this.numPressures == this.levelSet.pressures.length) && 
      !this.levelSet.pressures.includes(null) &&
      !this.levelSet.pressures.includes(undefined));
    }
    
    if (valid) {
      if (this.levelSet.recordType == "pressure") {
        this.levelSet.intervalType = "points";
      } else if (this.levelSet.recordType == "height") {
        this.levelSet.intervalType = "rule";
      }
      this.dialogRef.close(this.levelSet);
    } else {
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
