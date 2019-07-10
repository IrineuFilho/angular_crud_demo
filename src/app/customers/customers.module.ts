import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';


@NgModule({
  declarations: [ListCustomersComponent, CustomerDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListCustomersComponent
  ],
  entryComponents: [CustomerDialogComponent]
})
export class CustomersModule {
}
