import {Component, Input} from '@angular/core';

import {IContact} from '../icontact';
import {ContactsService} from "../contactsService/contacts.service";

@Component({
  moduleId: module.id,
  selector: 'add-contact',
  templateUrl: 'addContact.component.html',
  styleUrls: ['addContact.component.css']
})

export class AddContact {
  @Input() contactsList: IContact[];
  addContactShow: boolean = false;

  constructor(private contactsService: ContactsService) {
  }

  newContact: IContact = {
    name: '',
    phone: ''
  };

  addContact() {
    this.addContactShow = false;
    this.contactsService.create(this.newContact)
      .then(response => {
        this.contactsList.push(response);
        this.newContact = {
          name: '',
          phone: ''
        };
      });
  }

  addContactToggle() {
    this.addContactShow = this.addContactShow ? false : true;
  }
}
