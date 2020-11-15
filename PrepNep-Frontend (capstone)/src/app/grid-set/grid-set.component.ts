import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'
import { GridSet } from '../classes/gridSet';

@Component({
  selector: 'app-grid-set',
  templateUrl: './grid-set.component.html',
  styleUrls: ['./grid-set.component.scss']
})
export class GridSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GridSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.gridSet = data.gridSet;
      if (!this.gridSet) {
        this.gridSet.setName = "";
      }
  }

  gridSet: GridSet;

  ngOnInit() {}

  onSubmit() {
    var valid = this.gridSet.setName &&
      this.gridSet.gridType &&
      (this.gridSet.spacing || this.gridSet.spacing == 0);
    if (valid) {
      this.gridSet.recordType == "grid";
      this.dialogRef.close(this.gridSet);
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
