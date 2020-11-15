import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'
import { OutputSet } from '../classes/outputSet';

@Component({
  selector: 'app-output-set',
  templateUrl: './output-set.component.html',
  styleUrls: ['./output-set.component.scss']
})
export class OutputSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<OutputSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.outputSet = data.outputSet;
  }

  outputSet: OutputSet;
  selectedOption = '1';

  ngOnInit() {}

  onSubmit() {
    if (this.outputSet.setName && 
      this.outputSet.recordType && 
      this.outputSet.levelSet &&
      this.outputSet.variableSet &&
      this.outputSet.gridSet &&
      this.outputSet.timeSet) {
      this.dialogRef.close(this.outputSet);
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
