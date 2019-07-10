import {Deserializable} from './deserializable.model';

export class Customer implements Deserializable {

  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public address: string;
  public city: string;
  public state: string;
  public zipcode: string;
  public created_at: string;
  public updated_at: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  fullAddress() {
    return `${this.address}, ${this.city}, ${this.state}, ${this.zipcode}`;
  }

}
