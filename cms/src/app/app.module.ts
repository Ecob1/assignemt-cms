import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DropdownDirective } from './header/dropdown.directive';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/documents',
    pathMatch: 'full',
  },
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      {
        path: 'new',
        component: DocumentEditComponent,
      },
      {
        path: ':id',
        component: DocumentDetailComponent,
      },
      {
        path: ':id/edit',
        component: DocumentEditComponent,
      },
    ],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: 'new',
        component: ContactEditComponent,
      },
      {
        path: ':id',
        component: ContactDetailComponent,
      },
      {
        path: ':id/edit',
        component: ContactEditComponent,
      },
    ],
  },
  {
    path: 'messages',
    component: MessageListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownDirective,
    DocumentEditComponent,
    ContactEditComponent,
    ContactsFilterPipe
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
