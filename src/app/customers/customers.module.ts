import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {CustomerDialogComponent} from './customer-dialog/customer-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DestroyCustomerComponent} from './destroy-customer/destroy-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';


@NgModule({
  declarations: [ListCustomersComponent,
    CustomerDialogComponent,
    DestroyCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ListCustomersComponent
  ],
  entryComponents: [CustomerDialogComponent]
})
export class CustomersModule {
}
