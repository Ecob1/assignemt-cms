import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'], // Corrected property name
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'message 1', 'This is the first message.', 'Edgar'),
    new Message('2', 'message 2', 'This is the second message.', 'Rafael'),
    new Message('3', 'message 3', 'This is the third message.', 'Milton'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}