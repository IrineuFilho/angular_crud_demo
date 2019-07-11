import {Component, OnInit} from '@angular/core';
import {Customer} from '../../shared/models/customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CustomerDialogComponent} from '../customer-dialog/customer-dialog.component';
import {LoaderService} from '../../loader.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  public customers: Customer[];
  public displayedColumns: string[] = ['id', 'name', 'email', 'fullAddress', 'actions'];

  constructor(private customerService: CustomerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.loaderService.show();
    this.customerService
      .allCustomers()
      .subscribe((customers) => {
        this.loaderService.hide();
        this.customers = customers;
      }, (err) => {
        this.loaderService.hide();
        this.snackBar.open('An error occurred when trying to load customers list',
          null,
          {
            panelClass: ['custom-snackbar', '--error'],
          });
      });
  }
}

