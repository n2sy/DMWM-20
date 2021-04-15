import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  p; // : Personne; [facultatif]
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persServ : ListPersonneService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.p = this.persServ.getPersonById(p.get('id'));
        console.log(this.p);
      }
    )
  }

  updateThisPerson() {
    this.persServ.updatePersonne(this.p);
    this.router.navigateByUrl("/cv");

  }

}
