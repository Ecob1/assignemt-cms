import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
// import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(
    private contactService: ContactService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      this.contact = this.contactService.getContact(
        params['id'] as number | string
      );
    });
  }
}
