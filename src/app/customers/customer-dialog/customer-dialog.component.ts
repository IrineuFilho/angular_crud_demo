import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailValidator} from '../../shared/validators/email-validator.directive';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../shared/models/customer';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {
  customerId: number;
  customerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, EmailValidator(/\w+@\w+\.\w+/)])],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required],
  });

  constructor(private dialogRef: MatDialogRef<CustomerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private customerService: CustomerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.data.customer) {
      this.customerForm.patchValue(this.data.customer);
      this.customerId = this.data.customer.id;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveCustomer(customerParams) {
    if (this.isNewCustomer()) {
      this.customerService
        .createCustomer(customerParams)
        .subscribe(() => {
            this.onSuccessSnackBar('Customer was created with success');
            this.dialogRef.close({});
          },
          (err) => {
            this.onFailSnackBar(err.error);
          });
    } else {
      this.customerService
        .updateCustomer(this.customerId, customerParams)
        .subscribe(() => {
          this.onSuccessSnackBar('Customer was updated with success');
          this.dialogRef.close({});
        }, (err) => {
          this.onFailSnackBar(err.error);
        });

    }

  }

  onSuccessSnackBar(message) {
    this.snackBar.open(message, null, {
      panelClass: ['custom-snackbar', '--success']
    });
  }

  onFailSnackBar(error) {
    this.snackBar.open(error, null, {
      panelClass: ['custom-snackbar', '--error']
    });
  }

  actionName() {
    return this.isNewCustomer() ? 'Create' : 'Edit';
  }

  actionButton() {
    return this.isNewCustomer() ? 'Save' : 'Update';
  }

  checkFieldRequired(fieldName): boolean {
    return this.customerForm.get(fieldName).hasError('required') &&
      this.customerForm.get(fieldName).touched;
  }

  isNewCustomer() {
    return this.data.customer === null;
  }

}
