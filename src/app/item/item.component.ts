import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() onePerson : Personne;
  @Output() msgPers = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }

  sendPers() {
    this.msgPers.emit(this.onePerson);

  }

}
