import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.scss']
})
export class AddTerminalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTerminalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
