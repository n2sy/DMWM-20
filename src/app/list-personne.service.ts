import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonneService {
  private listePersonnes : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 20, "Plombier", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg")
  ];

  constructor() { }

  getListePersonnes() {
    return this.listePersonnes;
  }

  addPersonne() {
    this.listePersonnes.push(
      new Personne(3, "sami", "arfaoui", 61, "Ingénieur", "homer.jpg")
    )
  }
}
