import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../shared/models/customer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public allCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`https://tidy-api-test.herokuapp.com:443/api/v1/customer_data`).pipe(
      map(response => response.map(responseData => new Customer().deserialize(responseData)))
    );

    // return this.http.get<Customer[]>('')
    //   .pipe(
    //     map(data => data.map(data => new Customer().deserialize(data)));
    //   );

  }

}
