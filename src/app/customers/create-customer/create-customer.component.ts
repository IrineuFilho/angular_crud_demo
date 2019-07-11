import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomerDialogComponent} from '../customer-dialog/customer-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  @Output() loadList = new EventEmitter();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openCustomerDialog(): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      data: {customer: null},
      disableClose: true,
      width: '700px',
    });

    dialogRef
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.loadList.emit('loadList');
        }
      });
  }

}
