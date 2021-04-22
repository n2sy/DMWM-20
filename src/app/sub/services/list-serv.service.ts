import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServService {
  tabServeurs = [
    {
      id : 1,
      name : 'Serveur de production',
      status : 'offline'
    },
    {
      id : 2,
      name : 'Serveur de Deploiement',
      status : 'online'
    },
    {
      id : 3,
      name : 'Serveur de test',
      status : 'offline'
    }
  ]

  constructor() { }

  getServeurById(id) {
    return this.tabServeurs.find(s => s.id == id)
  }
}
