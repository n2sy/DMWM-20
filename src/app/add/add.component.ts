import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private persServ: ListPersonneService,
    private router:  Router) { }

  ngOnInit(): void {
  }

  addNewPerson(newP) {
    console.log(newP);
    this.persServ.addPersonne(newP);
    console.log(this.persServ.getListePersonnes());
    
    this.router.navigateByUrl("/cv");
    
  }

}
