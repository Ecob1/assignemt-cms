import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  // documentChangedEvent = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();

  // documents: Document[] = [];
  documents: Document[] = [];
  private maxDocumentId!: number;

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice() || null;
  }

  getDocument(id: number | string): Document | null {
    return this.documents.find((document) => document.id === id) || null;
  }

  deleteDocument(document: Document | null) {
    if (!document) return;
    const pos = this.documents.indexOf(document);
    if (pos < 0) return;
    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());
  }
  getMaxId(): number {
    let maxId = 0;
    this.documents.forEach((document) => {
      if (+document.id > maxId) maxId = +document.id;
      // console.log('Document ID:', +document.id);
    });
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (newDocument === null || newDocument === undefined) return;
    this.maxDocumentId++;
    newDocument.id = `${this.maxDocumentId}`;
    this.documents.push(newDocument);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  updateDocument(original: Document, newDocument: Document) {
    if (
      newDocument === null ||
      newDocument === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.documents.indexOf(original);
    if (pos < 0) return;

    newDocument.id = original.id;
    this.documents[pos] = newDocument;
    this.documentListChangedEvent.next(this.documents.slice());
  }
}
