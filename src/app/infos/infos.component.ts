import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persServ : ListPersonneService) { }

  ngOnInit(): void {
    //let myId = this.activatedRoute.snapshot.paramMap.get('id');
    //this.pers =  this.persServ.getPersonById(myId)
    
    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
       this.pers =  this.persServ.getPersonById(p.get('id'))
      }
    )
  }

  onDelete() {
    if(confirm('Voulez-vous réellement supprimer cette personne ?')) {
      this.persServ.deletePersonne(this.pers);
      this.router.navigateByUrl("/cv");

    }

  }

  goToUpdate() {
    this.router.navigate(['/cv', 'edit', this.pers.id]);


  }

}
