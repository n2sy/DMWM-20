import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToServers() {
    this.router.navigateByUrl("/servers");
  }

  goToCv() {   
    this.router.navigate(['cv']);
  }

}
