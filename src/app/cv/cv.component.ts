import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 20, "Plombier", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg")
  ];

  selectedPers : Personne;
  constructor() { 
    console.log("Appel au constructeur");
    
  }

  ngOnInit(): void {
    console.log("Appel à ngOnInit");
    
  }

  RecupererPers(pers) {
    this.selectedPers = pers;
  }

}
