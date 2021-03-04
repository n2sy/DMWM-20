import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers : [ListPersonneService]
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[] = [];

  selectedPers : Personne;
  
  constructor(private listPers : ListPersonneService) { 
    //console.log("Appel au constructeur");
    
  }

  ngOnInit(): void {
    //console.log("Appel à ngOnInit");
    this.listePersonnes = this.listPers.getListePersonnes();
  }

  RecupererPers(pers) {
    this.selectedPers = pers;
  }

  addNewPerson() {
    this.listPers.addPersonne();
  }

  showList() {
    console.log(this.listPers.getListePersonnes());
    
  }

}
