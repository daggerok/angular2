import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../common/message';
import Socket = SocketIOClient.Socket;
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sc-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  name = 'badass';
  messages: string[] = [];
  message: string = null;
  connection: Subscription = null;
  constructor(private chatService: ChatService) {}

  public ngOnInit() {

    this.connection = this.chatService.getMessage()
                          .subscribe(message => console.log(message));
  }

  public sendMessage() {

    console.log(typeof this.message, this.message);
    this.chatService.sendMessage(this.message);
    this.message = null;
  }
  public ngOnDestroy(): void {
    if (this.connection) {
      this.connection.unsubscribe();
    }
  }
}
