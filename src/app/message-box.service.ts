import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  public callBack:any;
  public confirmRequest : EventEmitter<{message: string, id: number}> = new EventEmitter();
  constructor() { }

  testSrv(): void {
    console.log('MessageBoxService OK');
    
  }

  showConfirm(message: string,_callBeck: any): void{
    console.log('showConfirm');
    this.callBack=_callBeck;   
    var id: number =1;
    this.confirmRequest.emit({message,id});
  }

  confirmCallback(result: boolean):void
  {
    this.callBack(result);
  }
}
