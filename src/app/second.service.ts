import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  showInfos() {
    console.log("I am the SecondService");
    
  }
}
