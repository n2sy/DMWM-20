import { Component, OnInit } from '@angular/core';
import { Server } from 'http';
import { Serveur } from '../model/serveur';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent implements OnInit {
  listServers = [
    new Serveur("Production Server", "small", "critical", new Date(2021, 2, 10)),
    new Serveur("Testing Server", "medium", "stable", new Date(2020, 2, 10)),
    new Serveur("Development Server", "large", "offline", new Date(2020, 12, 3)),
    new Serveur("Production Server", "small", "stable", new Date(2020, 6, 11))
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getClass(myStatus : string) {
    return {
      'list-group-item-success' : myStatus == 'stable',
      'list-group-item-danger' : myStatus == 'critical',
      'list-group-item-warning' : myStatus == 'offline'
    }
  }

}
