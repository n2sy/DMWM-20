import { Component, OnInit } from '@angular/core';
import { ListaccountService } from '../listaccount.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {
  allStatus = ['', 'active', 'inactive', 'unkonow'];
  name : string;
  status : string;
  constructor(private accServ : ListaccountService) { }

  ngOnInit(): void {
  }

  addNewAccount() {
    this.accServ.addAccount({
      name : this.name,
      status : this.status
    })
  }

}
