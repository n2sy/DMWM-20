import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() lstPers : Personne[];
  @Output() persToCv = new EventEmitter<Personne>();
  
  constructor() { }

  ngOnInit(): void {
  }

  persReceived(pers) {
    this.persToCv.emit(pers);
  }

}
