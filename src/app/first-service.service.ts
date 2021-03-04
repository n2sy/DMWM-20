import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstServiceService {

  constructor(private sndService : SecondService) { }

  showMsg(msg) {
    console.log(msg);
    this.sndService.showInfos();
    
  }
}
