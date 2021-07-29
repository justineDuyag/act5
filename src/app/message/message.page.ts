import { Component, ViewChild, } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})

export class MessagePage  {
newMsg='';
messages=[];

currentUser='bhong';
// eslint-disable-next-line @typescript-eslint/member-ordering
@ViewChild(IonContent) content: IonContent;
  sendMessage(){
    this.messages.push({
      user:'bhong',
      createdAt: new Date().getTime(),
      msg:this.newMsg
    });
    this.newMsg='';
    setTimeout(()=>{
    this.content.scrollToBottom(200);
  });
}
}
