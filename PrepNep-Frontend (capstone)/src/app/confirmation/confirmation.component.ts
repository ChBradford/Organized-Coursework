import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmationComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.content = data.content;
    }

  ngOnInit() {
  } 

  content: string;

  onSubmit() {
    this.dialogRef.close("Accepted!");
  } 

  onCancel() {
    this.dialogRef.close();
  }
}
