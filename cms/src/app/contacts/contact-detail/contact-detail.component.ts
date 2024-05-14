import { Component } from '@angular/core';
import { Contact} from '../contact.model'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  contact: Contact = new Contact(
    '1',
    'R. Kent Jackson',
    'jackson@byue.edu',
    '208-495-3771',
    '../../assets/images/jacksonk.jpg');
  
}
