import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {IContact} from '../icontact';

@Injectable()
export class ContactsService {
  private url = 'api/contacts';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getContacts(): Promise<IContact[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as IContact[])
      .catch(this.handleError);
  }

  create(contact: IContact): Promise<IContact> {
    return this.http
      .post(this.url, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
