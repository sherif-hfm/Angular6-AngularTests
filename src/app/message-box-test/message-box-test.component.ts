import { Component, OnInit } from '@angular/core';
import { MessageBoxService } from '../message-box.service';
@Component({
  selector: 'app-message-box-test',
  templateUrl: './message-box-test.component.html',
  styleUrls: ['./message-box-test.component.css']
})
export class MessageBoxTestComponent implements OnInit {

  constructor(private messageBoxService: MessageBoxService) { }

  ngOnInit() {
    this.messageBoxService.testSrv();
  }

  showConfirm()
  {
    this.messageBoxService.showConfirm("Are You Sure?",(result: string): void=>{
      console.log('confirm callback ' + result);
    });
  }
  showConfirm2()
  {
    this.messageBoxService.showConfirm("Are You Sure 2?",(result: string): void=>{
      console.log('confirm callback2 ' + result);
    });
  }

}
