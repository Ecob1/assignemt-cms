import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
})
export class MessageEditComponent implements OnInit {
  // Custom EventEmiter to output the new Message object up to MessageListComponent.
  @Output() addMessageEvent = new EventEmitter<Message>();
  // we need
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  //Create a string variable named currentSender and initialize it with the value of your name.
  currentSender: string = 'Edgar Cobian';

  constructor() {}

  ngOnInit(): void {}
f
  onSendMessage() {
    // Get the value stored in the subject
    const subject = this.subject.nativeElement.value;
    // Get the value stored in the msgText
    const msgText = this.msgText.nativeElement.value;
    // Assign a hardcoded number to the id property of the new Message object.
    const message = new Message('1', subject, msgText, this.currentSender);
    /// Call the addMessageEvent emitter's emit() method and pass it the new Message
    this.addMessageEvent.emit(message);
  }
  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
}
