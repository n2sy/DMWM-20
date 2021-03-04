import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { ListaccountService } from '../listaccount.service';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.css']
})
export class ListaccountComponent implements OnInit {
  listAcc = [];
  constructor(private accService : ListaccountService) { }

  ngOnInit(): void {
    this.listAcc = this.accService.listAccounts;
  }

  setTo(i, newStatus) {
    this.accService.changeStatus(i, newStatus)
  }

}
