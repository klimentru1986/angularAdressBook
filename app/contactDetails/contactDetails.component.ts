import {Component, Input} from '@angular/core';

import { IContact } from '../icontact';

@Component({
  moduleId: module.id,
  selector: 'contact-details',
  templateUrl: 'contactDetails.component.html',
  styleUrls: ['contactDetails.component.css']
})

export class ContactDetails {
  @Input() contact: IContact;
}
