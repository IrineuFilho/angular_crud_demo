import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';

import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {CustomerService} from '../../services/customer.service';
import {LoaderService} from '../../loader.service';


@Component({
  selector: 'app-destroy-customer',
  templateUrl: './destroy-customer.component.html',
  styleUrls: ['./destroy-customer.component.scss']
})

export class DestroyCustomerComponent implements OnInit {

  @Input() customer;
  @Output() loadList = new EventEmitter();

  constructor(private customerService: CustomerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private loader: LoaderService
  ) {
  }

  ngOnInit() {
  }

  destroy(): void {
    const dialogRef = this.dialog
      .open(ConfirmationDialogComponent,
        {
          data: {title: `Do you want to remove customer '${this.customer.name}'?`, message: 'This action can\'t be undone!'}
        });

    dialogRef
      .afterClosed()
      .subscribe((res) => {
        if (res.result) {
          this.loader.show();
          this
            .customerService
            .destroyCustomer(this.customer.id)
            .subscribe(() => {
                this.snackBar.open('Customer was removed with success', null, {
                  panelClass: ['custom-snackbar', '--success']
                });
                this.loadList.emit('loadList');
              },
              (error) => {
                this.snackBar.open('An unknown error has occurred when try to remove customer', null, {
                  panelClass: ['custom-snackbar', '--error']
                });
              });
        }
      });

  }
}
