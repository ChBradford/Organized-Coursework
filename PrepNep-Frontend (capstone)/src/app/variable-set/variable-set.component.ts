import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'
import { VariableSet } from '../classes/variableSet';


@Component({
  selector: 'app-variable-set',
  templateUrl: './variable-set.component.html',
  styleUrls: ['./variable-set.component.scss']
})
export class VariableSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<VariableSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.variableSet = data.variableSet;
      if (data.variableSet.variables) {
        this.variableSet.variables = data.nonRefArr;
        this.numVariables = this.variableSet.variables.length;
      } else {
        this.variableSet.variables = [];
      }
  }

  Arr = Array;
  numVariables: number = 1;
  variableSet: VariableSet;
  variablesValid: boolean;

  ngOnInit() {}

  addVariable() {
    this.numVariables++;
    this.variableSet.variables.push();
  }

  deleteVariable(index) {
    this.numVariables--;
    this.variableSet.variables.splice(index, 1);

  }

  onSubmit() {
    var valid = this.variableSet.setName &&
      (this.numVariables == this.variableSet.variables.length) && 
      !this.variableSet.variables.includes(undefined) && !this.variableSet.variables.includes("");
    if (valid) {
      this.variableSet.recordType = "varset";
      this.dialogRef.close(this.variableSet);
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
