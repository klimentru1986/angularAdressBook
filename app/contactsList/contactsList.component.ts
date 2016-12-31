import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IContact} from '../icontact';
import {ContactsService} from "../contactsService/contacts.service";

@Component({
  moduleId: module.id,
  selector: 'contacts-list',
  templateUrl: 'contactsList.component.html',
  styleUrls: ['contactsList.component.css']
})

export class ContactsList{
  @Input() contactsList: IContact[];
  @Input() selectedContact: IContact;
  @Output() selectedContactChange = new EventEmitter <IContact>();
  contactsSearch: string = '';

  constructor(private contactsService: ContactsService) {
  }

  selectContact(contact: IContact): void {
    this.selectedContact = contact;
    this.selectedContactChange.emit(this.selectedContact);
  }

  deleteContact(contact: IContact): void {
    this.contactsService.delete(contact.id)
      .then(() => {
        this.contactsList = this.contactsList.filter(c => c != contact);
        if (contact === this.selectedContact) {
          this.selectedContact = null;
          this.selectedContactChange.emit(this.selectedContact);
        }
      })
  }

}
