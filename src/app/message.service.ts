import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  messages: Object[] = [];

  add(message: Object) {
    this.messages.push(message);
    console.log(this.messages);

  }

  clear() {
    this.messages = [];
  }


}
