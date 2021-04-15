import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonneService {
  private listePersonnes : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 20, "Plombier", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg"),
    new Personne(4, "marge", "simpson", 55, "Ingénieur")
  ];

  constructor() { }

  getListePersonnes() {
    return this.listePersonnes;
    //[this.listePersonnes[0], this.listePersonnes[1],....]
  }

  addPersonne(newP) {
    newP.id = this.listePersonnes[this.listePersonnes.length - 1].id + 1;
    this.listePersonnes.push(newP);
    
  }

  getPersonById(id) {
    return this.listePersonnes.find(p => p.id == id)
  }

  deletePersonne(p) {
    //this.listePersonnes.find(p => p.id == id);
    let i = this.listePersonnes.indexOf(p);
    this.listePersonnes.splice(i, 1);
  }

  updatePersonne(p) {
    let i = this.listePersonnes.indexOf(p);
    this.listePersonnes[i] = p;
  }
}
