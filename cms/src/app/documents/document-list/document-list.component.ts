import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter();

  documents = [
    new Document('1', 'WDD 430 - Web Full-stack-development', 'WDD 430 - learning full stack', 'https://github.com/Ecob1/assignemt-cms.git'),
    new Document('2', 'Dummy-Document1', 'This is Dummy-Document1', 'https://github.com/Ecob1/assignemt-cms.git/1'),
    new Document('3', 'Dummy-Document2', 'This is Dummy-Document2', 'https://github.com/Ecob1/assignemt-cms.git/2'),
    new Document('4', 'Dummy-Document3', 'This is Dummy-Document3', 'https://github.com/Ecob1/assignemt-cms.git/3')
  ];
  
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
