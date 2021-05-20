import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonneService {
  link = 'http://localhost:3000/cv/persons';
  private listePersonnes: Personne[] = [
    // new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    // new Personne(2, "bart", "simpson", 20, "Plombier", "bart.jpeg"),
    // new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg"),
    // new Personne(4, "marge", "simpson", 55, "Ingénieur")
  ];

  constructor(private http: HttpClient) {}

  getListePersonnes() {
    return this.listePersonnes;
    //[this.listePersonnes[0], this.listePersonnes[1],....]
  }

  getListePersonnesAPI() {
    return this.http.get(this.link);
  }

  addPersonne(newP) {
    newP.id = this.listePersonnes[this.listePersonnes.length - 1].id + 1;
    this.listePersonnes.push(newP);
  }

  addPersonneAPI(newP) {
    /* Version avec HttpParams */
    // let mytoken = localStorage.getItem('mytoken');
    // if (mytoken) {
    //   let p = new HttpParams().set('token', mytoken);
    //   return this.http.post(this.link, newP, { params: p });
    // }
    // return this.http.post(this.link, newP);

    /*Version avec HttpHeaders */
    // let mytoken = localStorage.getItem('mytoken');
    // if (mytoken) {
    //   let header = new HttpHeaders({
    //     Authorization: 'bearer ' + mytoken,
    //   });
    //   return this.http.post(this.link, newP, { headers: header });
    // }
    // return this.http.post(this.link, newP);

    return this.http.post(this.link, newP);
  }

  getPersonById(id) {
    return this.listePersonnes.find((p) => p.id == id);
  }

  getPersonByIdAPI(id): Observable<Personne> {
    return this.http.get<Personne>(`${this.link}/${id}`);
  }

  deletePersonne(p) {
    //this.listePersonnes.find(p => p.id == id);
    let i = this.listePersonnes.indexOf(p);
    this.listePersonnes.splice(i, 1);
  }

  deletePersonneAPI(p) {
    return this.http.delete(`${this.link}/${p._id}`);
  }

  updatePersonne(p) {
    let i = this.listePersonnes.indexOf(p);
    this.listePersonnes[i] = p;
  }

  updatePersonneAPI(p) {
    return this.http.put(`${this.link}/${p._id}`, p);
  }
}
