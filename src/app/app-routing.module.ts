import {NgModule} from '@angular/core';
import {CustomersModule} from './customers/customers.module';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomersComponent} from './customers/list-customers/list-customers.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: ListCustomersComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CustomersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
