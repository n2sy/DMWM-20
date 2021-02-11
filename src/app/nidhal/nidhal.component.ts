import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nidhal',
  templateUrl: './nidhal.component.html',
  styleUrls: ['./nidhal.component.css']
})
export class NidhalComponent implements OnInit {
  name : String = "Takieddine";

  @Output() msgToParent = new EventEmitter<string>();

  @Input() color = "pink";

  hd : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('Vous avez cliqué !');
  }

  hideDiv() {
    this.hd = !this.hd;
  }

  msgSend() {
    this.msgToParent.emit('Message envoyé par le fils');
  }

}
