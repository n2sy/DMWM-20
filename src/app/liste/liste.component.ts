import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  lstPers : Personne[];
  @Output() persToCv = new EventEmitter<Personne>();
  
  constructor(private persServ : ListPersonneService) { }

  ngOnInit(): void {
    this.lstPers = this.persServ.getListePersonnes();
  }

  persReceived(pers) {
    this.persToCv.emit(pers);
  }

  showList() {
    console.log(this.persServ.getListePersonnes());
    
  }

}
