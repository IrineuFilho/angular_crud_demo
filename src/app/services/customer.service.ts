import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../shared/models/customer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public allCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(`https://tidy-api-test.herokuapp.com:443/api/v1/customer_data`)
      .pipe(
        map(response => response.map(responseData => new Customer().deserialize(responseData)))
      );
  }

  public createCustomer(customerParams) {
    return this.http
      .post<Customer>(`https://tidy-api-test.herokuapp.com:443/api/v1/customer_data`,
        customerParams)
      .pipe(
        map(response => new Customer().deserialize(response))
      );
  }

  public updateCustomer(id, customerParams) {
    return this
      .http
      .put(`https://tidy-api-test.herokuapp.com:443/api/v1/customer_data/${id}`, customerParams) ;

  }

  public destroyCustomer(customerId: number) {
    return this.http.delete(`https://tidy-api-test.herokuapp.com:443/api/v1/customer_data/${customerId}`);
  }
}
