import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../shared/models/customer';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public allCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(`${this.baseUrl}/api/v1/customer_data`)
      .pipe(
        map(response => response.map(responseData => new Customer().deserialize(responseData)))
      );
  }

  public createCustomer(customerParams) {
    return this.http
      .post<Customer>(`${this.baseUrl}/api/v1/customer_data`,
        customerParams)
      .pipe(
        map(response => new Customer().deserialize(response))
      );
  }

  public updateCustomer(id, customerParams) {
    return this
      .http
      .put(`${this.baseUrl}/api/v1/customer_data/${id}`, customerParams);

  }

  public destroyCustomer(customerId: number) {
    return this.http.delete(`${this.baseUrl}/api/v1/customer_data/${customerId}`);
  }
}
