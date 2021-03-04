import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RecrueService {
  private listRecrue : Personne[] = [];

  constructor() { }

  getListRecrue() {
    return this.listRecrue;
  }

  addRecrue(r: Personne) {
    if(!this.listRecrue.find(p => p.id == r.id))
      this.listRecrue.push(r);
    else
      alert('Cette personne a déjà été recrutée !')
  }
}
