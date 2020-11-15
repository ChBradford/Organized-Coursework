import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatDialog,
  MatDialogConfig
} from '@angular/material'
import { SnackBarComponent } from './snack-bar/snack-bar.component'
import { LevelSetComponent } from './level-set/level-set.component'
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';
import { OutputSetComponent } from './output-set/output-set.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LevelSet } from './classes/levelSet';
import { VariableSet } from './classes/variableSet';
import { GridSet } from './classes/gridSet';
import { TimeSet } from './classes/timeSet';
declare function exportFilej(sets, levelset, variablesets, gridsets, timesets, nelxy, nelz, nop, deltat, physics): any;
import { OutputSet } from './classes/outputSet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //Testing Sets
    var ls1 = new LevelSet();
    ls1.setName = "Level Set 1";
    ls1.recordType = "pressure";
    ls1.intervalType = "points";
    ls1.pressures = [100, 200, 300];
    ls1.start = 10;
    ls1.step = 5;
    ls1.last = 50;
    this.levelSets.push(ls1);
    var ls2 = new LevelSet();
    ls2.setName = "Level Set 2";
    ls2.recordType = "height";
    ls2.intervalType = "rule";
    ls2.start = 0;
    ls2.step = 500;
    ls2.last = 5000;
    this.levelSets.push(ls2);
    var vs1 = new VariableSet();
    vs1.setName = "Variable Set 1";
    vs1.recordType = "varset";
    vs1.variables = ["u", "v", "w", "temperature"];
    this.variableSets.push(vs1);
    var vs2 = new VariableSet();
    vs2.setName = "Variable Set 2";
    vs2.recordType = "varset";
    vs2.variables = ["u", "v", "heights", "totprep"];
    this.variableSets.push(vs2);
    var gs1 = new GridSet();
    gs1.setName = "Grid Set 1";
    gs1.recordType = "grid";
    gs1.gridType = "latlon";
    gs1.spacing = 1;
    this.gridSets.push(gs1);
    var ts1 = new TimeSet();
    ts1.setName = "Time Set 1";
    ts1.recordType = "time";
    ts1.intervalType = "rule";
    ts1.start = 0;
    ts1.step = 15;
    ts1.last = 3600;
    ts1.timescale = 60;
    this.timeSets.push(ts1);
    var ts2 = new TimeSet();
    ts2.setName = "Time Set 2";
    ts2.recordType = "time";
    ts2.intervalType = "rule";
    ts2.start = 0;
    ts2.step = 3;
    ts2.last = 120;
    ts2.timescale = 3600;
    this.timeSets.push(ts2);
  }

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  title = 'PrepNep-Frontend';

  nop: number;
  nel_xy: number;
  nel_z: number;
  delta_t: number;
  physics: string;

  LEVEL: string = "Level";
  VARIABLE: string = "Variable";
  GRID: string = "Grid";
  TIME: string = "Time";
  OUTPUT: string = "Output";

  pickedLevelSet : LevelSet = null;
  pickedVariableSet : VariableSet = null;
  pickedGridSet : GridSet = null;
  pickedTimeSet : TimeSet = null;
  levelSets : LevelSet[] = [];
  variableSets : VariableSet[] = [];
  gridSets : GridSet[] = [];
  timeSets : TimeSet[] = [];
  outputSets : OutputSet[] = [];

  createSet(setType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //save form depending on type of form, all are almost basically the same
    if (setType == this.LEVEL) {
      dialogConfig.data = {
        numLevelSets:  this.levelSets.length,
        levelSet: new LevelSet()
      }
      const dialogRef = this.dialog.open(LevelSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.levelSets.push(data);
              this.openSnackBar("Level Set: " + data.setName + " created!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.VARIABLE) {
      dialogConfig.data = {
        numVariableSets:  this.variableSets.length,
        variableSet: new VariableSet()
      }
      const dialogRef = this.dialog.open(VariableSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.variableSets.push(data);
              this.openSnackBar("Variable Set: " + data.setName + " created!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.GRID) {
      dialogConfig.data = {
        numGridSets:  this.gridSets.length,
        gridSet: new GridSet()
      }
      const dialogRef = this.dialog.open(GridSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.gridSets.push(data);
              this.openSnackBar("Grid Set: " + data.setName + " created!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.TIME) {
      dialogConfig.data = {
        numTimeSets:  this.timeSets.length,
        timeSet: new TimeSet()
      }
      const dialogRef = this.dialog.open(TimeSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.timeSets.push(data);
              this.openSnackBar("Time Set: " + data.setName + " created!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.OUTPUT) {
      if (this.pickedLevelSet && this.pickedVariableSet && this.pickedGridSet && this.pickedTimeSet) {
        var tempOutputSet = new OutputSet();
        tempOutputSet.setName = "";
        tempOutputSet.recordType = "outstream";
        tempOutputSet.levelSet = this.pickedLevelSet;
        tempOutputSet.variableSet = this.pickedVariableSet;
        tempOutputSet.gridSet = this.pickedGridSet;
        tempOutputSet.timeSet = this.pickedTimeSet;
        dialogConfig.data = {
          numOutputSets:  this.outputSets.length,
          outputSet: tempOutputSet,
          levelSets: this.levelSets,
          variableSets: this.variableSets,
          gridSets: this.gridSets,
          timeSets: this.timeSets
        }
        const dialogRef = this.dialog.open(OutputSetComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
            ? (() => {
              this.outputSets.push(data);
              this.openSnackBar("Output Set: " + data.setName + " created!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
        );
      } else {
        this.openSnackBar("At least 1 set from each box is required to make an output set!", "error-snackbar");
      }
    } else {
      console.log("That input set type does not exist!")
    }
  }

  editSet(setType, index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //save form depending on type of form
    if (setType == this.LEVEL) {
      var sepArr;
      if (this.levelSets[index].pressures) {
        sepArr = [...this.levelSets[index].pressures];
      } else {
        sepArr = null;
      }
      dialogConfig.data = {
        numLevelSets:  this.levelSets.length,
        levelSet: Object.assign({}, this.levelSets[index]),
        nonRefArr: sepArr
      }
      const dialogRef = this.dialog.open(LevelSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.levelSets.splice(index, 1, data);
              this.openSnackBar("Level Set: " + this.levelSets[index].setName + " edited!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.VARIABLE) {
      dialogConfig.data = {
        numVariableSets:  this.variableSets.length,
        variableSet: Object.assign({}, this.variableSets[index]),
        nonRefArr: [...this.variableSets[index].variables]
      }
      const dialogRef = this.dialog.open(VariableSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.variableSets.splice(index, 1, data);
              this.openSnackBar("Variable Set: " + this.variableSets[index].setName + " edited!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.GRID) {
      dialogConfig.data = {
        numGridSets:  this.gridSets.length,
        gridSet: Object.assign({}, this.gridSets[index])
      }
      const dialogRef = this.dialog.open(GridSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.gridSets.splice(index, 1, data);
              this.openSnackBar("Grid Set: " + this.gridSets[index].setName + " edited!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.TIME) {
      dialogConfig.data = {
        numTimeSets:  this.timeSets.length,
        timeSet: Object.assign({}, this.timeSets[index])
      }
      const dialogRef = this.dialog.open(TimeSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data)
            ? (() => {
              this.timeSets.splice(index, 1, data);
              this.openSnackBar("Time Set: " + this.timeSets[index].setName + " edited!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
      );
    } else if (setType == this.OUTPUT) {
        dialogConfig.data = {
          numOutputSets:  this.outputSets.length,
          outputSet: Object.assign({}, this.outputSets[index]),
          levelSets: this.levelSets,
          variableSets: this.variableSets,
          gridSets: this.gridSets,
          timeSets: this.timeSets
        }
        const dialogRef = this.dialog.open(OutputSetComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
            ? (() => {
              this.outputSets.splice(index, 1, data);
              this.openSnackBar("Output Set: " + this.outputSets[index].setName + " edited!", "successful-snackbar");
             })()
            : console.log("Form cancelled.")
        );
    } else {
      console.log("That input set type does not exist!")
    }
  }

  deleteSet(setType, index) {
    var outputSet;
    var affectedOutputSets = [];
    var affectedOutputSetNames = [];
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    if (setType == "Level") {
      for (outputSet of this.outputSets) {
        if (this.levelSets[index] === outputSet.levelSet) {
          affectedOutputSets.push(outputSet);
          affectedOutputSetNames.push(outputSet.setName);
        }
      }
      if (affectedOutputSets.length > 0) {
        var content = "These output sets:<br><strong>" + affectedOutputSetNames.toString().replace(/,/g, ', ') +
        "</strong><br>are using the set you are trying to delete.<br>If you delete this set the output sets will be deleted as well.<br>" +
        "If you want to delete this set but not the output sets, then click the<br>'Cancel' button and edit the output sets "+
        "so they no longer use this set. <br>If you would still like to continue then click 'Continue Deletion'";
        var confirmButtonText = "Continue Deletion";
        var cancelButtonText = "Cancel";
        dialogConfig.data = {
          content: content,
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
        }
        const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
              ? (() => {
                this.openSnackBar("Level Set: " + this.levelSets[index].setName + " and Output Set(s): " + 
                affectedOutputSets.toString().replace(/,/g, ', ') + " deleted!", "error-snackbar");
                this.levelSets.splice(index, 1);
                for (outputSet of affectedOutputSets) {
                  console.log(this.outputSets);
                  console.log(outputSet);
                  console.log(this.outputSets.indexOf(outputSet));
                  this.outputSets.splice(this.outputSets.indexOf(outputSet), 1);
                }
               })()
              : console.log("Form cancelled.")
        );
      } else {
        this.openSnackBar("Level Set: " + this.levelSets[index].setName + " deleted!", "error-snackbar");
        this.levelSets.splice(index, 1);
      }
    } else if (setType =="Variable") {
      for (outputSet of this.outputSets) {
        if (this.variableSets[index] === outputSet.variableSet) {
          affectedOutputSets.push(outputSet);
          affectedOutputSetNames.push(outputSet.setName);
        }
      }
      if (affectedOutputSets.length > 0) {
        var content = "These output sets:<br><strong>" + affectedOutputSetNames.toString().replace(/,/g, ', ') +
        "</strong><br>are using the set you are trying to delete.<br>If you delete this set the output sets will be deleted as well.<br>" +
        "If you want to delete this set but not the output sets, then click the<br>'Cancel' button and edit the output sets "+
        "so they no longer use this set. <br>If you would still like to continue then click 'Continue Deletion'";
        var confirmButtonText = "Continue Deletion";
        var cancelButtonText = "Cancel";
        dialogConfig.data = {
          content: content,
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
        }
        const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
              ? (() => {
                this.openSnackBar("Variable Set: " + this.variableSets[index].setName + " and Output Set(s): " + 
                affectedOutputSets.toString().replace(/,/g, ', ') + " deleted!", "error-snackbar");
                this.variableSets.splice(index, 1);
                for (outputSet of affectedOutputSets) {
                  console.log(this.outputSets);
                  console.log(outputSet);
                  console.log(this.outputSets.indexOf(outputSet));
                  this.outputSets.splice(this.outputSets.indexOf(outputSet), 1);
                }
               })()
              : console.log("Form cancelled.")
        );
      } else {
        this.openSnackBar("Variable Set: " + this.variableSets[index].setName + " deleted!", "error-snackbar");
        this.variableSets.splice(index, 1);
      }
    } else if (setType == "Grid") {
      for (outputSet of this.outputSets) {
        if (this.gridSets[index] === outputSet.gridSet) {
          affectedOutputSets.push(outputSet);
          affectedOutputSetNames.push(outputSet.setName);
        }
      }
      if (affectedOutputSets.length > 0) {
        var content = "These output sets:<br><strong>" + affectedOutputSetNames.toString().replace(/,/g, ', ') +
        "</strong><br>are using the set you are trying to delete.<br>If you delete this set the output sets will be deleted as well.<br>" +
        "If you want to delete this set but not the output sets, then click the<br>'Cancel' button and edit the output sets "+
        "so they no longer use this set. <br>If you would still like to continue then click 'Continue Deletion'";
        var confirmButtonText = "Continue Deletion";
        var cancelButtonText = "Cancel";
        dialogConfig.data = {
          content: content,
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
        }
        const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
              ? (() => {
                this.openSnackBar("Grid Set: " + this.gridSets[index].setName + " and Output Set(s): " + 
                affectedOutputSets.toString().replace(/,/g, ', ') + " deleted!", "error-snackbar");
                this.gridSets.splice(index, 1);
                for (outputSet of affectedOutputSets) {
                  console.log(this.outputSets);
                  console.log(outputSet);
                  console.log(this.outputSets.indexOf(outputSet));
                  this.outputSets.splice(this.outputSets.indexOf(outputSet), 1);
                }
               })()
              : console.log("Form cancelled.")
        );
      } else {
        this.openSnackBar("Grid Set: " + this.gridSets[index].setName + " deleted!", "error-snackbar");
        this.gridSets.splice(index, 1);
      }
    } else if (setType == "Time") {
      for (outputSet of this.outputSets) {
        if (this.timeSets[index] === outputSet.timeSet) {
          affectedOutputSets.push(outputSet);
          affectedOutputSetNames.push(outputSet.setName);
        }
      }
      if (affectedOutputSets.length > 0) {
        var content = "These output sets:<br><strong>" + affectedOutputSetNames.toString().replace(/,/g, ', ') +
        "</strong><br>are using the set you are trying to delete.<br>If you delete this set the output sets will be deleted as well.<br>" +
        "If you want to delete this set but not the output sets, then click the<br>'Cancel' button and edit the output sets "+
        "so they no longer use this set. <br>If you would still like to continue then click 'Continue Deletion'";
        var confirmButtonText = "Continue Deletion";
        var cancelButtonText = "Cancel";
        dialogConfig.data = {
          content: content,
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
        }
        const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => (data)
              ? (() => {
                this.openSnackBar("Time Set: " + this.timeSets[index].setName + " and Output Set(s): " + 
                affectedOutputSets.toString().replace(/,/g, ', ') + " deleted!", "error-snackbar");
                this.timeSets.splice(index, 1);
                for (outputSet of affectedOutputSets) {
                  console.log(this.outputSets);
                  console.log(outputSet);
                  console.log(this.outputSets.indexOf(outputSet));
                  this.outputSets.splice(this.outputSets.indexOf(outputSet), 1);
                }
               })()
              : console.log("Form cancelled.")
        );
      } else {
        this.openSnackBar("Time Set: " + this.timeSets[index].setName + " deleted!", "error-snackbar");
        this.timeSets.splice(index, 1);
      }
    } else if (setType == "Output") {
      this.openSnackBar("Output Set: " + this.outputSets[index].setName + " deleted!", "error-snackbar");
      this.outputSets.splice(index, 1);
    } else {
      console.log("That input set type does not exist!")
    }
  }

  openSnackBar(msg, bg) {
    var dur;
    if (bg == "error-snackbar") {
       dur = 4000;
    } else if (bg == "successful-snackbar") {
      dur = 2000;
    } else {
      dur = 3000;
    }

    this.snackBar.openFromComponent(SnackBarComponent,
      {
        duration: dur,
        panelClass: [bg],
        data: msg
      });
  }

  exportFile(){
    var valid = 
    (this.nel_xy || this.nel_xy == 0) && 
    (this.nel_z || this.nel_z == 0) && 
    (this.nop || this.nop == 0) && 
    (this.delta_t || this.delta_t == 0) &&
    this.physics &&
    this.outputSets.length > 0;
    if (valid) {
      exportFilej(
        this.outputSets, 
        this.levelSets, 
        this.variableSets, 
        this.gridSets, 
        this.timeSets, 
        this.nel_xy, 
        this.nel_z, 
        this.nop, 
        this.delta_t, 
        this.physics
      );
    } else {
      this.openSnackBar("Please fill in the Domain Setup and Physics sections and make at least 1 output set!", "error-snackbar");
    }
  }
}
