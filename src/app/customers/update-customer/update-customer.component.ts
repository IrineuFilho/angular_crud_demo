import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerDialogComponent} from '../customer-dialog/customer-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  @Input() customer;
  @Output() loadList = new EventEmitter();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openCustomerDialog(): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      disableClose: true,
      width: '700px',
      data: {customer: this.customer}
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
