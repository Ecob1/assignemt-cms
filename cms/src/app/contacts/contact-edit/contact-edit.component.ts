import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
})
export class ContactEditComponent implements OnInit {
  originalContact!: Contact;
  contact: Contact | undefined;
  groupContacts: Contact[] | null = [];
  editMode: boolean = false;
  _id!: string;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this._id = params['id'] as string;
      if (this._id === undefined || this._id === null) {
        this.editMode = false;
        return;
      }
      this.originalContact = this.contactService.getContact(this._id) as Contact;
      if (this.originalContact === undefined || this.originalContact === null) {
        return;
      }
      this.editMode = true;
      this.contact = JSON.parse(
        JSON.stringify(this.originalContact)
      ) as Contact;
      if (this.originalContact.group !== null) {
        this.groupContacts = this.contact.group as Contact[];
      }
    });
  }

    onSubmit(form: NgForm) {
    const value = form.value;
    const newContact = new Contact(
      value.name,
      value.email,
      value.phone,
      value.imageUrl,
      this.groupContacts,
    );
    if (this.editMode) {
      this.contactService.updateContact(this.originalContact!, newContact);
    } else {
      this.contactService.addContact(newContact);
    }
    this.onCancel();
  }

  onCancel() {
    void this.router.navigate(['../'], { relativeTo: this.route });
  }

  // addToGroup($event: DragEvent) {
  //   const selectedContact: Contact = $event;
  //   if (this.isInvalidContact(selectedContact)) return;
  //   this.groupContacts!.push(selectedContact);
  // }

  isInvalidContact(newContact: Contact) {
    if (!newContact) return true;
    if (this.contact && newContact._id === this.contact.id) return true;
    return this.groupContacts!.some((nc) => newContact._id === nc._id);
  }

  onRemoveItem(index: number) {
    if (index < 0 || index >= this.groupContacts!.length) return;
    this.groupContacts!.splice(index, 1);
  }
}
