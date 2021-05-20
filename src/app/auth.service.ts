import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  seDeconnecter() {
    localStorage.removeItem('mytoken');
  }

  estConnecte() {
    let mytoken = localStorage.getItem('mytoken');
    if (mytoken) return true;
    return false;
  }
}
