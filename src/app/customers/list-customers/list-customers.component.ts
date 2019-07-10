import {Component, OnInit} from '@angular/core';
import {Customer} from '../../shared/models/customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog} from '@angular/material';
import {CustomerDialogComponent} from '../customer-dialog/customer-dialog.component';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  public customers: Customer[];
  public displayedColumns: string[] = ['id', 'name', 'email', 'fullAddress', 'actions'];

  constructor(private customerService: CustomerService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.customerService.allCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  openCustomerDialog(customer): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      data: {customer}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  deleteCustomer(customer): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {title: `Do you want to remove customer '${customer.name}'?`, message: 'This action can\'t be undone!'}
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.result) {
      //  delete
      }
    });
  }

}
