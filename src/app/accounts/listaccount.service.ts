import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaccountService {
  listAccounts = [];
  constructor() { }

  addAccount(acc) {
    this.listAccounts.push(acc);
  }

  changeStatus(i, newStatus) {
    this.listAccounts[i].status = newStatus

  }
}
