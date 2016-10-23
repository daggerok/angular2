import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

@Injectable()
export class ChatService {
  static URL: string = 'http://localhost:8080';
  static MESSAGE: string = 'message';
  _socket: Socket = null;
  constructor() {}

  public sendMessage(message: string) {
    this._socket.emit(ChatService.MESSAGE, message);
  }

  getMessage(): Observable<Socket> {
    return new Observable((observer: any) => {
      this._socket = io.connect(ChatService.URL);
      this._socket.on(ChatService.MESSAGE, (data: any) => {
        console.log('obs next', data);
        observer.next(data);
      });
      console.log('1', this._socket);
      return () => {
        this._socket.disconnect();
      }
    });
  }
}
