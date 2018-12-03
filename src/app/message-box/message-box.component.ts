import { Component, OnInit } from '@angular/core';
import { MessageBoxService } from '../message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']  
})
export class MessageBoxComponent implements OnInit {
  visiable: string;
  Message: string;

  constructor(private messageBoxService: MessageBoxService) {
    
    messageBoxService.confirmRequest.subscribe(({message,id}) => {
      //var result=confirm(message);
      this.visiable="block"; 
      this.Message=message;
      
    });
   }

   buttonClick(result: boolean)
   {
    this.visiable="none"; 
    this.messageBoxService.confirmCallback(result);
   }

  ngOnInit() {
  }

}
