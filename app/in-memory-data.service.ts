import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IContact} from "./icontact";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let i: number;
    let contacts: IContact[] = [];
    for (i = 0; i < 30; i++) {
      let contact: IContact = {
        id: i+1,
        name: 'Контакт' + i,
        surname: 'Контактович' + i,
        phone: '+7(123) 456-77-' + i
      };

      contacts.push(contact);
    }

    return {contacts};
  };
}
