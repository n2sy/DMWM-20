import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
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



  showList() {
    console.log(this.listPers.getListePersonnes());
    
  }

}
