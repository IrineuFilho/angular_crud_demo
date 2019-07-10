import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveCustomer() {
    this.dialogRef.close({asd: 'adsasd'});
  }

  actionName() {
    return this.data.customer ? 'Edit' : 'Create';
  }

  actionButton() {
    return this.data.customer ? 'Update' : 'Save';
  }

}
