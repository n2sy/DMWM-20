import { Component, OnInit } from '@angular/core';
import { ListServService } from '../services/list-serv.service';

@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.css']
})
export class ServeursComponent implements OnInit {
  tabServers ;
  constructor(private listServeur : ListServService) { }

  ngOnInit(): void {
    this.tabServers = this.listServeur.tabServeurs;
  }

}
