import {Component, OnInit} from '@angular/core';
//Импорт интерфейса
import {IContact} from '../icontact';
//Импорт сервиса
import {ContactsService} from '../contactsService/contacts.service'

//Декоратор компонента
@Component({
  moduleId: module.id,
  selector: 'contacts-book',
  templateUrl: 'contactsBook.component.html',
  styleUrls: ['contactsBook.component.css']
})


export class ContactsBook implements OnInit{
  contactsList: IContact[];

  constructor(private contactsService: ContactsService) {}
  selectedContact: IContact = null;
  ngOnInit(): void {
    this.contactsService.getContacts()
      .then(contacts => this.contactsList = contacts);
  }
}
